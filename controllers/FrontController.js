const BlogModel = require("../models/blog.js")
const CategoryModel = require('../models/category.js')
const AboutModel = require("../models/about.js")

class FrontController {
    static index = async (req, res) => {
        try {
            const result = await BlogModel.find()
            // console.log(result)
            res.render('front/index', { data: result })
        }
        catch (error) {
            console.log(error)
        }
    }
    static about = async (req, res) => {
        try {
            const result = await AboutModel.find()
            res.render('front/about', { data: result })
        } catch (error) {
            console.log(error)
        }

    }
    static contact = async (req, res) => {
        res.render('front/contact')
    }
    static bloglist = async (req, res) => {
        res.render('front/bloglist')
    }
    static login = async (req, res) => {
        res.render('front/login')
    }
    static detail = async (req, res) => {
        try {
            const result1 = await CategoryModel.find()
            const result2 = await BlogModel.findById(req.params.id)
            const result3 = await BlogModel.find()
            res.render("front/detail", { data: result2, cat: result1, info: result3 })
            // console.log(result)
        }
        catch (error) {

        }
    }
}

module.exports = FrontController