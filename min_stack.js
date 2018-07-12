function Stack(capacity) {
  this._storage  = {};
  this._capacity = capacity;
  this._count    = 0;
}

Stack.prototype.push = function(value) {
  if(this._count < this._capacity){
    this._storage[this._count++] = value;
    return this._count;
  }
  return 'Max capacity reached';

};

Stack.prototype.pop = function() {
  if(this._count > 0){
    var val = this._storage[--this._count];
    delete this._storage[this._count];

    if(this._count < 0)this._count = 0;

    return val;
  }
  else{
    return 'The stack is empty';
  }
};

Stack.prototype.peek = function() {
  return this._storage[this._count-1] || 'The stack is empty';
};

Stack.prototype.count = function() {
  return this._count;
};




function MinStack(capacity) {
  this._storage  = {};
  this._capacity = capacity;
  this._count    = 0;
  this._min      = new Stack(capacity);
}

MinStack.prototype.push = function(value) {
  if(this._count < this._capacity){
    if(isNaN(this._min.peek()) || value < this._min.peek()){
      this._min.push(value);
    }
    else{
      this._min.push(this._min.peek());
    }
    this._storage[this._count++] = value;
    return this._count;
  }
  return 'Max capacity reached';

};

MinStack.prototype.pop = function() {
  this._min.pop();
  if(this._count > 0){
    var val = this._storage[--this._count];
    delete this._storage[this._count];

    if(this._count < 0)this._count = 0;

    return val;
  }
  else{
    return 'The stack is empty';
  }
};

MinStack.prototype.peek = function() {
  return this._storage[this._count-1] || 'The stack is empty';
};

MinStack.prototype.count = function() {
  return this._count;
};

MinStack.prototype.min = function() {
  return this._min.peek();
};

var myStudents = new MinStack(10);
myStudents.push(34);
myStudents.push(67);
myStudents.push(4);
myStudents.push(67);
myStudents.push(100);
myStudents.push(2);
myStudents.push(1);
