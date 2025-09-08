var isString = false;
var t = "malak";
if (typeof t === "string") {
  isString = true;
}

import Circle from "./module/circle";
import Rectangle from "./module/rectangle";
let sh: Rectangle | Circle;
sh = new Circle(10, 1);
console.log(sh.area());

sh = new Rectangle(5, 1);
console.log(sh.area());

interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}
const user: User = { id: 1, name: "malak", email: "eee@gmail", isAdmin: true };

type userWithIdName = Pick<User, "id" | "name">;
type userWithoutEmail = Omit<User, "email">;
type UserUpdate = Partial<User>;

function merge<T, S>(obj1: T, obj2: S): T & S {
  return { ...obj1, ...obj2 };
}
console.log(merge(user, sh));

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
console.log(getProperty(user, "name"));

function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

type Original = { firstName: string; lastName: string };

class Decorator {
  route: string;
  constructor(route: string) {
    this.route = route;
  }
  get(Path: string) {
    console.log(this.route);
  }
}

function isPromise(value: any) {}

type UserID = string & { __brand: "UserID" };

function getUserById(id: UserID) {
  console.log(id);
}