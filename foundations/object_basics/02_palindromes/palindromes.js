const palindromes = function (string) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

    const cleanedArr = string
        .toLowerCase()
        .split("")
        .filter(char => alphanumerical.includes(char));
    
    let low = 0;
    let high = cleanedArr.length - 1;

    while(low < high) {
        if(cleanedArr[low] !== cleanedArr[high]){
            return false;
        }
        low++;
        high--;
    }
    return true;
};


// Do not edit below this line
module.exports = palindromes;
