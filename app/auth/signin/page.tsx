import Head from "next/head";
import Image from "next/image"; // Import Next.js Image component

export default function SignIn() {
  return (
    <div className="flex h-screen bg-gray-700">
      <Head flex justify-start>
        <title justify-start>Sign In</title>
      </Head>

      {/* Left side with the promotional image and text */}
      <div className="hidden lg:flex items-center justify-center w-1/2 bg-blue-600">
        <div className="text-center p-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Generate detailed reports with just one click
          </h2>
          <Image
            src="/login.png" // Use the uploaded image
            alt="Report"
            width={300}
            height={300}
            className="mx-auto flex justify-right"
          />
        </div>
      </div>

      {/* Right side with the sign-in form */}
      <div className="flex flex-col items-start justify-center w-full max-w-md mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-white mb-6">Sign In</h1>

        <div className="flex flex-col justify- w-full">
          <div className="flex flex-row w-full space-x-4 mb-6">
            <button className="bg-black text-sm text-gray-400 py-2 px-4 rounded-[10px] flex items-center justify-center">
              <img src="/google.png" alt="Google" className="w-5 h-5 mr-2" />
              Sign in with Google
            </button>

            <button className="bg-black text-sm text-gray-400 py-2 px-4 rounded-[10px] flex items-center justify-center">
              <img src="/apple.png" alt="Apple" className="w-5 h-5 mr-2" />
              Sign in with Apple
            </button>
          </div>

          <form className="space-y-4">
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
              Don't have an account?{" "}
              <a href="#" className="text-indigo-500">
                Register here
              </a>
            </p>
          </div>

          {/* Social media icons */}
          <div className="pt-10 mt-6 flex justify-center space-x-4">
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
