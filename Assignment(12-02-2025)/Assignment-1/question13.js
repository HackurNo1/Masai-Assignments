const people = [
  {
    name: "Alice",
    address: { city: "New York", street: { name: "Broadway", number: 123 } },
  },
  {
    name: "Bob",
    address: {
      city: "Los Angeles",
      street: { name: "Sunset Boulevard", number: 456 },
    },
  },
];

let [
  {
    name,
    address: {
      city,
      street: { name: sname1 },
    },
  },
] = people;

console.log(`${name} lives in ${city} on ${sname1}`);

let [
  ,
  {
    name: Bobname,
    address: {
      city: bobcity,
      street: { name: bobstreet },
    },
  },
] = people;

console.log(`${Bobname} lives in ${bobcity} on ${bobstreet}`);
