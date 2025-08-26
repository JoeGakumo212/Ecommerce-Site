'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      // handle form submit here
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-0 md:py-12 p-4">
      <div className="bg-white rounded-lg shadow-lg flex  flex-wrap md:flex-nowrap overflow-hidden max-w-4xl w-full">
        {/* Left side image */}
        <div className="w-full md:w-1/2">
          <img
            src="/auth.jpg"
            alt="Three people walking in stylish outfit"
            className="w-full h-full object-cover text-gray-800"
          />
        </div>

        {/* Right side form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-red-600">
            Login
          </h2>

          <form onSubmit={formik.handleSubmit} noValidate>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-1 font-semibold text-gray-800"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="joegakumo1@gmail.com"
                className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 placeholder-gray-400  ${
                  formik.touched.email && formik.errors.email
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-indigo-500'
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-600 text-sm mt-1">
                  {formik.errors.email}
                </p>
              ) : null}
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-1 font-semibold text-gray-800"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className={`w-full text-dark px-4 py-2 border rounded focus:outline-none focus:ring-2 placeholder-gray-400  ${
                  formik.touched.password && formik.errors.password
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-indigo-500'
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="text-red-600 text-sm mt-1">
                  {formik.errors.password}
                </p>
              ) : null}
            </div>

            <div className="mb-6 flex items-center">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                className="mr-2"
                onChange={formik.handleChange}
                checked={formik.values.remember}
              />
              <label htmlFor="remember" className="select-none text-gray-800">
                Remember Me
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded font-semibold transition-colors"
            >
              Login
            </button>
          </form>

          <div className="mt-4 text-center">
            <a href="#" className="text-indigo-600 hover:underline text-sm">
              Forgot Password?
            </a>
          </div>

          <p className="mt-4 text-center text-sm text-gray-800">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="text-indigo-600 hover:underline">
              Register Here
            </Link>
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 w-full max-w-md mx-auto">
            <button className="bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-500 transition">
              Admin
            </button>
            <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
              Customer
            </button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
              Manager
            </button>
            <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition">
              POS Operator
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
