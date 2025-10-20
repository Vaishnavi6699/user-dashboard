import React from 'react';
import { Mail, Phone, Building2 } from 'lucide-react';

const UserCard = ({ user, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 cursor-pointer border border-purple-100 hover:border-purple-500 transform hover:-translate-y-1 backdrop-blur-sm"
      style={{
        background: 'linear-gradient(to bottom right, white, #faf5ff)'
      }}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300" style={{fontFamily: 'Arial'}}>
          {user.name.charAt(0)}
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-slate-800">{user.name}</h3>
          <p className="text-sm text-purple-600">@{user.username}</p>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center text-slate-600 group">
          <Mail className="w-4 h-4 mr-2 text-purple-500 group-hover:text-purple-600 transition-colors" />
          <span className="text-sm truncate group-hover:text-slate-700 transition-colors">{user.email}</span>
        </div>
        
        <div className="flex items-center text-slate-600 group">
          <Phone className="w-4 h-4 mr-2 text-violet-500 group-hover:text-violet-600 transition-colors" />
          <span className="text-sm group-hover:text-slate-700 transition-colors">{user.phone}</span>
        </div>
        
        <div className="flex items-center text-slate-600 group">
          <Building2 className="w-4 h-4 mr-2 text-indigo-500 group-hover:text-indigo-600 transition-colors" />
          <span className="text-sm truncate group-hover:text-slate-700 transition-colors">{user.company?.name || 'N/A'}</span>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-purple-100">
        <button className="text-purple-600 hover:text-purple-800 text-sm font-medium flex items-center group">
          View Details 
          <span className="ml-1 text-lg group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </div>
  );
};

export default UserCard;