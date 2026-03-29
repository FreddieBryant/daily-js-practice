let user = {
  name: "Eva",
  plan: "Premium",
  price: "20",
};
console.log(user.name);
console.log(user.plan);

let member = {
  name: "Freddie",
  age: 42,
  status: "Gold",
};

console.log(member.name);
console.log(member.age);
console.log(member.status);
//yes, it feels more organized
//infortunately this is all i can do today
//I need save data

let gymMembers = [
  { name: "Freddie", status: "Gold" },
  { name: "Sally", status: "Silver" },
  { name: "Jay", status: "Bronze" },
];

//loop through gymMembers
//back tick sentence
// IN EACH ROUND:
// GET the current member’s name using gymMembers[i].name.
// GET the current member’s status using gymMembers[i].status.
// LOG a sentence: [Name] is a [Status] member.
// END loop.

for (let i = 0; i < gymMembers.length; i++) {
  console.log(`${gymMembers[i].name} is a ${gymMembers[i].status} member`);
}
