

var quotes = [
    "this is the first quote",
    "this is the second quote",
    "this is the third quote",
    "this is the fourth quote",
    "this is the fifth quote",
    "this is the sixth quote",
    "this is the seventh quote",
    "this is the eighth quote",
    "this is the ninth quote",
    "this is the tenth quote",
    "this is the eleventh quote",
    "this is the twelve quote",
    "this is the thirteenth quote",
    "this is the fourteen quote",
    "this is the fifteen quote",
    "this is the sixteenth quote",
    "this is the seventeenth quote",
    "this is the eighteen quote",
    "this is the nineteenth quote"
]




function newQuote() {
    var random = Math.floor(Math.random()*(quotes.length))
    document.getElementById("quoteDisplay").innerHTML = quotes[random-1]
    console.log(random)
}

