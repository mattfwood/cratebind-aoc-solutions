const arr1 = [121, 59, 141, 21, 120, 67, 58, 49, 22, 46, 56, 112, 53, 111, 104, 130];
const arr2 = [1926, 1910, 760, 2055, 28, 2242, 146, 1485, 163, 976, 1842, 1982, 137, 1387, 162, 789];
const arr3 = [4088, 258, 2060, 1014, 4420, 177, 4159, 194, 2794, 4673, 4092, 681, 174, 2924, 170, 3548];
const arr4 = [191, 407, 253, 192, 207, 425, 580, 231, 197, 382, 404, 472, 164, 571, 500, 216];
const arr5 = [4700, 1161, 168, 5398, 5227, 5119, 252, 2552, 4887, 5060, 1152, 3297, 847, 4525, 220, 262];
const arr6 = [2417, 992, 1445, 184, 554, 2940, 209, 2574, 2262, 1911, 2923, 204, 2273, 2760, 506, 157];
const arr7 = [644, 155, 638, 78, 385, 408, 152, 360, 588, 618, 313, 126, 172, 220, 217, 161];
const arr8 = [227, 1047, 117, 500, 1445, 222, 29, 913, 190, 791, 230, 1281, 1385, 226, 856, 1380];
const arr9 = [436, 46, 141, 545, 122, 86, 283, 124, 249, 511, 347, 502, 168, 468, 117, 94];
const arr10 = [2949, 3286, 2492, 2145, 1615, 159, 663, 1158, 154, 939, 166, 2867, 141, 324, 2862, 641];
const arr11 = [1394, 151, 90, 548, 767, 1572, 150, 913, 141, 1646, 154, 1351, 1506, 1510, 707, 400];
const arr12 = [646, 178, 1228, 1229, 270, 167, 161, 1134, 193, 1312, 1428, 131, 1457, 719, 1288, 989];
const arr13 = [1108, 1042, 93, 140, 822, 124, 1037, 1075, 125, 941, 1125, 298, 136, 94, 135, 711];
const arr14 = [112, 2429, 1987, 2129, 2557, 1827, 477, 100, 78, 634, 352, 1637, 588, 77, 1624, 2500];
const arr15 = [514, 218, 209, 185, 197, 137, 393, 555, 588, 569, 710, 537, 48, 309, 519, 138];
const arr16 = [1567, 3246, 4194, 151, 3112, 903, 1575, 134, 150, 4184, 3718, 4077, 180, 4307, 4097, 1705];

const allArrays = [arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9, arr10, arr11, arr12, arr13, arr14, arr15, arr16];

/*

The spreadsheet consists of rows of apparently-random numbers. To make sure the recovery process is on the right track, they need you to calculate the spreadsheet's checksum. For each row, determine the difference between the largest value and the smallest value; the checksum is the sum of all of these differences.

For example, given the following spreadsheet:

5 1 9 5
7 5 3
2 4 6 8
The first row's largest and smallest values are 9 and 1, and their difference is 8.
The second row's largest and smallest values are 7 and 3, and their difference is 4.
The third row's difference is 6.
In this example, the spreadsheet's checksum would be 8 + 4 + 6 = 18.

*/

function matrixTotal(arr) {
    return arr.map(set => findDiff(set)).reduce((a, b) => a + b);
}

function findDiff(arr) {
    arr.sort((a,b) => a - b);
    return arr[arr.length - 1] - arr[0];
}

console.log(findDiff([5, 1, 9, 5]) === 8);
console.log(findDiff([7, 5, 3]) === 4);
console.log(findDiff([2, 4, 6, 8]) === 6);

console.log(matrixTotal([
    [5, 1, 9, 5],
    [7, 5, 3],
    [2, 4, 6, 8]
]));

console.log(matrixTotal(allArrays));

/*

It sounds like the goal is to find the only two numbers in each row where one evenly divides the other - that is, where the result of the division operation is a whole number. They would like you to find those numbers on each line, divide them, and add up each line's result.

For example, given the following spreadsheet:

5 9 2 8
9 4 7 3
3 8 6 5
In the first row, the only two numbers that evenly divide are 8 and 2; the result of this division is 4.
In the second row, the two numbers are 9 and 3; the result is 3.
In the third row, the result is 2.
In this example, the sum of the results would be 4 + 3 + 2 = 9.

*/

function findFactor(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] % arr[j] === 0 && i !== j) {
                return arr[i] / arr[j];
            }
        }
    }
}

function findFactorTotal(arr) {
    return arr.map((set) => findFactor(set)).reduce((a, b) => a + b)
}

console.log(findFactor([5, 9, 2, 8]) === 4);
console.log(findFactor([9, 4, 7, 3]) === 3);
console.log(findFactor([3, 8, 6, 5]) === 2);

console.log(findFactorTotal(allArrays));
