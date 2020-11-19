const Battle = require("../models/battles");
const querystring = require('querystring');

exports.test = (req,res) =>{
    res.json({
        message:"Testing SuccessFul"
    })
};

exports.count = (req, res) =>{
    console.log("Fetching all the battles")
    Battle.count((err,count)=>{
        if(err || !count){
            return res.status(400).json({
                error: "No count was found in the DB"
            })
        }
        return res.json(count);
    });
};


exports.list = (req, res) =>{
    console.log("Fetching all the battles")
    Battle.find((err,battles)=>{
        if(err || !battles){
            return res.status(400).json({
                error: "No battles was found in the DB"
            })
        }
        return res.json(battles);
    });
};

exports.location = (req, res) =>{
    console.log("Searching Logic for location")
    const location = req.query;
    console.log(location);
    
    Battle.distinct('location', {'location': {'$ne': ""}},(err,battles)=>{
        if(err || !battles){
            return res.status(400).json({
                error: "No battles was found in the DB"
            })
        }
        return res.json(battles);
    });
};


exports.search = (req, res) =>{
    console.log("Searching Logic")
    const querystring = req.query;
    console.log(querystring);
    let params = [];
    for(key in querystring){
        if(key === 'king'){
            params.push({'$or': [{attacker_king: querystring[key]}, {defender_king: querystring[key]}]})
        } else {
            params.push({[key]: querystring[key]});
        }
    }
    Battle.find({'$and': params}, (err,battles)=>{
        if(err || !battles){
            return res.status(400).json({
                error: "No battles was found in the DB"
            })
        }
        return res.json(battles);
    });
};