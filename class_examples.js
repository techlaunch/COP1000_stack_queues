// f < 3  house
// f >= 3 office building
// f > 10 to the infinity and beyond

// 1 floor
// 3 floors
// 100 floors
// 10000 floors
// 2 floors

function Building(floors) {
  this.floors = floors;

  if(floors < 3){
    this.what = 'house';
  }
  else if(floors >= 3 && floors < 10) {
    this.what = 'office building';
  }
  else if(floors >= 10){
    this.what = 'to the infinity and beyond';
  }
}

Building.prototype.countFloors = function() {
  return this.floors;
}

Building.prototype.middleFloor = function () {
  return this.floors > 1 ? Math.ceil(this.floors / 2) : this.floors;
}

Building.prototype.demolish = function (floors) {
  let currentFloors = this.floors;

  if (this.floors === 1) return this.floors;
  else {
    this.floors -= floors;
  }
  return currentFloors + '    demolished: ' + this.floors
}

let myproperty = new Building(1);
let myotherproperty = new Building(3);
let myotherotherproperty = new Building(Math.ceil(Math.random()*10000));

// ============================

const students = {
  1: {
    name: "Phil",
    grade: 100
  },
  2: {
    name: "Ashely",
    grade: 71
  },
  3: {
    name: "Mike",
    grade: 31
  },
  4: {
    name: "Gia",
    grade: 69
  },
}

















function Student(id, name, age) {
  this.id = id;
  this.name = name;
  this.age = age;
}

function School() {
  this.students = [];
  this.professors = [];
  this.courses = [];
  this.classrooms = [];

  this.nextStudentId = 0;
}

School.prototype.countStudent = function() {
  return this.students.length;
}

School.prototype.findStudent = function (id) {
  return this.students.find(student => student.id === id);
}

School.prototype.filterStudents = function (age, filter) {
  return this.students.filter(student => {
    return filter === '<' ? student.age < age : 
           filter === '>' ? student.age > age :
           filter === '<=' ? student.age <= age :
           filter === '>=' ? student.age >= age :  
           student.age === age
  } );
}

School.prototype.addStudents = function(name, age) {
  let student = new Student(++this.nextStudentId, name, age);
  return this.students.push(student);
}

School.prototype.removeStudent = function (id) {
  this.students = this.students.filter(student => !student.id === id); 
  return this.students;
}

School.prototype.removeMultipleStudents = function (arr) { // takes array of ids 
  this.students = this.students.filter(student => !arr.some(id => student.id === id));
  return this.students;
}

let school = new School();

school.addStudents('Pepe', 35);
school.addStudents('Lola', 22);
school.addStudents('Alberto', 25);
school.addStudents('Fifi', 18);
school.addStudents('Juan', 40);
school.addStudents('Arnaldo', 30);
school.addStudents('Carlos', 21);
school.addStudents('Alex', 19);
