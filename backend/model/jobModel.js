const { DataTypes, Op } = require('sequelize');
const sequelize = require("../connection/connection")


const Job = sequelize.define("job",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true    
    },
    company_id: {
        type: DataTypes.INTEGER
    },
    job_desc: {
        type: DataTypes.STRING
    },
    job_require: {
        type:DataTypes.STRING
    },
    location: {
        type: DataTypes.STRING
    },
    salary: {
        type:DataTypes.FLOAT
    },
    position: {
        type: DataTypes.STRING
    },
    deadline: {
        type: DataTypes.DATE
    }
})
// Sync models and handle errors
Job.sequelize.sync().then((req) => {
    console.log("Database & JOB tables created!")
}).catch(err => {
    console.log(err)
})


module.exports = Job;