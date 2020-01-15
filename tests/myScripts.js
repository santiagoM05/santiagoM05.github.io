document.write("Loop A <br/>");
var i;
for(i=0; i<31; i++){
  document.write("my loop:" + i + "<br/>");
}

document.write("Loop B <br/>");

var j;
for(j=200; j>149; j--){
  document.write("my loop:" + j + "<br/>");
}

document.write("Loop C <br/>");
var k;
for(k=100; k<5001; k+=100){
  document.write("third loop:" + k +"<br/>")
}

document.write("Power loop <br/>");
var p;
for(p= 0; p<9; p++){
var ans = Math.pow(2,p);
  document.write("the power is:" + ans + "<br/>");
}

document.write("Square loop <br/>");
var l;
for(l= 0; l<9; l++){
var ans = Math.sqrt(l);
  document.write("the square is:" + ans + "<br/>");
}

document.write("Random loop <br/>");
var n;
for(n= 0; n<9; n++){
var ans = Math.random(n);
  document.write("random:" + ans + "<br/>");
}
