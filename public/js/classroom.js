var Classroom = function (name, studentArr) {
  this.name = name;
  this.student = studentArr;
};

Classroom.prototype.addStudent = function(student) {
  this.student.push(student);
}

Classroom.prototype.displayStudents = function() {
  for(var i = 0; i < this.student.length; i++) {
    console.log(this.name + ' has these students:' )
    console.log(this.student[i]);
  }
};

module.exports = Classroom;