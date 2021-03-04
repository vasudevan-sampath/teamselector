members = ['LP' , 'Anubhav' , 'Deepak' , 'Ila' , 'Shalini' , 'Niharika' , 'Vasu']

function randomize()
{
  members.sort(function(a, b){return 0.5 - Math.random()});

  document.getElementById("k").style.margin  = "0px";

  document.getElementById("c").style.display = "block";

  document.getElementById("name 1").innerHTML = members[0];
  document.getElementById("name 2").innerHTML = members[1];
  document.getElementById("name 3").innerHTML = members[2];
  document.getElementById("name 4").innerHTML = members[3];
  document.getElementById("name 5").innerHTML = members[4];
  document.getElementById("name 6").innerHTML = members[5];
  document.getElementById("name 7").innerHTML = members[6];

}