const express = require('express');
const { getAllJobs, addJob, deleteJob, updateJob } = require('../controllers/jobController');
const router = express.Router()

router
    .route('/')
    .get(getAllJobs);

router
    .route('/addJob')
    .post(addJob)

router
    .route('/deleteJob')
    .delete(deleteJob);

router
    .route('/updateJob/:id')
    .patch(updateJob)



module.exports = router;