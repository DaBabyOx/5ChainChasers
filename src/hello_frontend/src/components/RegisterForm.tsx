// src/components/RegisterForm.tsx
import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { BackgroundLines } from './ui/background-lines';

// Skema validasi dengan Zod
const registerSchema = z.object({
  walletAddress: z.string().min(1, 'Wallet address is required'),
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  profileImage: z.string().url('Must be a valid URL').optional(), // Optional
  bio: z.string().optional(), // Optional
});

type RegisterFormInputs = z.infer<typeof registerSchema>;

const RegisterForm: React.FC = () => {
  const navigate = useNavigate(); // Hook untuk navigasi
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormInputs) => {
    console.log('User Registered:', data);
    // Tambahkan logika untuk mengirim data ke backend atau blockchain
    navigate('/home'); // Navigasi ke halaman login setelah registrasi
  };

  return (
    <main className="flex items-center justify-center w-full h-screen">
      <BackgroundLines className="flex items-center justify-center w-full h-full flex-col px-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-black/20 backdrop-blur-xl rounded-lg shadow-lg w-full max-w-sm p-6 my-14 space-y-4"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-white">Register</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-left text-sm font-medium text-gray-300">Wallet Address</label>
              <input
                type="text"
                placeholder="Enter your wallet address"
                {...register('walletAddress')}
                className={`mt-1 text-sm block text-white w-full focus:outline-none border border-gray-900 bg-black/0 rounded-md shadow-sm p-2 ${errors.walletAddress ? 'border-red-500' : ''}`}
              />
              {errors.walletAddress && <p className="text-red-500 text-left text-sm">{errors.walletAddress.message}</p>}
            </div>

            <div>
              <label className="block text-left text-sm font-medium text-gray-300">Username</label>
              <input
                type="text"
                placeholder='Enter your name'
                {...register('username')}
                className={`mt-1 text-sm block focus:outline-none text-white w-full border border-gray-900 bg-black/0 rounded-md shadow-sm p-2 ${errors.username ? 'border-red-500' : ''}`}
              />
              {errors.username && <p className="text-red-500 text-left text-sm">{errors.username.message}</p>}
            </div>

            <div>
              <label className="block text-left focus:outline-none text-sm font-medium text-gray-300">Password</label>
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
                Register
              </button>
            </div>
          </div>

          <button
            onClick={() => navigate('/login')} // Mengarahkan ke halaman login
            type="button"
            className="mt-2 text-center text-sm text-gray-300"
          >
            Already have an account? <span className='text-blue-600 hover:text-blue-700'>Login Here</span>
          </button>
        </form>
      </BackgroundLines>
    </main>
  );
};

export default RegisterForm;
