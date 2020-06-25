var content = document.getElementById("main-content");
var button = document.getElementById("read-more");


button.onclick = function(){

    if(content.className=="open"){
        content.className="";
        button.innerHTML="Show More";
    }
    
    else{
        content.className="open";
        button.innerHTML="Show Less";
    }
}

