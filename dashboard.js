const percentages = [
    9.6, 10.4, 11.5, 8.7, 9.9,
    12.1, 10.8, 7.5, 9.2, 10.3
];

let currentDigit = 0;

function updateDigits() {

    for (let i = 0; i < 10; i++) {

        let change = (Math.random() * 2 - 1).toFixed(1);

        percentages[i] = Math.max(
            1,
            (Number(percentages[i]) + Number(change)).toFixed(1)
        );

        document.getElementById("p" + i).innerHTML =
            percentages[i] + "%";
    }

}


function moveTick() {

    const pointer = document.getElementById("tickPointer");

    if (!pointer) return;

    const digits = document.querySelectorAll(".digit");

    const selected = digits[currentDigit];

    const position = selected.offsetLeft +
    (selected.offsetWidth / 2);

    pointer.style.left = position + "px";


    currentDigit++;

    if (currentDigit > 9) {
        currentDigit = 0;
    }

}


setInterval(updateDigits, 1000);

setInterval(moveTick, 700);
