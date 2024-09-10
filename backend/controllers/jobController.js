const { where } = require("sequelize");
const catchAsync = require("../utils/catchAsync");
const Job = require("./../model/jobModel");

exports.getAllJobs = catchAsync(async (req, res,next) => {
    const jobs = await Job.findAll();
    res.status(200).json({
        status: 'success',
        amount: jobs.length,
        data: {
            jobs
        }
    });
    next()
});

exports.addJob = catchAsync(async (req, res, next) => {
    const {
        company_id,
        job_desc,
        job_require,
        location,
        salary,
        position,
        deadline,
        createdAt,
        updatedAt
    } = req.body;
console.log(company_id,position,deadline)
   const newJob = await Job.create({
        company_id,
        job_desc,
        job_require,
        location,
        salary,
        position,
        deadline,
        createdAt,
        updatedAt
    })
    res.status(200).json({
        status: "added success",
        data: {
            newJob
        }
    })
    next()
   
})

exports.updateJob = catchAsync(async (req, res, next) => {
    const id = req.params.id;
    const updated = await Job.update(req.body, { where: { id: id } });
    res.status(200).json({
        status: "updated successfully",
        data: {
            updated
        }
    });
    next()
})

exports.deleteJob = catchAsync(async (req, res, next) => {
    const id  = req.body.id;
    await Job.destroy({
        where: { id:id },
    });
    console.log("ID",id)
    res.status(404).json({
        status: "Deleted Successfully",
        message: "error id",
        data: {
            id
        }
    })
    next()
});