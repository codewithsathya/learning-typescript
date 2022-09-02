let user: [string, number]; // tuples and can have more than 2 but not suggested.
user = ["Sathya", 21]; // provides code completion for each element
user = ["Sathya", "21"] // produces error
user = ["Sathya", 21, 100] // produces error

user.push("hello"); // doesn't produce error(drawback)