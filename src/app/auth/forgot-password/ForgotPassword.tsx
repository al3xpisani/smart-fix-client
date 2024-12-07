'use client';
import { InputForm } from '@/app/components/InputForm';
import React from 'react';

export const ForgotPassword = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    alert('reset password');
    e.preventDefault();
  };
  return (
    <form
      className='flex w-full max-w-md flex-col space-y-4 rounded bg-gray-100 bg-opacity-90 px-4 py-8 shadow-lg'
      onSubmit={handleSubmit}
    >
      <div className='flex flex-col items-center space-y-4'>
        <h1 className='text-3xl font-bold'>Forgot Password</h1>
        <p className='text-sm text-gray-500'>
          Enter your Email to reset your password
        </p>
      </div>
      <div className='mt-8 flex flex-col space-y-4'>
        <InputForm
          id={'email'}
          type={'email'}
          label={'E-Mail'}
          placeholder={'Type your best e-mail'}
        />
      </div>
      <div className='flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0'>
        <button
          type='submit'
          className='flex w-full items-center justify-center space-x-2 rounded-lg bg-[#1284c3] px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 sm:w-auto sm:px-8'
        >
          Reset Password
        </button>
      </div>
    </form>
  );
};
