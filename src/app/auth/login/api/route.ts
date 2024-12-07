import { NextRequest, NextResponse } from 'next/server';
import { LoginValidation } from '@/app/lib/validations/LoginValidationForm';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = LoginValidation.parse(await request.json());
    console.log('email.... ' + email, 'password.... ' + password);
    return new NextResponse('It worked.');
  } catch (error: any) {
    console.log(error.message);
    return new NextResponse(error.message, { status: 400 });
  }
}
