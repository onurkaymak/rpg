import { Wizard } from './../src/js/wizard.js';

describe('Wizard', () => {

    test('Test #1 - Should create a object with defined key and values from Wizard class which extends from Character class.', () => {
        let character = new Wizard();
        expect(character).toEqual({
            strength: 10,
            health: 80,
            intelligence: 50
        });
    });
});