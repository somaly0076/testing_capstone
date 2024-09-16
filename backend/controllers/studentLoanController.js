const catchAsync = require('../utils/catchAsync');
const StudentLoan = require('./../model/studentLoanModel');

exports.getAllStudentLoan = catchAsync(async (req, res, next) => {
    const allStudentLoans = await StudentLoan.findAll()

    res.status(200).json({
        status: 'success',
        data: {
            allStudentLoans
        }
    }
    )
});