let re;
//Literal Characters
re = /hello/;
re = /hello/i;

//Meta character Symbols
re = /^h/i;  //it means it must start with
re = /d$/i;  //it means it must end with
re = /^hello$/i;  //it means it must begin and end with
re = /^h.llo$/i; //it means it matches any ONE character
re = /h*llo$/i; //it means it matches any character 0 or more times
re = /gre?a?y/i;  //Optional character
re = /gre?a?y\?/i // Escape character

//Brackets [] - it is character sets
re = /gr[ae]y/i; //it must be an a or e
re = /[GF]ray/i; //it must be G or F
re = /[^GF]ray/; //it match anything except a G or F
re = /[A-Z]ray/; //it match uppercase letter
re = /[a-z]ray/; //it match lowercase letter
re = /[A-Za-z]ray/; //it match letter
re = /[0-9]ray/; //match any digit

//Braces {} - these are Quantifiers
re = /Hel{2}o/i; //it must occur exactly {m} amount of times
re = /Hel{2,4}o/i; //it must occur exactly {m} amount of times
re = /Hel{2,}o/i; //it must occur at least {m} times

//Paretheses()- these are used for grouping
re = /^([0-9]x){3}$/

//Shorting Character Classes
re = /\w/; //Word character - means alphanumeric or _
re = /\+/; //+= one or more
re = /\W/; //Non-Word character
re = /\d/; //Match any digit
re = /\d+/; //Match any digit 0 or more digits
re = /\D/;  //Match any non-digit
re = /\s/; //Match whitespace char
re = /\S/; //Match non-whitespace char
re = /Heaven\b/i; //Word boundary

//Assertions
re = /x(?=y)/; //It means it match x only if followed by y
re = /x(?!y)/; //It means it match x only if NOT followed by y


//String to match
const str = 'Hello,welcome to Heaven';

//Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matched ${re.source}`);


    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re, str);