import React from 'react';
import { Music } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Music className="w-8 h-8 mr-2" />
        <span className="text-xl font-bold">Spotify Theme</span>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
