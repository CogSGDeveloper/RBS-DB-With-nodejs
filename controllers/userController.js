const userModel = require('./../models/userModel');
module.exports = {
    get: (req, res) => {
        userModel.findAll().then((data)=>{
            return res.json({status: 200, data: data});
        }).catch(err=>{console.log(err);})
    },
    post: (req, res) => {
        const { username, contactNumber, password } = req.body;
        userModel.create({
            username: username,
            contactNumber: contactNumber,
            password: password
        }).then(result=> {
            res.json({status: 200 , msg: 'record inserted successfully'})
        }).catch((err) => {
            console.log(err);
        })
    }
}