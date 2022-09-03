function isPalindrome(word) {
    // Write your algorithm here
    for (let i = 0; i < word.length / 2; i++) {
        const k = word.length - 1 - i;
        const firstLetter = word[i];
        const lastLatter = word[k];
        if (firstLetter !== lastLatter) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome('aaaa'))


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
    // add your own custom tests in here
    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));

    console.log("");

    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;