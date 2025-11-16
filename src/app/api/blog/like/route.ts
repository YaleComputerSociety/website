import { NextRequest, NextResponse } from 'next/server';
import { createClient } from 'redis';

interface RequestBody {
  blogKey: string;
}

interface ResponseBody {
  blogKey: string;
  newCount: number;
}

interface ResponseData {
  success: boolean;
  message: string;
  data?: ResponseBody;
}

export async function POST(req: NextRequest): Promise<NextResponse<ResponseData>> {
  try {
    const body = (await req.json()) as RequestBody;
    const redis = await createClient({ url: process.env.REDIS_URL }).connect();

    if (!body.blogKey) {
      return NextResponse.json<ResponseData>(
        {
          success: false,
          message: "Invalid request body"
        },
        { status: 400 }
      );
    }

    const key = body.blogKey;
    const redisKey = `blog:${key}`;

    const currValue = await redis.get(redisKey);

    if (currValue) {
      const currNum = parseInt(currValue, 0);
      await redis.set(redisKey, currNum + 1);
    } else {
      await redis.set(redisKey, 1);
    }

    const newValue = await redis.get(redisKey);

    if (!newValue) {
      return NextResponse.json<ResponseData>(
        {
          success: false,
          message: "Error setting likes in Redis"
        },
        { status: 500 }
      );
    }

    const newNum = parseInt(newValue);

    const responseBody: ResponseBody = { blogKey: key, newCount: newNum };

    return NextResponse.json<ResponseData>({
      success: true,
      message: "Successful like",
      data: responseBody,
    });
  } catch(error) {
    return NextResponse.json<ResponseData>(
      {
        success: false,
        message: "Failed",
      },
      { status: 400 }
    );
  }
}