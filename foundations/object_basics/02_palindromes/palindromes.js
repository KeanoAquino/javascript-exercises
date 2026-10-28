const palindromes = function (string) {
    // edge cases: single character always palindrome
    let lowerCase = string.toLowerCase();
    let arr = lowerCase.split("");
    filteredArr = arr.filter(char => 
        char !== " " && 
        char !== "," && 
        char !== "." && 
        char !== "!" && 
        char !== "?"
    );
    if (filteredArr.length <= 1) {
        return true;
    } else {
        let palindrome = true;
        let low = 0;
        let high = filteredArr.length - 1;
        while(low < high){
            if (filteredArr[low] === filteredArr[high]) {
                low++;
                high--;
            }
            else {
                palindrome = false;
                break;
            }
        }
        return palindrome;
    }
};

// Do not edit below this line
module.exports = palindromes;
