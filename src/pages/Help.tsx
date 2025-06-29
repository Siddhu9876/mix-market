
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Search, 
  MessageCircle, 
  Phone, 
  Mail,
  HelpCircle,
  Shield,
  Truck,
  CreditCard,
  RefreshCw
} from 'lucide-react';

const Help = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories = [
    {
      title: 'Getting Started',
      icon: HelpCircle,
      color: 'from-blue-500 to-cyan-500',
      questions: [
        {
          q: 'How does Mix-Market work?',
          a: 'Mix-Market aggregates products from multiple partner platforms including Flipkart, Amazon, Meesho, and Shop101, allowing you to discover and compare fashion items from one centralized location.'
        },
        {
          q: 'Do I need to create separate accounts for each platform?',
          a: 'No! Mix-Market streamlines your shopping experience. When you find an item you love, we\'ll redirect you to the partner platform where you can complete your purchase using your existing account or create one there.'
        },
        {
          q: 'Is Mix-Market free to use?',
          a: 'Yes, Mix-Market is completely free to use. We earn through affiliate partnerships with our partner platforms when you make purchases.'
        }
      ]
    },
    {
      title: 'Shopping & Orders',
      icon: Truck,
      color: 'from-green-500 to-emerald-500',
      questions: [
        {
          q: 'How do I place an order?',
          a: 'Browse products on Mix-Market, click on items you like, and you\'ll be redirected to the partner platform (Flipkart, Amazon, etc.) to complete your purchase directly with them.'
        },
        {
          q: 'Can I track my orders through Mix-Market?',
          a: 'Order tracking is handled by the individual partner platforms. Once you place an order, you\'ll receive tracking information from the respective platform (Flipkart, Amazon, Meesho, or Shop101).'
        },
        {
          q: 'What if I want to return or exchange an item?',
          a: 'Returns and exchanges are processed through the partner platform where you made your purchase. Each platform has its own return policy and process.'
        }
      ]
    },
    {
      title: 'Payments & Security',
      icon: Shield,
      color: 'from-purple-500 to-pink-500',
      questions: [
        {
          q: 'Is my payment information secure?',
          a: 'Absolutely! Mix-Market doesn\'t handle payments directly. All transactions are processed securely through our trusted partner platforms using their established payment systems.'
        },
        {
          q: 'What payment methods are accepted?',
          a: 'Payment methods vary by partner platform. Generally, you can use credit/debit cards, digital wallets, UPI, and cash on delivery (where available).'
        },
        {
          q: 'Do I get the same deals and discounts?',
          a: 'Yes! You\'ll have access to all the same deals, discounts, and promotional offers available on each partner platform.'
        }
      ]
    },
    {
      title: 'Technical Support',
      icon: RefreshCw,
      color: 'from-red-500 to-orange-500',
      questions: [
        {
          q: 'The website is loading slowly. What should I do?',
          a: 'Try refreshing the page, clearing your browser cache, or checking your internet connection. If problems persist, contact our support team.'
        },
        {
          q: 'I can\'t find a specific product. Can you help?',
          a: 'Use our advanced search filters or try different keywords. Our visual search feature (camera icon) can also help you find similar items.'
        },
        {
          q: 'Are there mobile apps available?',
          a: 'Currently, Mix-Market is available as a responsive web application. We\'re working on dedicated mobile apps for iOS and Android.'
        }
      ]
    }
  ];

  const contactOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      color: 'from-blue-500 to-cyan-500',
      action: 'Start Chat'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us your questions',
      color: 'from-green-500 to-emerald-500',
      action: 'Send Email'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate help',
      color: 'from-purple-500 to-pink-500',
      action: 'Call Now'
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

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
              Help Center
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Find answers to your questions and get the support you need
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for help topics..."
              className="w-full h-14 pl-12 pr-4 bg-gradient-to-r from-gray-900 to-black rounded-xl border border-red-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
            />
          </div>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {contactOptions.map((option, index) => (
            <motion.div
              key={option.title}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl border border-red-500/20 hover:border-yellow-400/50 transition-all duration-500 p-6 text-center"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <option.icon size={28} className="text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>
              <p className="text-gray-400 mb-4">{option.description}</p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 bg-gradient-to-r ${option.color} text-white font-semibold rounded-lg transition-all duration-300`}
              >
                {option.action}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Sections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>

          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.8 }}
              className="bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl border border-red-500/20 overflow-hidden"
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} p-6`}>
                <div className="flex items-center space-x-3">
                  <category.icon size={24} className="text-white" />
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
              </div>

              {/* Questions */}
              <div className="p-6 space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const accordionIndex = categoryIndex * 1000 + questionIndex;
                  return (
                    <div key={accordionIndex} className="border-b border-gray-700 last:border-b-0 pb-4 last:pb-0">
                      <motion.button
                        onClick={() => toggleAccordion(accordionIndex)}
                        whileHover={{ x: 4 }}
                        className="w-full text-left flex items-center justify-between py-3 text-white hover:text-yellow-400 transition-colors"
                      >
                        <span className="font-semibold text-lg">{item.q}</span>
                        <motion.div
                          animate={{ rotate: activeAccordion === accordionIndex ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={20} />
                        </motion.div>
                      </motion.button>

                      <AnimatePresence>
                        {activeAccordion === accordionIndex && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="text-gray-300 leading-relaxed mt-2 pl-4 border-l-2 border-yellow-400/30">
                              {item.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Still Need Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center bg-gradient-to-r from-red-900/20 to-purple-900/20 rounded-2xl border border-red-500/30 p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Still need help?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help you with any questions or issues.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(239, 68, 68, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
          >
            Contact Support Team
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Help;
