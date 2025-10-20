import React from 'react';
import { ArrowLeft, Mail, Phone, Building2, MapPin } from 'lucide-react';
import { useUserContext } from '../context/UserContext';

const UserDetails = ({ userId, onBack }) => {
  const { users } = useUserContext();
  const user = users.find(u => u.id === parseInt(userId));

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={onBack}
            className="group flex items-center text-teal-600 hover:text-teal-800 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Dashboard
          </button>
          <div className="bg-rose-50/80 backdrop-blur-sm border border-rose-200 rounded-xl p-8 shadow-lg">
            <p className="text-rose-800 text-lg flex items-center">
              <span className="w-2 h-2 bg-rose-500 rounded-full mr-3 animate-pulse"></span>
              User not found
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="group flex items-center text-purple-600 hover:text-purple-800 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Dashboard
        </button>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-purple-100">
          <div className="bg-gradient-to-r from-purple-600 to-violet-600 p-10">
            <div className="flex items-center">
              <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white font-bold text-4xl shadow-2xl transform hover:scale-105 transition-transform duration-200">
                {user.name.charAt(0)}
              </div>
              <div className="ml-8 text-white">
                <h1 className="text-4xl font-bold tracking-tight">{user.name}</h1>
                <p className="text-purple-100 text-lg mt-1">@{user.username}</p>
              </div>
            </div>
          </div>

          <div className="p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-purple-50/50 rounded-xl p-6 backdrop-blur-sm border border-purple-100">
                <h2 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
                  <span className="bg-gradient-to-r from-purple-600 to-violet-600 text-transparent bg-clip-text">
                    Contact Information
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-purple-500/20 to-violet-500/20 ml-4"></div>
                </h2>
                <div className="space-y-4">
                  <div className="group flex items-start transition-all duration-200 p-3 hover:bg-white rounded-lg">
                    <Mail className="w-5 h-5 text-purple-500 mr-3 mt-1 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-sm text-slate-500">Email</p>
                      <p className="text-slate-800 font-medium">{user.email}</p>
                    </div>
                  </div>
                  <div className="group flex items-start transition-all duration-200 p-3 hover:bg-white rounded-lg">
                    <Phone className="w-5 h-5 text-violet-500 mr-3 mt-1 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-sm text-slate-500">Phone</p>
                      <p className="text-slate-800 font-medium">{user.phone}</p>
                    </div>
                  </div>
                  <div className="group flex items-start transition-all duration-200 p-3 hover:bg-white rounded-lg">
                    <Building2 className="w-5 h-5 text-indigo-500 mr-3 mt-1 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-sm text-slate-500">Company</p>
                      <p className="text-slate-800 font-medium">{user.company?.name || 'N/A'}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50/50 rounded-xl p-6 backdrop-blur-sm border border-purple-100">
                <h2 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
                  <span className="bg-gradient-to-r from-purple-600 to-violet-600 text-transparent bg-clip-text">
                    Location Details
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-purple-500/20 to-violet-500/20 ml-4"></div>
                </h2>
                <div className="group flex items-start mb-6 p-3 hover:bg-white rounded-lg transition-all duration-200">
                  <MapPin className="w-5 h-5 text-rose-500 mr-3 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-slate-500">Address</p>
                    <p className="text-slate-800 font-medium mt-1">
                      {user.address?.street} {user.address?.suite}
                    </p>
                    <p className="text-slate-800 font-medium">
                      {user.address?.city}, {user.address?.zipcode}
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-slate-800 mb-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-transparent bg-clip-text">Geo-location</h3>
                <div className="bg-white/80 rounded-lg p-5 shadow-sm">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="group">
                      <p className="text-sm text-slate-500">Latitude</p>
                      <p className="text-slate-800 font-mono mt-1 group-hover:text-teal-600 transition-colors">{user.address?.geo?.lat || 'N/A'}</p>
                    </div>
                    <div className="group">
                      <p className="text-sm text-slate-500">Longitude</p>
                      <p className="text-slate-800 font-mono mt-1 group-hover:text-emerald-600 transition-colors">{user.address?.geo?.lng || 'N/A'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;