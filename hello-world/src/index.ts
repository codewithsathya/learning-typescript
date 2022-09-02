let arr: ((string | number)[] | boolean[])[]; // can write conditions to store like this
arr = [["hello", 10], [true, false]]
arr = ["hello", 10]; // prodces error
arr = [["hello", 10], [true, 10]] // produces error;