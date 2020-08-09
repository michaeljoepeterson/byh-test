const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    name:{type:String,required:true},
    occupation:{ type: mongoose.Schema.Types.ObjectId, ref: 'Occupation', unique: false, required: [true, 'No occupation found']}
});

employeeSchema.methods.serialize = function(){
    return {
		id:this._id,
		name:this.name,
        occupation:this.occupation ? this.email : null,
	};
}

const Employee = mongoose.model("Employee",employeeSchema);

module.exports = {Employee};