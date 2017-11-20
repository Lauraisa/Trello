// Ingresando text al twitter
var textMsm = document.getElementById('msm');
msm.addEventListener("keydown" ,contChart);

function contChart() {
    var conter =document.getElementById("conter");
    var limite = 140;
    var longitud = document.getElementById("msm").value.length;
    document.getElementById("conter").innerHTML= limite-longitud;

    if(longitud>=140){
        conter.style.color="red";
        button.disabled=true;
    }
    else if(longitud>=130){
        conter.style.color="green";
        button.disabled=true;
    }
    else if(longitud>=120){
        conter.style.color="blue";
        button.disabled=false;
    }
    else{
        conter.style.color="blue";
        button.disabled = false;            
    }
};
var button = document.getElementById("button");
button.disabled= true;
button.addEventListener("click",submit);

var post_son=document.createElement("p");
var post=document.querySelector(".post");
var contenido=post.appendChild(post_son);
function submit(event){
    contenido.innerHTML=msm.value+'<br><br>'+moment().format('LT');
    
}

msm.addEventListener('keyup', height);

// Para reajustar el tamaño de msm

function height(event) {
    msm.style.height = 'auto';
    msm.style.height = msm.scrollHeight + 'px';
}





 