function animate(obj,target){
        clearInterval(obj.timer);
        var speed = obj.offsetLeft < target ? 15 : -15;
        obj.timer = setInterval(function() {
            var result = target - obj.offsetLeft;
            obj.style.left = obj.offsetLeft + speed + "px";
            if(Math.abs(result)<=15)
            {
                clearInterval(obj.timer);
                obj.style.left = target + "px";
            }
        },10)
    }
    window.onload = function() {




        var box = document.getElementById("all");
        var slider = document.getElementById("slide");
        var ul = document.getElementById("ul");
        var ulLis = ul.children;


        ul.appendChild(ul.children[0].cloneNode(true));




        var ol = document.createElement("ol");
        box.appendChild(ol);
        for(var i=0;i<ulLis.length-1;i++)
        {
            var li = document.createElement("li");
            li.innerHTML = i + 1;
            ol.appendChild(li);
        }
        ol.children[0].className = "current";


        var olLis = ol.children;
        for(var i=0; i<olLis.length;i++)
        {
            olLis[i].index = i;
            olLis[i].onmouseover = function() {
                for(var j=0;j<olLis.length;j++)
                {
                    olLis[j].className = "";
                }
                this.className = "current";
                animate(ul,-this.index*730)

                square = key = this.index;
            }
        }
        var timer = null;
        var key = 0;  
        var square = 0; 
        timer = setInterval(autoplay,1500);  
        function autoplay() {
            key++;  
            if(key>ulLis.length - 1)  
            {
                ul.style.left = 0;  
                key = 1;  
            }
            animate(ul,-key*730);  
            
            square++;
            if(square > olLis.length -1)
            {
                square = 0;
            }
            for(var i=0;i<olLis.length;i++)   
            {
                olLis[i].className = "";
            }
            olLis[square].className = "current";  
        }
        
        box.onmouseover = function() {
            clearInterval(timer);
        }
        box.onmouseout = function() {
            timer = setInterval(autoplay,1500);  
        }

        


    }
