const express = require('express');
const AdminController = require('../controllers/AdminController');
const BlogController = require('../controllers/admin/BlogController');
const FrontController = require('../controllers/FrontController');
const CategoryController = require('../controllers/admin/CategoryController');
const AboutController = require('../controllers/admin/AboutContoller');
const ImageController = require('../controllers/ImageController');
const underConstructor = require('../middleware/underconstructor');
const ContactController = require('../controllers/admin/ContactController');
const router = express.Router()

// FrontContoller
router.get('/', FrontController.index);
router.get('/about', FrontController.about);
router.get('/contact', FrontController.contact);
router.get('/bloglist', FrontController.bloglist);
router.get('/login', FrontController.login);
router.get('/detail/:id', FrontController.detail);

// AdminController
router.get('/admin/dashboard', AdminController.dashboard);

// Admin CategoryController
router.get('/admin/category', CategoryController.allCategory);
router.post('/admin/category_insert', CategoryController.category_insert);

// BlogController
router.get('/admin/blog', BlogController.blog);
router.get('/admin/createBlog', BlogController.createBlog);
router.post('/admin/blog_insert', BlogController.blog_insert);
router.get("/admin/blog_edit/:id", BlogController.blog_edit);
router.post("/admin/blog_update/:id", BlogController.blog_update);
router.get("/admin/blog_delete/:id", BlogController.blog_delete);

// AboutController
router.get("/admin/about", AboutController.about);
router.get("/admin/edit_about/:id", AboutController.about_edit);
router.post("/admin/about_update/:id", AboutController.about_update);

// ContactController
router.post('/contact_insert', ContactController.contact_insert);
router.get("/admin/contact_display", ContactController.contact_display);
router.get("/admin/contact_edit/:id", ContactController.contact_edit);
router.post("/admin/contact_update/:id", ContactController.contact_update);
router.get("/admin/contact_delete/:id", ContactController.contact_delete);

// createImage Controller
router.get("/createimage", ImageController.createImage);
router.post("/image_insert", ImageController.imageInsert);
router.get("/displayimage", ImageController.imageDisplay);

module.exports = router