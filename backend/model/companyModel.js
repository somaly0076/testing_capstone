const DataTypes = require('sequelize');
const sequelize = require('../connection/connection');
const Job = require('./jobModel')

const Company = sequelize.define("company", {
    company_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true, 
    },
    company_bg: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    website_url: {
        type: DataTypes.STRING
    },
    tel: {
        type: DataTypes.STRING
    },
    location: {
        type: DataTypes.STRING
    },
    img_url: {
        type: DataTypes.STRING
    },
    img_desc: {
        type: DataTypes.STRING
    }
},
    { timestamps: false })

Company.sync({ alter: true }).then(() => {
    console.log('Company Table is created!!')
});
// Company.hasMany(Job, {
//     foreignKey: 'company_id'
// })
Company.associate = function () {
    Company.hasMany(Job, { foreignKey: 'company_id' })
    Job.belongsTo(Company,{foreignKey:'company_id'})
}


module.exports = Company;