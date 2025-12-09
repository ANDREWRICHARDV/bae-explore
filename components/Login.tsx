
import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { APP_LOGO } from '../constants';

interface LoginProps {
  onLogin: () => void;
  onNotify: (msg: string) => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin, onNotify }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return onNotify("Please enter your email");
    onNotify("Logging in...");
    setTimeout(onLogin, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] w-full px-4 animate-in fade-in zoom-in duration-300">
      <div className="bg-[#151B2B] rounded-3xl shadow-2xl border border-slate-700 p-8 md:p-12 w-full max-w-md relative overflow-hidden transition-colors">
        
        {/* Logo */}
        <div className="flex justify-center mb-8">
           <img 
            src={APP_LOGO}
            alt="BAE AI" 
            className="h-16 w-auto object-contain" 
           />
        </div>

        <h2 className="text-2xl font-bold text-center text-white mb-2">Sign in</h2>
        <p className="text-center text-slate-300 text-sm mb-8">Welcome back to BAE AI</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase mb-2 ml-1">Enter your email</label>
            <div className="relative group">
               <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
               {/* Input Box - Enhanced Visibility */}
               <input 
                 type="email" 
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 placeholder="name@example.com"
                 className="w-full bg-[#0B1120] border border-slate-600 rounded-xl py-3 pl-11 pr-4 text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium placeholder:text-slate-500"
               />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] border border-transparent"
          >
            Continue
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-700"></div>
            </div>
            <div className="relative flex justify-center text-xs">
                <span className="bg-[#151B2B] px-4 text-slate-400 font-medium">Or continue with</span>
            </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
             <SocialButton icon="https://www.svgrepo.com/show/475647/facebook-color.svg" label="Facebook" />
             <SocialButton icon="https://www.svgrepo.com/show/475656/google-color.svg" label="Google" />
             <SocialButton icon="https://www.svgrepo.com/show/512317/github-142.svg" label="GitHub" darkFilter />
        </div>

        <p className="text-center text-sm text-slate-400 mt-8">
            No account? <button className="text-blue-400 font-bold hover:underline ml-1">Sign up</button>
        </p>

      </div>
    </div>
  );
};

const SocialButton = ({ icon, label, darkFilter }: { icon: string, label: string, darkFilter?: boolean }) => (
    <button className="flex items-center justify-center py-2.5 bg-[#0B1120] border border-slate-700 rounded-xl hover:bg-[#1e293b] hover:border-slate-500 transition-all">
        <img src={icon} alt={label} className={`w-5 h-5 ${darkFilter ? 'invert' : ''}`} />
    </button>
);