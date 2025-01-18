const quotes = [
  {
    quote: "The only way to go great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
  },
  {
    quote: "That which does not kill us makes us stronger.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "In the middle if every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
];

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteText.textcontent = `"${randomQuote.quote}"`;
  authorText.textContent = `- ${randomQuote.author}`;
}

newQuoteBtn.addEventListener("click", getRandomQuote);
