function registerModArgs(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const argsModified = args.map(arg => (typeof arg === "string" ? arg.toUpperCase() : arg));

        console.log(`Method ${propertyKey} called with args ${argsModified}`);
        return originalMethod.apply(this, argsModified);
    };
}

class Greet {
    @registerModArgs
    greet(param: string) {
        console.log(`Hello ${param}`);
    }
}
