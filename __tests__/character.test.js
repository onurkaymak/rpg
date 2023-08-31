import { Character } from './../src/js/character.js';

describe('Character', () => {

    test('Test #1 - Should create a character object based on Character class.', () => {
        let character = new Character();
        expect(character).toEqual({
            strength: 0,
            health: 0,
            intelligence: 0
        });
    });
});