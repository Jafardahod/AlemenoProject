let a = 'A man, a plan, a canal: Panama'
let b = purifychar(a)
let rev = revstring(b)


if(rev == b){
    console.log("The string is a palindrome")
}else{
    console.log("The string is not a palindrome")
}


function revstring(string) {
    let rev = ''
    for (let i = string.length - 1; i > -1; i--) {
        rev = rev + b[i]
    }
    return rev.toLowerCase()
}

function purifychar(string) {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    let ret = ''
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < chars.length; j++) {
            if (string[i].toUpperCase() == chars[j]) {
                ret = ret + string[i]
            }
        }
    }

    return ret.toLowerCase()
}

// function checkstring(string){
//     let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
//     let flag = false
//     for (let i = 0; i < chars.length; i++){
//         if(string.toUpperCase() == chars[i]){
//             flag = true
//             return flag
//         }else{
//             continue
//         }
//     }
//     return flag
// }