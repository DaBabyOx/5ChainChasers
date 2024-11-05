// src/components/LoginForm.tsx
import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { BackgroundLines } from './ui/background-lines';

// Validation schema with Zod
const loginSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const LoginForm: React.FC = () => {
  const navigate = useNavigate(); // Hook for navigation
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    console.log('User Logged In:', data);
    // Add logic to handle login (e.g., API call)
    navigate('/home'); // Navigate to the home page after login
  };

  return (
    <main className="flex items-center justify-center w-full h-screen">
      <BackgroundLines className="flex items-center justify-center w-full h-full px-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-black/20 flex flex-col items-center justify-center backdrop-blur-xl rounded-lg shadow-lg w-full max-w-sm p-6 my-14 space-y-4"
        >
          <div className="flex items-center justify-center">
            <h2 className="text-3xl font-bold text-center mb-6 text-white">Login</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-left text-sm font-medium text-gray-300">Username</label>
              <input
                type="text"
                placeholder='Enter your username'
                {...register('username')}
                className={`mt-1 text-sm block text-white w-full focus:outline-none border border-gray-900 bg-black/0 rounded-md shadow-sm p-2 ${errors.username ? 'border-red-500' : ''}`}
              />
              {errors.username && <p className="text-red-500 text-left text-sm">{errors.username.message}</p>}
            </div>

            <div>
              <label className="block text-left text-sm font-medium text-gray-300">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                {...register('password')}
                className={`mt-1 text-sm block focus:outline-none text-white w-full border border-gray-900 bg-black/0 rounded-md shadow-sm p-2 ${errors.password ? 'border-red-500' : ''}`}
              />
              {errors.password && <p className="text-red-500 text-left text-sm">{errors.password.message}</p>}
            </div>

            <div className="mt-2">
              <button
                type="submit"
                className="rounded-lg text-base font-normal bg-white/10 backdrop-blur-3xl hover:bg-white hover:text-black transition-all duration-300 w-full h-full px-4 py-6 text-white"
              >
                Login
              </button>
            </div>
          </div>

          <button
            onClick={() => navigate('/register')} // Navigate to the register page
            type="button"
            className="mt-2 text-center text-sm text-gray-300"
          >
            Don't have an account? <span className='text-blue-600 hover:text-blue-700'>Register Here</span>
          </button>
        </form>
      </BackgroundLines>
    </main>
  );
};

export default LoginForm;
