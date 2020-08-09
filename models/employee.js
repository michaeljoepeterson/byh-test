const mongoose = require('mongoose');
const occupation = require('./occupation');

const employeeSchema = mongoose.Schema({
    name:{type:String,required:true},
    occupation:{ type: mongoose.Schema.Types.ObjectId, ref: 'Occupation', unique: false, required: [true, 'No occupation found']}
});

employeeSchema.methods.serialize = function(){
    console.log(this.occupation);
    return {
		id:this._id,
		name:this.name,
        occupation:this.occupation.serialize()
	};
}

const Employee = mongoose.model("Employee",employeeSchema);

module.exports = {Employee};