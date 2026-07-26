// ===== ProBinary Live Dashboard =====

const appId = 1089; // Public Deriv app ID

const ws = new WebSocket(
    `wss://ws.derivws.com/websockets/v3?app_id=${appId}`
);

const symbol = "R_10_1S";

const prices = [];
const digitCount = Array(10).fill(0);
const history = [];

ws.onopen = () => {

    ws.send(JSON.stringify({
        ticks: symbol,
        subscribe: 1
    }));

};

ws.onmessage = (event) => {

    const data = JSON.parse(event.data);

    if (!data.tick) return;

    const price = data.tick.quote;

    document.getElementById("livePrice").innerHTML = price;

    const digit = Number(
        price.toString().slice(-1)
    );

    document.getElementById("currentDigit").innerHTML = digit;

    history.unshift(digit);

    if (history.length > 100)
        history.pop();

    digitCount.fill(0);

    history.forEach(d => digitCount[d]++);

    for (let i = 0; i < 10; i++) {

        const percentage =
            history.length
                ? ((digitCount[i] / history.length) * 100).toFixed(1)
                : "0.0";

        const p = document.getElementById("p" + i);

        if (p)
            p.innerHTML = percentage + "%";

    }

    movePointer(digit);

};

function movePointer(digit){

    const pointer = document.getElementById("tickPointer");

    const digits = document.querySelectorAll(".digit");

    if(!digits[digit]) return;

    pointer.style.left =
        digits[digit].offsetLeft +
        (digits[digit].offsetWidth/2) - 6 + "px";

}
