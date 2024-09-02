import React from "react";
import EmailIcon from "../../components/icons/emailIcon";
import PasswordIcon from "../../components/icons/passwordIcon";
import ClosePassword from "../../components/icons/closePassword";

const Login: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const emailValidation = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const passwordValidation = (password: string) => {
    return password.length >= 6;
  };

  const formValidation = () => {
    if (emailValidation(email) && passwordValidation(password)) {
      localStorage.setItem("email", email);
      return true;
    } else {
      localStorage.removeItem("email");
      return false;
    }
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

              <span className='absolute inset-y-0 end-0 grid place-content-center px-4 opacity-45 bg-none'>
                <EmailIcon />
              </span>
            </div>
          </div>

          <div>
            <label htmlFor='password' className='sr-only'>
              Password
            </label>

            <div className='relative'>
              <input
                type={showPassword ? "text" : "password"}
                className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none bg-none'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type='button'
                className='absolute inset-y-0 end-0 grid place-content-center px-4 opacity-45'
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <PasswordIcon /> : <ClosePassword />}
              </button>
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
