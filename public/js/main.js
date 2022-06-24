let displayName = localStorage.getItem('lsName') || 'Guest'

let selfMessages = Array.from(document.querySelectorAll('.msgUserName')).filter(x=> x.innerHTML === displayName)
selfMessages.forEach(x => x.parentNode.classList.add('self'))

function printStatus(){
  document.querySelector('#msgLoginStatus').innerHTML = `Welcome, <a href="/login">${displayName || "Guest"}</a>`
  document.querySelector('#userName').value = displayName
}

if(localStorage.getItem('lsName')){
  displayName = localStorage.getItem('lsName')
  printStatus()
}else{
  displayName = 'Guest'
  printStatus()
}

document.querySelector('.messages').scrollTop = document.querySelector('.messages').scrollHeight
