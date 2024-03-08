// import React, { useState } from 'react';
// import axios from 'axios';

// function CustomerForm() {
//     const [email, setEmail] = useState('');
//     const [name, setName] = useState('');
//     const [message, setMessage] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Tạo một object chứa dữ liệu để gửi lên server
//         const data = {
//             email: email,
//             name: name
//         };

//         // Gửi yêu cầu POST đến server
//         axios.post('http://127.0.0.1:8000/api/users/register', data)
//             .then(response => {
//                 // Xử lý phản hồi từ server
//                 console.log(response.data); // Log phản hồi từ server
//                 setMessage(response.data.message); // Hiển thị thông báo từ server
//                 // Có thể xử lý dữ liệu khác từ server tại đây nếu cần
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//             });
//     };

//     return (
//         <div>
//             <h2>Customer Form</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Email:</label>
//                     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//                 </div>
//                 <div>
//                     <label>Name:</label>
//                     <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//                 </div>
//                 <button type="submit" >Submit</button>
//             </form>
//             {message && <p>{message}</p>} {/* Hiển thị thông báo từ server */}
//         </div>
//     );
// }

// export default CustomerForm;
