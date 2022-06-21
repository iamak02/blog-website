const AboutModel = require('../../models/about.js')

class AboutController {
    static about = async (req, res) => {
        try {
            // console.log(result)
            const result = await AboutModel.find()
            res.render("admin/about/about", { cat: result })
        }
        catch (err) {
            console.log(err)
        }
    }

    static about_edit = async (req, res) => {
        try {
            const result = await AboutModel.findById(req.params.id)
            // console.log(result)
            res.render("admin/about/updateAbout", { data: result })

        } catch (err) {
            console.log(err)
        }
    }

    static about_update = async (req, res) => {
        try {

            // console.log(req.body)
            const result = await AboutModel.findByIdAndUpdate(req.params.id, req.body)
            // console.log(result)

            await result.save()
            res.redirect("/admin/about")

        } catch (err) {
            console.log(err)
        }
    }



}
module.exports = AboutController