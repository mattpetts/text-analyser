import { calculateReadingTime } from "../src/Utils";

const testData = [
    [ 'Hello World', '< 1 min' ],
    [ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis dignissim enim, vitae fermentum sapien suscipit congue. Ut velit tortor, porta scelerisque nibh vitae, dictum ornare odio. Maecenas lobortis, tellus quis ultrices imperdiet, eros mauris lobortis nisl, ac vehicula est velit sed mauris. Pellentesque condimentum risus non eros tempus cursus. Praesent at dolor pulvinar, lacinia lorem at, pulvinar elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent id odio porta, tristique diam in, mattis libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis dignissim enim, vitae fermentum sapien suscipit congue. Ut velit tortor, porta scelerisque nibh vitae, dictum ornare odio. Maecenas lobortis, tellus quis ultrices imperdiet, eros mauris lobortis nisl, ac vehicula est velit sed mauris. Pellentesque condimentum risus non eros tempus cursus. Praesent at dolor pulvinar, lacinia lorem at, pulvinar elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent id odio porta, tristique diam in, mattis libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis dignissim enim, vitae fermentum sapien suscipit congue. Ut velit tortor, porta scelerisque nibh vitae, dictum ornare odio. Maecenas lobortis, tellus quis ultrices imperdiet, eros mauris lobortis nisl, ac vehicula est velit sed mauris. Pellentesque condimentum risus non eros tempus cursus. Praesent at dolor pulvinar, lacinia lorem at, pulvinar elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent id odio porta, tristique diam in, mattis libero.', '1 min']
]

describe( 'calculateReadingTime function', () => {
    test( 'should return a defined output when sent a string', () => {
        expect( calculateReadingTime( 'test' ) ).toBeDefined();
    });

    test( 'should return an outpur of type String', () => {
        expect( typeof calculateReadingTime( 'test' ) ).toBe( 'string' );
    });

    test( 'should handle a blank input correctly', () => {
        expect( calculateReadingTime( '' ) ).toBe( '0 mins' );
    });

    test.each( testData )( 'should return a cvalid estoimated reading time', ( input, expected ) => {
        expect( calculateReadingTime( input ) ).toBe( expected );
    });
})