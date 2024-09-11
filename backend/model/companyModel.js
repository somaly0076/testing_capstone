const sequelize = require('../connection/connection');
const DataTypes = require('sequelize');

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

Company.sequelize.sync().then(() => {
    console.log('Company Table is created!!')
})

module.exports = Company;