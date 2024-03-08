// import React from "react";
// import MasterLayout from "../layouts/MasterLayout";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { removeItemFromCart, updateCartItemQuantity } from "../redux/action";

// function CartPage(props) {
//   const cart = useSelector((state) => state.cart);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const calculateTotal = () => {
//     let total = 0;
//     cart.forEach((cartItem) => {
//       total += cartItem.product.price * cartItem.quantity;
//     });
//     return total;
//   };

//   const handleCheckOut = () => {
//     navigate("/checkout");
//   };

//   const handleRemoveItem = (productId) => {
//     dispatch(removeItemFromCart(productId));
//   };

//   const handleQuantityChange = (productId, quantity) => {
//     dispatch(updateCartItemQuantity(productId, quantity));
//   };

//   return (
//     <MasterLayout>
//       <h1>CartPage</h1>
//       <div className="untree_co-section before-footer-section">
//         <div className="container">
//           <div className="row mb-5">
//             <div className="col-md-12">
//               <div className="site-blocks-table">
//                 <table className="table">
//                   <thead>
//                     <tr>
//                       <th className="product-thumbnail">Image</th>
//                       <th className="product-name">Product</th>
//                       <th className="product-price">Price</th>
//                       <th className="product-quantity">Quantity</th>
//                       <th className="product-total">Total</th>
//                       <th className="product-remove">Remove</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {cart.map((cartItem, key) => (
//                       <tr key={key}>
//                         <td className="product-thumbnail">
//                           <img
//                             src={cartItem.product.image}
//                             alt="Image"
//                             className="img-fluid"
//                           />
//                         </td>
//                         <td className="product-name">
//                           <h2 className="h5 text-black">
//                             {cartItem.product.name}
//                           </h2>
//                         </td>
//                         <td>{cartItem.product.price}</td>
//                         <td>
//                           <div className="input-group mb-3 d-flex align-items-center quantity-container" style={{ maxWidth: 120 }}>
//                             <div className="input-group-prepend">
//                               <button
//                                 className="btn btn-outline-black decrease"
//                                 type="button"
//                                 onClick={() => handleQuantityChange(cartItem.product.id, cartItem.quantity - 1)}
//                               >
//                                 −
//                               </button>
//                             </div>
//                             <input
//                               type="text"
//                               className="form-control text-center quantity-amount"
//                               value={cartItem.quantity}
//                               readOnly
//                             />
//                             <div className="input-group-append">
//                               <button
//                                 className="btn btn-outline-black increase"
//                                 type="button"
//                                 onClick={() => handleQuantityChange(cartItem.product.id, cartItem.quantity + 1)}
//                               >
//                                 +
//                               </button>
//                             </div>
//                           </div>
//                         </td>
//                         <td>${cartItem.product.price * cartItem.quantity}</td>
//                         <td>
//                           <button
//                             className="btn btn-black btn-sm"
//                             onClick={() => handleRemoveItem(cartItem.product.id)}
//                           >
//                             X
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-6 pl-5">
//               <div className="row justify-content-end">
//                 <div className="col-md-7">
//                   <div className="row">
//                     <div className="col-md-12 text-right border-bottom mb-5">
//                       <h3 className="text-black h4 text-uppercase">
//                         Cart Totals
//                       </h3>
//                     </div>
//                   </div>
//                   <div className="row mb-3">
//                     <div className="col-md-6">
//                       <span className="text-black">Subtotal</span>
//                     </div>
//                     <div className="col-md-6 text-right">
//                       <strong className="text-black">
//                         ${calculateTotal()}
//                       </strong>
//                     </div>
//                   </div>
//                   <div className="row mb-5">
//                     <div className="col-md-6">
//                       <span className="text-black">Total</span>
//                     </div>
//                     <div className="col-md-6 text-right">
//                       <strong className="text-black">
//                         ${calculateTotal()}
//                       </strong>
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-md-12">
//                       <button
//                         className="btn btn-black btn-lg py-3 btn-block"
//                         onClick={handleCheckOut}
//                       >
//                         Proceed To Checkout
//                       </button>
//                     </div>
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

// export default CartPage;
