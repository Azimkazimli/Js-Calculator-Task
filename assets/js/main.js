let input = document.querySelector(".inp");

const appendToDisplay = (value) => {
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
