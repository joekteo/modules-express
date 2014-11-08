var Student = require('./student.js');
var Classroom = require('./classroom.js');

var joe = new Student('Joe',
  [
  'Coding 101'
  ]
);

var coding101 = new Classroom('coding101',
  [
  'Billy',
  'Jones',
  'Tyreak',
  'Stevie'
  ]
);

coding101.addStudent('Johnnie');
coding101.displayStudents();

joe.addClass('English 101');
joe.displayClasses();
