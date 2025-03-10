import { calculateLetterDensity } from "../src/Utils";

describe('calculateLetterDensity', () => {
    test('should return correct letter counts for a simple string', () => {
        const input = 'hello';
        const result = calculateLetterDensity(input);
        expect( result ).toEqual([
            { key: 'h', val: 1, percentage: 20 },
            { key: 'e', val: 1, percentage: 20 },
            { key: 'l', val: 2, percentage: 40 },
            { key: 'o', val: 1, percentage: 20 }
        ]);
    });

    test('should be case insensitive', () => {
        const input = 'HelloHELLO';
        const result = calculateLetterDensity( input );
        expect( result ).toEqual([
            { key: 'h', val: 2, percentage: 20 },
            { key: 'e', val: 2, percentage: 20 },
            { key: 'l', val: 4, percentage: 40 },
            { key: 'o', val: 2, percentage: 20 }
        ]);
    });

    test('should ignore non-alphabetic characters', () => {
        const input = 'h3ll0!';
        const result = calculateLetterDensity( input );
        expect( result ).toEqual([
            { key: 'h', val: 1, percentage: 33 },
            { key: 'l', val: 2, percentage: 67 }
        ]);
    });

    test('should return an empty array for an empty string', () => {
        const input = '';
        const result = calculateLetterDensity( input );
        expect(result).toEqual([]);
    });

    test('should return correct counts for a long string', () => {
        const input = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const result = calculateLetterDensity( input );
        expect( result ).toHaveLength( 26 );
        expect( result.find( entry => entry.key === 'a' ) ).toEqual( { key: 'a', val: 2, percentage: 4  } );
        expect( result.find( entry => entry.key === 'z' ) ).toEqual( { key: 'z', val: 2, percentage: 4  } );
    });
});
