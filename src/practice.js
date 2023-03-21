const newObj = [
  {
    name: "ron",
    age: 23,
  },
  {
    name: "guy",
    age: 20,
  },
];
const obj2 = [
  {
    name: "Azriel",
    age: 23,
  },
  {
    name: "Namour",
    age: 20,
  },
];

const filtered = newObj.find((item) => {
  return item.name && item.age === 20;
});

const names = (filtered.name = obj2[0].name);
console.log(names);
console.log(filtered.name);
