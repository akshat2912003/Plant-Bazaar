// const port  = 4000
// const express = require('express')
// const app = express()

// const mongoose = require('mongoose')

// const jwt = require('jsonwebtoken')

// const multer = require('multer')

// const path = require('path')

// const cors = require('cors')
// const { type } = require('os')
// const { log } = require('console')

// const Stripe = require('stripe')('sk_test_51QLp42KuYUI0RL0BPT5m7UDOo5nEVXBRxg79stsDFpcU6CagEvKiqXHacIWUhSsl9NVJ18P4AZmPzQB4a9d1pPxr00DlUAMMuJ');


// app.use(express.json());

// //using this our react project connect to port 4000
// app.use(cors());

// //initializing database, database connection
// mongoose.connect('mongodb://localhost:27017/PlantBazaar')
// .then(() => console.log('Database connected'))
// .catch(err => console.log(err))


// //API creation

// app.get("/", (req, res) =>{
//     res.send("Express app is running")
// })


// //Image storage engine
// const storage = multer.diskStorage({
//     destination : './upload/images',
//     filename : (req, file, cb) => {
//         return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
//     }
// })

// //upload function
// const upload = multer({storage: storage})

// //creating upload endpoint for images
// app.use('/images', express.static('upload/images'))

// app.post('/upload', upload.single('product'), (req, res) => {
//     res.json({
//         success: 1,
//         image_url: `http://localhost:${port}/images/${req.file.filename}`,
//     })
// })

// //save data in mongodb

// //schema

// const Product = mongoose.model('Product', {
//     id:{
//         type: Number,
//         required: true
//     },
//     name:{
//         type: String,
//         required: true
//     },
//     image:{
//         type: String,
//         required: true
//     },
//     category:{
//         type: String,
//         required: true
//     },
//     new_price:{
//         type: Number,
//         required: true
//     },
//     old_price:{
//         type: Number,
//         required: true
//     },
//     date:{
//         type: Date,
//         default: Date.now(),
//     },
//     available:{
//         type: Boolean,
//         default: true
//     }
// })


// //addProduct API
// app.post('/addproduct', async (req, res) => {
//     let products = await Product.find({});
//     let id;
//     if(products.length > 0){
//         let last_product_array = products.slice(-1);
//         let last_product = last_product_array[0];
//         id = last_product.id + 1;
//     }else{
//         id = 1;
//     }

//     const product = new Product({
//         id:id,
//         name:req.body.name,
//         image:req.body.image,
//         category:req.body.category,
//         new_price:req.body.new_price,
//         old_price:req.body.old_price
//     })
//     console.log(product);
    
//     //saved data in mongodb
//     await product.save();

//     console.log('Saved product');

//     res.json({
//         success: true,
//         name:req.body.name,
//     })
// })


// //Deleting product api
// app.post('/removeproduct', async(req, res) =>{
//     await Product.findOneAndDelete({id:req.body.id});
//     console.log("Removed product");

//     res.json({
//         success: true,
//         name:req.body.name
//     })
// })


// //api for getting all products in frontend
// app.get('/allproducts', async(req, res) =>{
//     let products = await Product.find({});
//     console.log("All Products Fetched");
//     res.send(products)
    
// })




// //users schema

// const User = mongoose.model('Users', {
//     name:{
//         type: String,
//     },
//     email:{
//         type: String,
//         unique: true
//     },
//     password:{
//         type: String,
//     },
//     cartData:{
//         type:Object,
//     },
//     date:{
//         type: Date,
//         default: Date.now(),
//     }
// })

// //api for registering users
// app.post('/signup', async (req, res) => {
//     let check = await User.findOne({email: req.body.email});
//     if(check){
//         return res.status(400).json({
//             success: false,
//             errors: 'existing user already registered with same email'
//         })
//     }
//     let cart = {};
//     for(let i=0; i<300; i++){
//         cart[i] = 0;
//     }
//     const user = new User({
//         name: req.body.username,
//         email: req.body.email,
//         password: req.body.password,
//         cartData: cart,
//     })

//     //created user save in database using .save method
//     await user.save();

//     const data = {
//         user:{
//             id:user.id
//         }
//     }

//     const token = jwt.sign(data, 'secret_ecom');
//     res.json({success: true, token})
// })



// //user login api

// app.post('/login', async (req, res) => {
//     let user = await User.findOne({email: req.body.email});
//     if(user){
//         const passCompare = req.body.password === user.password;
//         if(passCompare){
//             const data = {
//                 user:{
//                     id:user.id
//                 }
//             }
//             const token = jwt.sign(data,'secret_ecom');
//             res.json({success: true, token})
//         }
//         else{
//             res.json({success: false , errors:'Wrong password'});
//         }
//     }

//     else{
//         res.json({success: false, errors:'Wrong Email id'});
//     }
// })


// //creating endpoint for newcollection data
// app.get('/newcollections', async (req, res) =>{
//     let products = await Product.find({})
//     let newcollection = products.slice(1).slice(-8);
//     console.log("NewCollection Fetched");
//     res.send(newcollection)
// })


// //creating api for popular in indoor plants
// app.get('/popularinindoor', async (req, res) =>{
//     let products = await Product.find({category: 'indoor'});
//     let popular_in_indoor = products.slice(0, 4);
//     console.log("Popular In Indoor Fetched");
//     res.send(popular_in_indoor)

// })


// //creating middleware to fetch user
// const fetchUser = async (req, res, next) =>{
//     const token = req.header('auth-token');
//     if(!token){
//         res.status(401).send({errors:'Please authenticate using valid token'});
//     }else{
//         try {
//             const data = jwt.verify(token, 'secret_ecom');
//             req.user = data.user;
//             next();
//         } catch (error) {
//             res.status(401).send({errors:'Please authenticate using valid token'});
//         }
//     }
// }

