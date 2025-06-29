import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PackagePlus, Text, Type, Image, LinkIcon, Building2, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [productType, setProductType] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState(null); // Stores the File object
  const [productURL, setProductURL] = useState('');
  const [partnerPlatform, setPartnerPlatform] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProductImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    // Basic validation
    if (!productName || !productType || !productDescription || !productImage || !productURL || !partnerPlatform) {
      setMessage('Please fill in all product details and upload an image.');
      setIsSubmitting(false);
      return;
    }

    // --- In a real application, you would send this data to your backend API ---
    const productData = new FormData();
    productData.append('name', productName);
    productData.append('type', productType);
    productData.append('description', productDescription);
    productData.append('image', productImage); // Append the File object
    productData.append('url', productURL);
    productData.append('partner', partnerPlatform);

    console.log('Submitting Product Data:', {
      productName,
      productType,
      productDescription,
      productImageName: productImage ? productImage.name : 'No Image',
      productURL,
      partnerPlatform,
    });

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // --- Replace with your actual API call (e.g., using fetch or axios) ---
      // const response = await fetch('/api/products', {
      //   method: 'POST',
      //   body: productData, // For FormData, fetch automatically sets Content-Type
      // });
      // const result = await response.json();
      // if (!response.ok) {
      //   throw new Error(result.message || 'Failed to add product');
      // }
      // --- End of actual API call placeholder ---

      setShowSuccess(true); // Trigger success animation
      setMessage('Product uploaded successfully!');

      // Clear form fields after successful submission
      setProductName('');
      setProductType('');
      setProductDescription('');
      setProductImage(null);
      setProductURL('');
      setPartnerPlatform('');

    } catch (error) {
      console.error('Error adding product:', error);
      setMessage(`Error: ${error.message || 'Could not upload product. Please try again.'}`);
      setIsSubmitting(false);
    }
  };

  // Variants for the main container that holds either the form or the success message
  const formContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Variants for the success message (direct child of AnimatePresence)
  const successVariants = {
    hidden: { scale: 0, opacity: 0 }, // Initial state for when it enters
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 15 } }, // Animate state
    exit: { opacity: 0, y: -50, transition: { duration: 0.5 } } // Exit state for when it leaves
  };

  // Variants for the form itself (direct child of AnimatePresence)
  const formVariants = {
    hidden: { opacity: 0 }, // Initial state for when it enters
    visible: { opacity: 1, transition: { duration: 0.3 } }, // Animate state
    exit: { opacity: 0, transition: { duration: 0.3 } } // Exit state for when it leaves
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
        initial="hidden"
        animate="visible"
        className="relative z-10 bg-gray-900 p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-lg border border-red-500/20"
      >
        <div className="text-center mb-8">
          <PackagePlus size={48} className="mx-auto text-yellow-400 mb-4" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 bg-clip-text text-transparent">
            Add New Product
          </h2>
          <p className="text-gray-400 mt-2">
            Enter the details to list a new fashion item on Mix-Market.
          </p>
        </div>

        {/* AnimatePresence for smooth transitions between the form and success message */}
        <AnimatePresence mode="wait">
          {showSuccess ? (
            <motion.div
              key="success-animation" // Unique key is crucial for AnimatePresence
              
              initial="hidden" // Use 'hidden' from successVariants on entry
              animate="visible"
              exit="exit" // Use 'exit' from successVariants on removal
              className="text-center p-6 rounded-lg bg-green-600/20 border border-green-500 text-green-300 space-y-4"
            >
              <motion.div
                initial={{ scale: 0.5, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <CheckCircle size={40} className="text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold">Product Uploaded Successfully!</h3>
              <p className="text-lg">You have uploaded a new product to the app.</p>
              <motion.button
                onClick={() => navigate('/user/dashboard')} // PATH TO USER DASHBOARD
                whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(234, 179, 8, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg mt-4 hover:bg-yellow-400 transition-all duration-300"
              >
                View the App
              </motion.button>
            </motion.div>
          ) : (
            <motion.form
              key="product-form" // Unique key is crucial for AnimatePresence
              onSubmit={handleSubmit}
              className="space-y-6"
              variants={formVariants} // Use formVariants here
              initial="hidden" // Use 'hidden' from formVariants on entry
              animate="visible"
              exit="exit" // Use 'exit' from formVariants on removal
            >
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-3 mb-4 rounded-md text-sm text-center ${
                    message.includes('success') ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
                  }`}
                >
                  {message}
                </motion.div>
              )}

              {/* Product Name */}
              <div className="relative">
                <Text size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Product Name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full p-3 pl-10 bg-gray-800 rounded-lg border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none text-white transition-all duration-300"
                  required
                />
              </div>

              {/* Product Type */}
              <div className="relative">
                <Type size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Product Type (e.g., T-shirt, Jeans, Dress)"
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                  className="w-full p-3 pl-10 bg-gray-800 rounded-lg border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none text-white transition-all duration-300"
                  required
                />
              </div>

              {/* Product Description */}
              <div className="relative">
                <Text size={20} className="absolute left-3 top-4 text-gray-400" />
                <textarea
                  placeholder="Product Description"
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                  rows={4}
                  className="w-full p-3 pl-10 bg-gray-800 rounded-lg border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none text-white transition-all duration-300 resize-y"
                  required
                ></textarea>
              </div>

              {/* Product Image Upload */}
              <div className="relative border border-gray-700 rounded-lg p-3 bg-gray-800 flex items-center space-x-3">
                <Image size={20} className="text-gray-400" />
                <label className="flex-1 cursor-pointer text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    required
                  />
                  {productImage ? productImage.name : 'Upload Product Image'}
                </label>
                {productImage && (
                  <button
                    type="button"
                    onClick={() => setProductImage(null)}
                    className="text-red-400 hover:text-red-500 text-sm"
                  >
                    Remove
                  </button>
                )}
              </div>

              {/* Product URL */}
              <div className="relative">
                <LinkIcon size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="url"
                  placeholder="Product URL (e.g., original listing link)"
                  value={productURL}
                  onChange={(e) => setProductURL(e.target.value)}
                  className="w-full p-3 pl-10 bg-gray-800 rounded-lg border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none text-white transition-all duration-300"
                  required
                />
              </div>

              {/* Product Partnered With */}
              <div className="relative">
                <Building2 size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <select
                  value={partnerPlatform}
                  onChange={(e) => setPartnerPlatform(e.target.value)}
                  className="w-full p-3 pl-10 bg-gray-800 rounded-lg border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none text-white transition-all duration-300 appearance-none" // appearance-none to allow custom arrow
                  required
                >
                  <option value="" disabled>Select Partner Platform</option>
                  <option value="Flipkart">Flipkart</option>
                  <option value="Amazon">Amazon</option>
                  <option value="Meesho">Meesho</option>
                  <option value="Shop101">Shop101</option>
                  <option value="Other">Other</option>
                </select>
                {/* Custom arrow for select */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(234, 179, 8, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold rounded-lg shadow-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Uploading Product...' : 'Add Product'}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default AddProduct;