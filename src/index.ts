// annotations
let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_published: boolean = true;

// any type
let variable;

// arrays
let numbers: number[] = [];

// tuples
let user: [number, string] = [24, "Raad"]; // should have exactly two elements

// enums
const enum Name { // use const for more optimized JS code
  firstName = "Ashabul",
  middleName = "Yamin",
  lastName = "Raad",
}
let myName: Name = Name.lastName;
console.log(myName);

// functions / function annotation
function calculateTax(income: number, taxYear: number = 2023): number {
  if (taxYear < 2023) return income * 1.2;
  return income * 1.5;
}

calculateTax(50_000, 2023);

// objects
// let employee: {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// } = {
//   id: 23141088,
//   name: "Raad",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// type aliases
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 23141088,
  name: "Raad",
  retire: (date: Date) => {
    console.log(date);
  },
};

// type union
function kgToLbs(weight: number | string): number {
  // narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  }
  return parseInt(weight) * 2.2;
}

// type ntersection
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// literal types
type Quantity = 50 | 100; // can be of any data type

let quantity: 50 | 100 = 50;

// nullable types
function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola!");
}

greet(null);

// optional chaining
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// the optional property
console.log(customer?.birthday?.getFullYear());

// optional element access operator => for arrays
let players: string[] = ["Haaland", "MBappe", "Bellingham"];
console.log(players?.[0]);

// optional call
let log: any = null;
log?.("a");
