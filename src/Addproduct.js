import React, { useState } from 'react';
import { db, storage } from './firebase';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setProductImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload image to Firebase Storage
    const storageRef = storage.ref(`product-images/${productImage.name}`);
    const uploadTask = storageRef.put(productImage);

    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setUploadProgress(progress);
      },
      (error) => {
        console.error(error.message);
      },
      () => {
        // Image uploaded successfully, get download URL
        storageRef.getDownloadURL().then((imageUrl) => {
          // Add product data to Firestore
          db.collection('products').add({
            name: productName,
            description: productDescription,
            price: parseFloat(productPrice),
            imageUrl,
          })
          .then(() => {
            // Reset form after successful submission
            setProductName('');
            setProductDescription('');
            setProductPrice('');
            setProductImage(null);
            setUploadProgress(0);
            alert('Product added successfully!');
          })
          .catch((error) => {
            console.error(error.message);
          });
        });
      }
    );
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
      <label>
          Product Name:
          <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} required />
        </label>
        <br />
        <label>
          Product Description:
          <textarea value={productDescription} onChange={(e) => setProductDescription(e.target.value)} required />
        </label>
        <br />
        <label>
          Product Price:
          <input type="number" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} required />
        </label>
        <br />
        <label>
          Product Image:
          <input type="file" onChange={handleImageChange} required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {uploadProgress > 0 && <p>Uploading: {uploadProgress}%</p>}
    </div>
  );
};

export default AddProduct;
