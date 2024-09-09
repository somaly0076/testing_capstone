const { DataTypes, Op } = require('sequelize');
const sequelize = require('../connection/connection')

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
        type:DataTypes.INTEGER
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
Job.sync().then(data => {
    console.log("Database & tables created for Job table!");
}).catch ((err) => {
    console.error("Error creating database tables for job table:", error);
    })


module.exports = Job;