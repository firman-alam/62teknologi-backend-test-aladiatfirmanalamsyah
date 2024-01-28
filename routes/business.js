const express = require('express')
const router = express.Router()
const business = require('../controllers/business')

router
  .route('/')
  .post(business.addBusiness)
  .put(business.updateBusiness)
  .delete(business.deleteBusiness)
router.get('/search', business.getBusiness)

module.exports = router
