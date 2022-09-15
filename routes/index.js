const router = require('express').Router();

// Create variables to access JS files
const apiRoutes = require('./apiRoutes');
const homeRoutes = require('./homeRoutes');

router.use('/api', require('./apiRoutes'));
router.use('/', require('./homeRoutes'));

module.exports = router;
