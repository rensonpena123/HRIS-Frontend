import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
    e.preventDefault(); 
    
    navigate('/dashboard'); 
  };

  return (
    <div className="flex min-h-screen w-full font-sans">
      
      {/* Left Side - Dark Panel */}
      <div className="hidden lg:flex w-1/2 bg-[#111111] text-white p-12 flex-col justify-between relative overflow-hidden">
        {/* Background Circles (Decorative) */}
        <div className="absolute rounded-full border-1px border-yellow-500/50 w-600px h-600px -right-40 top-100px pointer-events-none"></div>
        <div className="absolute rounded-full border-1px border-yellow-500/50 w-550px h-550px -right-20 bottom-150px pointer-events-none"></div>

        {/* Top: Logo */}
        <div className="flex items-center gap-3 relative z-10">
          <div className="w-10 h-10 bg-yellow-400 rounded-md"></div>
          <div className="leading-tight">
            <p className="text-[10px] text-gray-400">Highly Succeed, Inc</p>
            <p className="font-bold text-lg tracking-wide">HRIS System</p>
          </div>
        </div>

        {/* Middle: Hero Text */}
        <div className="relative z-10 -mt-20">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-2px bg-yellow-500"></div>
            <p className="text-yellow-500 text-xs font-bold tracking-widest uppercase">HR Information System</p>
          </div>
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Manage your<br />
            Workforce<br />
            <span className="text-yellow-500">with ease</span>
          </h1>
          <p className="text-gray-400 text-sm max-w-md mb-8">
            A unified platform for Attendance, Leave, Overtime, Tasks, and Company-wide communications - built for every employee
          </p>

          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>Real-time Attendance Tracking & Login</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>Leave credits, overtime & payroll visibility</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>Company Announcements and Company events</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>Task Management & employee directory</li>
          </ul>
        </div>

        {/* Bottom: Footer */}
        <div className="relative z-10 text-xs text-gray-500">
          Highly Succeed, Inc. All Rights Reserved
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center p-8 relative">
        <div className="w-full max-w-md">
          
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-2px bg-yellow-500"></div>
              <p className="text-yellow-500 text-xs font-bold tracking-widest uppercase">Welcome Back</p>
            </div>
            <h2 className="text-4xl font-bold mb-2 text-gray-900">Login to<br/>your Account</h2>
            <p className="text-sm text-gray-400">Enter your credentials to access the HS system</p>
          </div>

          <form className="space-y-5" onSubmit={handleLogin}>
            {/* Email Field */}
            <div>
              <label className="block text-xs font-bold text-gray-900 mb-1 uppercase">Email Address</label>
              <div className="relative">
                <svg className="absolute left-3 top-3 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input 
                  type="email" 
                  placeholder="yourname@highlysucceed.com" 
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 text-sm"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs font-bold text-gray-900 mb-1 uppercase">Password</label>
              <div className="relative">
                <svg className="absolute left-3 top-3 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <input 
                  type="password" 
                  placeholder="Enter your Password" 
                  className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 text-sm"
                />
                <button type="button" className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 cursor-pointer">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between mt-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500" />
                <span className="text-xs text-gray-500">Remember Me</span>
              </label>
              <a href="#" className="text-xs text-gray-500 hover:text-gray-900">Forgot Password</a>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-black text-white font-semibold py-3 rounded-lg mt-6 relative overflow-hidden hover:bg-gray-900 transition-colors cursor-pointer">
              <span className="absolute left-0 top-0 bottom-0 w-2 bg-yellow-400"></span>
              Login
            </button>
          </form>

          {/* IT Support */}
          <div className="mt-8 text-center">
            <div className="relative flex items-center justify-center mb-6">
              <div className="border-t border-gray-200 w-full"></div>
              <span className="bg-white px-3 text-xs text-gray-400 absolute">or</span>
            </div>
            <p className="text-xs text-gray-500">
              Having Trouble Logging in?<br/>
              Please contact your <span className="font-bold text-gray-900">IT Support</span>
            </p>
          </div>

        </div>

        {/* Right Footer */}
        <div className="absolute bottom-8 text-xs text-gray-400">
          HS System v2.0
        </div>
      </div>
      
    </div>
  );
};

export default Login;