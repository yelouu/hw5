document.addEventListener("DOMContentLoaded", function(){

    let count = 0;
    const but = document.getElementById("but");
    const cointinc = document.getElementById("cointinc");
    
    but.addEventListener("click", function(){
    count +=1;
    cointinc. textContent = count;
    
    if (count >= 15) {
      but.disabled = true;
      message.textContent = "И это ваш максимум.";
    }
    });
    
    
    
    let co = 0;
    const timer = document.getElementById("timer");
    
    const interval = setInterval(function(){
     co += 1;
     timer.textContent = co;
    
     if(co >= 10){
      clearInterval(interval);
     }
    
    },1000);
    
    
    
    let ct = 0;
    let intervalic;
    
    const ourtext = document.getElementById("timer2");
    const sta = document.getElementById("sta");
    const sto = document.getElementById("sto");
    const res = document.getElementById("res");
    
    sta.addEventListener("click", function(){
    if(!intervalic){
      intervalic = setInterval(function(){
        ct++
        ourtext.textContent = ct 
      },1000)
    }
    });
    
    sto.addEventListener("click", function(){
    clearInterval(intervalic);
    intervalic = null;
    });
    
    res.addEventListener("click", function(){
      clearInterval(intervalic);
      intervalic = null;
    
      ct = 0;
      ourtext.textContent = ct;
      });
    
    });
