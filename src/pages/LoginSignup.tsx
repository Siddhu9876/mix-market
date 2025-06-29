import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Sparkles } from 'lucide-react'; // Added User icon for signup
import { useNavigate } from 'react-router-dom'; // Changed to useNavigate

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // To display messages to the user
  const navigate = useNavigate();

  // Admin credentials
  const ADMIN_USERNAME = 'admin@admin';
  const ADMIN_PASSWORD = 'Admin@987';

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages
if (isLogin) {
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    setMessage('Admin login successful! Redirecting...');
    navigate('/admin');  // ✅ correct
  } else {
    if (username && password) {
      setMessage('User login successful! Redirecting...');
      navigate('/home');  // ✅ correct
    } else {
      setMessage('Please enter both username and password.');
    }
  }
} else {
  if (username && email && password) {
    setMessage('Signup successful! Please login with your new credentials.');
    setIsLogin(true);
    setUsername('');
    setEmail('');
    setPassword('');
  } else {
    setMessage('Please fill in all signup details.');
  }
}

  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      {/* Animated Background - Reusing the user Home.tsx background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 30%, rgba(234, 179, 8, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 70%, rgba(239, 68, 68, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 30%, rgba(234, 179, 8, 0.15) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-gray-900 p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-md border border-red-500/20"
      >
        <div className="text-center mb-8">
          <Sparkles size={48} className="mx-auto text-yellow-400 mb-4" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 bg-clip-text text-transparent">
            {isLogin ? 'Welcome Back!' : 'Join Mix-Market'}
          </h2>
          <p className="text-gray-400 mt-2">
            {isLogin ? 'Sign in to your account' : 'Create your account to get started'}
          </p>
        </div>

        {message && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-3 mb-4 rounded-md text-sm text-center ${
              message.includes('successful') ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
            }`}
          >
            {message}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <User size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 pl-10 bg-gray-800 rounded-lg border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none text-white transition-all duration-300"
              required
            />
          </div>
          {!isLogin && (
            <div className="relative">
              <Mail size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 pl-10 bg-gray-800 rounded-lg border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none text-white transition-all duration-300"
                required={!isLogin} // Only required for signup
              />
            </div>
          )}
          <div className="relative">
            <Lock size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 pl-10 bg-gray-800 rounded-lg border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none text-white transition-all duration-300"
              required
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(239, 68, 68, 0.3)' }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg shadow-lg hover:from-red-500 hover:to-red-600 transition-all duration-300"
          >
            {isLogin ? 'Log In' : 'Sign Up'}
          </motion.button>
        </form>

        <p className="text-center text-gray-400 mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <motion.span
            className="text-yellow-400 cursor-pointer font-semibold hover:underline"
            onClick={() => {
              setIsLogin(!isLogin);
              setMessage(''); // Clear message when switching form
              setUsername(''); // Clear fields
              setEmail('');
              setPassword('');
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLogin ? 'Sign Up' : 'Log In'}
          </motion.span>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginSignup;