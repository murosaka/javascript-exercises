let string = "A";
let shift = -26;

const caesar = function(string, shift) {
    let unicodeNew;
    if (shift > 26) {
        shift = shift%26;
        console.log('1__'+shift)
    } else if ((shift < 0) && (shift >= -26)){
        shift = 26 + shift;
        console.log('2__'+shift);
    } else if (shift < -26) {
        shift = 26 + shift%26;
        console.log('3__'+shift)
    };
    let newArray = [];
    array = Array.from(string);
    array.forEach(char => {
        if (((char.charCodeAt(0)) >= 65 && 
            (char.charCodeAt(0)) <= 90) && 
            (char.charCodeAt(0) + shift) <= 90){ 
                unicodeNew = char.charCodeAt(0) + shift;
        } else if (((char.charCodeAt(0)) >= 65 && 
            (char.charCodeAt(0)) <= 90) && 
            (char.charCodeAt(0) + shift) > 90){
                unicodeNew = char.charCodeAt(0) + shift - 26;      
        } else if (((char.charCodeAt(0)) >= 97 && 
            (char.charCodeAt(0)) <= 122) && 
            (char.charCodeAt(0) + shift) <= 122){ 
                unicodeNew = char.charCodeAt(0) + shift;
        } else if (((char.charCodeAt(0)) >= 97 && 
            (char.charCodeAt(0)) <= 122) && 
            (char.charCodeAt(0) + shift) > 122){
                unicodeNew = char.charCodeAt(0) + shift - 26;        
        } else {
            unicodeNew = char.charCodeAt(0);
        };
        newArray.push(String.fromCharCode(unicodeNew));
    });
    return newArray.join('');
};

console.log(caesar(string, shift));

// Do not edit below this line
// module.exports = caesar;