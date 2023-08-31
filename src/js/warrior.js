import { Character } from "./character";

export class Warrior extends Character {
    constructor() {
        super();
        this.strength = 50;
        this.health = 100;
        this.intelligence = 10;
    }
}