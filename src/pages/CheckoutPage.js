// import React from "react";
// import MasterLayout from "../layouts/MasterLayout";
// import { useDispatch, useSelector } from "react-redux";
// import OrderModel from "../models/Order";
// import * as Yup from "yup";
// import { Formik, Form, Field, ErrorMessage } from "formik";

// function CheckoutPage(props) {
//   const cart = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   const handleSubmit = (values) => {
//     OrderModel.checkout({
//       cart: cart,
//       userdata: values,
//     })
//       .then(function (data) {
//         // Xử lý thành công
//       })
//       .catch(function (error) {
//         // Xử lý lỗi
//       });
//   };

//   const cartSubtotal = cart.reduce(
//     (accumulator, item) => accumulator + item.product.price * item.quantity,
//     0
//   );

//   const validationSchema = Yup.object().shape({
//     c_fname: Yup.string().required("First Name is required"),
//     c_lname: Yup.string().required("Last Name is required"),
//     c_address: Yup.string().required("Address is required"),
//     c_email_address: Yup.string()
//       .email("Invalid email address")
//       .required("Email Address is required"),
//     c_phone: Yup.string().required("Phone is required"),
//   });

//   return (
//     <MasterLayout>
//       <h1>CheckoutPage</h1>
//       <div className="untree_co-section">
//         <div className="container">
//           <div className="row mb-5">
//             <div className="col-md-12">
//               <div className="border p-4 rounded" role="alert">
//                 Returning customer? <a href="#">Click here</a> to login
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-6 mb-5 mb-md-0">
//               <h2 className="h3 mb-3 text-black">Billing Details</h2>
//               <div className="p-3 p-lg-5 border bg-white">
//                 <Formik
//                   initialValues={{
//                     c_fname: "",
//                     c_lname: "",
//                     c_address: "",
//                     c_email_address: "",
//                     c_phone: "",
//                   }}
//                   onSubmit={(values) => handleSubmit(values)}
//                   validationSchema={validationSchema}
//                 >
//                   <Form>
//                     <div className="form-group row">
//                       <div className="col-md-6">
//                         <label htmlFor="c_fname" className="text-black">
//                           First Name <span className="text-danger">*</span>
//                         </label>
//                         <Field
//                           type="text"
//                           className="form-control"
//                           id="c_fname"
//                           name="c_fname"
//                         />
//                         <ErrorMessage
//                           name="c_fname"
//                           component="div"
//                           className="text-danger"
//                         />
//                       </div>
//                       <div className="col-md-6">
//                         <label htmlFor="c_lname" className="text-black">
//                           Last Name <span className="text-danger">*</span>
//                         </label>
//                         <Field
//                           type="text"
//                           className="form-control"
//                           id="c_lname"
//                           name="c_lname"
//                         />
//                         <ErrorMessage
//                           name="c_lname"
//                           component="div"
//                           className="text-danger"
//                         />
//                       </div>
//                     </div>
//                     <div className="form-group row">
//                       <div className="col-md-12">
//                         <label htmlFor="c_address" className="text-black">
//                           Address <span className="text-danger">*</span>
//                         </label>
//                         <Field
//                           type="text"
//                           className="form-control"
//                           id="c_address"
//                           name="c_address"
//                           placeholder="Street address"
//                         />
//                         <ErrorMessage
//                           name="c_address"
//                           component="div"
//                           className="text-danger"
//                         />
//                       </div>
//                     </div>
//                     <div className="form-group row mb-5">
//                       <div className="col-md-6">
//                         <label htmlFor="c_email_address" className="text-black">
//                           Email Address <span className="text-danger">*</span>
//                         </label>
//                         <Field
//                           type="text"
//                           className="form-control"
//                           id="c_email_address"
//                           name="c_email_address"
//                         />
//                         <ErrorMessage
//                           name="c_email_address"
//                           component="div"
//                           className="text-danger"
//                         />
//                       </div>
//                       <div className="col-md-6">
//                         <label htmlFor="c_phone" className="text-black">
//                           Phone <span className="text-danger">*</span>
//                         </label>
//                         <Field
//                           type="text"
//                           className="form-control"
//                           id="c_phone"
//                           name="c_phone"
//                           placeholder="Phone Number"
//                         />
//                         <ErrorMessage
//                           name="c_phone"
//                           component="div"
//                           className="text-danger"
//                         />
//                       </div>
//                     </div>
//                     <div className="form-group">
//                       <button
//                         type="submit"
//                         className="btn btn-black btn-lg py-3 btn-block"
//                       >
//                         Place Order
//                       </button>
//                     </div>
//                   </Form>
//                 </Formik>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="row mb-5">
//                 <div className="col-md-12">
//                   <h2 className="h3 mb-3 text-black">Your Order</h2>
//                   <div className="p-3 p-lg-5 border bg-white">
//                     <table className="table site-block-order-table mb-5">
//                       <thead>
//                         <tr>
//                           <th>Product</th>
//                           <th>Total</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {cart.map((item, index) => (
//                           <tr key={index}>
//                             <td>
//                               {item.product.name}{" "}
//                               <strong className="mx-2">x</strong>{" "}
//                               {item.quantity}
//                             </td>
//                             <td>${item.product.price}</td>
//                           </tr>
//                         ))}
//                         <tr>
//                           <td className="text-black font-weight-bold">
//                             <strong>Cart Subtotal</strong>
//                           </td>
//                           <td className="text-black">
//                             ${cartSubtotal.toFixed(2)}
//                           </td>
//                         </tr>
//                         <tr>
//                           <td className="text-black font-weight-bold">
//                             <strong>Order Total</strong>
//                           </td>
//                           <td className="text-black font-weight-bold">
//                             <strong>${cartSubtotal.toFixed(2)}</strong>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </MasterLayout>
//   );
// }

// export default CheckoutPage;