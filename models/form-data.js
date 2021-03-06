const mongoose = require('mongoose');

const formSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String},
    summary:{type:String,required:true},
    location:{type:String,required:true},
    type:{type:String,required:true},
    priority:{type:String,required:true},
    dueDate:{type:Date},
    details:{type:String},
    assignees:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee', unique: false, required: [false, 'No employees found']}]
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
        'Due date':this.dueDate ? this.dueDate : null,
        'More Details':this.details ? this.details : null,
        assignees:this.assignees.length > 0 ? this.assignees.map(assignee => assignee.serialize()) : this.assignees
	};
}

const Form = mongoose.model("Form",formSchema);

module.exports = {Form};