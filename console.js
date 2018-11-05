// COPY THIS CODE TO CONSOLE OR MAKE A BOOKMARKLET OUT OF IT

function returnText () {
  var element = $('.inputPanel tbody tr td table tbody tr td div div')
  var fullText
  // sometimes the div contains 2 spans and sometimes 3 spans and we have to handle it
  if (element.childNodes.length === 2) {
    fullText = element.childNodes[0].innerHTML + element.childNodes[1].innerHTML
  } else {
    fullText = element.childNodes[0].innerHTML + element.childNodes[1].innerHTML + element.childNodes[2].innerHTML
  }
  return fullText
}

function copyToClipboard (text) {
  var dummy = document.createElement('input')
  document.body.appendChild(dummy)
  dummy.setAttribute('value', text)
  dummy.select()
  document.execCommand('copy')
  document.body.removeChild(dummy)
}


var full = returnText()
copyToClipboard(full)
console.log(full)
