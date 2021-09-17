function calculate(){
  var p;
  var n;
  var r;
  var si;

  p = parseInt(document.getElementById("principal").value);
  n = parseInt(document.getElementById("ano").value);
  r = parseInt(document.getElementById("taxa").value);

  si = (p*n*r)/100;
  document.getElementById("res").innerHTML=si;

}
