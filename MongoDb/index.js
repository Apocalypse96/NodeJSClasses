const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://khopadeayush96:HM8j0KKVN2ooiHxg@cluster0.ciil0s7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0i"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

//ProductSchema

const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },

  product_price: {
    type: Number,
    required: true,
  },

  product_category: {
    type: String,
    required: true,
  },

  isInStock: {
    type: Boolean,
    required: true,
  },
});

const ProductModel = mongoose.model("products", productSchema);

//Create a new product

app.post("/api/products", async(req, res) => {
  const product = ProductModel.create({
    product_name: req.body.product_name,
    product_price: req.body.product_price,
    isInStock: req.body.isInStock,
    category: req.body.category,
  });

  console.log(product);

  return res.status(201).json({ message: "Product Created" });
});


//Get all products
app.get("/api/products", async(req, res) => {
    const products = await ProductModel.find();
    return res.status(200).json(products);
    }
);

const PORT = 6969;

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
