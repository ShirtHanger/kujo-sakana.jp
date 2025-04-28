alert("Welcome!")

const blogButtons = document.querySelectorAll('button')
const blogTitles = document.querySelectorAll('h2')
const blogImages = document.querySelectorAll('img')
const blogParagraphs = document.querySelectorAll('p')

for (blogButton of blogButtons) {

  blogButton.addEventListener('click', () => {
    alert("Thank you for reading!")
  })

}

for (blogTitle of blogTitles) {

  blogTitle.addEventListener('click', () => {
    alert("You can read more on this at kujo-sakana.jp")
  })

} 

for (blogImage of blogImages) {

  blogImage.addEventListener('click', () => {
    alert("Source for copyrighted images can be found below!")
  })
}

for (blogParagraph of blogParagraphs) {

  blogParagraph.addEventListener('click', () => {
    alert("References can be found at the bottom of the page!")
  })

}

// Depricated jQuery code

// $("button").on("click",
//   function()
//     {alert("Thank you for reading!")})
// $("h2").on("click",
//   function()
//     {alert("You can read more on this at kujo-sakana.jp")})
// $("img").on("click",
//   function()
//     {alert("Source for copyrighted images can be found below!")})
// $("p").on("click",
//   function()
//     {alert("References can be found at the bottom of the page!")})