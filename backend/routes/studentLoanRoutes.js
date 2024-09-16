const express = require('express');
const { getAllStudentLoan } = require('./../controllers/studentLoanController')
const router = express.Router()

router.route('/').get(getAllStudentLoan);

module.exports = router;