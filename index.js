function BoardMember(name, homeState, training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;
}

BoardMember.prototype.veto = function() {
  return "No, I must disagree";
};

BoardMember.prototype.approve = function() {
  return "You can do that!";
};

BoardMember.prototype.doCharity = function() {
  return "I like to help people.";
};

BoardMember.prototype.releasePressStatement = function() {
  return "You will see great things from Scuber.";
};

BoardMember.prototype.sayHi = function() {
  return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
};
const boardMember1 = new BoardMember("John Doe", "California", "Law");
console.log(boardMember1.veto()); // Output: No, I must disagree
console.log(boardMember1.sayHi()); // Output: Hi, my name is John Doe. I am from California, and I was trained in Law.

const boardMember2 = new BoardMember("Jane Smith", "New York", "Finance");
console.log(boardMember2.approve()); // Output: You can do that!
console.log(boardMember2.releasePressStatement()); // Output: You will see great things from Scuber.
