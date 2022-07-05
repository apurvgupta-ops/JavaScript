
// *****
// *****
// *****
// *****
// *****
// *****
let n0 = 5;
let pattern0 = ""
for (let i = 0; i <= n0; i++) {
    for (let j = 0; j < n0; j++) {
        pattern0 += "*"
    }
    pattern0 += "\n"
}
console.log(pattern0)


// *****
// ****
// ***
// **
// *
let n = 5;
let pattern = ""
for (let i = 0; i <= n; i++) {
    for (let j = i; j < n; j++) {
        pattern += "*"
    }
    pattern += "\n"
}
console.log(pattern)


// 1111
// 222
// 33
// 4
let n1 = 5;
let pattern1 = ""
for (let i = 1; i <= n1; i++) {
    for (let j = i; j < n1; j++) {
        pattern1 += i
    }
    pattern1 += "\n"
}
console.log(pattern1)


let n2 = 5;
let pattern2 = ""
for (let i = 1; i <= n2; i++) {
    for (let j = i; j < n2; j++) {
        pattern2 += j
    }
    pattern2 += "\n"
}
console.log(pattern2)


let n3 = 5;
let pattern3 = ""
for (let i = 0; i <= n3; i++) {
    for (let j = 0; j < i; j++) {
        pattern3 += "*"
    }
    pattern3 += "\n"
}
console.log(pattern3)
