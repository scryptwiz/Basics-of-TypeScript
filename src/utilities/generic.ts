import '../style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>GENERIC</h1>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`




// GENERICS 
// Generics are a powerful feature in TypeScript that allows you to write flexible, reusable, and type-safe functions, classes, and interfaces.
// By using generics, you can create components that work with any data type while still enforcing type constraints.
let array1: Array<string> = ['Apple', 'Banana', 'Mango'];
console.log(array1);

// Function that accepts any type and return the same type

// Doing this can get very annoying let's use generic to fix that
// function createString(arg: string): string {
//     return arg;
// }
// function createNum(arg: number): number {
//     return arg;
// }

// Instead of the above type function you can set generic function that will accept any type and return any type
function genericFunction<T>(arg: T): T {
  return arg;
}

const someStringValue = genericFunction<string>('Hello World');
const someNumberValue = genericFunction<number>(2);

console.log(someStringValue);
console.log(someNumberValue);

// Using generic for interface
// Define a generic interface
interface GenericInterface<T> {
  value: T;
  getValue: () => T;
}

const genericString: GenericInterface<string> = {
  value: 'Hello World',
  getValue() {
    return this.value;
  },
};

console.log(genericString)

async function someFunc(): Promise<string> {
  return "Hello World"
}

console.log("Promises with generic", someFunc());


const generateArray = (length: number, value: string): string[] => {
  let result: string[] = []
  result = Array(length).fill(value)
  return result;
}

console.log(generateArray(3, "Hello World"));

// Creating an array of string using generic
function generateArrayGeneric<T>(length: number, value: T): Array<T> {
  let result: T[] = []
  result = Array(length).fill(value)
  return result;
}

console.log(generateArrayGeneric<string>(3, "Hello World"));
console.log(generateArrayGeneric<number>(3, 300));
console.log(generateArrayGeneric<boolean>(3, false));


// Set up a function that accept multiple parameters and different data types
function pair<U, V>(param1: U, param2: V): [U, V] {
  return [param1, param2]
}

const result = pair<number, string>(123, 'Hello')
console.log(result);  // output: [123, 'Hello']


// Type constraint on the generic type T, generic type can be either a number or a string.
// We use extends for type constraint in generic
function processValue<T extends number | string, U extends string>(value: T, value2: U): [T, U] {
  console.log(value);
  console.log(value2);
  return [value, value2]
}

processValue('hello', 'World');
processValue(12, 'Hello');
// processValue(true);

// Type constraint 2
type Car = {
  brand: string;
  model: string;
};

const car: Car = {
  brand: 'ford',
  model: 'mustang',
};

type Product = {
  name: string;
  price: number;
};

const product: Product = {
  name: 'shoes',
  price: 1.99,
};

type Student = {
  name: string;
  age: number;
};

const student: Student = {
  name: 'peter',
  age: 20,
};

// T extends Student is a type constraint on the generic type T. It means that the type T can be any type, but it must be a subtype of Student or Student itself. In other words, T must have at least the same properties and methods that Student has.

// function printName<T extends Student | Product>(input: T): void {
//   console.log(input.name);
// }

// Instead of above we can use this so it only seach for the property name to be compulsory
// The extends { name: string } part is a type constraint on T. It means that T can be any type, but it must be an object that has at least a name property of type string.
// In other words, T must have at least the same properties and methods that { name: string } has.
function printName<T extends { name: string }>(input: T): void {
  console.log(input.name);
}

printName(student);
printName(product);


// Default type in generics
// The T can be either type any or a type passsed when you call the interface
interface StoreData<T = any> {
  data: T[];
}

const storeNumbers: StoreData<number> = {
  data: [1, 2, 3, 4],
};

const randomStuff: StoreData = {
  data: ['random', 1],
};
console.log(storeNumbers)
console.log(randomStuff)