alert("Welcome!")

const blogButton = document.querySelector('button')
const blogTitle = document.querySelector('h2')
const blogImage = document.querySelector('img')
const blogParagraph = document.querySelector('p')

blogButton.addEventListener('click', async () => {
      alert("Thank you for reading!")
  }
)

blogTitle.addEventListener('click', async () => {
      alert("You can read more on this at kujo-sakana.jp")
  }
)
blogImage.addEventListener('click', async () => {
      alert("Source for copyrighted images can be found below!")
  }
)
blogParagraph.addEventListener('click', async () => {
      alert("References can be found at the bottom of the page!")
  }
)

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