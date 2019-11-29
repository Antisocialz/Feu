    
// let stop =true
// let intervalRed;


let gogreen
let gored
let goorange
// function interval() {
              
//     greenInf();
//     orangeInf();
//     redInf();
// }
  function normal() {


        //  Rouge();
        // //    setTimeout(Orange, 3000);
        //    setTimeout(Vert, 3500);
    
        //   setInterval(gogo,1000)
              
        //  setInterval(interval, 7000)
        // }
        
        gogreen = setInterval(greenInf, 7000);
        goorange = setInterval(orangeInf, 7000);
        gored = setInterval(redInf, 7000);
                
    
  }


function stop() { 
    clearInterval(goorange);
    clearInterval(gored);
    clearInterval(gogreen);
    
}

// function gogo() {
//     Rouge();
//     Vert()
    
// }
 
function orangeInf() {

    setTimeout(orangeon, 3500 )
    setTimeout(orangeoff, 4000 )
    
}

function greenInf() {
    setTimeout(greenon, 0)
    setTimeout(greenoff, 3500)
    
}

function redInf() {

    setTimeout(redon, 4000)
    setTimeout(redoff, 7000)
}

function pieton() {
    greenon()
    setTimeout(greenoff, 1000);
    setTimeout(orangeon, 1000 );
    setTimeout(orangeoff, 1500 );
    setTimeout(redon, 1500);
    setTimeout(redoff, 5000);
    setTimeout(greenon, 5000);

}
function appel() {

    
    stop()
    // redoff()
    // orangeoff()
    // greenon()
     pieton()

   
    setTimeout(normal,5000)

}
// red
    function Rouge() {
        redon();
        setTimeout(redoff,3000)
    }

function redoff() {

    let element = document.getElementById("red");
    element.classList.remove("onred");
    }

function redon() {

    let element = document.getElementById("red");
    element.classList.add("onred");
    }

// green

function Vert() {
    greenon();
    setTimeout(greenoff,3000)
}



function greenon() {

    let element = document.getElementById("green");
    element.classList.add("ongreen");
    }
    
function greenoff() {

    let element = document.getElementById("green");
    element.classList.remove("ongreen");
    
}

// orange

function orangeon() {
    let element = document.getElementById("orange");
    element.classList.add("onorange");
}

function orangeoff() {
    let element = document.getElementById("orange");
    element.classList.remove("onorange");
}