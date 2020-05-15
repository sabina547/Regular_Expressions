let re; //re for regular expression
re = /hello/;
re = /hello/i; // i= case insensitive
//re = /hello/g; //Global search

//console.log(re);
//console.log(re.source); //it gives actual expression i.e.hello

// Exec()- it return result in an array in null
//const result = re.exec('hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

//test()- it returns true or false
//const result = re.test('hello');
//console.log(result);

//match()- it returns result array or null
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

//seach() - it returns index of the first match if not foynt return -1
// const str = 'Hello There';
// const result = str.search(re);
// console.log(result);

//replace() - it return new string with some or all matches of a pattern
const str = 'Hello There';
const newStr = str.replace(re, 'Hi');
console.log(newStr);

