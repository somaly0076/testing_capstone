const express = require('express');
<<<<<<< HEAD
const { getAllCompany, addCompany, updateCompany, deleteCompany, getAssociateJob } = require('../controllers/companyController');
=======
const { getAllCompany, addCompany, updateCompany, deleteCompany } = require('../controllers/companyController');
>>>>>>> 538213a (added controller, route and model for company)
const router = express.Router()

router
    .route('/')
    .get(getAllCompany);
<<<<<<< HEAD
router
    .route('/associatedjob')
    .get(getAssociateJob)
=======

>>>>>>> 538213a (added controller, route and model for company)
router
    .route('/addCompany')
    .post(addCompany);

router
    .route('/updateCompany/:id')
    .patch(updateCompany)

router
    .route('/deleteCompany/:id')
    .delete(deleteCompany);

module.exports = router;