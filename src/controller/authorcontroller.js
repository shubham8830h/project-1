const authorModel = require("../model/authormodel");

const createAuthor = async function (req, res) {
  try {
    let author = req.body;
    if (Object.keys(author).length != 0)  {
        let userDetails=await authorModel.find({email:author.email,password:author.password})
        if(!userDetails){
            req.status(400).send({status:false,msg:"Please provide valid details to signup"})
        }
      let authorCreated = await authorModel.create(author);
      res.status(201).send({ status: true, data: authorCreated });
    } else return res.status(400).send({ msg: "BAD REQUEST" });
  } catch (err) {
    res.status(500).send({ status: false, error: err.message });
  }
};

module.exports.createAuthor = createAuthor;