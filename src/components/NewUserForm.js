// // import React, { useState } from 'react';
// // import { Plus } from 'lucide-react';
// // import { useUserContext } from '../context/UserContext';

// // const NewUserForm = () => {
// //   const { addUser } = useUserContext();

// //   const [formData, setFormData] = useState({
// //     name: '',
// //     username: '',
// //     email: '',
// //     phone: '',
// //     companyName: '',
// //     city: ''
// //   });

// //   const [errors, setErrors] = useState({});
// //   const [showForm, setShowForm] = useState(false);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;

    
// //     let errorMsg = '';

// //     if (name === 'name') {
// //       if (value.length > 20) errorMsg = 'Name must be under 20 characters.';
// //     }

// //     if (name === 'email') {
// //       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //       if (value && !emailRegex.test(value)) errorMsg = 'Enter a valid email address.';
// //     }

// //     if (name === 'phone') {
// //       const phoneRegex = /^[0-9]*$/;
// //       if (!phoneRegex.test(value)) errorMsg = 'Phone number must contain only digits.';
// //       if (value.length > 10) errorMsg = 'Phone number must be exactly 10 digits.';
// //     }

// //     if (name === 'username' && value.length > 15) {
// //       errorMsg = 'Username must be under 15 characters.';
// //     }

// //     if (name === 'companyName' && value.length > 30) {
// //       errorMsg = 'Company name must be under 30 characters.';
// //     }

// //     if (name === 'city' && value.length > 25) {
// //       errorMsg = 'City must be under 25 characters.';
// //     }

// //     setErrors(prev => ({ ...prev, [name]: errorMsg }));
// //     setFormData(prev => ({ ...prev, [name]: value }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

    
// //     const hasErrors = Object.values(errors).some(msg => msg);
// //     if (hasErrors) {
// //       alert('Please fix the highlighted errors before submitting.');
// //       return;
// //     }

// //     if (!formData.name || !formData.email) {
// //       alert('Please fill in the required fields.');
// //       return;
// //     }

// //     addUser(formData);
// //     setFormData({
// //       name: '',
// //       username: '',
// //       email: '',
// //       phone: '',
// //       companyName: '',
// //       city: ''
// //     });
// //     setErrors({});
// //     setShowForm(false);
// //   };

// //   return (
// //     <div className="mb-8 transition-all duration-300 ease-in-out">
// //       <button
// //         onClick={() => setShowForm(!showForm)}
// //         className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg hover:from-purple-700 hover:to-violet-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
// //       >
// //         <Plus className="w-5 h-5 mr-2" />
// //         {showForm ? 'Cancel' : 'Create New User'}
// //       </button>

// //       {showForm && (
// //         <form
// //           onSubmit={handleSubmit}
// //           className="mt-6 bg-white rounded-lg shadow-xl p-8 border border-purple-100 transform transition-all duration-300 ease-in-out backdrop-blur-sm"
// //           style={{
// //             animation: 'slideDown 0.3s ease-out forwards',
// //             transformOrigin: 'top',
// //             background: 'linear-gradient(to bottom, white, #faf5ff)'
// //           }}
// //         >
// //           <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
// //             <span className="bg-gradient-to-r from-purple-600 to-violet-600 text-transparent bg-clip-text">
// //               Create New User
// //             </span>
// //             <div className="h-1 w-10 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full ml-4"></div>
// //           </h3>

// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 Name <span className="text-red-500">*</span>
// //               </label>
// //               <input
// //                 type="text"
// //                 name="name"
// //                 value={formData.name}
// //                 onChange={handleChange}
// //                 required
// //                 maxLength={20}
// //                 placeholder="Enter name (max 20 chars)"
// //                 className={`w-full px-4 py-3 border ${
// //                   errors.name ? 'border-red-400' : 'border-gray-300'
// //                 } rounded-lg focus:ring-2 ${
// //                   errors.name ? 'focus:ring-red-400' : 'focus:ring-blue-500'
// //                 } focus:border-transparent transition-all duration-200`}
// //               />
// //               {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
// //             </div>

            
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-1">
// //                 Username
// //               </label>
// //               <input
// //                 type="text"
// //                 name="username"
// //                 value={formData.username}
// //                 onChange={handleChange}
// //                 maxLength={15}
// //                 placeholder="Enter username (max 15 chars)"
// //                 className={`w-full px-4 py-2 border ${
// //                   errors.username ? 'border-red-400' : 'border-gray-300'
// //                 } rounded-lg focus:ring-2 ${
// //                   errors.username ? 'focus:ring-red-400' : 'focus:ring-blue-500'
// //                 } focus:border-transparent`}
// //               />
// //               {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
// //             </div>

            
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-1">
// //                 Email <span className="text-red-500">*</span>
// //               </label>
// //               <input
// //                 type="email"
// //                 name="email"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 required
// //                 maxLength={40}
// //                 placeholder="Enter valid email"
// //                 className={`w-full px-4 py-2 border ${
// //                   errors.email ? 'border-red-400' : 'border-gray-300'
// //                 } rounded-lg focus:ring-2 ${
// //                   errors.email ? 'focus:ring-red-400' : 'focus:ring-blue-500'
// //                 } focus:border-transparent`}
// //               />
// //               {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
// //             </div>

            
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-1">
// //                 Phone
// //               </label>
// //               <input
// //                 type="tel"
// //                 name="phone"
// //                 value={formData.phone}
// //                 onChange={handleChange}
// //                 maxLength={10}
// //                 placeholder="10-digit number"
// //                 className={`w-full px-4 py-2 border ${
// //                   errors.phone ? 'border-red-400' : 'border-gray-300'
// //                 } rounded-lg focus:ring-2 ${
// //                   errors.phone ? 'focus:ring-red-400' : 'focus:ring-blue-500'
// //                 } focus:border-transparent`}
// //               />
// //               {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
// //             </div>

            
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-1">
// //                 Company Name
// //               </label>
// //               <input
// //                 type="text"
// //                 name="companyName"
// //                 value={formData.companyName}
// //                 onChange={handleChange}
// //                 maxLength={30}
// //                 placeholder="Enter company name (max 30 chars)"
// //                 className={`w-full px-4 py-2 border ${
// //                   errors.companyName ? 'border-red-400' : 'border-gray-300'
// //                 } rounded-lg focus:ring-2 ${
// //                   errors.companyName ? 'focus:ring-red-400' : 'focus:ring-blue-500'
// //                 } focus:border-transparent`}
// //               />
// //               {errors.companyName && (
// //                 <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
// //               )}
// //             </div>

            
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-1">
// //                 City
// //               </label>
// //               <input
// //                 type="text"
// //                 name="city"
// //                 value={formData.city}
// //                 onChange={handleChange}
// //                 maxLength={25}
// //                 placeholder="Enter your city (max 25 chars)"
// //                 className={`w-full px-4 py-2 border ${
// //                   errors.city ? 'border-red-400' : 'border-gray-300'
// //                 } rounded-lg focus:ring-2 ${
// //                   errors.city ? 'focus:ring-red-400' : 'focus:ring-blue-500'
// //                 } focus:border-transparent`}
// //               />
// //               {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
// //             </div>
// //           </div>

// //           <div className="mt-8 flex gap-4 items-center justify-end">
// //             <button
// //               type="submit"
// //               className="px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg hover:from-purple-700 hover:to-violet-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98] flex items-center"
// //             >
// //               <Plus className="w-4 h-4 mr-2" />
// //               Add User
// //             </button>
// //             <button
// //               type="button"
// //               onClick={() => setShowForm(false)}
// //               className="px-6 py-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-all duration-300 shadow-sm hover:shadow transform hover:scale-[1.02] active:scale-[0.98]"
// //             >
// //               Cancel
// //             </button>
// //           </div>
// //         </form>
// //       )}
// //     </div>
// //   );
// // };

// // export default NewUserForm;
// import React, { useState } from 'react';
// import { Plus } from 'lucide-react';
// import { useUserContext } from '../context/UserContext';

// const NewUserForm = () => {
//   const { addUser } = useUserContext();

//   const [formData, setFormData] = useState({
//     name: '',
//     username: '',
//     email: '',
//     phone: '',
//     companyName: '',
//     city: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [showForm, setShowForm] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     let errorMsg = '';

//     if (name === 'name' && value.length > 20)
//       errorMsg = 'Name must be under 20 characters.';

//     if (name === 'email') {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (value && !emailRegex.test(value))
//         errorMsg = 'Enter a valid email address.';
//     }

//     if (name === 'phone') {
//       const phoneRegex = /^[0-9]*$/;
//       if (!phoneRegex.test(value))
//         errorMsg = 'Phone number must contain only digits.';
//       if (value.length > 10)
//         errorMsg = 'Phone number must be exactly 10 digits.';
//     }

//     if (name === 'username' && value.length > 15)
//       errorMsg = 'Username must be under 15 characters.';

//     if (name === 'companyName' && value.length > 30)
//       errorMsg = 'Company name must be under 30 characters.';

//     if (name === 'city' && value.length > 25)
//       errorMsg = 'City must be under 25 characters.';

