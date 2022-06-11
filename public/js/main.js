let displayName

function printStatus(){
  document.querySelector('#msgLoginStatus').innerHTML = `Welcome, <a href="/login">${displayName}</a>`
  document.querySelector('#userName').value = displayName
}

if(localStorage.getItem('lsName')){
  displayName = localStorage.getItem('lsName')
  printStatus()
}else{
  displayName = 'Guest'
  printStatus()
}
