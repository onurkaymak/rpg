import { Character } from "./character";

export class Wizard extends Character {
    constructor() {
        super();
        this.strength = 10;
        this.health = 80;
        this.intelligence = 50;
    }
}