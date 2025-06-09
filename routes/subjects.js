const express = require('express');
const router = express.Router();
const controller = require('../controllers/subjectsController');

router.get('/', controller.getSubjects);
router.post('/add-subject', controller.addSubject);
router.post('/add-lesson', controller.addLesson);
router.delete('/delete-subject', controller.deleteSubject);
router.delete('/delete-lesson', controller.deleteLesson);
router.post('/edit-subject', controller.editSubject);

module.exports = router;