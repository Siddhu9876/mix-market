import { motion } from 'framer-motion';
import { Users, ShoppingCart, DollarSign, Package, TrendingUp, BarChart, Settings, ListPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Initialize adminStats with empty values, ready for data automation
  const adminStats = [
    {
      icon: Users,
      title: 'Total Users',
      value: '', // This will be dynamically populated (e.g., from an API)
      description: 'Registered users on the platform'
    },
    {
      icon: ShoppingCart,
      title: 'Pending Orders',
      value: '', // This will be dynamically populated
      description: 'Orders awaiting processing'
    },
    {
      icon: DollarSign,
      title: 'Total Revenue',
      value: '', // This will be dynamically populated
      description: 'Revenue generated this month'
    },
    {
      icon: Package,
      title: 'Products Listed',
      value: '', // This will be dynamically populated
      description: 'Total fashion items available'
    }
  ];

  // Quick actions remain defined here as they are static links
  const quickActions = [
    {
      name: 'Manage Products',
      icon: TrendingUp,
      link: './pages/Admin/Addproduct', // This path should lead to your product management page
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Manage Users',
      icon: Users,
      link: '/admin/users',     // This path should lead to your user management page
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'View Orders',
      icon: ShoppingCart,
      link: '/admin/orders',   // This path should lead to your order management page
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Analytics',
      icon: BarChart,
      link: '/admin/analytics', // This path should lead to your analytics dashboard
      color: 'from-red-500 to-red-600'
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section - Admin Welcome */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 10% 90%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 90% 10%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 10% 90%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)'
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <motion.h1
            className="text-5xl md:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome, <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Admin</span>!
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Manage your Mix-Market platform with powerful insights and tools.
          </motion.p>

          {/* Admin CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
          >
            <Link to="./pages/Admin/Addproduct"> {/* PATH TO ADD NEW PRODUCTS/MANAGE EXISTING */}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl flex items-center space-x-2 shadow-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300"
              >
                <ListPlus size={20} />
                <span>Add/Manage Products</span>
              </motion.button>
            </Link>

            <Link to="/admin/settings"> {/* PATH TO ADMIN SETTINGS */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300 flex items-center space-x-2"
              >
                <Settings size={20} />
                <span>Platform Settings</span>
              </motion.button>
            </Link>
          </motion.div>

        </div>
      </section>

      {/* Admin Stats Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Overview
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Key metrics and insights at a glance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {adminStats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.4)' }}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 text-center"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-blue-600 rounded-full mx-auto mb-4">
                  <stat.icon size={28} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-lg font-semibold text-gray-300 mb-2">{stat.title}</p>
                <p className="text-gray-400 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Quick <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">Actions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Jump directly to important management tasks
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickActions.map((action, index) => (
              <Link to={action.link} key={action.name}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ scale: 1.03, y: -5, boxShadow: '0 15px 30px rgba(0,0,0,0.5)' }}
                  className={`bg-gradient-to-br ${action.color} p-6 rounded-xl flex flex-col items-center justify-center text-white text-center h-48 cursor-pointer shadow-lg`}
                >
                  <action.icon size={40} className="mb-4" />
                  <h3 className="text-xl font-semibold">{action.name}</h3>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;