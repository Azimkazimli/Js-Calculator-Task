let input = document.querySelector(".inp");

const calc = (value) => {
    input.value += value;
}

const clearDisplay = () => {
    input.value = "";
}


const calculate = () => {
    const input = document.querySelector(".inp");
    let result = input.value.replace(/÷/g, "/").replace(/x/g, "*")

    try {
        input.value = eval(result);
    } catch {
        input.value = "Error";
    }
}

const toggleSign = () => {
    let value = input.value;

    let match = value.match(/(\(-?\d+(\.\d+)?\)|-?\d+(\.\d+)?)$/);

    if (!match) return;

    let number = match[0];

    let togglee;

    if (number.startsWith("(-") && number.endsWith(")")) {
        togglee = number.slice(2, -1);
    }

    else if (number.startsWith("-")) {
        togglee = number.slice(1);
    }

    else {
        togglee = `(-${number})`;
    }

    input.value = value.slice(0, value.length - number.length) + togglee;
}
const percent = () => {
    let value = input.value;
    let match = value.match(/(\d+(\.\d+)?)$/);
    if (!match) return;

    let number = match[0];
    let percentValue = parseFloat(number) / 100;

    input.value = value.slice(0, value.length - number.length) + percentValue;
}
