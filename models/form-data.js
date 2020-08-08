const mongoose = require('mongoose');

const formSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String},
    summary:{type:String,required:true},
    location:{type:String,required:true},
    type:{type:String,required:true},
    priority:{type:String,required:true},
    dueDate:{type:Date},
    details:{type:String}
});

formSchema.methods.serialize = function(){
    return {
		id:this._id,
		Name:this.name,
        Email:this.email ? this.email : null,
        Summary:this.summary,
        'Location of problem':this.location,
        Type:this.type,
        Priority:this.priority,
        'Due date':this.dueDate ? this.details : null,
        'More Details':this.details ? this.details : null
	};
}

const Form = mongoose.model("Form",formSchema);

module.exports = {Form};