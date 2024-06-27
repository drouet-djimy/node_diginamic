console.log;
console.warn;
console.debug;
console.error;

const friend = ({ firstname, mail } = {
  firstname: "coco",
  mail: "coco@gmail.com",
});
const { firstname, mail } = friend;
console.log("${firstname} a ${mail}");
console.log("Détails de l'objet : %o", friend);

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
console.table(users);

console.time();
for (let i = 0; i < 1000000; i++) {
  // do something
}
console.timeEnd("test");
