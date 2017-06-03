/**
 * Created by USER on 03/06/2017.
 */
/**
 * Animal parent class
 */
class Animal {
    name: string;

    constructor(_name: string) {
        this.name = _name;
    }

    move(distanceInMeters: number): void {
        console.log(`${this.name} moved ${distanceInMeters}m`);
    }

    makeSound(soundName: string): void {
        console.log(`${soundName} ${soundName}!!!!!...`);
    }
}
/**
 * Inheriting Animal Properties and Methods
 */
class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(distanceInMeters: number): void {
        super.move(distanceInMeters);
    }

    makeSound(soundName: string): void {
        super.makeSound(soundName);
    }
}
/**
 * Inheriting Animal Properties and Methods
 */
class Duck extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(distanceInMeters: number): void {
        super.move(distanceInMeters);
    }

    makeSound(soundName: string): void {
        super.makeSound(soundName);
    }
}

/**
 * Instance Creations for Child classes
 */
let _animal: Animal;
_animal = new Cat('Tom');
_animal.move(12);
_animal.makeSound('Meow');
_animal = new Duck('Baby fluff');
_animal.move(34);
_animal.makeSound('Quack');