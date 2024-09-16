const { DataTypes, Op } = require('sequelize');
const sequelize = require("../connection/connection");

const StudentLoan = sequelize.define("studentloan", {
    loan_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    bank_name: {
        type: DataTypes.STRING,
    },
    loan_type: {
        type: DataTypes.STRING,
    },
    interest_rate: {
        type: DataTypes.FLOAT,
    },
    loan_limit: {
        type: DataTypes.INTEGER,
    },
    loan_term: {
        type: DataTypes.DATEONLY,
    },
    address: {
        type: DataTypes.STRING,
    },
    img_url: {
        type: DataTypes.STRING,
    },
    image_alt: {
        type: DataTypes.STRING,
    },

}, { timestamps: false });

StudentLoan.sync({alter:true}).then((result) => {
    console.log('Student Loan Table Created')
}).catch((err) => {
    console.log('Cannot create Student Loan Table')
});

module.exports = StudentLoan;