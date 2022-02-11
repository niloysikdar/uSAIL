// import styles from './Login.module.css';

const Login = () => {
  return (
    <>
      <section className='relative h-[100vh] w-full flex justify-center items-center'>
        <div className='flex justify-center items-center flex-wrap'>
          <div className='w-[50%] m-auto p-[2rem]'>
            <img src='/assets/login_img.png' alt='Login Img' className='img-fluid w-[100rem]' />
          </div>

          <div className='w-[50%]'>
            <div className='grid min-h-screen place-items-center'>
              <div className='w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12'>
                <h1 className='text-center text-2xl font-semibold font-mainfont'>Login Now</h1>
                <form className='mt-6'>
                  <label
                    htmlFor='email'
                    className='block text-lg font-semibold text-gray-600 uppercase'
                  >
                    E-mail
                  </label>
                  <input
                    id='email'
                    type='email'
                    name='email'
                    placeholder='john.doe@company.com'
                    className='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner rounded'
                    required
                  />
                  <label
                    htmlFor='password'
                    className='block mt-2 text-lg font-semibold text-gray-600 uppercase'
                  >
                    Password
                  </label>
                  <input
                    id='password'
                    type='password'
                    name='password'
                    placeholder='********'
                    className='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner rounded'
                    required
                  />
                  <button
                    type='submit'
                    className='w-full py-3 mt-6 text-lg font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none'
                  >
                    Sign in
                  </button>
                  <p className='flex justify-between mt-4 text-xs text-gray-500 cursor-pointer hover:text-black'>
                    Forgot password?
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
