import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {

  const initialUsers = [
    {
      id: 1,
      name: 'Sharma',
      username: 'aarav_s',
      email: 'a.sharma@techmail.in',
      phone: '+91 98765 43210',
      address: {
        street: 'MG Road',
        suite: 'Block A',
        city: 'Bangalore',
        zipcode: '560001',
        geo: { lat: '12.9716', lng: '77.5946' }
      },
      company: { name: 'TechMindz Solutions' }
    },
    {
      id: 2,
      name: 'Meena',
      username: 'meena_123',
      email: 'meena.123@gmail.com',
      phone: '+91 99887 77665',
      address: {
        street: 'Anna Salai',
        suite: 'Suite 12',
        city: 'Chennai',
        zipcode: '600002',
        geo: { lat: '13.0827', lng: '80.2707' }
      },
      company: { name: 'Chennai Fintech' }
    },
    {
      id: 3,
      name: 'Rohan Gupta',
      username: 'rohan.gupta',
      email: 'rohan.gupta@yahoo.in',
      phone: '+91 91234 56789',
      address: {
        street: 'C.G. Road',
        suite: 'Flat 5B',
        city: 'Ahmedabad',
        zipcode: '380009',
        geo: { lat: '23.0225', lng: '72.5714' }
      },
      company: { name: 'Ahmedabad Textiles' }
    },
    {
      id: 4,
      name: 'Sriman',
      username: 'sriman',
      email: 'sriram@gmail.com',
      phone: '+91 98700 12345',
      address: {
        street: 'Mall Road',
        suite: 'Suite 21',
        city: 'Amritsar',
        zipcode: '143001',
        geo: { lat: '31.6340', lng: '74.8723' }
      },
      company: { name: 'Punjab Agro' }
    },
    {
      id: 5,
      name: 'Vikram',
      username: 'vikram',
      email: 'vikram@gmail.com',
      phone: '+91 90000 11122',
      address: {
        street: 'FC Road',
        suite: 'Office 3',
        city: 'Pune',
        zipcode: '411004',
        geo: { lat: '18.5204', lng: '73.8567' }
      },
      company: { name: 'Pune IT Hub' }
    },
    {
      id: 6,
      name: 'Ananya Singh',
      username: 'ananya_s',
      email: 'ananya.singh@lucknowmail.com',
      phone: '+91 88888 22233',
      address: {
        street: 'Hazratganj',
        suite: 'Suite 7',
        city: 'Lucknow',
        zipcode: '226001',
        geo: { lat: '26.8467', lng: '80.9462' }
      },
      company: { name: 'Lucknow Foods' }
    },
    {
      id: 7,
      name: 'Rahul Verma',
      username: 'rahulv',
      email: 'rahul.verma@yahoo.in',
      phone: '+91 77777 33344',
      address: {
        street: 'Connaught Place',
        suite: 'Block D',
        city: 'Delhi',
        zipcode: '110001',
        geo: { lat: '28.6139', lng: '77.2090' }
      },
      company: { name: 'Delhi Media' }
    },
    {
      id: 8,
      name: 'aysha',
      username: 'aysha_nair',
      email: 'aysha.nair@post.in',
      phone: '+91 99999 44455',
      address: {
        street: 'M.G. Road',
        suite: 'Suite 2',
        city: 'Kochi',
        zipcode: '682016',
        geo: { lat: '9.9312', lng: '76.2673' }
      },
      company: { name: 'Kerala Spices' }
    },
    {
      id: 9,
      name: 'Aditya',
      username: 'aditya_j',
      email: 'aditya.joshi@gmail.com',
      phone: '+91 90909 55566',
      address: {
        street: 'MI Road',
        suite: 'Suite 10',
        city: 'Jaipur',
        zipcode: '302001',
        geo: { lat: '26.9124', lng: '75.7873' }
      },
      company: { name: 'Jaipur Gems' }
    },
    {
      id: 10,
      name: 'Pooja ',
      username: 'pooja_c',
      email: 'pooja98@gmail.com',
      phone: '+91 80808 66677',
      address: {
        street: 'Park Street',
        suite: 'Suite 8',
        city: 'Kolkata',
        zipcode: '700016',
        geo: { lat: '22.5726', lng: '88.3639' }
      },
      company: { name: 'Kolkata Arts' }
    }
  ];

  const [users, setUsers] = useState(initialUsers);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  const addUser = (newUser) => {
    const userWithId = {
      ...newUser,
      id: users.length + 1,
      address: {
        street: newUser.street || '',
        suite: newUser.suite || '',
        city: newUser.city || '',
        zipcode: newUser.zipcode || '',
        geo: {
          lat: newUser.lat || '0',
          lng: newUser.lng || '0'
        }
      },
      company: {
        name: newUser.companyName || ''
      }
    };
    setUsers(prev => [userWithId, ...prev]);
  };

  return (
    <UserContext.Provider value={{ users, loading, error, addUser }}>
      {children}
    </UserContext.Provider>
  );
};