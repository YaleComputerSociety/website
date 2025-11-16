import { NextRequest, NextResponse } from 'next/server';

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

    const responseBody: ResponseBody = { blogKey: key, newCount: 0 };

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