const removeFromArray = function(arr, ...removeArr) {
    return arr.filter((num) => {
                        let keep = true; // keep num by default
                        for (let i = 0; i < removeArr.length; i++){ // check if current num match any from remove param
                            if (num === removeArr[i]){
                                keep = false;
                                break;
                            }
                        }
                        return keep;
                    })
};

// alternate solution, instead of checking if current num is in remove arguments arr
// is to use .include function

// const removeFromArray = function(arr, ...removeArr) {
//   return arr.filter(val => !removeArr.includes(val))
// }

// Do not edit below this line
module.exports = removeFromArray;
