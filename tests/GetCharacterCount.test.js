import { getCharacterCount } from "../src/Utils";

const testData = [
    [ 'Hello World', 10 ],
    [ ' Hello World ', 10 ],
    [ '1234 Hello World999', 17 ],
    [ 'helloworld  ', 10 ]
];

describe( 'getCharacterCount', () => {
    test( 'should return a defined value', () => {
        expect( getCharacterCount( 'Hello World' ) ).toBeDefined();
    });

    test.each( testData )( 'should return the correct number of characters in a string', ( input, expected ) => {
        expect( getCharacterCount( input ) ).toBe( expected );
    });

    test( 'output should be of type number', () => {
        expect( typeof getCharacterCount( 'hello' ) ).toBe( 'number' );
    });

    test( 'non-string input should throw a TypeError', () => {
        expect( () => getCharacterCount( 123 ) ).toThrow( TypeError );
        expect( () => getCharacterCount( true ) ).toThrow( TypeError );
    });
})