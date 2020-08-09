const mongoose = require('mongoose');

const occupationSchema = mongoose.Schema({
    name:{type:String,required:true,unique:true}
});

occupationSchema.methods.serialize = function(){
    return {
		id:this._id,
		name:this.name
	};
}

const Occupation = mongoose.model("Occupation",occupationSchema);

module.exports = {Occupation};