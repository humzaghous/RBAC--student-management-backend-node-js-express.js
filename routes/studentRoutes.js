// routes/studentRoutes.js

const express = require('express');
const router = express.Router();
const { getAllStudents, getStudentById, createStudent, updateStudent, deleteStudent } = require('../controllers/studentController');
const { authenticateJWT } = require('../middleware/authMiddleware');
const { isSuperAdmin, isSubAdmin } = require('../middleware/rbacMiddleware');

// Protected routes requiring authentication
router.use(authenticateJWT);

// Super admin routes
router.post('/students', isSuperAdmin, createStudent);
router.get('/students', isSuperAdmin, getAllStudents);
router.get('/students/:id', isSuperAdmin, getStudentById);
router.put('/students/:id', isSuperAdmin, updateStudent);
router.delete('/students/:id', isSuperAdmin, deleteStudent);

// Sub-admin routes
router.post('/students', isSubAdmin, createStudent);
router.get('/students', isSubAdmin, getAllStudents);

module.exports = router;
