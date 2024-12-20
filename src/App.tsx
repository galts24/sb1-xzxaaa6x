import React from 'react';
import { UserForm } from './components/UserForm';
import { ObjectionsDashboard } from './components/ObjectionsDashboard';
import { PracticeMode } from './components/PracticeMode';
import { useStore } from './store/useStore';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  const userData = useStore((state) => state.userData);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <Header />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900" dir="rtl">
          מערכת אימון מכירות
        </h1>
        
        {!userData ? (
          <UserForm />
        ) : (
          <div className="space-y-8">
            <ObjectionsDashboard />
            <PracticeMode />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
