const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');

//The pre-existing data in the database

const allEmployees = [
  { id: 1, name: 'John', surname: 'Smith', gender: 'Male', department: 'Engineering', salary: 95000 },
  { id: 2, name: 'Sarah', surname: 'Johnson', gender: 'Female', department: 'Engineering', salary: 78000 },
  { id: 3, name: 'Matthew', surname: 'Roberts', gender: 'Male', department: 'Engineering', salary: 88000 },
  { id: 4, name: 'Emily', surname: 'Rodriguez', gender: 'Female', department: 'Engineering', salary: 82000 },
  { id: 5, name: 'David', surname: 'Williams', gender: 'Male', department: 'Engineering', salary: 90000 },
  { id: 6, name: 'Jessica', surname: 'Brown', gender: 'Female', department: 'HR', salary: 65000 },
  { id: 7, name: 'Robert', surname: 'Davis', gender: 'Male', department: 'HR', salary: 55000 },
  { id: 8, name: 'Amanda', surname: 'Miller', gender: 'Female', department: 'HR', salary: 48000 },
  { id: 9, name: 'Gregory', surname: 'Wilson', gender: 'Male', department: 'Sales', salary: 72000 },
  { id: 10, name: 'Lisa', surname: 'Moore', gender: 'Female', department: 'Sales', salary: 58000 },
  { id: 11, name: 'Christopher', surname: 'Taylor', gender: 'Male', department: 'Sales', salary: 68000 },
  { id: 12, name: 'Jennifer', surname: 'Anderson', gender: 'Female', department: 'Sales', salary: 52000 },
  { id: 13, name: 'Daniel', surname: 'Thomas', gender: 'Male', department: 'Marketing', salary: 75000 },
  { id: 14, name: 'Michelle', surname: 'Jackson', gender: 'Female', department: 'Marketing', salary: 62000 },
  { id: 15, name: 'Nkaiseng', surname: 'Jakobo', gender: 'Female', department: 'Marketing', salary: 58000 },
  { id: 16, name: 'Laura', surname: 'Harris', gender: 'Female', department: 'Finance', salary: 85000 },
  { id: 17, name: 'Kevin', surname: 'Martin', gender: 'Male', department: 'Finance', salary: 60000 },
  { id: 18, name: 'Rachel', surname: 'Thompson', gender: 'Female', department: 'Finance', salary: 70000 },
  { id: 19, name: 'Mark', surname: 'Garcia', gender: 'Male', department: 'Engineering', salary: 75000 },
  { id: 20, name: 'Stephanie', surname: 'Martinez', gender: 'Female', department: 'Engineering', salary: 80000 }
];

// ============================================
//Adding the data in the database

router.post('/seed', async (req, res) => {
  try {
    //await Employee.deleteMany({});
    const employees = await Employee.insertMany(allEmployees);
    res.status(201).json({
      message: `${employees.length} employees seeded successfully`,
      employees: employees
    });
  } catch (error) {
    console.error('Seed error:', error);
    res.status(500).json({ message: error.message });
  }
});

// ============================================
// CRUD Operations


// GET - all employees +  department filter
router.get('/', async (req, res) => {
  try {
    const { department } = req.query; //Reads URL query parameter 
    let query = {}; 
    
    if (department) {
      query.department = { $regex: new RegExp('^' + department + '$', 'i') };
    }
    
    const employees = await Employee.find(query); //Matches req query to matching document
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET - Read employee by the custom id
router.get('/:id', async (req, res) => {
  try {
    const employee = await Employee.findOne({ id: req.params.id });
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST - create new employee
router.post('/', async (req, res) => {
  try {
    const employee = new Employee(req.body);
    const savedEmployee = await employee.save();
    res.status(201).json(savedEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT - update employee by custom id
router.put('/:id', async (req, res) => {
  try {
    const employee = await Employee.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE - employee by custom id
router.delete('/:id', async (req, res) => {
  try {
    const employee = await Employee.findOneAndDelete({ id: req.params.id });
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;