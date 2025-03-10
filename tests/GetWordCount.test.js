import { getWordCount } from "../src/Utils";

const testData = [
    [ 'Hello World', 2 ],
    [ 'This is a test', 4 ],
    [ 'CamelCaseTest', 1 ],
    [ ' works with whitespace ', 3 ]
]

describe( 'getWordCount function', () => {
    test( 'should return a defined output', () => {
        expect( getWordCount( 'Hello World' ) ).toBeDefined();
    });

    test.each( testData )( 'should return the correct wordcount', ( input, expected ) => {
        expect( getWordCount( input ) ).toBe( expected );
    });

    test( 'should return type of number', () => {
        expect( typeof getWordCount( 'Hello World' ) ).toBe( 'number' );
    });

    test( 'should return 0 for non-string input', () => {
        expect( getWordCount( 123 ) ).toBe( 0 );
        expect( getWordCount( false ) ).toBe( 0 );
        expect( getWordCount( [] ) ).toBe( 0 );
    });

    test( 'should throw a TypeError for a poplucat array', () => {
        expect( () => getWordCount( [ 1, 2] ) ).toThrow( TypeError );
    })
});