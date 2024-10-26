// Rekursiv funksiyaga oid masalalar

// function sum(n) {
//     if (n == 1) return 1; 
//     return n + sum(n - 1);   
//   }

//   console.log(sum(7)); 
//   console.log(sum(4));

// function factorial(a) {
//     if (a === 1) return 1; 
//     return a * factorial(a - 1);
//   }

//   console.log(factorial(5));
//   console.log(factorial(6));

function fibonaci(n) {
    if (n == 0) return 0; 
    if (n == 1) return 1; 
    return fibonaci(n - 1) + fibonaci(n - 2);
  }

  console.log(fibonaci(5));
  console.log(fibonaci(10));

// calssga oid masalalar

// class Car {
//     constructor(model, year, color) {
//       this.model = model;
//       this.year = year;
//       this.color = color;
//     }
//   }

//   let myCar = new Car("Mercedes", 2020, "black");

//   console.log(myCar); 

// class Rectangle {
//     constructor(length, width) {
//         this.length = length;
//         this.width = width;
//     }

//     getArea() {
//         return this.length * this.width;
//     }
// }

// let myRectangle = new Rectangle(5, 10);

// console.log("Area of the rectangle:", myRectangle.getArea());

// String metodlariga oid.
// 1. charAt
// let charAtExample = str.charAt(1); 
// console.log("charAt:", charAtExample);

// let lastCharWithCharAt = str.charAt(str.length - 1);
// console.log("Last char with charAt:", lastCharWithCharAt);

// for (let i = 0; i < str.length; i++) {
//   let loopChar = str.charAt(i);
//   console.log("Loop char:", loopChar);
// }

// // 2. charCodeAt
// let charCodeAtExample = str.charCodeAt(1);
// console.log("charCodeAt:", charCodeAtExample);

// let unicodeArray = [];
// for (let i = 0; i < str.length; i++) {
//   let unicodeValue = str.charCodeAt(i);
//   unicodeArray.push(unicodeValue);
// }
// console.log("Unicode array:", unicodeArray);

// function getNextThreeUnicode(str, index) {
//   let firstUnicode = str.charCodeAt(index);
//   let secondUnicode = str.charCodeAt(index + 1);
//   let thirdUnicode = str.charCodeAt(index + 2);
//   return [firstUnicode, secondUnicode, thirdUnicode];
// }
// let nextThreeUnicode = getNextThreeUnicode(str, 1);
// console.log("Next 3 Unicode values:", nextThreeUnicode);

// // 3.
// let atExample = str.at(1); 
// console.log("Character at with at:", atExample);

// let lastCharWithAt = str.at(-1);
// console.log("Last char with at:", lastCharWithAt);

// let negativeIndexWithAt = str.at(-2);
// console.log("Negative index with at:", negativeIndexWithAt);

// // 4. slice
// let middleSlice = str.slice(2, 7); // "llo W"
// console.log("Middle slice:", middleSlice);

// let first3WithSlice = str.slice(0, 3);
// console.log("First 3 with slice:", first3WithSlice);

// let last5WithSlice = str.slice(-5); 
// console.log("Last 5 with slice:", last5WithSlice);

// // 5. substring
// let substringRange = str.substring(2, 7); 
// console.log("Substring range:", substringRange);

// let first4WithSubstring = str.substring(0, 4); 
// console.log("First 4 with substring:", first4WithSubstring);

// let from5thCharToEnd = str.substring(4);
// console.log("From 5th char to end:", from5thCharToEnd);

// // 6. substr
// let charsFromIndex2 = str.substr(2, 3); 
// console.log("3 chars from index 2:", charsFromIndex2);

// let charsFromIndex3 = str.substr(3, 5); 
// console.log("5 chars from index 3:", charsFromIndex3);

// let last4Chars = str.substr(-4);
// console.log("Last 4 chars:", last4Chars);

// // 7. trim, trimStart, trimEnd
// let trimmed = longText.trim();
// console.log("Trimmed:", trimmed);

// let trimStartExample = longText.trimStart();
// console.log("Trim start:", trimStartExample);

// let trimEndExample = longText.trimEnd(); 
// console.log("Trim end:", trimEndExample);

// // 8. padEnd, padStart
// let padEndExample = "Hello".padEnd(10, "!"); 
// console.log("PadEnd:", padEndExample);

// let padStartExample = "Hello".padStart(15, "*"); 
// console.log("PadStart:", padStartExample);

// let phonePadded = phone.padStart(8, "0"); 
// console.log("Phone padded:", phonePadded);

// // 9. repeat
// let repeated3Times = "Hello".repeat(3); 
// console.log("Repeated 3 times:", repeated3Times);

// let doubled = "Hello".split("").map(char => char.repeat(2)).join("");
// console.log("Each char doubled:", doubled); // "HHeelllloo"

// let repeatedWithCommas = "Hello,".repeat(5).slice(0, -1); // "Hello,Hello,Hello,Hello,Hello"
// console.log("Repeated with commas:", repeatedWithCommas);

// // 10. replace
// let replaceFirstA = "banana".replace("a", "o"); // "bonana"
// console.log("Replace first 'a':", replaceFirstA);

// let replaceFirstWord = "Hello world".replace("Hello", "Hi"); 
// console.log("Replace first word:", replaceFirstWord);

// let replaceFirstDigit = numStr.replace(/\d/, "*"); 
// console.log("Replace first digit:", replaceFirstDigit);

// // 11. replaceAll
// let replaceAllA = "banana".replaceAll("a", "o"); 
// console.log("Replace all 'a' with 'o':", replaceAllA);

// let replaceAllPhrase = phrase.replaceAll("hello", "hi"); 
// console.log("Replace all occurrences of phrase:", replaceAllPhrase);

// let replaceAllDigits = numStr.replaceAll(/\d/g, "*"); 
// console.log("Replace all digits:", replaceAllDigits);

// // 12. split
// let splitByComma = "apple,banana,grape".split(","); 
// console.log("Split by comma:", splitByComma);

// let splitByEachChar = str.split(""); 
// console.log("Split by each char:", splitByEachChar);

// let splitBySpaces = "Hello world from JS".split(" "); 
// console.log("Split by spaces:", splitBySpaces);

// // 13. indexOf
// let indexOfFirstO = str.indexOf("o"); 
// console.log("IndexOf first 'o':", indexOfFirstO);

// let indexOfWorld = str.indexOf("world"); 
// console.log("IndexOf 'world':", indexOfWorld);

// let indexOfFirstAInBanana = "banana".indexOf("a"); 
// console.log("IndexOf first 'a' in banana:", indexOfFirstAInBanana);

// // 14. lastIndexOf
// let lastIndex = "banana".lastIndexOf("a"); 
// console.log("LastIndexOf 'a':", lastIndexOfA);

// let lastIndexOfSpace = str.lastIndexOf(" "); 
// console.log("LastIndexOf space:", lastIndexOfSpace);

// let lastIndexOfLastDigit = numStr.lastIndexOf("3"); 
// console.log("LastIndexOf last digit:", lastIndexOfLastDigit);

// // 15. includes
// let includesWorld = str.includes("world");
// console.log("Includes 'world':", includesWorld);

// let includesAnyDigit = /\d/.test(numStr); 
// console.log("Includes any digit:", includesAnyDigit);

// let caseInsensitiveIncludes = /hello/i.test("Hello World");
// console.log("Case-insensitive includes:", caseInsensitiveIncludes);
