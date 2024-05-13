

const Student = require('../models/Student');
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getStudentById = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findByPk(id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const createStudent = async (req, res) => {
  const { name, email } = req.body;
  try {
    const student = await Student.create({ name, email });
    res.status(201).json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const student = await Student.findByPk(id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    await student.update({ name, email });
    res.json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findByPk(id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    await student.destroy();
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
