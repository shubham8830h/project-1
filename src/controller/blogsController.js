const blogsModel = require('../model/blogsmodel');

const createBlogs = async function (req, res) {
    let blogs = req.body
    let BlogsCreated = await blogsModel.create(blogs)
    res.send({ data: BlogsCreated })
}

module.exports.createBlogs = createBlogs