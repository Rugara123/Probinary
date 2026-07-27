// ===== ProBinary Live Chart =====

const appId = YOUR_APP_ID;
const symbol = "R_10_1S";

const socket = new WebSocket(
  `wss://ws.derivws.com/websockets/v3?app_id=${appId}`
);

const chart = LightweightCharts.createChart(
  document.getElementById("chart"),
  {
    width: document.getElementById("chart").clientWidth,
    height: 240,
    layout: {
      background: { color: "#081321" },
      textColor: "#ffffff"
    },
    grid: {
      vertLines: { color: "#1b2b45" },
      horzLines: { color: "#1b2b45" }
    },
    rightPriceScale: {
      borderColor: "#1b2b45"
    },
    timeScale: {
      borderColor: "#1b2b45",
      timeVisible: true,
      secondsVisible: true
    }
  }
);

const series = chart.addLineSeries({
  color: "#00e6a8",
  lineWidth: 2
});

let points = [];

socket.onopen = () => {
console.log("Connected to Deriv WebSocket");
  socket.send(JSON.stringify({
    ticks: symbol,
    subscribe: 1
  }));

};

socket.onmessage = (event) => {

  console.log(event.data);

  const data = JSON.parse(event.data);

  if (!data.tick) return;

  const price = Number(data.tick.quote);

  document.getElementById("livePrice").textContent = price;

  points.push({
    time: Math.floor(Date.now() / 1000),
    value: price
  });

  if (points.length > 100) {
    points.shift();
  }

  series.setData(points);

};

window.addEventListener("resize", () => {
  chart.applyOptions({
    width: document.getElementById("chart").clientWidth
  });
});
