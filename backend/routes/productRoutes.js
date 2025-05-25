// // const express = require('express');
// // const router = express.Router();
// // const { createProduct } = require('../controllers/productController');
// // const { protect, admin } = require('../middleware/authMiddleware');
// // const {
// //   getProducts,
// //   getProductById,
// //   createProduct,
// //   updateProduct,
// //   deleteProduct,
// // } = require('../controllers/productController');
// // const { protect, admin } = require('../middleware/authMiddleware');

// // // Public routes
// // router.get('/', getProducts); // GET /api/products
// // router.get('/:id', getProductById); // GET /api/products/:id

// // // Admin-only routes
// // router.post('/', protect, admin, createProduct); // POST /api/products
// // router.put('/:id', protect, admin, updateProduct); // PUT /api/products/:id
// // router.delete('/:id', protect, admin, deleteProduct); // DELETE /api/products/:id

// // module.exports = router;







// const express = require('express');
// const router = express.Router();

// const {
//   getProducts,
//   getProductById,
//   createProduct,
//   updateProduct,
//   deleteProduct,
// } = require('../controllers/productController');

// const { protect, admin } = require('../middleware/authMiddleware');

// // Public routes
// router.get('/', getProducts); // GET /api/products
// router.get('/:id', getProductById); // GET /api/products/:id

// // Admin-only routes
// router.post('/', protect, admin, createProduct); // POST /api/products
// router.put('/:id', protect, admin, updateProduct); // PUT /api/products/:id
// router.delete('/:id', protect, admin, deleteProduct); // DELETE /api/products/:id

// module.exports = router;



const express = require('express');
const router = express.Router();

// Import product controller functions
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');

// Import middleware for authentication and authorization
const { protect, admin } = require('../middleware/authMiddleware');

// ==========================
//         Routes
// ==========================

// Public Routes
router.get('/', getProducts);             // GET /api/products - Get all products
router.get('/:id', getProductById);       // GET /api/products/:id - Get single product

// Admin-Only Routes (Require authentication and admin rights)
router.post('/', protect, admin, createProduct);       // POST /api/products - Create new product
router.put('/:id', protect, admin, updateProduct);     // PUT /api/products/:id - Update product
router.delete('/:id', protect, admin, deleteProduct);  // DELETE /api/products/:id - Delete product

module.exports = router;
