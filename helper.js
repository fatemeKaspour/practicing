(function(){
    window.app = window.app || {};
    window.app.helper = {
        creatElement : creatElement,
    };
    /**
    * @return{HTMLElement}
    * @param {Otring} tagName
    * @param {Object} attribute
    * @param {HTMLElement | String | Array} content
    */
    // ******************function creatElement

   function creatElement (tagName , attribute , content){
       var elem = document.createElement(tagName);
       for(var key in attribute){
           elem.setAttribute(key , attribute[key]);
       }
       if (typeof content !== "undefined"){
            if (content instanceof HTMLElement){
                elem.appendChild(content);
            }else{
                elem.innerText = content;
            };
       }
       return elem;
       
   }

})();