function percentage(){
    let mark1 = document.getElementById("mark1").value
    let mark2 = document.getElementById("mark2").value 
    let marks = mark2 / mark1 * 100
    document.getElementById("percentage").innerHTML = marks
  
  if (marks >= 80 && marks <= 100) {
  document.getElementById("result").innerHTML = "<h1> A+ </h1>"
}
else if (marks >= 70 && marks < 80) {
  document.getElementById("result").innerHTML = "<h1> A </h1>"
}
else if (marks >= 60 && marks < 70) {
  document.getElementById("result").innerHTML = "<h1> B </h1>"
}
else if (marks>= 60 && marks < 50) {
  document.getElementById("result").innerHTML = "<h1> C </h1>"
}
else{ 
  document.getElementById("result").innerHTML = "<h1> Fail </h1>"
}
  }