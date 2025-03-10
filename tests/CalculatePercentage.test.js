import { calculatePercentage } from "../src/Utils";

const testData = [
    [ 20, 100, 20],
    [ 10, 50, 20 ],
    [ 1, 6, 17 ]
]

describe( 'calculatePercentage function', () => {
    test( 'returns a defined output', () => {
        expect( calculatePercentage( 20, 100 ) ).toBeDefined();
    });

    test( 'returns an output of type number', () => {
        expect( typeof calculatePercentage( 20, 100 ) ).toBe( 'number' );
    });

    test.each( testData )( 'should return the correct and rounded percentage value', ( a, b, expected ) => {
        expect( calculatePercentage( a, b ) ).toBe( expected );
    });

    test( 'should return NaN if missing args', () => {
        expect( calculatePercentage( 100 ) ).toBe( NaN );
    });

    test( 'should return 0 if arg1 is not defined or falsey', () => {
        expect( calculatePercentage( false, 100 ) ).toBe( 0 );
        expect( calculatePercentage( 0, 100 ) ).toBe( 0 );
        expect( calculatePercentage( '', 100 ) ).toBe( 0 );
        expect( calculatePercentage( undefined, 100 ) ).toBe( 0 );
    });
});