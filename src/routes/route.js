const express = require('express');
const router = express.Router();
const authorController = require('../controller/authorcontroller');
const blogsController = require('../controller/blogsController');

router.post('/authors', authorController.createAuthor)

router.post('/blogs', blogsController.createBlog)
router.get('/getBlogs', blogsController.getAllBlogs)
router.put('/blogs/:blogId', blogsController.updatedBlogsData)
router.delete('/blogs/:blogId', blogsController.deletedByParams)
router.delete('/blog', blogsController.deletedByQuray)

module.exports = router;