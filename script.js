function encrypt() {
  const encryptMessage = document.querySelector('#encrypt-message')
  let newvalue = encryptMessage.value.split('').map(letter => {
    if (letter == 'e') return 'enter'
    if (letter == 'a') return 'ai'
    if (letter == 'i') return 'imes'
    if (letter == 'o') return 'ober'
    if (letter == 'u') return 'ufat'
    return letter
  })
  const inputMessage = document.querySelector('#input-message')
  inputMessage.value = newvalue.join('')
  console.log('newvalue', newvalue)
}

function decrypt() {
  const encryptMessage = document.querySelector('#encrypt-message')
  let encryptMessagevalue = encryptMessage.value
  encryptMessagevalue = encryptMessagevalue.replace(/enter/g, 'e')
  encryptMessagevalue = encryptMessagevalue.replace(/ai/g, 'a')
  encryptMessagevalue = encryptMessagevalue.replace(/imes/g, 'i')
  encryptMessagevalue = encryptMessagevalue.replace(/ober/g, 'o')
  encryptMessagevalue = encryptMessagevalue.replace(/ufat/g, 'u')
  const inputMessage = document.querySelector('#input-message')
  inputMessage.value = encryptMessagevalue
}

function copy() {
  var inputMessage = document.getElementById('input-message')
  inputMessage.select()
  document.execCommand('copy')
}
