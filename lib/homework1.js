const MY_QUOTES = [
    {
        "quoteText": "Imagination is more important than knowledge.",
        "quoteAuthor": "Albert Einstein"
    },
    {
        "quoteText": "I love acting. It is so much more real than life",
        "quoteAuthor": "Oscar Wilde"
    },
    {
        "quoteText": "Chop your own wood and it will warm you twice.",
        "quoteAuthor": "Henry Ford"
    },
    {
        "quoteText": "What we anticipated seldom occurs, what we least expected generally happens",
        "quoteAuthor": "Disraeli"
    }
];

const QUOTES_SOURCE = 'https://raw.githubusercontent.com/4skinSkywalker/Database-Quotes-JSON/master/quotes.json';

var quotes = null;
var quotes_dict = null;
var authors = null;

function loadQuotes() {
    getJson(QUOTES_SOURCE,
        function (err, quotesArray) {
            if (err !== null) {
                alert('Sorry, the source of quotes is unavailable. Please, try later.');
            } else {
                quotes = quotesArray.slice();
                storeQuotes(quotes);
                changeQuote();
                fillSelect();
            }
        });
}

function changeQuote() {
    var elem = document.getElementById('checkbox');
    if (elem.checked) {
        changeThirdPartyQuotes();
    } else {
        changeBasicQuotes();
    }

}

var currentAuthorIndex = 0;

function changeBasicQuotes() {
    if (currentAuthorIndex >= authors.length) {
        currentAuthorIndex = 0;
    }
    var quoteAuthor = authors[currentAuthorIndex];
    currentAuthorIndex++;
    var quoteText = quotes_dict[quoteAuthor][0];
    var quote = {
        "quoteAuthor": quoteAuthor,
        "quoteText": quoteText
    };
    setQuote(quote)
}


function changeThirdPartyQuotes() {
    var select = document.getElementById('select');
    var quoteAuthor = select.value;
    var quote = null;
    if (quoteAuthor === "Random author") {
        quote = selectRandomQuote(quotes);
    } else {
        var quoteText = quotes_dict[quoteAuthor][0];
        quote = {
            "quoteAuthor": quoteAuthor,
            "quoteText": quoteText
        };
    }
    setQuote(quote);
}


function storeQuotes(quotesArray) {
    collectDict(quotesArray);
    authors = Object.keys(quotes_dict)
}


function fillSelect() {
    var elem = document.getElementById('select');
    while (elem.lastChild.id !== 'random_option') {
        elem.removeChild(elem.lastChild);
    }
    var numberOfAuthors = authors.length;
    for (var i = 0; i < numberOfAuthors; i++) {
        var author = authors[i];
        var option = document.createElement('option');
        option.value = author;
        option.innerHTML = author;
        elem.appendChild(option);
    }
}


function getJson(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
}


function getRandomInt(min, max) {
    var delta = max - min;
    return Math.floor(Math.random() * (delta + 1) + min);
}


function setQuote(quote) {
    var quoteText = quote['quoteText'];
    var quoteAuthor = quote['quoteAuthor'];
    var quoteString = '"' + quoteText + '"' + ' - ' + quoteAuthor;
    var elem = document.getElementById('quote');
    elem.innerHTML = quoteString;
}


function collectDict(quotesArray) {
    var dict = {};
    var numberOfQuotes = quotesArray.length;
    for (var i = 0; i < numberOfQuotes; i++) {
        var quote = quotesArray[i];
        var value = quote['quoteText'];
        var key = quote['quoteAuthor'];
        if (key === '') {
            key = 'Unknown author';
        }
        if (key in dict) {
            var values = dict[key];
            values.push(value);
        } else {
            dict[key] = [value];
        }
    }
    quotes_dict = dict;
}


function selectRandomQuote(quotes) {
    var numberOfQuotes = quotes.length;
    var index = getRandomInt(0, numberOfQuotes - 1);
    return quotes[index]
}


function switchButtons() {
    var elem = document.getElementById('checkbox');
    var checkedElem = document.getElementById('select');
    if (elem.checked) {
        checkedElem.style.display = 'inline-block';
        loadQuotes();
    } else {
        checkedElem.style.display = 'none';
        quotes = MY_QUOTES.slice();
        storeQuotes(quotes);
        currentAuthorIndex = 0;
        changeQuote();
    }
}


function sortQuotesByAuthors() {
    authors = authors.sort();
    currentAuthorIndex = 0;
    fillSelect();
}

switchButtons();

const switchButton = document.getElementById('switch_button');
switchButton.addEventListener('click', changeQuote);
const sortButton = document.getElementById('sort_button');
sortButton.addEventListener('click', sortQuotesByAuthors);
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('click', switchButtons);
