var expect = require('chai').expect;
var Classroom = require('../public/js/classroom');
var Student = require('../public/js/student');

describe('Constructor', function() {
  it('should create a new instance of classroom', function() {
    var no = new Classroom('no');
    expect(no.name).to.eql('no');
  });

  it('should create a new instance of student', function() {
    var yes = new Student('yes');
    expect(yes.name).to.eql('yes');
  });

  it('should add a new student to the classroom', function() {
    var no = new Classroom('no');
    no.addStudent('Jimmy');
    expect(no.student).to.include('Jimmy');
  });
});
