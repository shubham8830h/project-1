const authorModel = require('../model/authormodel');

const createAuthor = async function (req, res) {
    try{
    let author = req.body
    let duplicate = await authorModel.findOne({email:author.email})
    if(duplicate){
        return res.status(400).send({status:false, msg: "mail already exist"})
    }
    let authorCreated = await authorModel.create(author)
    res.status(201).send({ data: authorCreated })
}
catch (err) {
    console.log("this is the error:", err.message)
    res.status(500).send({ msg: "error", error: err.message })
  }
}

module.exports.createAuthor = createAuthor