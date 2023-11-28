const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs/promises');
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





app.listen(port , ()=> {
    console.log(`listening on port ${5000}`);
})