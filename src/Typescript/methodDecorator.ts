type methodDecoratorStructure = (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
) => PropertyDescriptor;

function loggerMethod(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`📝 Method ${String(propertyKey)} called with arguments:`, args);
        const result = originalMethod.apply(this, args);
        console.log(`✨ Method ${String(propertyKey)} returned:`, result);
        return result;
    };

    return descriptor;
}

class Calculadora {
    @loggerMethod
    sum(a: number, b: number): number {
        return a + b;
    }

    @loggerMethod
    multiply(a: number, b: number): number {
        return a * b;
    }
}

const calc = new Calculadora();
console.log("Testing calculator:");
calc.sum(1, 2);
calc.multiply(3, 4);
