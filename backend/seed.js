import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/productModel.js'; // Adjust path as necessary
import User from './models/userModel.js'; // Adjust path if necessary

dotenv.config();

// Example furniture product data (16 products)
const products = [
  {
    name: 'Wooden Dining Table',
    image: '/uploads/Wooden_Table.jpg',
    brand: 'FurnitureCo',
    quantity: 25,
    category: '60e9bfa6d9b76f001f2d0f17', // Replace with valid category ObjectId
    description: 'A beautiful wooden dining table with spacious seating.',
    reviews: [
      {
        name: 'User 1',
        rating: 5,
        comment: 'Amazing quality, looks great in my dining room!',
        user: '60e9bf9ed9b76f001f2d0f16', // Replace with valid user ObjectId
      },
    ],
    rating: 5,
    numReviews: 1,
    price: 299.99,
    countInStock: 20,
  },
  {
    name: 'Modern Office Chair',
    image: '/uploads/OfficeChair.webp',
    brand: 'OfficeMaster',
    quantity: 15,
    category: '60e9bfa6d9b76f001f2d0f17',
    description: 'A sleek office chair with adjustable height and armrests.',
    reviews: [
      {
        name: 'User 2',
        rating: 4,
        comment: 'Comfortable chair, very good for long working hours.',
        user: '60e9bf9ed9b76f001f2d0f16',
      },
    ],
    rating: 4,
    numReviews: 1,
    price: 149.99,
    countInStock: 10,
  },
  {
    name: 'Leather Sofa',
    image: '/uploads/leather_sofa.jpg',
    brand: 'FurniLux',
    quantity: 30,
    category: '60e9bfa6d9b76f001f2d0f17',
    description: 'A stylish leather sofa perfect for modern living rooms.',
    reviews: [  
      {
        name: 'User 3',
        rating: 5,
        comment: 'Comfortable and luxurious. Worth the price.',
        user: '60e9bf9ed9b76f001f2d0f16',
      },
    ],
    rating: 5,
    numReviews: 1,
    price: 899.99,
    countInStock: 15,
  },
  {
    name: 'Coffee Table',
    image: '/uploads/coffe_table.jpg',
    brand: 'TableWorks',
    quantity: 50,
    category: '60e9bfa6d9b76f001f2d0f17',
    description: 'A stylish coffee table with storage options.',
    reviews: [
      {
        name: 'User 4',
        rating: 4,
        comment: 'Perfect for small living rooms, very sturdy.',
        user: '60e9bf9ed9b76f001f2d0f16',
      },
    ],
    rating: 4,
    numReviews: 1,
    price: 120.00,
    countInStock: 40,
  },
  {
    name: 'Folding Dining Chair',
    image: '/uploads/dining-table.jpg',
    brand: 'FurnitureCo',
    quantity: 10,
    category: '60e9bfa6d9b76f001f2d0f17',
    description: 'Convenient and space-saving folding dining chair.',
    reviews: [
      {
        name: 'User 5',
        rating: 3,
        comment: 'Good for small spaces, but not very comfortable.',
        user: '60e9bf9ed9b76f001f2d0f16',
      },
    ],
    rating: 3,
    numReviews: 1,
    price: 49.99,
    countInStock: 12,
  },
  {
    name: 'Wooden Bed Frame',
    image: '/uploads/wooden-bed-chair.jpg',
    brand: 'SleepBetter',
    quantity: 20,
    category: '60e9bfa6d9b76f001f2d0f17',
    description: 'A sturdy wooden bed frame for a restful night.',
    reviews: [
      {
        name: 'User 6',
        rating: 5,
        comment: 'Sturdy and looks great. Very easy to assemble.',
        user: '60e9bf9ed9b76f001f2d0f16',
      },
    ],
    rating: 5,
    numReviews: 1,
    price: 250.00,
    countInStock: 15,
  },
  {
    name: 'Bookshelf',
    image: '/uploads/bookshelf.jpg',
    brand: 'WoodWorks',
    quantity: 40,
    category: '60e9bfa6d9b76f001f2d0f17',
    description: 'A spacious bookshelf for your living or office.',
    reviews: [
      {
        name: 'User 7',
        rating: 4,
        comment: 'Great for organizing books and décor.',
        user: '60e9bf9ed9b76f001f2d0f16',
      },
    ],
    rating: 4,
    numReviews: 1,
    price: 99.99,
    countInStock: 30,
  },
  {
    name: 'Nightstand',
    image: '/uploads/diningchairset.jpg',
    brand: 'FurniLux',
    quantity: 30,
    category: '60e9bfa6d9b76f001f2d0f17',
    description: 'A simple and modern nightstand for your bedroom.',
    reviews: [
      {
        name: 'User 8',
        rating: 4,
        comment: 'Looks great, but the drawer could be deeper.',
        user: '60e9bf9ed9b76f001f2d0f16',
      },
    ],
    rating: 4,
    numReviews: 1,
    price: 75.00,
    countInStock: 25,
  },
  {
    name: 'Dining Chair Set',
    image: '/uploads/diningchairset.jpg',
    brand: 'FurnitureCo',
    quantity: 20,
    category: '60e9bfa6d9b76f001f2d0f17',
    description: 'Set of 4 elegant dining chairs with padded seats.',
    reviews: [
      {
        name: 'User 9',
        rating: 5,
        comment: 'Comfortable and stylish. Great value for the price.',
        user: '60e9bf9ed9b76f001f2d0f16',
      },
    ],
    rating: 5,
    numReviews: 1,
    price: 180.00,
    countInStock: 15,
  },
  {
    name: 'Sectional Sofa',
    image: '/uploads/sectionalsofa.webp',
    brand: 'FurniLux',
    quantity: 12,
    category: '60e9bfa6d9b76f001f2d0f17',
    description: 'A spacious sectional sofa perfect for large families.',
    reviews: [
      {
        name: 'User 10',
        rating: 5,
        comment: 'Absolutely perfect for our living room. Highly recommend!',
        user: '60e9bf9ed9b76f001f2d0f16',
      },
    ],
    rating: 5,
    numReviews: 1,
    price: 1300.00,
    countInStock: 10,
  },
  {
    name: 'Dining Table Set',
    image: '/uploads/dining-table.jpg',
    brand: 'FurnitureCo',
    quantity: 10,
    category: '60e9bfa6d9b76f001f2d0f17',
    description: 'Stylish dining table set with 6 chairs.',
    reviews: [
      {
        name: 'User 11',
        rating: 4,
        comment: 'Great value for the set, very sturdy.',
        user: '60e9bf9ed9b76f001f2d0f16',
      },
    ],
    rating: 4,
    numReviews: 1,
    price: 500.00,
    countInStock: 5,
  },
  {
    name: 'Storage Bench',
    image: '/uploads/storage_bench.webp',
    brand: 'StoragePlus',
    quantity: 25,
    category: '60e9bfa6d9b76f001f2d0f17',
    description: 'A multi-functional storage bench for your hallway.',
    reviews: [
      {
        name: 'User 12',
        rating: 5,
        comment: 'Perfect for extra storage in a small space.',
        user: '60e9bf9ed9b76f001f2d0f16',
      },
    ],
    rating: 5,
    numReviews: 1,
    price: 80.00,
    countInStock: 20,
  },
];

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};

// Seed products
const seedProducts = async () => {
  try {
    await connectDB();

    // Remove existing products
    await Product.deleteMany();

    // Insert products
    await Product.insertMany(products);

    console.log('Furniture products seeded successfully!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding products:', error);
    mongoose.connection.close();
  }
};

seedProducts();
