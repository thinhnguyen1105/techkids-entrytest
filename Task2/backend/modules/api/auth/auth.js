const authrize = (req,res,next)=>{
    if(!req.session || !req.session.userInfo){
        res.status(401).send("Unauthorized")
    } else next();
}

module.exports = {authrize};