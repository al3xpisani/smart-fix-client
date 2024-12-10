import { NextRequest, NextResponse } from 'next/server';
import { LoginValidation } from '@/app/lib/validations/LoginValidationForm';

export async function POST(request: NextRequest) {
  try {
    LoginValidation.parse(await request.json());
    return new NextResponse('It worked.');
  } catch (error) {
    if(error instanceof Error){
      console.log(error.message);
      return new NextResponse(error.message, { status: 400 });
    }
  }
}
