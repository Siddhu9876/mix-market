
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Home, ShoppingBag, ShoppingCart, HelpCircle, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Search', path: '/search', icon: Search },
    { name: 'Shopping', path: '/shopping', icon: ShoppingBag },
    { name: 'Cart', path: '/cart', icon: ShoppingCart },
    { name: 'Help', path: '/help', icon: HelpCircle },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-red-500/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 bg-clip-text text-transparent"
              >
                Styler Fashion
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="relative group"
                  >
                    <motion.div
                      whileHover={{ y: -2 }}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                        isActive(item.path)
                          ? 'text-yellow-400 bg-red-500/20'
                          : 'text-white hover:text-yellow-400 hover:bg-white/10'
                      }`}
                    >
                      <Icon size={18} />
                      <span className="font-medium">{item.name}</span>
                    </motion.div>
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-yellow-400 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-16 right-0 bottom-0 w-80 bg-black/95 backdrop-blur-lg border-l border-red-500/20 z-40 md:hidden"
          >
            <div className="p-6 space-y-4">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center space-x-3 p-4 rounded-lg transition-all duration-300 ${
                        isActive(item.path)
                          ? 'text-yellow-400 bg-red-500/20 border border-red-500/30'
                          : 'text-white hover:text-yellow-400 hover:bg-white/10'
                      }`}
                    >
                      <Icon size={20} />
                      <span className="font-medium text-lg">{item.name}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
