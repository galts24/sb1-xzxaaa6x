import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useStore } from '../store/useStore';

export const ObjectionsDashboard: React.FC = () => {
  const objections = useStore((state) => state.objections);
  const [expandedId, setExpandedId] = React.useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full max-w-4xl mx-auto p-6"
      dir="rtl"
    >
      <h2 className="text-2xl font-bold mb-6 text-right">התנגדויות ותשובות מומלצות</h2>
      <div className="space-y-4">
        {objections.map((objection) => (
          <motion.div
            key={objection.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            initial={false}
          >
            <button
              className="w-full p-4 text-right flex justify-between items-center hover:bg-gray-50"
              onClick={() => setExpandedId(expandedId === objection.id ? null : objection.id)}
            >
              <span className="font-medium">{objection.text}</span>
              {expandedId === objection.id ? <ChevronUp /> : <ChevronDown />}
            </button>
            
            {expandedId === objection.id && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                className="p-4 bg-gray-50 border-t"
              >
                <p className="text-gray-700">{objection.response}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};