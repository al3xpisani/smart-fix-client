import React from 'react';
import { InputForm } from './InputForm';

type AuthFormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isNewMember: boolean;
  formTitle: 'Login' | 'Register';
};

export const AuthForm: React.FC<AuthFormProps> = ({
  onSubmit,
  isNewMember,
  formTitle,
}) => {
  return (
    <form
      className='flex w-full max-w-md flex-col space-y-4 rounded bg-gray-100 bg-opacity-90 px-4 py-8 shadow-lg'
      onSubmit={onSubmit}
    >
      <div className='flex flex-col items-center space-y-4'>
        <h1 className='text-3xl font-bold'>
          {isNewMember ? 'Register' : 'Login'}
        </h1>
        <p className='text-sm text-gray-500'>
          {isNewMember ? 'Already have an account?' : 'New to the App?'}{' '}
          <a href='#' className='text-red-400 hover:underline'>
            {isNewMember ? 'Login' : 'Register'}
          </a>
        </p>
      </div>
      <div className='mt-8 flex flex-col space-y-4'>
        <InputForm
          id={'email'}
          type={'email'}
          label={'E-Mail'}
          placeholder={'Type your best e-mail'}
        />
        <InputForm
          id={'password'}
          type={'password'}
          label={'Password'}
          placeholder={'Password'}
        />
        {isNewMember && (
          <InputForm
            id={'confirmpassword'}
            type={'confirmpassword'}
            label={'Confirm Password'}
            placeholder={'Confirm Password'}
          />
        )}
      </div>
      <div className='flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0'>
        <button
          type='submit'
          className='flex w-full items-center justify-center space-x-2 rounded-lg bg-[#1284c3] px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 sm:w-auto sm:px-8'
        >
          {formTitle}
        </button>
      </div>
    </form>
  );
};
