var Queue = function() {
   this.storage = {};
   this.tail = 0;
   this.head = 0;
   this.limit = 10
};

Queue.prototype.enqueue = function(item) {
  if (this.size() < this.limit){
    this.storage[this.tail]= item;
    this.tail++;
    return this.storage;
  }
  alert('storage is full')
};

Queue.prototype.dequeue = function(){
  if(this.head < this.tail) {
      delete this.storage[this.head++];
      return this.storage;
  } else {
      this.head = 0;
      this.tail = 0;
      return 'empty queue';
  }
};

Queue.prototype.size = function() {
  return this.tail - this.head;
};

var myStudents = new Queue();
myStudents.enqueue('Pepe');
myStudents.enqueue('Pedro');
myStudents.enqueue('Iran');
myStudents.enqueue('Yami');
myStudents.enqueue('Marcel');
myStudents.enqueue('Karel');
myStudents.enqueue('Pablo');






class Queue {
  constructor(){
    this.storage = {};
    this.tail = 0;
    this.head = 0;
    this.limit = 10
  }

  enqueue(item) {
    if ((this.tail - this.head) < this.limit){
      this.storage[this.tail]= item;
      console.log(this.head, this.tail);
      this.tail++;
      return this.storage;
    }
    alert('storage is full')
  }

  dequeue(){
    if(this.head < this.tail) {
        delete this.storage[this.head++];
        // console.log(this.head, this.tail);
        return this.storage;
    } else {
        this.head = 0;
        this.tail = 0;
        return 'empty queue';
    }
  }

  size() {
    return this.tail - this.head;
  };

}

var myStudents = new Queue();
myStudents.enqueue('Pepe');
myStudents.enqueue('Pedro');
myStudents.enqueue('Iran');
myStudents.enqueue('Yami');
myStudents.enqueue('Marcel');
myStudents.enqueue('Karel');
myStudents.enqueue('Pablo');