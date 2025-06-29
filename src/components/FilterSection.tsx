
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Filter } from 'lucide-react';

const FilterSection = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filters = {
    gender: {
      title: 'Gender',
      options: ['Men', 'Women', 'Unisex', 'Kids']
    },
    category: {
      title: 'Category',
      options: ['Shirts', 'Pants', 'Dresses', 'Shoes', 'Accessories', 'Jackets']
    },
    size: {
      title: 'Size',
      options: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
    },
    price: {
      title: 'Price Range',
      options: ['Under ₹500', '₹500 - ₹1000', '₹1000 - ₹2000', '₹2000 - ₹5000', 'Above ₹5000']
    }
  };

  const toggleFilter = (filterKey: string) => {
    setActiveFilter(activeFilter === filterKey ? null : filterKey);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-2xl border border-red-500/20 p-6 mb-8"
    >
      <div className="flex items-center space-x-2 mb-6">
        <Filter size={20} className="text-yellow-400" />
        <h3 className="text-xl font-semibold text-white">Filters</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.entries(filters).map(([key, filter]) => (
          <div key={key} className="relative">
            <motion.button
              onClick={() => toggleFilter(key)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full p-4 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                activeFilter === key
                  ? 'bg-gradient-to-r from-red-600/20 to-yellow-600/20 border-yellow-400/50 text-yellow-400'
                  : 'bg-gray-800/50 border-gray-700 text-white hover:border-red-500/50 hover:bg-gray-800/70'
              }`}
            >
              <span className="font-medium">{filter.title}</span>
              <motion.div
                animate={{ rotate: activeFilter === key ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={18} />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {activeFilter === key && (
                <motion.div
                  initial={{ opacity: 0, y: -10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: -10, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-lg border border-red-500/30 rounded-xl overflow-hidden z-50"
                >
                  <div className="p-4 space-y-2">
                    {filter.options.map((option, index) => (
                      <motion.label
                        key={option}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ x: 4, backgroundColor: 'rgba(239, 68, 68, 0.1)' }}
                        className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer transition-all duration-200"
                      >
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-2 border-red-500 bg-transparent checked:bg-red-500 checked:border-red-500 focus:ring-2 focus:ring-red-500/50 focus:ring-offset-0"
                        />
                        <span className="text-white hover:text-yellow-400 transition-colors">
                          {option}
                        </span>
                      </motion.label>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Clear Filters Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 px-6 py-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-red-600 hover:to-red-700 text-white rounded-lg transition-all duration-300 border border-gray-600 hover:border-red-500"
      >
        Clear All Filters
      </motion.button>
    </motion.div>
  );
};

export default FilterSection;
