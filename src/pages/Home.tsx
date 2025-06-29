
import { motion } from 'framer-motion';
import SearchBar from '../components/SearchBar';
import { ArrowRight, Sparkles, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'Curated Fashion',
      description: 'Discover trending styles from top platforms'
    },
    {
      icon: Zap,
      title: 'Instant Search',
      description: 'Find exactly what you\'re looking for in seconds'
    },
    {
      icon: Target,
      title: 'Best Deals',
      description: 'Compare prices across multiple platforms'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold leading-tight"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 bg-clip-text text-transparent">
                  Styler Fashion
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              >
                A revolutionary <span className="text-yellow-400 font-semibold">reseller mixed platform</span> partnered with{' '}
                <span className="text-blue-400 font-semibold">Various platforms</span>{' '}
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg text-gray-400 max-w-2xl mx-auto"
              >
                Discover, compare, and shop the latest fashion trends all in one place
              </motion.p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <SearchBar placeholder="Search for fashion items, brands, or styles..." />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
            >
              <Link to="/shopping">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(239, 68, 68, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl flex items-center space-x-2 shadow-lg hover:from-red-500 hover:to-red-600 transition-all duration-300"
                >
                  <span>Start Shopping</span>
                  <ArrowRight size={20} />
                </motion.button>
              </Link>

              <Link to="/help">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-4">
              Why Choose Mix-Market?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the future of fashion discovery with our innovative platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 p-8 rounded-2xl border border-red-500/20 hover:border-yellow-400/50 transition-all duration-500">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full flex items-center justify-center mb-6"
                  >
                    <feature.icon size={28} className="text-black" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 blur-xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Showcase */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Trusted <span className="bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">Partners</span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {[
                { name: 'Flipkart', color: 'from-blue-500 to-indigo-600' },
                { name: 'Amazon', color: 'from-orange-500 to-yellow-600' },
                { name: 'Meesho', color: 'from-pink-500 to-purple-600' },
                { name: 'Shop101', color: 'from-green-500 to-emerald-600' }
              ].map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={`p-8 bg-gradient-to-r ${partner.color} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300`}
                >
                  <h3 className="text-2xl font-bold text-white">{partner.name}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
