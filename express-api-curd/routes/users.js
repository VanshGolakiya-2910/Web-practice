var express = require('express');
var router = express.Router();
const userController = require("../controller/userController")
/* GET users listing. */
router.get('/', userController.viewAllUsers);
router.post('/addUser' ,userController.addUser)
router.delete('/:id' , userController.deleteUser)
router.patch('/:id', userController.editUser)
module.exports = router;
