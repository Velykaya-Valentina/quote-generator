



function generate() {
   const url = "https://api.quotable.io/random";

   fetch(url)
      .then(response => {
         if (response.ok)
            return response.json();
         else
            console.log(response.status);
         console.log(response);
      })

      .then(data => {
         //console.log(data);
         //console.log(data.content);


         document.getElementById("quote").innerHTML = data.content;
         document.getElementById("author").innerHTML = data.author;
      })


}
