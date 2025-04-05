function runCode(){
    const code = document.getElementById("code").value;
    const output= document.getElementById("output");
    output.textContent=`you entered ${code.length} characters.`;
    //TODO: run the code and display the output in the output div.
}