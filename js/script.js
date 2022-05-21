(function(){

    'use strict';
    
    var hScreen = document.querySelector('.screen-height');
    var hInner = document.querySelector('.window-innerHeight');
    var hOuter = document.querySelector('.window-outerHeight');

    var wScreen = document.querySelector('.screen-width');
    var wInner = document.querySelector('.window-innerWidth');
    var wOuter = document.querySelector('.window-outerWidth');
    
    var counter = 0;
    
    var checkMark = document.querySelector('.container .material-icons');
    
    function setLayout(){
        
        var tripleHeight = document.querySelectorAll('.row-x-3');
        var normalHeight = document.querySelectorAll('.row-x-1');
        var halfHeight = document.querySelectorAll('.row-x-half');
        var container = document.querySelectorAll('.container');
        var widthObj = document.querySelector('.width-obj');

        setHeight(container, window.innerHeight);
        setHeight(tripleHeight, ((window.innerHeight / 7)*3));
        setHeight(normalHeight, ((window.innerHeight / 7)*1));
        setHeight(halfHeight, ((window.innerHeight / 7)*0.5));   
        widthObj.style.top = ((window.innerHeight / 7)*3) + 'px';
        checkMark.style.top = ((window.innerHeight / 7)*3) + 'px';
    }
    
    function setHeight(array, height){
        
        for(var i=0; i<array.length; i++ ){
            array[i].style.height = height + 'px';
        }
    }

    function setData(){
        
        calculateValues(hScreen, screen.height);
        calculateValues(hInner, window.innerHeight);
        calculateValues(hOuter, window.outerHeight);
        calculateValues(wScreen, screen.width);
        calculateValues(wInner, window.innerWidth);
        calculateValues(wOuter, window.outerWidth);
    }
    
    function calculateValues(element, value){
        
        for(var i=0; i <= value; i++){
            
            
            (function (i) {
                setTimeout(function () {
                    element.innerHTML = i;
                    checkAccomplishment(element, value);
                }, 1*i);
            })(i);
        }
    }
    
    function checkAccomplishment(el, val){
        
        if(el.innerHTML == val){

            counter++;

            if(counter == 6){
                checkMark.classList.add('checked');
                showObjects();
            }
        }
    }

    var eventCounter = 0;
    var doit;

    function resizedw(){
        counter = 0;
        checkMark.classList.remove('checked');
        setData();
    }
    
    window.onresize = function(){
      clearTimeout(doit);
      doit = setTimeout(resizedw, 500);
    };
    
    function showObjects(){
        
        var objH = document.querySelector('.height-obj');
        var objW = document.querySelector('.width-obj');
                
        for(var i=0; i <= window.innerHeight; i++){
            
            (function (i) {
                setTimeout(function () {
                                        
                    objH.style.height = i + 'px';
                    
                }, 1*i);
            })(i);
        }
        
        for(var i=0; i <= window.innerWidth; i++){
            
            (function (i) {
                setTimeout(function () {
                                        
                    objW.style.width = i + 'px';
                    
                }, 1*i);
            })(i);
        }
    }
    
    setLayout();
    setData();

})();
