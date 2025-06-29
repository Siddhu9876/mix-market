
import { motion } from 'framer-motion';
import { Heart, Star } from 'lucide-react';

interface ProductCardProps {
  affiliatePartner: 'Flipkart' | 'Amazon' | 'Meesho' | 'Shop101';
  index?: number;
}

const ProductCard = ({ affiliatePartner, index = 0 }: ProductCardProps) => {
  const partnerColors = {
    Flipkart: 'from-blue-500 to-indigo-600',
    Amazon: 'from-orange-500 to-yellow-600',
    Meesho: 'from-pink-500 to-purple-600',
    Shop101: 'from-green-500 to-emerald-600'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        boxShadow: '0 25px 50px rgba(239, 68, 68, 0.2)'
      }}
      className="group relative bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl overflow-hidden border border-red-500/20 hover:border-yellow-400/50 transition-all duration-500"
    >
      {/* Animated Background Glow */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(234, 179, 8, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(234, 179, 8, 0.1) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Content */}
      <div className="relative p-6 h-full flex flex-col">
        {/* Image Placeholder */}
        <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl mb-4 overflow-hidden">
          <motion.div
            animate={{
              background: [
                'linear-gradient(45deg, #374151, #4B5563)',
                'linear-gradient(45deg, #4B5563, #6B7280)',
                'linear-gradient(45deg, #6B7280, #374151)',
                'linear-gradient(45deg, #374151, #4B5563)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full flex items-center justify-center"
          >
            <div className="text-gray-500 text-lg font-medium">Product Image</div>
          </motion.div>

          {/* Heart Icon */}
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-400 transition-colors"
          >
            <Heart size={18} />
          </motion.button>

          {/* Affiliate Badge */}
          <div className={`absolute bottom-3 left-3 px-3 py-1 bg-gradient-to-r ${partnerColors[affiliatePartner]} rounded-full`}>
            <span className="text-white text-xs font-semibold">
              Affiliated by {affiliatePartner}
            </span>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 space-y-3">
          {/* Title Placeholder */}
          <div className="space-y-2">
            <motion.div
              animate={{
                background: [
                  'linear-gradient(90deg, #374151, #4B5563, #374151)',
                  'linear-gradient(90deg, #4B5563, #6B7280, #4B5563)',
                  'linear-gradient(90deg, #374151, #4B5563, #374151)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="h-6 rounded-lg"
            />
            <motion.div
              animate={{
                background: [
                  'linear-gradient(90deg, #4B5563, #374151, #4B5563)',
                  'linear-gradient(90deg, #6B7280, #4B5563, #6B7280)',
                  'linear-gradient(90deg, #4B5563, #374151, #4B5563)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="h-4 w-3/4 rounded-lg"
            />
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-gray-400 text-sm">(Reviews)</span>
          </div>

          {/* Price Placeholder */}
          <div className="flex items-center justify-between">
            <motion.div
              animate={{
                background: [
                  'linear-gradient(90deg, #EF4444, #F59E0B)',
                  'linear-gradient(90deg, #F59E0B, #EF4444)',
                  'linear-gradient(90deg, #EF4444, #F59E0B)'
                ]
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="h-6 w-20 rounded-lg"
            />
            <motion.div
              animate={{
                background: [
                  'linear-gradient(90deg, #6B7280, #374151)',
                  'linear-gradient(90deg, #374151, #6B7280)',
                  'linear-gradient(90deg, #6B7280, #374151)'
                ]
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="h-4 w-16 rounded-lg"
            />
          </div>
        </div>

        {/* Add to Cart Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 w-full py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25"
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