//     setErrors(prev => ({ ...prev, [name]: errorMsg }));
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const hasErrors = Object.values(errors).some(msg => msg);
//     if (hasErrors) {
//       alert('Please fix the highlighted errors before submitting.');
//       return;
//     }

//     if (!formData.name || !formData.email) {
//       alert('Please fill in the required fields.');
//       return;
//     }

//     addUser(formData);
//     setFormData({
//       name: '',
//       username: '',
//       email: '',
//       phone: '',
//       companyName: '',
//       city: ''
//     });
//     setErrors({});
//     setShowForm(false);
//   };

//   return (
//     <div className="mb-8 transition-all duration-300 ease-in-out">
//       {/* Removed top Cancel/Create button */}

//       <form
//         onSubmit={handleSubmit}
//         className="mt-6 bg-white rounded-lg shadow-xl p-8 border border-purple-100 transform transition-all duration-300 ease-in-out backdrop-blur-sm"
//         style={{
//           animation: 'slideDown 0.3s ease-out forwards',
//           transformOrigin: 'top',
//           background: 'linear-gradient(to bottom, white, #faf5ff)'
//         }}
//       >
//         <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
//           <span className="bg-gradient-to-r from-purple-600 to-violet-600 text-transparent bg-clip-text">
//             Create New User
//           </span>
//           <div className="h-1 w-10 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full ml-4"></div>
//         </h3>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Name <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               maxLength={20}
//               placeholder="Enter name (max 20 chars)"
//               className={`w-full px-4 py-3 border ${
//                 errors.name ? 'border-red-400' : 'border-gray-300'
//               } rounded-lg focus:ring-2 ${
//                 errors.name ? 'focus:ring-red-400' : 'focus:ring-blue-500'
//               } focus:border-transparent transition-all duration-200`}
//             />
//             {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Username
//             </label>
//             <input
//               type="text"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               maxLength={15}
//               placeholder="Enter username (max 15 chars)"
//               className={`w-full px-4 py-2 border ${
//                 errors.username ? 'border-red-400' : 'border-gray-300'
//               } rounded-lg focus:ring-2 ${
//                 errors.username ? 'focus:ring-red-400' : 'focus:ring-blue-500'
//               } focus:border-transparent`}
//             />
//             {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               maxLength={40}
//               placeholder="Enter valid email"
//               className={`w-full px-4 py-2 border ${
//                 errors.email ? 'border-red-400' : 'border-gray-300'
//               } rounded-lg focus:ring-2 ${
//                 errors.email ? 'focus:ring-red-400' : 'focus:ring-blue-500'
//               } focus:border-transparent`}
//             />
//             {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Phone
//             </label>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               maxLength={10}
//               placeholder="10-digit number"
//               className={`w-full px-4 py-2 border ${
//                 errors.phone ? 'border-red-400' : 'border-gray-300'
//               } rounded-lg focus:ring-2 ${
//                 errors.phone ? 'focus:ring-red-400' : 'focus:ring-blue-500'
//               } focus:border-transparent`}
//             />
//             {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Company Name
//             </label>
//             <input
//               type="text"
//               name="companyName"
//               value={formData.companyName}
//               onChange={handleChange}
//               maxLength={30}
//               placeholder="Enter company name (max 30 chars)"
//               className={`w-full px-4 py-2 border ${
//                 errors.companyName ? 'border-red-400' : 'border-gray-300'
//               } rounded-lg focus:ring-2 ${
//                 errors.companyName ? 'focus:ring-red-400' : 'focus:ring-blue-500'
//               } focus:border-transparent`}
//             />
//             {errors.companyName && (
//               <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
//             )}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               City
//             </label>
//             <input
//               type="text"
//               name="city"
//               value={formData.city}
//               onChange={handleChange}
//               maxLength={25}
//               placeholder="Enter your city (max 25 chars)"
//               className={`w-full px-4 py-2 border ${
//                 errors.city ? 'border-red-400' : 'border-gray-300'
//               } rounded-lg focus:ring-2 ${
//                 errors.city ? 'focus:ring-red-400' : 'focus:ring-blue-500'
//               } focus:border-transparent`}
//             />
//             {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
//           </div>
//         </div>

//         <div className="mt-8 flex gap-4 items-center justify-end">
//           <button
//             type="submit"
//             className="px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg hover:from-purple-700 hover:to-violet-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98] flex items-center"
//           >
//             <Plus className="w-4 h-4 mr-2" />
//             Add User
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default NewUserForm;
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useUserContext } from '../context/UserContext';

