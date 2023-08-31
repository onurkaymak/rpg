import { Warrior } from './../src/js/warrior.js';

describe('Warrior', () => {

    test('Test #1 - Should create a object with defined key and values from Warrior class which extends from Character class.', () => {
        let character = new Warrior();
        expect(character).toEqual({
            strength: 50,
            health: 100,
            intelligence: 10
        });
    });
});