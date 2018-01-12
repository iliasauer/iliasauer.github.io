import '../styles/homework1.css';

const MY_QUOTES = [
  {
    quoteText: 'Imagination is more important than knowledge.',
    quoteAuthor: 'Albert Einstein',
  },
  {
    quoteText: 'I love acting. It is so much more real than life',
    quoteAuthor: 'Oscar Wilde',
  },
  {
    quoteText: 'Chop your own wood and it will warm you twice.',
    quoteAuthor: 'Henry Ford',
  },
  {
    quoteText: 'What we anticipated seldom occurs, what we least expected generally happens',
    quoteAuthor: 'Disraeli',
  },
];

const QUOTES_SOURCE = 'https://raw.githubusercontent.com/4skinSkywalker/Database-Quotes-JSON/master/quotes.json';

let quotes = null;
let quotesDict = null;
let authors = null;

function collectDict(quotesArray) {
  const dict = {};
  const numberOfQuotes = quotesArray.length;
  for (let i = 0; i < numberOfQuotes; i++) {
    const quote = quotesArray[i];
    const value = quote.quoteText;
    let key = quote.quoteAuthor;
    if (key === '') {
      key = 'Unknown author';
    }
    if (key in dict) {
      const values = dict[key];
      values.push(value);
    } else {
      dict[key] = [value];
    }
  }
  quotesDict = dict;
}


function storeQuotes(quotesArray) {
  collectDict(quotesArray);
  authors = Object.keys(quotesDict);
}

function getJson(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = () => {
    const status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
}

function getRandomInt(min, max) {
  const delta = max - min;
  return Math.floor((Math.random() * (delta + 1)) + min);
}

function selectRandomQuote(qts) {
  const numberOfQuotes = qts.length;
  const index = getRandomInt(0, numberOfQuotes - 1);
  return qts[index];
}

function setQuote(quote) {
  const quoteText = quote.quoteText;
  const quoteAuthor = quote.quoteAuthor;
  const quoteString = `"${quoteText}" - ${quoteAuthor}`;
  const elem = document.getElementById('quote');
  elem.innerHTML = quoteString;
}


function changeThirdPartyQuotes() {
  const select = document.getElementById('select');
  const quoteAuthor = select.value;
  let quote = null;
  if (quoteAuthor === 'Random author') {
    quote = selectRandomQuote(quotes);
  } else {
    const quoteText = quotesDict[quoteAuthor][0];
    quote = {
      quoteAuthor,
      quoteText,
    };
  }
  setQuote(quote);
}

let currentAuthorIndex = 0;

function changeBasicQuotes() {
  if (currentAuthorIndex >= authors.length) {
    currentAuthorIndex = 0;
  }
  const quoteAuthor = authors[currentAuthorIndex];
  currentAuthorIndex++;
  const quoteText = quotesDict[quoteAuthor][0];
  const quote = {
    quoteAuthor,
    quoteText,
  };
  setQuote(quote);
}

function changeQuote() {
  const elem = document.getElementById('checkbox');
  if (elem.checked) {
    changeThirdPartyQuotes();
  } else {
    changeBasicQuotes();
  }
}

function fillSelect() {
  const elem = document.getElementById('select');
  while (elem.lastChild.id !== 'random_option') {
    elem.removeChild(elem.lastChild);
  }
  const numberOfAuthors = authors.length;
  for (let i = 0; i < numberOfAuthors; i++) {
    const author = authors[i];
    const option = document.createElement('option');
    option.value = author;
    option.innerHTML = author;
    elem.appendChild(option);
  }
}


function loadQuotes() {
  getJson(QUOTES_SOURCE,
        (err, quotesArray) => {
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

function switchButtons() {
  const elem = document.getElementById('checkbox');
  const checkedElem = document.getElementById('select');
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
