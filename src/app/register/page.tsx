'use client';
import React, { useMemo, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';

const SignUp = () => {
  const [usePhone, setUsePhone] = useState(false);

  // Conditional Yup schema
  const SignupSchema = useMemo(
    () =>
      Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: usePhone
          ? Yup.string().nullable()
          : Yup.string().email('Invalid email').required('Email is required'),
        phone: usePhone
          ? Yup.string()
              .matches(/^\+?[0-9]{7,15}$/, 'Enter a valid phone number')
              .required('Phone is required')
          : Yup.string().nullable(),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
      }),
    [usePhone]
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg flex">
        {/* Left Side - Image */}
        <div className="hidden md:flex md:w-1/2">
          <img
            src="/auth.jpg"
            alt="signup"
            className="w-full h-full object-cover rounded-l-2xl"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-center text-red-600 mb-6">
            Register
          </h2>

          <Formik
            initialValues={{ name: '', email: '', phone: '', password: '' }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              const payload = {
                name: values.name,
                password: values.password,
                ...(usePhone
                  ? { phone: values.phone }
                  : { email: values.email }),
              };
              console.log('Submitting:', payload);
              alert('Form submitted!');
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    Name <span className="text-red-600">*</span>
                  </label>
                  <Field
                    type="text"
                    name="name"
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none placeholder-gray-400"
                    placeholder="Your full name "
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>

                {/* Email OR Phone with toggle link */}
                {!usePhone ? (
                  <div>
                    <div className="flex items-center justify-between">
                      <label className="block text-sm font-mediumn mb-1 text-gray-800">
                        Email <span className="text-red-600">*</span>
                      </label>
                      <button
                        type="button"
                        className="text-xs text-red-600 hover:underline placeholder-gray-400 "
                        onClick={() => setUsePhone(true)}
                      >
                        Use phone instead
                      </button>
                    </div>
                    <Field
                      type="email"
                      name="email"
                      className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none placeholder-gray-400"
                      placeholder="joegakumo1@gmail.com"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-600 text-sm mt-1"
                    />
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center justify-between">
                      <label className="block text-sm font-medium text-gray-800">
                        Phone <span className="text-red-600">*</span>
                      </label>
                      <button
                        type="button"
                        className="text-xs text-red-600 hover:underline placeholder-gray-400"
                        onClick={() => setUsePhone(false)}
                      >
                        Use email instead
                      </button>
                    </div>
                    <Field
                      type="tel"
                      name="phone"
                      className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none placeholder-gray-400"
                      placeholder="+254712345678"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-600 text-sm mt-1"
                    />
                  </div>
                )}

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-800">
                    Password <span className="text-red-600">*</span>
                  </label>
                  <Field
                    type="password"
                    name="password"
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none placeholder-gray-400"
                    placeholder="••••••••"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
                >
                  {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                </button>
              </Form>
            )}
          </Formik>

          {/* Sign in Link */}
          <p className="text-sm text-center mt-4 text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="text-red-600 hover:underline">
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
