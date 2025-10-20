import React, { useState } from 'react';
import { Search, User } from 'lucide-react';
import { useUserContext } from '../context/UserContext';
import UserCard from '../components/UserCard';
import NewUserForm from '../components/NewUserForm';

const Dashboard = ({ onNavigate }) => {
  const { users, loading, error } = useUserContext();
  const [searchTerm, setSearchTerm] = useState('');

  // Filter users based on search term
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-600 border-t-transparent rounded-full animate-spin mx-auto mb-4 shadow-lg"></div>
          <p className="text-gray-600 animate-pulse">Loading your dashboard...</p>
          <p className="text-sm text-gray-400 mt-2">Please wait a moment</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
          <p className="text-red-800">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 transition-all duration-300 hover:transform hover:translate-y-[-2px] space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-[2.75rem] font-extrabold mb-3 text-gray-900 tracking-tight leading-none">
                User Dashboard
                <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full mt-3"></div>
              </h1>
              <p className="text-slate-600 text-lg font-medium tracking-wide">Manage and explore user profiles</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg border border-purple-100 flex items-center gap-3 hover:shadow-xl transition-shadow duration-300" 
                 style={{ background: 'linear-gradient(to bottom right, white, #faf5ff)' }}>
              <div className="p-2 rounded-full bg-gradient-to-br from-purple-500 to-violet-500">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm text-slate-500">Total Users</div>
                <div className="text-2xl font-semibold text-slate-800">{users.length}</div>
              </div>
            </div>
          </div>
        </div>

        <NewUserForm />

        <div className="mb-6">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-colors group-hover:text-orange-500" />
            <input
              type="text"
              placeholder="Search users by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm hover:border-purple-300 transition-colors duration-200"
              autoComplete="off"
            />
          </div>
          <p className="mt-2 text-sm text-gray-600 flex items-center gap-2 animate-fade-in">
            <span className="inline-block w-2 h-2 rounded-full bg-orange-500"></span>
            Showing {filteredUsers.length} of {users.length} users
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {filteredUsers.map((user, index) => (
            <div 
              key={user.id}
              className="transform transition-all duration-300 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <UserCard 
                user={user} 
                onClick={() => onNavigate(user.id)}
              />
            </div>
          ))}
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200 shadow-inner transition-all duration-300">
            <User className="w-16 h-16 text-orange-300 mx-auto mb-4 animate-bounce" />
            <p className="text-gray-500 text-lg">No users found matching "<span className="text-orange-600 font-semibold">{searchTerm}</span>"</p>
            <p className="text-gray-400 mt-2">Try searching for a different name</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;