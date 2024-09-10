const express = require('express');
const { getAllJobs, addJob, deleteJob } = require('../controllers/jobController');
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



module.exports = router;