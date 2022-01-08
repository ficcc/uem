window.onload = initial

var data
const api_url = "https://type.fit/api/quotes"

function initial() {
  console.log("JS loaded")
  generateQuotes()
}

async function generateQuotes() {
  const response = await fetch(api_url)
  const data = await response.json()
  const datalength = data.length
  const randomnumber = Math.floor(Math.random() * datalength)
  const currentQuote = data[randomnumber].text + " " + data[randomnumber].author
  const currentText = data[randomnumber].text
  const currentAuthor = data[randomnumber].author

  document.getElementById("text").innerText = "" + " " + data[randomnumber].text
  document.getElementById("author").innerText =
    "Author : " + " " + data[randomnumber].author
}