// //creating api for ADDING PRODUCTS IN cartdata
// app.post('/addtocart', fetchUser, async (req, res) => {
//     console.log("added", req.body.itemId)
//     let userData = await User.findOne({_id:req.user.id})
//     userData.cartData[req.body.itemId] += 1;
//     await User.findOneAndUpdate({_id:req.user.id}, {cartData:userData.cartData})
//     res.send("Added")
    
// })


// //creating api for remove PRODUCTS from cartdata
// app.post('/removefromcart', fetchUser, async (req, res) => {
//     console.log("removed", req.body.itemId)
//     let userData = await User.findOne({_id:req.user.id})
//     if(userData.cartData[req.body.itemId] > 0)
//     userData.cartData[req.body.itemId] -= 1;
//     await User.findOneAndUpdate({_id:req.user.id}, {cartData:userData.cartData})
//     res.send("removed")
    
// })


// //creating api to get cartdata
// app.post('/getcart', fetchUser, async (req, res) => {
//     console.log('GetCart');
//     let userData = await User.findOne({_id:req.user.id})
//     res.json(userData.cartData);
// })





// // --> Payment code <-----





// app.listen(port, (error) =>{
//     if(!error){
//         console.log(`Server is running on port ${port}`)
//     }else{
//         console.log(`Error ${error}`)
//     }
// })









const port = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const Stripe = require('stripe')('sk_test_51QLp42KuYUI0RL0BPT5m7UDOo5nEVXBRxg79stsDFpcU6CagEvKiqXHacIWUhSsl9NVJ18P4AZmPzQB4a9d1pPxr00DlUAMMuJ');

app.use(express.json());
app.use(cors());

// Database connection
mongoose.connect('mongodb://localhost:27017/PlantBazaar')
    .then(() => console.log('Database connected'))
    .catch(err => console.log(err));

// APIs
app.get("/", (req, res) => {
    res.send("Express app is running");
});

// Image storage engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

// Image upload setup
const upload = multer({ storage: storage });
app.use('/images', express.static('upload/images'));
app.post('/upload', upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`,
    });
});

// Product schema
const Product = mongoose.model('Product', {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    new_price: { type: Number, required: true },
    old_price: { type: Number, required: true },
    date: { type: Date, default: Date.now() },
    available: { type: Boolean, default: true }
});

// APIs for products
app.post('/addproduct', async (req, res) => {
    let products = await Product.find({});
    let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

    const product = new Product({
        id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price
    });

    await product.save();
    res.json({ success: true, name: req.body.name });
});

app.post('/removeproduct', async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    res.json({ success: true });
});

app.get('/allproducts', async (req, res) => {
    let products = await Product.find({});
    res.send(products);
});

// User schema
const User = mongoose.model('Users', {
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    cartData: { type: Object },
    date: { type: Date, default: Date.now() }
});

// User APIs
app.post('/signup', async (req, res) => {
    let check = await User.findOne({ email: req.body.email });
    if (check) return res.status(400).json({ success: false, errors: 'Email already registered' });

    let cart = {};
    for (let i = 0; i < 300; i++) cart[i] = 0;

    const user = new User({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    });

    await user.save();
    const token = jwt.sign({ user: { id: user.id } }, 'secret_ecom');
    res.json({ success: true, token });
});

app.post('/login', async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (user && req.body.password === user.password) {
        const token = jwt.sign({ user: { id: user.id } }, 'secret_ecom');
        res.json({ success: true, token });
    } else {
        res.json({ success: false, errors: 'Invalid credentials' });
    }
});


app.get('/newcollections', async (req, res) =>{
    let products = await Product.find({})
    let newcollection = products.slice(1).slice(-8);
    console.log("NewCollection Fetched");
    res.send(newcollection)
})


//creating api for popular in indoor plants
app.get('/popularinindoor', async (req, res) =>{
    let products = await Product.find({category: 'indoor'});
    let popular_in_indoor = products.slice(0, 4);
    console.log("Popular In Indoor Fetched");
    res.send(popular_in_indoor)

})

// Middleware to fetch user
const fetchUser = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send({ errors: 'Authentication required' });

    try {
        const data = jwt.verify(token, 'secret_ecom');
        req.user = data.user;
        next();
    } catch {
        res.status(401).send({ errors: 'Invalid token' });
    }
};

// Cart APIs
app.post('/addtocart', fetchUser, async (req, res) => {
    let userData = await User.findOne({ _id: req.user.id });
    userData.cartData[req.body.itemId] += 1;
    await User.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
    res.send("Added");
});



// Stripe Payment API
app.post("/create-checkout-session", async (req, res) => {
    const { products } = req.body;

    const lineItems = products.map((product) => ({
        price_data: {
            currency: "inr",
            product_data: { name: product.name, images: [product.image] },
            unit_amount: Math.round(product.new_price * 100),
        },
        quantity: product.quantity,
    }));

    // const session = await Stripe.checkout.sessions.create({
    //     payment_method_types: ["card"],
    //     line_items: lineItems,
    //     mode: "payment",
    //     success_url: "http://localhost:4000/success",
    //     cancel_url: "http://localhost:4000/cancel",
    // });

    const session = await Stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:4000/success?session_id={CHECKOUT_SESSION_ID}",
        cancel_url: "http://localhost:4000/cancel",
    });

    res.json({ id: session.id });
});

// Add this route to handle GET requests to /success
app.get('/success', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Payment Successful</title>
            </head>
            <body>
                <h1>Payment Successful! Thank you for your purchase.</h1>
            </body>
        </html>
    `);
});




app.listen(port, (error) => {
    if (!error) console.log(`Server is running on port ${port}`);
    else console.log(`Error ${error}`);
});
