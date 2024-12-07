'use client';
import { AuthForm } from '@/app/components/AuthForm';
import React from 'react';

export default function RegisterAuth() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    alert('register....');
    e.preventDefault();
  };
  return (
    <AuthForm
      onSubmit={handleSubmit}
      isNewMember={true}
      formTitle={'Register'}
    />
  );
}