const NewUserForm = () => {
  const { addUser } = useUserContext();

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    companyName: '',
    city: ''
  });

  const [errors, setErrors] = useState({});
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let errorMsg = '';

    if (name === 'name' && value.length > 20)
      errorMsg = 'Name must be under 20 characters.';

    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value && !emailRegex.test(value))
        errorMsg = 'Enter a valid email address.';
    }

    if (name === 'phone') {
      const phoneRegex = /^[0-9]*$/;
      if (!phoneRegex.test(value))
        errorMsg = 'Phone number must contain only digits.';
      if (value.length > 10)
        errorMsg = 'Phone number must be exactly 10 digits.';
    }

    if (name === 'username' && value.length > 15)
      errorMsg = 'Username must be under 15 characters.';

    if (name === 'companyName' && value.length > 30)
      errorMsg = 'Company name must be under 30 characters.';

    if (name === 'city' && value.length > 25)
      errorMsg = 'City must be under 25 characters.';

    setErrors(prev => ({ ...prev, [name]: errorMsg }));
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasErrors = Object.values(errors).some(msg => msg);
    if (hasErrors) {
      alert('Please fix the highlighted errors before submitting.');
      return;
    }

    if (!formData.name || !formData.email) {
      alert('Please fill in the required fields.');
      return;
    }

    addUser(formData);
    setFormData({
      name: '',
      username: '',
      email: '',
      phone: '',
      companyName: '',
      city: ''
    });
    setErrors({});
    setShowForm(false);
  };

  return (
    <div className="mb-8 transition-all duration-300 ease-in-out">
      <button
        onClick={() => setShowForm(!showForm)}
        className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg hover:from-purple-700 hover:to-violet-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
      >
        
        {showForm ? 'Cancel' : 'Create New User'}
      </button>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mt-6 bg-white rounded-lg shadow-xl p-8 border border-purple-100 transform transition-all duration-300 ease-in-out backdrop-blur-sm"
          style={{
            animation: 'slideDown 0.3s ease-out forwards',
            transformOrigin: 'top',
            background: 'linear-gradient(to bottom, white, #faf5ff)'
          }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
            <span className="bg-gradient-to-r from-purple-600 to-violet-600 text-transparent bg-clip-text">
              Create New User
            </span>
            <div className="h-1 w-10 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full ml-4"></div>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                maxLength={20}
                placeholder="Enter name (max 20 chars)"
                className={`w-full px-4 py-3 border ${
                  errors.name ? 'border-red-400' : 'border-gray-300'
                } rounded-lg focus:ring-2 ${
                  errors.name ? 'focus:ring-red-400' : 'focus:ring-blue-500'
                } focus:border-transparent transition-all duration-200`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                maxLength={15}
                placeholder="Enter username (max 15 chars)"
                className={`w-full px-4 py-2 border ${
                  errors.username ? 'border-red-400' : 'border-gray-300'
                } rounded-lg focus:ring-2 ${
                  errors.username ? 'focus:ring-red-400' : 'focus:ring-blue-500'
                } focus:border-transparent`}
              />
              {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                maxLength={40}
                placeholder="Enter valid email"
                className={`w-full px-4 py-2 border ${
                  errors.email ? 'border-red-400' : 'border-gray-300'
                } rounded-lg focus:ring-2 ${
                  errors.email ? 'focus:ring-red-400' : 'focus:ring-blue-500'
                } focus:border-transparent`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                maxLength={10}
                placeholder="10-digit number"
                className={`w-full px-4 py-2 border ${
                  errors.phone ? 'border-red-400' : 'border-gray-300'
                } rounded-lg focus:ring-2 ${
                  errors.phone ? 'focus:ring-red-400' : 'focus:ring-blue-500'
                } focus:border-transparent`}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                maxLength={30}
                placeholder="Enter company name (max 30 chars)"
                className={`w-full px-4 py-2 border ${
                  errors.companyName ? 'border-red-400' : 'border-gray-300'
                } rounded-lg focus:ring-2 ${
                  errors.companyName ? 'focus:ring-red-400' : 'focus:ring-blue-500'
                } focus:border-transparent`}
              />
              {errors.companyName && (
                <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                maxLength={25}
                placeholder="Enter your city (max 25 chars)"
                className={`w-full px-4 py-2 border ${
                  errors.city ? 'border-red-400' : 'border-gray-300'
                } rounded-lg focus:ring-2 ${
                  errors.city ? 'focus:ring-red-400' : 'focus:ring-blue-500'
                } focus:border-transparent`}
              />
              {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
            </div>
          </div>

          {/* Removed only the bottom Cancel button */}
          <div className="mt-8 flex gap-4 items-center justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg hover:from-purple-700 hover:to-violet-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98] flex items-center"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add User
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default NewUserForm;
