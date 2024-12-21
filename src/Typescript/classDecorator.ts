// Decorator =>

// Add a property to a class
function addAprovement<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        aproved = true;
    };
}

@addAprovement
class MyClass {
    test: string;
    constructor() {}
}

const instance = new MyClass();
console.log((instance as any).aproved);
