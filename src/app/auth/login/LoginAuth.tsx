'use client';
import React, { FormEvent, useState } from 'react';
import { AuthForm } from '@/app/components/AuthForm';
import { useRouter } from 'next/navigation';
type Errors = {
  message: string;
};
export default function LoginAuth() {
  const router = useRouter();
  const [errors, setErrors] = useState<string[]>([]);
  console.log(errors);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    try {
      const response = await fetch('/auth/login/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        router.push('/');
        return;
      }
      const payload = await response.json();
      setErrors(payload.map((error: Errors) => error.message));
    } catch (error) {
      console.log(error);
      setErrors(['An unknown error has occured']);
    }
  };
  return (
    <AuthForm onSubmit={handleSubmit} isNewMember={false} formTitle={'Login'} />
  );
}
