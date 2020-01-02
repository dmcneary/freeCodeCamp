var res = {};
var quotes = [
    {
      "quote": "Don't worry about what anybody else is going to do. The best way to predict the future is to invent it.",
      "author": "Alan Kay"
    },
    {
      "quote": "Premature optimization is the root of all evil (or at least most of it) in programming.",
      "author": "Donald Knuth"
    },
    {
      "quote": "Lisp has jokingly been called 'the most intelligent way to misuse a computer'. I think that description is a great compliment because it transmits the full flavor of liberation: it has assisted a number of our most gifted fellow humans in thinking previously impossible thoughts.",
      "author": "Edsger Dijkstra, CACM, 15:10"
    },
    {
      "quote": "Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.",
      "author": "Mark Twain"
    },
    {
      "quote": "What Paul does, and does very well, is to take ideas and concepts that are beautiful in the abstract, and brings them down to a real world level. That's a rare talent to find in writing these days.",
      "author": "Jeff 'hemos' Bates, Director, OSDN; Co-evolver, Slashdot"
    },
    {
      "quote": "Since programmers create programs out of nothing, imagination is ouronly limitation. Thus, in the world of programming, the hero is the one who has great vision. Paul Graham is one of our contemporary heroes. He has the ability to embrace the vision, and to express it plainly. His works are my favorites, especially the ones describing language design. He explains secrets of programming, languages, and human nature that can only be learned from the hacker experience. This book shows you his great vision, and tells you the truth about the nature of hacking.",
      "author": "Yukihiro 'Matz' Matsumoto, creator of Ruby"
    },
    {
      "quote": "No problem should ever have to be solved twice.",
      "author": "Eric S. Raymond, How to become a hacker"
    },
    {
      "quote": "It is said that the real winner is the one who lives in today but able to see tomorrow.",
      "author": "Juan Meng, Reviewing 'The future of ideas' by Lawrence Lessig"
    },
    {
      "quote": "Fools ignore complexity. Pragmatists suffer it. Some can avoid it. Geniuses remove it.",
      "author": "Alan J. Perlis (Epigrams in programming)"
    },
    {
      "quote": "A little learning is a dangerous thing.",
      "author": "Alexander Pope"
    },
    {
      "quote": "Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter.",
      "author": "Eric Raymond"
    }
  ];

const genQuote = () => {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  res.quote = quotes[randomIndex].quote;
  res.author = quotes[randomIndex].author;
  $("q").text(res.quote);
  $("cite").text(res.author);
}

$("#new-quote").click((e) => {
  e.preventDefault();
  genQuote();
});

$(document).ready(genQuote());