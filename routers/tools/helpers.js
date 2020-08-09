function formatData(body){
    let schema = {
		Name:{
            type:'string',
            schemaName:'name'
        },
        "Email address":{
            type:'string',
            schemaName:'email'
        },
        Summary:{
            type:'string',
            schemaName:'summary'
        },
        'Location of problem':{
            type:'string',
            schemaName:'location'
        },
        Type:{
            type:'string',
            schemaName:'type'
        },
        Priority:{
            type:'string',
            schemaName:'priority'
        },
        'Due date':{
            type:'string',
            schemaName:'dueDate'
        },
        'More details':{
            type:'string',
            schemaName:'details'
        }
    }
    let formatedData = {};

    for(let key in body){
        let formatData = schema[key];
        if(typeof body[key] === formatData.type && body[key] !== ""){
            formatedData[formatData.schemaName] = key !== 'Due date' ? body[key] : new Date(body[key]);
        }
        else if(typeof body[key] !== formatData.type && body[key] !== ""){
            throw({
                code:411,
                message:'invalid type'
            })
        }
        
    }

    return formatedData;
}

async function checkExisting(data,model){
    try{
        console.log(data);
        let results = await model.find(data);
        if(results.length > 0){
            throw({
                code:411,
                message:'Already exists'
            });
        }
        return results;
    }
    catch(err){
        throw(err);
    }
}

async function GetOccupationId(occupation,name){
    try{
        let results = await occupation.find({name:name});
        console.log(results);
        if(results.length === 1){
            return results[0]._id;
        }
        else{
            throw({
                code:422,
                message:'Error finding occupation'
            });
        }
        
    }
    catch(err){
        throw(err);
    }
}

module.exports = {formatData,checkExisting,GetOccupationId};