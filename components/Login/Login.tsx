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
            <div className='bg-white shadow-md rounded-lg m-auto px-[4rem] py-[3rem] flex justify-center items-center'>
              <form>
                <div className='mb-4'>
                  <label htmlFor='username'>Username</label>
                  <input
                    className='my-[0.5rem] p-[1rem] bg-slate-100 text-black-700 text-[2rem] font-normal font-codefont focus:outline-none focus:shadow-outline'
                    id='username'
                    type='text'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
