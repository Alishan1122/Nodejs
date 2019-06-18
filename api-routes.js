// Initialize express router
let router = require('express').Router();
const multer = require('multer');
const upload = multer({dest: __dirname + '/uploads/images'});
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'testing',
    });
});

// Import contact controller
var userController = require('./userController');

// Contact routes
router.route('/users')
    .get(userController.index)
    .post(upload.single('picture'),userController.new);


router.route('/users/:users_id')
    .get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete);

// Export API routes
module.exports = router;