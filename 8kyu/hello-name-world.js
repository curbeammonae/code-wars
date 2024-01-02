// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).


function hello(name) {
    if (name && typeof name === 'string' && name.trim() !== '') {
        // Capitalize the first letter of the name
        const correctedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        return `Hello, ${correctedName}!`;
    } else {
        return 'Hello, World!';
    }
}
