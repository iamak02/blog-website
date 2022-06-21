const ImageModel = require("../models/image.js")

class ImageController {
    static createImage = async (req, res) => {
        res.render("image/createImage")
    }
    static imageInsert = async (req, res) => {
        // console.log(req.body)
        try {
            const result = await ImageModel({
                tittle: req.body.tittle,
                image: req.body.image
            })
            await result.save()
            res.redirect("/createimage")
        } catch (error) {
            console.log(error)
        }

    }
    static imageDisplay = async (req, res) => {
        try {

            const result = await ImageModel.find()
            // console.log(result)
            res.render("image/displayimage", { data: result })
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = ImageController 