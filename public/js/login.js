let displayName
document.querySelector('#btnLogin').addEventListener('click', usrLogin)
document.querySelector('#btnLogout').addEventListener('click', usrLogout)

function usrLogin(){
  if(!document.querySelector('#txtName').value){
    printStatus()
  } else {
    localStorage.setItem('lsName', document.querySelector('#txtName').value)
    displayName = localStorage.getItem('lsName')
    printStatus()
  }
}

function usrLogout(){
  localStorage.removeItem('lsName')
  printStatus()
}

function printStatus(){
  document.querySelector('#msgLoginStatus').innerHTML = `Welcome, <a href="/">${displayName || "Guest"}</a>`
}

if(localStorage.getItem('lsName')){
  displayName = localStorage.getItem('lsName')
  printStatus()
}else{
  printStatus()
}
