const { Router } = require('express');
const { getTests, postTest } = require('../controllers/tests');

const router = Router();

router.get('/', getTests );
router.post('/', postTest);


module.exports = router;