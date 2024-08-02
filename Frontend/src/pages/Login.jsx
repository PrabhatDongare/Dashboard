import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import axios from "axios";

import { toast } from 'react-toastify';

const Login = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    try {
      const { username, password } = data
      console.log(username, password)
      const response = await axios.post('http://ec2-3-83-254-115.compute-1.amazonaws.com:8020/api/v1/login/', {
        "username": username,
        "email": "string",
        "password": password,
        "phone_number": "string",
        "input_code": 0
      });
      if (response.data.message === "Successfully Logged in") {
        toast.success(response.data.message)
        navigate('/')
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  }

  return (
    <main className='h-[100vh] custom-bg flex justify-center items-center' >
      <section className='h-[70vh] w-[60vw] bg-indigo-400 flex rounded-2xl shadow-2xl ' >
        <div className='bg-slate-300 rounded-s-2xl w-1/2 flex flex-col justify-center items-center gap-10' >
          <h1 className='text-center font-thin text-4xl tracking-widest' >WELCOME</h1>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className='bg-slate-60 w-4/6 text-xl' >
            {/* User Name */}
            <div className='mb-5' >
              <div className='flex justify-between items-center mb-2' >
                <label>User Name</label>
                {errors.username && <span className='text-base text-red-500' >{errors.username.message}</span>}
              </div>
              <input {...register("username", {
                required: { value: true, message: "* This field is required" },
                pattern: {
                  value: /^(?! )[A-Za-z]+(?: [A-Za-z]+)*$/,
                  message: "* invalid user name"
                }
              })} className='w-full rounded-md px-2 py-1 bg-transparent border border-black' />
            </div>

            {/* Password */}
            <div className='mb-5' >
              <div className='flex justify-between items-center mb-2' >
                <label>Password</label>
                {errors.password && <span className='text-base text-red-500'>{errors.password.message}</span>}
              </div>
              <input type="password"  {...register("password", {
                required: { value: true, message: "* This field is required" }
              })} className='w-full rounded-md px-2 py-1 bg-transparent border border-black' />
            </div>

            {/* Submit */}
            <input disabled={isSubmitting} type="submit" value='Login' className='bg-[#088F8F] w-full text-white py-2 rounded-lg cursor-pointer mt-2' />
          </form>

        </div>
        <div className='mx-auto my-auto' ><img className='h-96' src="/login image.png" alt="login image" /></div>
      </section>
    </main>
  )
}

export default Login
