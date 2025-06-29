
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';

const Cart = () => {
  const cartItemPlaceholders = [
    { id: 1, affiliate: 'Flipkart', color: 'from-blue-500 to-indigo-600' },
    { id: 2, affiliate: 'Amazon', color: 'from-orange-500 to-yellow-600' },
    { id: 3, affiliate: 'Meesho', color: 'from-pink-500 to-purple-600' }
  ];

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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 bg-clip-text text-transparent">
              Shopping Cart
            </span>
          </h1>
          <p className="text-xl text-gray-400">
            Review your selected items before checkout
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItemPlaceholders.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl border border-red-500/20 hover:border-yellow-400/50 transition-all duration-500 p-6"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Product Image Placeholder */}
                  <div className="w-full md:w-32 h-32 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl flex items-center justify-center relative overflow-hidden">
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
                      <ShoppingBag size={32} className="text-gray-500" />
                    </motion.div>
                    
                    {/* Affiliate Badge */}
                    <div className={`absolute bottom-2 left-2 px-2 py-1 bg-gradient-to-r ${item.color} rounded-full`}>
                      <span className="text-white text-xs font-semibold">
                        {item.affiliate}
                      </span>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 space-y-4">
                    {/* Title and Description Placeholders */}
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
                        className="h-6 w-3/4 rounded-lg"
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
                        className="h-4 w-1/2 rounded-lg"
                      />
                    </div>

                    {/* Price and Controls */}
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
                        className="h-8 w-24 rounded-lg"
                      />

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-8 h-8 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors"
                        >
                          <Minus size={14} />
                        </motion.button>
                        
                        <span className="text-lg font-semibold px-4">1</span>
                        
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-8 h-8 bg-gray-700 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
                        >
                          <Plus size={14} />
                        </motion.button>
                      </div>

                      {/* Remove Button */}
                      <motion.button
                        whileHover={{ scale: 1.1, color: '#EF4444' }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                      >
                        <Trash2 size={18} />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Empty Cart State (for demo) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-center py-12 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-red-500/10"
            >
              <ShoppingBag size={64} className="text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">
                Ready for Your Fashion Finds
              </h3>
              <p className="text-gray-500">
                Your cart is waiting for amazing products to be added
              </p>
            </motion.div>
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl border border-red-500/20 p-6 h-fit sticky top-24"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Subtotal</span>
                <motion.div
                  animate={{
                    background: [
                      'linear-gradient(90deg, #6B7280, #374151)',
                      'linear-gradient(90deg, #374151, #6B7280)',
                      'linear-gradient(90deg, #6B7280, #374151)'
                    ]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="h-5 w-16 rounded"
                />
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Shipping</span>
                <motion.div
                  animate={{
                    background: [
                      'linear-gradient(90deg, #374151, #6B7280)',
                      'linear-gradient(90deg, #6B7280, #374151)',
                      'linear-gradient(90deg, #374151, #6B7280)'
                    ]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  className="h-5 w-12 rounded"
                />
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Tax</span>
                <motion.div
                  animate={{
                    background: [
                      'linear-gradient(90deg, #6B7280, #374151)',
                      'linear-gradient(90deg, #374151, #6B7280)',
                      'linear-gradient(90deg, #6B7280, #374151)'
                    ]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  className="h-5 w-14 rounded"
                />
              </div>
              
              <hr className="border-gray-700" />
              
              <div className="flex justify-between items-center text-xl font-bold">
                <span className="text-white">Total</span>
                <motion.div
                  animate={{
                    background: [
                      'linear-gradient(90deg, #EF4444, #F59E0B)',
                      'linear-gradient(90deg, #F59E0B, #EF4444)',
                      'linear-gradient(90deg, #EF4444, #F59E0B)'
                    ]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="h-6 w-20 rounded"
                />
              </div>
            </div>

            {/* Checkout Button */}
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 15px 40px rgba(239, 68, 68, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight size={20} />
            </motion.button>

            {/* Security Notice */}
            <p className="text-xs text-gray-500 text-center mt-4">
              🔒 Secure checkout powered by our partner platforms
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
