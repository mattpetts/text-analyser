export const trimAndRemoveWhitespace = ( input ) => {
    return input.trim().replace( / /g, '' );
}

export const getCharacterCount = ( input ) => {
    return trimAndRemoveWhitespace( input ).length;
}

export const getWordCount = ( input ) => {
    return input.length > 0 ? input.trim().split( /\s+/ ).length : 0;
}

export const calculatePercentage = ( value, total ) => {
    return value ? Math.round( value / total * 100 ) : 0;
}

export const calculateLetterDensity = ( input ) => {
    const charsToCheck = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const charsInInput = trimAndRemoveWhitespace( input ).split('');
    const uniqueChars = new Set( charsInInput );
    const charValues = [];
    uniqueChars.forEach(( c ) => {
        const count = ( input.match( new RegExp( c, 'gi' ) ) || [] ).length;
        if ( charsToCheck.includes( c ) ) {
            charValues.push( { key: c, val: count } );
        }
    });

    return charValues;
}

export const calculateReadingTime = ( input ) => {

    if ( ! input.length ) {
        return '0 mins';
    }

    const wordsPerMinute = 200;
    const wordCount = getWordCount( input );
    const readingTime = wordCount / wordsPerMinute
    return readingTime < 1 ? '< 1 min' : `${ Math.round( readingTime ) } min`
}