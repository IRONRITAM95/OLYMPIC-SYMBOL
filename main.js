o =document.getElementById("olympics");
p =o.getContext("2d");

p.beginPath();
p.strokeStyle="black";
p.lineWidth= 5;
p.rect(150,150,500,300);
p.stroke();

p.beginPath();
p.strokeStyle="blue";
p.lineWidth= 5;
p.arc(275,275,40,0,2*Math.PI);
p.stroke();

p.beginPath();
p.strokeStyle="yellow";
p.lineWidth= 5;
p.arc(315,315,40,0,2*Math.PI);
p.stroke();

p.beginPath();
p.strokeStyle="black";
p.lineWidth= 5;
p.arc(360,275,40,0,2*Math.PI);
p.stroke();

p.beginPath();
p.strokeStyle="green";
p.lineWidth= 5;
p.arc(410,315,40,0,2*Math.PI);
p.stroke();

p.beginPath();
p.strokeStyle="red";
p.lineWidth= 5;
p.arc(445,275,40,0,2*Math.PI);
p.stroke();