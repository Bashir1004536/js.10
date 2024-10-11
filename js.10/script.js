



var arr = ["2", 2, "a", 3, 6, true, false, [1, "2", [1, "a", "b", true, false], "a"], false, true];

function countElements(arr) {
    let countOfNum = 0;
    let countOfStr = 0;
    let countOfBool = 0;

    function countRecursive(array) {
        for (let element of array) {
            if (typeof element === 'number') {
                countOfNum++;
            } else if (typeof element === 'string') {
                countOfStr++;
            } else if (typeof element === 'boolean') {
                countOfBool++;
            } else if (Array.isArray(element)) {
                countRecursive(element); 
            }
        }
    }

    countRecursive(arr);

    alert(`Numbers: ${countOfNum} "\n"Booleans: ${countOfBool}"\n"Strings: ${countOfStr}`);
  
}

countElements(arr);
