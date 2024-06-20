const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
const resultBox = document.getElementById("result-box");
checkBtn.addEventListener("click",()=>{
    const input = textInput.value;
    const cleanedInput = input.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    const reversedInput = cleanedInput.split('').reverse().join('');

    if(input==="")
    {
        alert("Please input a value");
        return;
    }
    
    if(cleanedInput===reversedInput)
    {
        result.innerText = `"${input}" is a palindrome`;
    }
    else
    {
        result.innerText = `"${input}" is not a palindrome`;
    }

    resultBox.style.display='flex';
})