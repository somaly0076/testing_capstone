const { DataTypes, Op } = require('sequelize');
const sequelize = require("../connection/connection")
const Company = require("../model/companyModel")

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
        type: DataTypes.DATEONLY
    }
},{timestamps:false})
// Sync models and handle errors
Job.sync({ alter: true }).then((req) => {
    console.log("Database & JOB tables created!")
}).catch(err => {
    console.log(err)
});
Job.belongsTo(Company, { foreignKey: 'id' });
Company.hasMany(Job, { foreignKey: 'company_id' })
// Job.associate = function () {
//     // Job.hasMany(Company)
//     Job.belongsTo(Company,{foreignKey:'id'})
// }


module.exports = Job;