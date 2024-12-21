/* // Primitive types => string / boolean / number / null

let a = 1;

a = 2;

function suma(a: number, b: number) {
    // we can define the type of the parameters
    return a + b;
}

function resta(a: number, b: number): number {
    // we can define the type of the return
    return a - b;
}
 */
interface User {
    name: string;
    getName: () => string;
    setName: (name: string) => void;
}

class UserClass {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }
}

const user: User = {
    name: "Walker",
    getName: () => {
        return "Pedro";
    },
    setName: (name: string) => {}
};

const userClass: UserClass = new UserClass("John");
