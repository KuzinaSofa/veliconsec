// 12.5 Exclude & Extract

// Define an array of objects
const data: { [key: string]: any }[] = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Alice', age: 30 },
  { id: 3, name: 'Bob', age: 28 },
  { id: 4, name: 'Jane', age: 35 },
  { id: 5, name: 'Mike', age: 22 },
];

// Filter out people older than 30
const olderThan30 = data.filter((person) => person.age > 30);

// Extract names of people older than 30
const namesOfOlderThan30 = olderThan30.map((person) => person.name);

// Print the names
console.log(namesOfOlderThan30);
