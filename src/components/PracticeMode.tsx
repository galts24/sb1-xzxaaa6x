import React from 'react';
import { motion } from 'framer-motion';
import { Mic, MicOff, Play, Stop } from 'lucide-react';
import { useStore } from '../store/useStore';

export const PracticeMode: React.FC = () => {
  const { isRecording, setIsRecording } = useStore();
  const [feedback, setFeedback] = React.useState<string>('');

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Here we would implement actual speech recognition logic
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full max-w-4xl mx-auto p-6"
      dir="rtl"
    >
      <h2 className="text-2xl font-bold mb-6 text-right">מצב אימון</h2>
      
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-center mb-6">
          <button
            onClick={toggleRecording}
            className={`p-4 rounded-full ${
              isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
            } text-white transition-colors`}
          >
            {isRecording ? <MicOff size={24} /> : <Mic size={24} />}
          </button>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">תמליל השיחה</h3>
            <div className="h-40 overflow-y-auto bg-white p-3 rounded border">
              {/* Transcript would be displayed here */}
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">משוב</h3>
            <div className="bg-white p-3 rounded border">
              {feedback || 'המשוב יופיע כאן לאחר סיום האימון'}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};