import { NextRequest, NextResponse } from 'next/server';
import { createClient } from 'redis';

interface RequestBody {
  blogKey: string;
}

interface ResponseBody {
  blogKey: string;
  count: number;
}

interface ResponseData {
  success: boolean;
  message: string;
  data?: ResponseBody;
}

export async function GET(req: NextRequest): Promise<NextResponse<ResponseData>> {
  try {
    const { searchParams } = new URL(req.url);
    const key = searchParams.get("blogKey");
    const redis = await createClient({ url: process.env.REDIS_URL }).connect();

    if (!key) {
      return NextResponse.json<ResponseData>(
        {
          success: false,
          message: "No blogKey provided in the query parameters"
        },
        { status: 400 }
      );
    }

    const redisKey = `blog:${key}`;

    const currValue = await redis.get(redisKey);

    if (!currValue) {
      return NextResponse.json<ResponseData>(
        {
          success: false,
          message: "Blog key does not exist in Redis"
        },
        { status: 500 }
      );
    }

    const currNum = parseInt(currValue);

    const responseBody: ResponseBody = { blogKey: key, count: currNum };

    return NextResponse.json<ResponseData>({
      success: true,
      message: "Successful count retrieval",
      data: responseBody,
    });
  } catch(error) {
    console.log(`Error: ${error}`);
    return NextResponse.json<ResponseData>(
      {
        success: false,
        message: "Failed",
      },
      { status: 400 }
    );
  }
}