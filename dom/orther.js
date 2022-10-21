//document.title
//document.head
document.title = "Welcome to JavaScript"
console.log(document.title)
console.log(document.head)


//insertBefore
//parentNode.insertBefore(newNode, existingNode)
const ul = document.createElement("ul")
ul.appendChild(document.createElement("li"))
ul.appendChild(document.createElement("li"))
ul.appendChild(document.createElement("li"))
document.body.insertBefore(ul, document.querySelector("h3"))

const span = document.createElement("h1")
span.textContent = "Hello mấy cưng"

document.body.replaceChild(span, ul)