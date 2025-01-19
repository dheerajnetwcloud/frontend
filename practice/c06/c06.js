
 function checkInput() {
    var input = document.getElementById("input1").value;
    var feedback = document.getElementById("feedback");

    if(input.length < 2){
        
        feedback.textContent = "Input is too short";
        return;
    }
    
    if (input === "123") {
        feedback.textContent = "Correct";
    }else{
        feedback.textContent = "Incorrect";
    }
}

function checkInput2() {

    var input = document.getElementById("input2").value;
    var feedback = document.getElementById("feedback2");
    if(input.length < 2){
        
        feedback.textContent = "Input is too short!!";
        return;
    }
    
    if (input === "123") {
        feedback.textContent = "Correct!!";
    }else{
        feedback.textContent = "Incorrect!!";
    }
}

var input = document.getElementById("input2")

input.onblur = checkInput2;

var but2 = document.getElementById("button2")
but2.addEventListener("click", checkInput2, false);


function checkInput3(Length) {
    var input = document.getElementById("input2").value;
    var feedback = document.getElementById("feedback3");
    if(input.length < Length){
       feedback.textContent = "Input is too short!!";
    }
}

var but3 = document.getElementById("button3");
but3.addEventListener("click", function(){checkInput3(3);}, false);

var link = document.getElementById("link1");

link.onclick = function(){
    alert("You clicked the link");
    return false;
};

var link2 = document.getElementById("ul1");

link2.onclick = function(){
    alert("You clicked the ul1");
    return false;
};

var link3 = document.getElementById("li1");

link3.onclick = function(){
    alert("You clicked the ul1");
    return false;
};


function checkInput4(e){
   var element =  e.target;
   if(element.value.length < 2){
       element.nextElementSibling.nextElementSibling.textContent = "Input is too short";
       return;
   }
   element.nextElementSibling.nextElementSibling.textContent = "";
}

var input4 = document.getElementById("input4");
input4.addEventListener("blur", checkInput4, false);





