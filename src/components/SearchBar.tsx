
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Camera } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

const SearchBar = ({ placeholder = "Search for fashion items...", onSearch, className = "" }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className={`relative w-full max-w-4xl mx-auto ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        animate={{
          scale: isFocused ? 1.02 : 1,
          boxShadow: isFocused 
            ? '0 0 40px rgba(234, 179, 8, 0.3), 0 0 80px rgba(239, 68, 68, 0.2)' 
            : '0 4px 20px rgba(0, 0, 0, 0.3)'
        }}
        transition={{ duration: 0.3 }}
        className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-2xl border border-red-500/30 overflow-hidden"
      >
        {/* Animated Background Gradient */}
        <motion.div
          animate={{
            background: isFocused
              ? 'linear-gradient(45deg, rgba(234, 179, 8, 0.1), rgba(239, 68, 68, 0.1), rgba(147, 51, 234, 0.1))'
              : 'linear-gradient(45deg, rgba(0, 0, 0, 0.5), rgba(20, 20, 20, 0.5))'
          }}
          className="absolute inset-0"
        />

        <div className="relative flex items-center">
          {/* Search Icon */}
          <motion.div
            animate={{ color: isFocused ? '#FDE047' : '#9CA3AF' }}
            className="absolute left-6 z-10"
          >
            <Search size={24} />
          </motion.div>

          {/* Input */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className="w-full h-16 pl-16 pr-20 bg-transparent text-white text-lg placeholder-gray-400 focus:outline-none focus:placeholder-gray-500 transition-all duration-300"
          />

          {/* Camera Icon */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-6 p-2 text-gray-400 hover:text-yellow-400 transition-colors duration-300 rounded-lg hover:bg-white/10"
          >
            <Camera size={24} />
          </motion.button>
        </div>

        {/* Animated Border */}
        <motion.div
          animate={{
            opacity: isFocused ? 1 : 0,
            scale: isFocused ? 1 : 0.8
          }}
          className="absolute inset-0 rounded-2xl border-2 border-gradient-to-r from-yellow-400 via-red-500 to-purple-500 pointer-events-none"
          style={{
            background: 'linear-gradient(45deg, #FDE047, #EF4444, #9333EA) border-box',
            WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'exclude'
          }}
        />
      </motion.div>

      {/* Search Suggestions */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isFocused && query ? 1 : 0, y: isFocused && query ? 0 : 10 }}
        className="absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-lg rounded-lg border border-red-500/20 overflow-hidden z-50"
      >
        {query && (
          <div className="p-4">
            <div className="text-gray-400 text-sm mb-2">Search suggestions</div>
            <div className="space-y-2">
              {['Fashion trends', 'Designer wear', 'Casual clothing'].map((suggestion) => (
                <motion.div
                  key={suggestion}
                  whileHover={{ x: 4, backgroundColor: 'rgba(239, 68, 68, 0.1)' }}
                  className="p-2 text-white cursor-pointer rounded-lg transition-colors"
                >
                  {suggestion}
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </motion.form>
  );
};

export default SearchBar;
