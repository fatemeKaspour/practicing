(function(){
    window.app = window.app || {};
    
    // make an active button
    var btn = document.getElementById("active-btn");
    btn.addEventListener("click" , function(event){
        alert("Hello world!");
    })

})();