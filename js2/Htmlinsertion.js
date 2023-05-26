// there are different insertion methods which helps to insert elements in DOM
let c = document.getElementsByTagName('div')[0]
// c.innerHTML = c.innerhtml + '<h1>hello beatiful people</h1>'



let div = document.createElement('div') //  we use create element if we want to insert multiple element
div.innerHTML = '<h2>hello my name is sardar khan</h2>'
//c.appendChild(div) // append at the end of the node

//c.prepend(div) // it will inser at the begenning of a node

//c.before wwill insert before node and

c.replaceWith(div)
 //c.after(div) //will insert after node