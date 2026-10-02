const reverseString = require('./reverseString');
describe('reverseString', () => {
    test('reverse string of word is ', () => {
        expect(reverseString('hello')).toEqual('olleh');
    });

    test('reverse multiple words', () => {
        expect(reverseString('hello world')).toEqual('dlrow olleh');
    });

    test('works with numbers and punctuation', () => {
        expect(reverseString('123! abc! Hello, Odinite.')).toEqual(
            '.etinidO ,olleH !cba !321'
        );
    });
    test('works with blank strings', () => {
        expect(reverseString('')).toEqual('');
    });

});


