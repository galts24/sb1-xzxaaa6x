import React from 'react';
import { motion } from 'framer-motion';
import { UserCircle, Building2, Package } from 'lucide-react';
import { useStore } from '../store/useStore';

export const UserForm: React.FC = () => {
  const setUserData = useStore((state) => state.setUserData);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setUserData({
      name: formData.get('name') as string,
      businessName: formData.get('businessName') as string,
      productService: formData.get('productService') as string,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-right">פרטי המשתמש</h2>
      <form onSubmit={handleSubmit} className="space-y-4 text-right" dir="rtl">
        <div className="relative">
          <UserCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="name"
            required
            className="w-full pl-4 pr-12 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="שם מלא"
          />
        </div>
        
        <div className="relative">
          <Building2 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="businessName"
            required
            className="w-full pl-4 pr-12 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="שם העסק"
          />
        </div>

        <div className="relative">
          <Package className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="productService"
            required
            className="w-full pl-4 pr-12 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="מוצר או שירות"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          המשך
        </button>
      </form>
    </motion.div>
  );
};