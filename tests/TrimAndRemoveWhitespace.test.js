import { trimAndRemoveWhitespace } from "../src/Utils";

describe( 'trimAndRemoveWhitespace', () => {
    const input = 'Hello World, My name is Jeff';

    test( 'should return a defined value', () => {
        expect( trimAndRemoveWhitespace( input ) ).toBeDefined();
    });

    test( 'should remove all whitespace from a string', () => {
        const expected = 'HelloWorld,MynameisJeff';
        expect( trimAndRemoveWhitespace( input ) ).toBe( expected );
    });

    test( 'should trim whitespace from the start and end of a string', () => {
        expect( trimAndRemoveWhitespace( ' Hello World ' ) ).toBe( 'HelloWorld' );
    } );

    test( 'should throw a TypeError if a non string type is provided ', () => {
        expect( () => trimAndRemoveWhitespace( 123 ) ).toThrow( TypeError );
        expect( () => trimAndRemoveWhitespace( false ) ).toThrow( TypeError );
        expect( () => trimAndRemoveWhitespace( { test: 123 } ) ).toThrow( TypeError );
    } );
})