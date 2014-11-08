var Student = function(name, classArry) {
  this.name = name;
  this.classArry = classArry || [];
};

Student.prototype.addClass = function(classes) {
  this.classArry.push(classes);
};

Student.prototype.displayClasses = function() {
  for (var i = 0; i < this.classArry.length; i++) {
    console.log(this.name + ' is in:');
    console.log(this.classArry[i]);
  }
};

module.exports = Student;
