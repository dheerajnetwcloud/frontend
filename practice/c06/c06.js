
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



var input5 = document.getElementById("input5");
input5.addEventListener("change", checkInput4, false);

input5.addEventListener("blur", function(){
    alert("You left the input");
}, false);  

var input6 = document.getElementById("myform");
input6.addEventListener("submit", function(){
    alert("You clicked the button");
}, false);


var input7 = document.getElementById("button6");

input7.addEventListener("click", function(){
    var list2 = document.getElementById("add_fruits");
    var fruit  = document.getElementById("input6").value;
    var newElement = document.createElement("li");
    var newText = document.createTextNode(fruit);
    newElement.appendChild(newText);

    list2.appendChild(newElement);
    document.getElementById("input6").value = "";

    var count = document.getElementById("fruits_count");
    count.textContent = list2.getElementsByTagName("li").length;



}, false);

var input8 = document.getElementById("add_fruits");

input8.addEventListener("DomNodeInserted", function(){  
    alert("New fruit added");
   var list = document.getElementById("add_fruits");
   var count = document.getElementById("fruits_count");
    count.textContent = list.getElementsByTagName("li").length;
}, false);





