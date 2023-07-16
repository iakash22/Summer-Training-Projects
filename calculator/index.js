let sign = ['+', '-', '/', '*', '%','²','^'];
function appendToResult(value) {
    let val = document.getElementById('result').value;
    if (val === "" && sign.find(ch => ch === value)) {
        console.log(value);
        return;
    }
    else
        document.getElementById('result').value += value;
}
function clearResult(ch) {
    var result = document.getElementById('result').value;
    if (ch === 'C') {
        document.getElementById('result').value = "";
    }
    else {
        document.getElementById('result').value = result.slice(0, -1);
    }
}
function squareAndRoot(value){
    var result = document.getElementById('result').value;
    if(result === "")return;

    if (value.includes('²')) {
        // Handle square
        var base = parseFloat(result);
        result = Math.pow(base, 2);
    }
    else if (value.includes('√')) {
        // Handle square root
        result = Math.sqrt(result);
    }
    else{
        if(result.includes("-")){
            result = result.slice(1);
        }
        else{
            result = "-" + result;
        }
    }
    document.getElementById('result').value = result;
}
function calculateResult() {
    var result = document.getElementById('result').value;

    
    if (result.includes('^')) {
        // Handle exponentiation
        var parts = result.split('^');
        var base = parseFloat(parts[0]);
        var exponent = parseFloat(parts[1]);
        result = Math.pow(base, exponent);
    }
    
    else {
        result = eval(result);
    }
    document.getElementById('result').value = result;
}

let ans = new String("abs");
ans.s