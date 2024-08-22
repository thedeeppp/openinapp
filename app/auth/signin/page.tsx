import Head from "next/head";
import Image from "next/image"; // Import Next.js Image component
// import { Inter } from 'next/font/google'

export default function SignIn() {
  return (
    <div className="flex h-screen bg-gray-700">
      <Head>
        <title>Sign In</title>
      </Head>

      {/* Left side with the promotional image and text */}
      <div className="hidden lg:flex flex-col items-start justify-between w-1/2 mt-6 ml-8 mb-6 rounded-2xl p-12 relative shadow-lg" style={{ background: 'linear-gradient(#4356cd, #4258ab)' }}>
      <div className="rounded-[20px] p-10 bg-[#3949AB] relative h-full w-full">

{/* Logo */}
<div className="flex items-center bg-white rounded-full p-3 shadow-md absolute top-6 left-8">
  <Image src="/base.png" alt="Base" width={80} height={80} />
</div>

{/* Content */}
<div className="flex flex-col items-start justify-center mt-40">
  <h2 className="text-4xl font-bold text-white mb-8 max-w-[400px]">
    Generate detailed reports with just one click
  </h2>
</div>

{/* Image aligned to bottom-right corner */}
<div className="absolute bottom-0 right-0">
  <Image
    src="/login.png"
    alt=""
    height={300}
    width={300}
    className="object-contain"
  />
</div>

</div>

</div>


      {/* Right side with the sign-in form */}
      <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-white mb-6">Sign In</h1>

        <div className="flex flex-col w-full">
          <div className="flex flex-row w-full space-x-4 mb-6">
            <button className="bg-black text-sm text-gray-400 py-2 px-4 rounded-lg flex items-center justify-center w-full">
              <img src="/google.png" alt="Google" className="w-5 h-5 mr-2" />
              Signin with Google
            </button>

            <button className="bg-black text-sm text-gray-400 py-2 px-4 rounded-lg flex items-center justify-center w-full">
              <img src="/apple.png" alt="Apple" className="w-5 h-5 mr-2" />
              SignIn with Apple
            </button>
          </div>

          <form className="space-y-4 w-full">
            <div>
              <label className="block text-sm text-white">Email address</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring focus:ring-indigo-500"
                placeholder="johndoe@gmail.com"
              />
            </div>

            <div>
              <label className="block text-sm text-white">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring focus:ring-indigo-500"
                placeholder="******"
              />
            </div>

            <div className="flex justify-between items-center">
              <a href="#" className="text-sm text-indigo-500">
                Forgot password?
              </a>
            </div>

            <button className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              Sign In
            </button>
          </form>

          <div className="mt-6">
            <p className="text-sm text-gray-400">
              Don&apos;t have an account?&nbsp;
              <a href="#" className="text-indigo-500">
                Register here
              </a>
            </p>
          </div>

          {/* Social media icons */}
          <div className="pt-6 mt-6 flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="/github.png" alt="GitHub" className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="/twitter.png" alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="/discord.png" alt="Discord" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
