const express = require('express');
<<<<<<< HEAD
const { getAllJobs, addJob, deleteJob, updateJob } = require('../controllers/jobController');
=======
const { getAllJobs, addJob, deleteJob } = require('../controllers/jobController');
>>>>>>> 9ba37e0 (added the model, controller and route)
const router = express.Router()

router
    .route('/')
    .get(getAllJobs);

router
    .route('/addJob')
    .post(addJob)

router
<<<<<<< HEAD
    .route('/deleteJob/:id')
    .delete(deleteJob);

router
    .route('/updateJob/:id')
    .patch(updateJob)

=======
    .route('/deleteJob')
    .delete(deleteJob);

>>>>>>> 9ba37e0 (added the model, controller and route)


module.exports = router;