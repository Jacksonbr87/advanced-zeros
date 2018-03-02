module.exports = function getZerosCount(number, base) {

    var zerosCount = number;
    var result = 0;

    var baseNumber = base;
    var i = 1;

    //-----------------------------//
    // maxEasyDivider -------------//
    //-----------------------------//

    var maxEasyDivider = 2;
    var num = baseNumber;
    var a = new Array();

    do {
        if (num % maxEasyDivider == 0) {
            a[i] = maxEasyDivider;
            i++;
            num = num / maxEasyDivider;
        } else {
            maxEasyDivider++;
        }
    }
    while (maxEasyDivider < num);
    a[i] = maxEasyDivider;

    console.log("maxEasyDivider = " + maxEasyDivider + " of Base = " + baseNumber);

    //-----------------------------//
    // maxDivider -----------------//
    //-----------------------------//

    var maxDivider = 0;

    for (i = baseNumber; i > 0; i--) {
        if (baseNumber % i == 0) {
            if (i == baseNumber) {
                continue;
            } else {
                maxDivider = i;
                console.log("maxDivider = " + maxDivider + " of Base = " + baseNumber);
                break;
            }
        }
    }
    console.log("FINAL: maxDivider = " + maxDivider + " of Base = " + baseNumber);

    //------------------------------------------------------------//
    // Check if maxEasyDivider has a degree for higher divider ---//
    //------------------------------------------------------------//

    var degreeOfDivider = 1;
    var degreeOfDividerTemp = 1;

    for (i = 2; i <= 8; i++) {
        degreeOfDividerTemp = Math.pow(maxEasyDivider, i);

        if (degreeOfDividerTemp > baseNumber) {
            break;
        }

        if (baseNumber % degreeOfDividerTemp === 0) {
            degreeOfDivider = i;
            console.log("degreeOfDivider = " + degreeOfDivider + " of maxEasyDivider = " + maxEasyDivider);
        }
    }
    console.log("FINAL: degreeOfDivider = " + degreeOfDivider + " of maxEasyDivider = " + maxEasyDivider);

    //-----------------------------//
    // Easy zero counter ----------//
    //-----------------------------//

    do {
        zerosCount = Math.floor(zerosCount / maxEasyDivider);
        result = result + zerosCount;
    } while (zerosCount >= maxEasyDivider);

    result = Math.floor(result / degreeOfDivider);
    console.log("result = " + result);
    return (result);
}