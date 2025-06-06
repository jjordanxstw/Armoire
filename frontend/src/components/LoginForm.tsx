'use client';

import React, { useState } from 'react';
import { Eye, EyeOff, User, Mail, Lock, ArrowRight, Sparkles, Github, Chrome } from 'lucide-react';

export default function AuthForms() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

interface AuthFormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

const handleInputChange = (e: InputChangeEvent) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Main container */}
      <div className="relative z-10 w-full max-w-md">
        {/* Form container */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              {isLogin ? 'ยินดีต้อนรับกลับ' : 'สร้างบัญชีใหม่'}
            </h1>
            <p className="text-gray-300">
              {isLogin ? 'เข้าสู่ระบบเพื่อดำเนินการต่อ' : 'เริ่มต้นการเดินทางของคุณ'}
            </p>
          </div>

          {/* Toggle buttons */}
          <div className="flex bg-white/10 rounded-2xl p-1 mb-8">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                isLogin
                  ? 'bg-white text-purple-900 shadow-lg'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              เข้าสู่ระบบ
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                !isLogin
                  ? 'bg-white text-purple-900 shadow-lg'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              สมัครสมาชิก
            </button>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Name field - only for register */}
            {!isLogin && (
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400 group-focus-within:text-purple-300 transition-colors" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="ชื่อผู้ใช้"
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
            )}

            {/* Email field */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-purple-300 transition-colors" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="อีเมล"
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                required
              />
            </div>

            {/* Password field */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-purple-300 transition-colors" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="รหัสผ่าน"
                className="w-full pl-12 pr-12 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-purple-300 transition-colors"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>

            {/* Confirm Password field - only for register */}
            {!isLogin && (
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-purple-300 transition-colors" />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="ยืนยันรหัสผ่าน"
                  className="w-full pl-12 pr-12 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-purple-300 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            )}

            {/* Forgot password - only for login */}
            {isLogin && (
              <div className="text-right">
                <a href="#" className="text-purple-300 hover:text-white text-sm transition-colors">
                  ลืมรหัสผ่าน?
                </a>
              </div>
            )}

            {/* Submit button */}
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center group"
            >
              {isLogin ? 'เข้าสู่ระบบ' : 'สร้างบัญชี'}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Divider */}
          <div className="my-8 flex items-center">
            <div className="flex-1 border-t border-white/20"></div>
            <span className="px-4 text-gray-400 text-sm">หรือ</span>
            <div className="flex-1 border-t border-white/20"></div>
          </div>

          {/* Social login */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105">
              <Chrome className="w-5 h-5 mr-3" />
              ดำเนินการต่อด้วย Google
            </button>
            <button className="w-full flex items-center justify-center px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105">
              <Github className="w-5 h-5 mr-3" />
              ดำเนินการต่อด้วย GitHub
            </button>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center text-gray-400 text-sm">
            {isLogin ? (
              <>
                ยังไม่มีบัญชี?{' '}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-purple-300 hover:text-white font-medium transition-colors"
                >
                  สมัครสมาชิก
                </button>
              </>
            ) : (
              <>
                มีบัญชีแล้ว?{' '}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-purple-300 hover:text-white font-medium transition-colors"
                >
                  เข้าสู่ระบบ
                </button>
              </>
            )}
          </div>
        </div>

        {/* Terms and Privacy */}
        <div className="mt-6 text-center text-xs text-gray-400">
          การดำเนินการต่อถือว่าคุณยอมรับ{' '}
          <a href="#" className="text-purple-300 hover:text-white transition-colors">เงื่อนไขการใช้งาน</a>
          {' '}และ{' '}
          <a href="#" className="text-purple-300 hover:text-white transition-colors">นโยบายความเป็นส่วนตัว</a>
        </div>
      </div>
    </div>
  );
}