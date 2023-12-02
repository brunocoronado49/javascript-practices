class Animal {
    constructor(name='', race='', sound='') {
        this.name = name;
        this.race = race;
        this.sound = sound;
    }

    set myNameIs(name) {
        this.name = name;
    }

    get myNameIs() {
        return `Hello, my name is ${this.name}`;
    }

    makeSound() {
        console.log(this.sound);
    }
}

class Dog extends Animal {
    constructor(name, race, sound, age) {
        super(name, race, sound);
        this.age = age;
    }
}

const seven = new Dog('Seven', 'Belgian', 'Woof', 43);
seven.myNameIs = 'Seven el Mazizo';
console.log(seven.myNameIs);
seven.makeSound();

