var code = Math.random();

function init(){
alert("Jono is a beast");
codegenerator();
}

function codegenerator(){
code = Math.floor(Math.round(code * 10000 + 1));
document.getElementById("answer").value = code;
}
