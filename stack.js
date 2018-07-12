// var Stack = function() {
//   this.storage = '';
//   this.size = 0;
//   this.capacity = 10;
// };

// Stack.prototype.push = function(item) {
//   if(this.size < this.capacity){
//     this.storage += '|' + item;
//     this.size++;
//   }
//   else {
//     alert('Maximum call stack exeeded');
//   }
// };

// Stack.prototype.pop = function(){
//   if (this.storage) {
//     var index = this.storage.lastIndexOf('|');
//     var last = this.storage.slice(index + 1);
//     this.storage = this.storage.slice(0, index);
//     this.size--;
//     return last;
//   }
//   else {
//     alert('the storage is empty');
//   }
// };

// Stack.prototype.size = function() {
//   return this.size;
// };

// var myStudents = new Stack ();

// myStudents.push('Pepe');
// myStudents.push('Pedro');
// myStudents.push('Iran');
// myStudents.push('Yami');
// myStudents.push('Marcel');
// myStudents.push('Karel');
// myStudents.push('Pablo');























// stack with object

var Stack = function() {
  this.storage = {};
  this.tail = 0;
  this.limit = 10;
};

Stack.prototype.push = function(item) {
  if (this.tail < this.limit){
      this.storage[this.tail++] = item;
      return this.storage;
  }
  alert("stack is full");
};

Stack.prototype.pop = function(){
  if (this.tail > 0) {
    const temp = this.storage[--this.tail];

    delete this.storage[this.tail];
    
    return temp;
  }
  alert('stack is empty');
};

Stack.prototype.size = function() {
  return this.tail;
};

var myStudents = new Stack ();

myStudents.push('Pepe');
myStudents.push('Pedro');
myStudents.push('Iran');
myStudents.push('Yami');
myStudents.push('Marcel');
myStudents.push('Karel');
myStudents.push('Pablo');