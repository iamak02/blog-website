var underConstructor = (req, res, next) => {
    // console.log('working on page!!!!')
    res.render('demo')
    next()
}

module.exports = underConstructor