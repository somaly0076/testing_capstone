const express = require('express');
const { getAllCompany, addCompany, updateCompany, deleteCompany, getAssociateJob } = require('../controllers/companyController');
const router = express.Router()

router
    .route('/')
    .get(getAllCompany);
router
    .route('/associatedjob')
    .get(getAssociateJob)
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