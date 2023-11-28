const express = require('express');
// const bodyParser = require('body-parser');
// const multer = require('multer');
// const fs = require('fs/promises');
const cors = require('cors');
const app = express();
const port = 5000;

const FS  = require('fs');

app.use(cors());

app.get('/:limit', async (req ,res) => {
    const {limit} = req.params;
    try {
        FS.readFile('Products.json', 'utf-8', (error, data) => {
            const d = JSON.parse(data);
            res.json(d);
        })
       
    } catch (error) {
        console.error('fetcing error from api', error.message);
        res.status(500).send('api fetch error')
    }

})


// // Set up multer to handle file uploads
// const upload = multer({ dest: 'uploads/' });

// app.use(bodyParser.json());

// // Handle image uploads
// app.post('/upload-image', upload.single('image'), async (req, res) => {
//   try {
//     // The uploaded image is available in req.file
//     const { filename, originalname, size } = req.file;

//     // You can perform additional operations with the file details if needed

//     res.status(201).json({
//       filename,
//       originalname,
//       size,
//       message: 'File uploaded successfully!',
//     });
//   } catch (error) {
//     console.error('Error uploading image:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// // Handle product creation with image upload
// app.post('/create-product', upload.single('image'), async (req, res) => {
//   try {
//     // Read existing products from the file
//     const productsData = await fs.readFile('products.json', 'utf-8');
//     const products = JSON.parse(productsData);

//     // Extract product details from the request body
//     const { name, price } = req.body;

//     // The uploaded image is available in req.file
//     const { filename, originalname, size } = req.file;

//     // Create a new product
//     const newProduct = {
//       id: products.length + 1,
//       name,
//       price,
//       image: {
//         filename,
//         originalname,
//         size,
//       },
//     };

//     // Add the new product to the array
//     products.push(newProduct);

//     // Write the updated products array back to the file
//     await fs.writeFile('products.json', JSON.stringify(products, null, 2), 'utf-8');

//     res.status(201).json(newProduct);
//   } catch (error) {
//     console.error('Error creating product with image upload:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });




app.listen(port , ()=> {
    console.log(`listening on port ${5000}`);
})