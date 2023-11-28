// import React, { useState, useEffect } from 'react';
// import { auth, db, storage } from './firebase';
// import {
//   getDocs,
//   collection,
//   addDoc,
//   deleteDoc,
//   updateDoc,
//   doc,
// } from "firebase/firestore";
// import {
//   ref,
//   uploadBytes,
//   getDownloadURL,
//   listAll,
//   list,
// } from "firebase/storage";
// import { v4 } from "uuid";

// const AddProduct = () => {
//   const [ProductList, setProductList] = useState([]);

//   const [productName, setProductName] = useState('');
//   const [productDescription, setProductDescription] = useState('');
//   const [productPrice, setProductPrice] = useState(0);

//   const productCollectionRef = collection(db, "products");

//   const [imageUpload, setImageUpload] = useState(null);
//   const [imageUrls, setImageUrls] = useState([]);

//   const imagesListRef = ref(storage, "images/");

//   const uploadFile = () => {
//     if (imageUpload == null) return;
//     const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
//     uploadBytes(imageRef, imageUpload).then((snapshot) => {
//       getDownloadURL(snapshot.ref).then((url) => {
//         setImageUrls((prev) => [...prev, url]);
//       });
//     });
//   };

//   useEffect(() => {
//     listAll(imagesListRef).then((response) => {
//       response.items.forEach((item) => {
//         getDownloadURL(item).then((url) => {
//           setImageUrls((prev) => [...prev, url]);
//         });
//       });
//     });
//   }, []);

//   const getProducts = async () => {
//     try {
//       const data = await getDocs(productCollectionRef);
//       const filteredData = data.docs.map((doc) => ({
//         ...doc.data(),
//         id: doc.id,
//       }));
//       setProductList(filteredData);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);


//   const handleSubmit = async () => {
//     try {
//       await addDoc(productCollectionRef, {
//         name: productName,
//         Description: productDescription,
//         price: productPrice,
//         userId: auth?.currentUser?.uid,
//       });
//       // getMovieList();
//     } catch (err) {
//       console.error(err);
//     }
//   };



//   return (
//     <>
//       <h2>Add Product</h2>
//       <form >
//         <label>
//           Product Name:
//           <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} required />
//         </label>
//         <br />
//         <label>
//           Product Description:
//           <textarea value={productDescription} onChange={(e) => setProductDescription(e.target.value)} required />
//         </label>
//         <br />
//         <label>
//           Product Price:
//           <input type="number" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} required />
//         </label>
//         <br />
//         <label>
//           Product Image:
//           <input type="file"
//             onChange={(event) => {
//               setImageUpload(event.target.files[0]);
//             }} />
//           <button onClick={uploadFile}> Upload File </button>
//         </label>
//         <br />
//         <button onClick={handleSubmit}>Submit</button>
//       </form>

//       <div>
//         {ProductList.map((product) => (
//           <div>
//             <h1>
//               name: {product.productName}
//             </h1>
//             <p> Description: {product.productDescription} </p>
//             <p>price {product.productPrice}</p>
//             {imageUrls.map((url) => {
//               return <img src={url} />;
//             })}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default AddProduct;
