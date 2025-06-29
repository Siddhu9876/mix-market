
import { motion } from 'framer-motion';
import SearchBar from '../components/SearchBar';
import FilterSection from '../components/FilterSection';
import ProductCard from '../components/ProductCard';

const Shopping = () => {
  // Generate product cards with different affiliate partners
  const affiliatePartners = ['Flipkart', 'Amazon', 'Meesho', 'Shop101'] as const;
  const productCards = Array.from({ length: 12 }, (_, index) => ({
    id: index,
    affiliate: affiliatePartners[index % affiliatePartners.length]
  }));

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 bg-clip-text text-transparent">
              Fashion Discovery
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Explore curated fashion from all your favorite platforms
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8"
        >
          <SearchBar placeholder="Search for clothing, accessories, brands..." />
        </motion.div>

        {/* Filter Section */}
        <FilterSection />

        {/* Results Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-bold text-white">Fashion Items</h2>
            <motion.div
              animate={{
                background: [
                  'linear-gradient(90deg, #EF4444, #F59E0B)',
                  'linear-gradient(90deg, #F59E0B, #EF4444)',
                  'linear-gradient(90deg, #EF4444, #F59E0B)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="px-4 py-2 rounded-full text-white text-sm font-semibold"
            >
              Loading Results...
            </motion.div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-gray-400">Sort by:</span>
            <motion.select
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 border border-red-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-400 transition-colors"
            >
              <option>Relevance</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
              <option>Customer Rating</option>
            </motion.select>
          </div>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
        >
          {productCards.map((product, index) => (
            <ProductCard
              key={product.id}
              affiliatePartner={product.affiliate}
              index={index}
            />
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 15px 40px rgba(239, 68, 68, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
          >
            Load More Products
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Shopping;
