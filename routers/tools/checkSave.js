const {ADMIN_S,ADMIN_G} = require('../../config');

function checkSave(req,res,next){
    let {secret} = req.query;
    let buf = Buffer.from(secret, 'base64').toString(); 
    //console.log(buf);
    if(buf === ADMIN_S){
        next();
    }
    else{
        return res.status(422).json({
			code:400,
			message:"Unathorized"
		});
    }
}

function checkGet(req,res,next){
    let {secret} = req.query;
    let buf = Buffer.from(secret, 'base64').toString(); 
    //console.log(buf);
    if(buf === ADMIN_G){
        next();
    }
    else{
        return res.status(422).json({
			code:400,
			message:"Unathorized"
		});
    }
}

module.exports = {checkSave,checkGet};