function generate() {
   var quotes = {
      "- Madeline Miller, The Song of Achilles": '"Bury us, and mark our names above. Let us be free."',
      "- John Galsworthy": '"Life calls the tune, we dance."',
      "- C.S. Lewis": '“I was not born to be free---I was born to adore and obey.”',
   }

   var authors = Object.keys(quotes);
   //console.log(authors);

   var author = authors[Math.floor(Math.random() * authors.length)];

   var quote = quotes[author];
   document.getElementById("quote").innerHTML = quote;
   document.getElementById("author").innerHTML = author;
}
