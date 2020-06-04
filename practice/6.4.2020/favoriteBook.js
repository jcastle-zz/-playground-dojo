// From FeM Getting to Know JS

/*TODO: define addFavoriteBook(..) function
- Define an `addFavoriteBook(..)` function that receives a single parameter, called `bookName`.
- If the provided `bookName` string does *NOT* have the word "Great" in it, add it to the `favoriteBooks` array.
Hints:
    - `someString.includes(anotherString)` will return `true` if `anotherString` is found inside `someString`, or `false` otherwise.
    - Use `!` to negate a boolean value (change `true` to `false` or vice versa).
    - `someArray.push(value)` will add a value to the end of the array.
*/


/* TODO: define printFavoriteBooks() function
- Define a `printFavoriteBooks()` function that receives no parameters.
- `printFavoriteBooks()` should first print a message like "Favorite Books: ..", and include the number of books in the `favoriteBooks` array.
- Hints:
    - Use the \` back-tick operators for strings that need to include values in them.
	- Use `console.log(..)` to print a message to the screen.

- Finally, `printFavoriteBooks()` should loop through the `favoriteBooks` array and print out each value.
    - Make sure to then call the `printFavoriteBooks()` function at the end of the program.
    - Hint: Use the `for ( let .. of .. ) { }` style loop.

*/

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books
