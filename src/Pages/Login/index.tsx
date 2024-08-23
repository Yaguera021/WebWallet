import React from "react";
import Icon from "../../components/Icon";

const Login: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const emailValidation = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const passwordValidation = (password: string) => {
    return password.length >= 6;
  };

  const formValidation = () => {
    return emailValidation(email) && passwordValidation(password);
  };

  return (
    <div className='px-4 py-24'>
      <div className='border border-slate-800/10 pt-4 rounded-3xl'>
        <h1 className='text-center mb-4 text-4xl font-bold text-indigo-600'>
          Web Wallet
        </h1>

        <p className='mx-auto mt-4 max-w-md text-center text-gray-500'>
          Do more with your money.
        </p>

        <form
          action='#'
          className='mb-0 mt-6 space-y-4 rounded-3xl p-4 shadow-lg sm:p-6 lg:p-8 '
        >
          <p className='text-center text-lg font-medium'>
            Sign in to your account
          </p>

          <div>
            <label htmlFor='email' className='sr-only'>
              Email
            </label>

            <div className='relative'>
              <input
                type='email'
                className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='size-4 text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor='password' className='sr-only'>
              Password
            </label>

            <div className='relative'>
              <input
                type='password'
                className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
                <Icon />
              </span>
            </div>
          </div>

          <button
            type='submit'
            className='block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white disabled:opacity-50'
            disabled={!formValidation()}
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
