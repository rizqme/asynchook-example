
let express = require("express");
let tracker = require("./tracker");

let app = express();
app.use(tracker.createTracker());
app.get("/hello", (req, res) => {
    setTimeout(() => {
        errorGeneratingFunction(1);
        res.end("ok");
    }, 1);
});

app.get("/world", (req, res) => {
    setTimeout(() => {
        errorGeneratingFunction(2);
        res.end("hap");
    }, 1);
});

function errorGeneratingFunction(x) {
    setImmediate(() => {
        if(x == 1)
            throw new Error("Ooops!");
    })
}

app.listen(8000, () => {
    console.log("app started.");
});