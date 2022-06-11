let displayName
document.querySelector('#btnLogin').addEventListener('click', usrLogin)
document.querySelector('#btnLogout').addEventListener('click', usrLogout)

function usrLogin(){
  if(!document.querySelector('#txtName').value){
    displayName = 'Guest'
    printStatus()
  } else {
    localStorage.setItem('lsName', document.querySelector('#txtName').value)
    displayName = localStorage.getItem('lsName')
    printStatus()
  }
}

function usrLogout(){
  localStorage.removeItem('lsName')
  displayName = 'Guest'
  printStatus()
}

function printStatus(){
  document.querySelector('#msgLoginStatus').innerHTML = `Welcome, <a href="/">${displayName}</a>`
}

if(localStorage.getItem('lsName')){
  displayName = localStorage.getItem('lsName')
  printStatus()
}else{
  displayName = 'Guest'
  printStatus()
}