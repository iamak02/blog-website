const BlogModel = require('../../models/blog.js')
const CategoryModel = require('../../models/category.js')
class BlogController {
    static blog = (req, res) => {
        res.render('admin/blog/blog')
    }
    static createBlog = async (req, res) => {
        try {
            const result = await CategoryModel.find()
            // console.log(result)
            res.render('admin/blog/createBlog', { cat: result })
        }
        catch (error) {
            console.log(error)
        }

    }

    static blog_insert = async (req, res) => {
        // console.log(req.body.category_name)
        try {
            const result = new BlogModel({
                category_name: req.body.category_name,
                tittle: req.body.tittle,
                description: req.body.description
            })
            await result.save()
            res.redirect('/admin/blog')
        }
        catch (error) {
            console.log(error)
        }
    }
    static blog = async (req, res) => {
        try {
            const result = await BlogModel.find()
            // console.log(result)
            res.render('admin/blog/blog', { data: result })
        }
        catch (error) {
            console.log(error)
        }
    }
    static blog_edit = async (req, res) => {
        try {
            const result = await BlogModel.findById(req.params.id)
            // console.log(result)
            res.render("admin/blog/edit", { data: result })

        }
        catch (err) {
            console.log(err)
        }
    }
    static blog_update = async (req, res) => {
        try {
            // console.log(req.body)
            const result = await BlogModel.findByIdAndUpdate(req.params.id, req.body)
            // console.log(result)
            await result.save()
            res.redirect("/admin/blog")
        }
        catch (err) {
            console.log(err)
        }
    }
    static blog_delete = async (req, res) => {
        try {
            const result = await BlogModel.findByIdAndDelete(req.params.id)
            res.redirect("/admin/blog")

        }
        catch (err) {
            console.log(err)
        }
    }
}

module.exports = BlogController