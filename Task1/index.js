//start generate pascal triangle 
function pascalTriangle(n) {
    if (n == 1) {
        var result = [];
        result[0] = [1];
        return result;
    } else if (n == 2) {
        var result = [];
        result[0] = [1];
        result[1] = [1, 1];
        return result;
    } else {

        var result = [];
        result[0] = [1];
        result[1] = [1, 1];
        for (var row = 2; row < n; row++) {
            result[row] = [1];
            for (var col = 1; col <= row - 1; col++) {
                result[row][col] = result[row - 1][col] + result[row - 1][col - 1];
                result[row].push(1);
            }
        }
        return result;
    }
}

function generate() {
   
    var input = document.getElementById("input");
    var inputVal = input.value;
    var convertToNumber = Number(inputVal);
    if (Number.isInteger(convertToNumber) == true) {
        $("#input-triangle").append("This is your pascal triangle:" + "<br>");
        for (var i = 0; i < pascalTriangle(convertToNumber).length; i++) {
            $("#input-triangle").append(pascalTriangle(convertToNumber)[i] + "<br>");
        }
        $("#input-triangle").append("<hr/>");
        
    } else {
        alert("You have to input a positive integer");
    }
}
//end generate pascal triangle 


//start rotate
function rotate(n) {

    //create n arrays 
    var result = [];
    for (var row = 0; row < n; row++) {
        result[row] = [1];
    }

    for (var col = n - 1; col > 0; col--) {
        result[0][col] = 1;
    }

    let count = n - 1;
    for (var row = 1; row < n - 1; row++) {
        for (var col = 1; col < count; col++) {
            result[row][col] = result[row - 1][col] + result[row][col - 1];
        }
        count--;
    }
    return result;
}




function rotateGenerate() {
    var input = document.getElementById("input");
    var inputVal = input.value;
    var convertToNumber = Number(inputVal);
    if (Number.isInteger(convertToNumber) == true) {
        for (var i = 0; i < rotate(convertToNumber).length; i++) {
            $("#rotate-triangle").append(rotate(convertToNumber)[i] + "<br>");

        }
        $("#rotate-triangle").append("<hr/>");
    } else {
        alert("You have to input a positive integer");
    }
}

