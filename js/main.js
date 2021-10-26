
// $(function () {
//     $("#navbar").load("/header.html");
// });
loadSideNav();
function loadSideNav() {
    
    var con = document.getElementById('navbar')
    ,   xhr = new XMLHttpRequest();
    
  
    xhr.onreadystatechange = function (e) { 
      if (xhr.readyState == 4 && xhr.status == 200) {
        con.innerHTML = xhr.responseText;
      }
    }
  
    xhr.open("GET", "/header.html", true);
    xhr.setRequestHeader('Content-type', 'text/html');
    xhr.send();
  }