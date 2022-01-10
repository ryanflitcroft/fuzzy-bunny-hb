// IMPORT MODULES under test here:
import { renderBunny } from '../render-utils.js';

const test = QUnit.test;

test('function renderBunny takes in an object and returns a span element with a class "bunny" and textContent of the value of the name property of the object passed', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<span class="bunny">Bunny</span>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderBunny({ name: 'Bunny' });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected, 'this test proves that renderBunny returns a span with a class="bunny" attribute and textContent of "Bunny"');
});
