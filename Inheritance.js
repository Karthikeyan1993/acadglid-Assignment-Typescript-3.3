var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by USER on 03/06/2017.
 */
/**
 * Animal parent class
 */
var Animal = (function () {
    function Animal(_name) {
        this.name = _name;
    }
    Animal.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + "m");
    };
    Animal.prototype.makeSound = function (soundName) {
        console.log(soundName + " " + soundName + "!!!!!...");
    };
    return Animal;
}());
/**
 * Inheriting Animal Properties and Methods
 */
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.move = function (distanceInMeters) {
        _super.prototype.move.call(this, distanceInMeters);
    };
    Cat.prototype.makeSound = function (soundName) {
        _super.prototype.makeSound.call(this, soundName);
    };
    return Cat;
}(Animal));
/**
 * Inheriting Animal Properties and Methods
 */
var Duck = (function (_super) {
    __extends(Duck, _super);
    function Duck(name) {
        return _super.call(this, name) || this;
    }
    Duck.prototype.move = function (distanceInMeters) {
        _super.prototype.move.call(this, distanceInMeters);
    };
    Duck.prototype.makeSound = function (soundName) {
        _super.prototype.makeSound.call(this, soundName);
    };
    return Duck;
}(Animal));
/**
 * Instance Creations for Child classes
 */
var _animal;
_animal = new Cat('Tom');
_animal.move(12);
_animal.makeSound('Meow');
_animal = new Duck('Baby fluff');
_animal.move(34);
_animal.makeSound('Quack');
