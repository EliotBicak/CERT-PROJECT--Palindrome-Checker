function isPalindrome(input) {
    /* Convert the user's input into a string to be evaluated */
    let str = String(input);

    /* If the user doesn't input anything, exit the function early */
    if (str.trim() === "") {
        alert("Please input a value");
        return; 
    }

    /* Change all characters to lowercase and remove all non-alphnumeric characters*/
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    /* Split each character, reverse them, and rejoin them to compare to original input */
    let rev = str.split("").reverse().join("");

    if (str === rev) {
        return `<strong>${input}</strong> is a palindrome`
    } else {
        return `<strong>${input}</strong> is not a palindrome`
    }
}

const checkBtn = document.getElementById("check-btn").addEventListener("click", () => {
    let userInput = document.getElementById("text-input").value;
    let result = isPalindrome(userInput);
    
    /* Only update the resultDiv if there is a result */
    if (result) { 
        let resultDiv = document.getElementById("result");
        resultDiv.innerHTML = result;
        resultDiv.style.display = "block";
    }
});

