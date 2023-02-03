// function convertString(str) {
//   const arrStr = str.split(" ");
//   let arr = [];
//   arrStr.map((item, index) => {
//     arr[index] = item.split("").reverse().join("");
//   });
//   return arr.join(" ");
// }

// function compareTriplets(a, b) {
//   let result = [0, 0];

//   a.map((item, index) => {
//     if (item > a[index]) {
//       result[0]++;
//     } else if (item < a[index]) {
//       result[1]++;
//     }
//   });

//   return result;
// }

// function plusMinus(arr) {
//   // Write your code here
//   const arr2 = [0, 0, 0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) arr2[2]++;
//     else if (arr[i] > 0) arr2[0]++;
//     else arr2[1]++;
//   }

//   arr2.map((item, index) => {
//     arr2[index] = (item / arr.length).toFixed(6);
//   });
//   return arr2;
// }

// console.log(plusMinus([-4, 3, -9, 0, 4, 1]));

// function staircase(n) {
//   // Write your code here
//   let dem = 1;
//   for (let i = 0; i < n; i++) {
//     let str = "";
//     for (let j = 0; j < n; j++) {
//       if (n - j <= dem) {
//         str = str + "#";
//       } else {
//         str = str + " ";
//       }
//     }
//     dem++;
//     console.log(str);
//   }
// }

// staircase(6);

// function miniMaxSum(arr) {
//   // Write your code here
//   let sum = [];
//   arr.map((item, index) => {
//     let tong = 0;
//     arr.map((value, pos) => {
//       if (index !== pos) {
//         tong = tong + value;
//       }
//     });
//     sum = [...sum, tong];
//   });
//   console.log(sum);
// }

// function birthdayCakeCandles(candles) {
//   // Write your code here
//   const maxArr = Math.max(...candles);
//   let dem = 0;
//   candles.map((item) => {
//     if (item === maxArr) dem++;
//   });
//   console.log(dem);
// }

// birthdayCakeCandles([3, 2, 1, 3]);

// function timeConversion(s) {
//   // Write your code here
//   if (s.slice(-2) === "AM") {
//     if (s.slice(0, 2) == 12) {
//       return "00" + s.slice(2, s.length - 2);
//     } else return s.substring(0, s.length - 2);
//   } else {
//     if (s.slice(0, 2) == 12) {
//       return s.substring(0, s.length - 2);
//     } else {
//       let newString = Number(s.slice(0, 2)) + 12 + s.slice(2, s.length - 2);
//       return newString;
//     }
//   }
// }

// timeConversion("07:05:45PM");

// function gradingStudents(grades) {
//   // Write your code here
//   const newArr = [];
//   grades.map((item, index) => {
//     if (item <= 37) newArr[index] = item;
//     else if (item % 5 > 2) newArr[index] = item + (5 - (item % 5));
//     else newArr[index] = item;
//   });

//   return newArr;
// }

// console.log(gradingStudents([73, 67, 38, 33]));

// function getTotalX(a, b) {
//   // Write your code here
//   let minA = Math.min(...a);
//   let minB = Math.min(...b);
//   let arrA = [];
//   let arrB = [];
//   let dem = 0;
//   if (minB < minA) {
//     arrA = [...b];
//     arrB = [...a];
//   } else {
//     arrA = [...a];
//     arrB = [...b];
//   }
//   let arrBC = [];
//   for (let i = Math.max(...arrA); i <= Math.min(...arrB); i++) {
//     dem = 0;
//     arrA.map((item) => {
//       if (i % item === 0) dem++;
//     });

//     if (dem === arrA.length) {
//       arrBC = [...arrBC, i];
//     }
//   }

//   let countBC = 0;
//   arrBC.map((item) => {
//     dem = 0;
//     arrB.map((b) => {
//       if (b % item === 0) dem++;
//     });

//     if (dem === arrB.length) countBC++;
//   });

//   return countBC;
// }
// getTotalX([16, 32, 96], [2, 4]);

// function catChuoi(s, i) {
//   if (s.length === 0) return "";
//   if (s.length - 1 === i) return s;

//   if (s[i] === s[i + 1]) {
//     const arrStr = s.split("");
//     arrStr.splice(i, 2);
//     console.log(arrStr.join(""));
//     return catChuoi(arrStr.join(""), i - 1);
//   } else {
//     console.log(s);
//     return catChuoi(s, i + 1);
//   }
// }

// console.log(
//   catChuoi(
//     "acdqglrfkqyuqfjkxyqvnrtysfrzrmzlygfveulqfpdbhlqdqrrqdqlhbdpfqluevfgylzmrzrfsytrnvqyxkjfquyqkfrlacdqj",
//     0
//   )
// );

function formingMagicSquare(s) {
  // Write your code here
  let sum = 0;
  if (s[1][1] !== 5) {
    sum = sum + Math.abs(s[1][1] - 5);
    s[1][1] = 5;
  }

  return sum;
}

console.log(
  formingMagicSquare([
    [4, 5, 8],
    [2, 4, 1],
    [1, 9, 7],
  ])
);
