/*SMOOTH SCROOLL*/

/*

var targetpos=0;
var currentpos=0;

var scrolls = document.getElementsByClassName("scroll");

var scrollInterval;

function scrfunc(){
    
    var scrollInterval=setInterval(function(){
        if(currentpos>= targetpos){
            clearInterval(scrollInterval);
            return;
        }
        currentpos +=50;
        window.scrollBy(0,50);
    },50);
}




for (var i = 0; i < scrolls.length; i++) {
    scrolls[i].addEventListener('click', function (event) {
        event.preventDefault();
        currentpos=0;
        var value = this.getAttribute('data-value');
        
        if (value=="1"){
            targetpos=0;
            scrfunc();
        }else if(value=="2"){
            targetpos=390;
            scrfunc();
        }else if(value=="3"){
            targetpos=900;
            scrfunc();
        }else if(value=="4"){
            targetpos= 1318.7708740234375;
            scrfunc();
        }else if (value=="5"){
            targetpos=2271.77099609375;
            scrfunc()
        }else if(value=="6"){
            targetpos=3224.77099609375;
            scrfunc()
        }else{
            targetpos=  4182.1044921875;
            scrfunc()
        }
    });
}
*/

   //NOTE--
   
/* 'targetpos' is got  using--- eg-

			var e =document.getElementsByTagName('section');
			var coord=e[0].getBoundingClientRect();
			coord;
			
			
and then using the value of 'y' we got.


also, by using this method; if the viewport screen is changed, the 'targetpos' value is also so changed.. so i wont work properly
*/

/*OTHER ALTERNATIVE WAY*/

/*
var Anchortags = document.querySelectorAll(".scroll");
console.log(Anchortags);

for(var i=0; i<Anchortags.length; i++){
	Anchortags[i].addEventListener('click',function(event){
		event.preventDefault();
		var targetSectionID = this.textContent.trim().toLowerCase();
		//console.log(targetSectionID);
		var targetSection = document.getElementById(targetSectionID);
		//console.log(targetSection);
		
		var interval = setInterval(function(){
			var targetCoord = targetSection.getBoundingClientRect();
			if(targetCoord.top<=0){
				clearInterval(interval);
				return;
			}
			window.scrollBy(0,50);
		},20)
	});
}
*/

//3RD WAY U CAN USE...

var Anchortags = document.querySelectorAll(".scroll");
console.log(Anchortags);

var interval;

for(var i=0; i<Anchortags.length; i++){
	Anchortags[i].addEventListener('click',function(event){
		event.preventDefault();
		var targetSectionID = this.textContent.trim().toLowerCase();
		//console.log(targetSectionID);
		var targetSection = document.getElementById(targetSectionID);
		//console.log(targetSection);
		
		interval = setInterval(scrollVertically,20, targetSection)
		// the 3rd argument(i.e targetSection) in this interval is the argument of the function we are passing here(i.e of scrollVertically)
		
		//or you can do like below..
		
		/*
		interval = setInterval(function(){
			scrollVertically(targetSection);
		},20, targetSection)
		*/
	
	
	});
	
	
}


function scrollVertically(targetSection){
	var targetCoord = targetSection.getBoundingClientRect();
	if(targetCoord.top<=0){
		clearInterval(interval);
		return;
	}
	window.scrollBy(0,50);
}
	
	
	
	
	//SKILL BAR..
	
/*	
var progbars=document.querySelectorAll(".actual-progress");
var sk = document.getElementById('sk-display');
window.addEventListener('scroll', check);

function initialBars(){
	for(let bar of progbars){
		bar.style.width=0+"%";
	}
}

initialBars();

function fillbars(){
	for(let bar of progbars){
		let targetwidth = bar.getAttribute('data-newwidth');
		let currwidth=0;
		let interval = setInterval(function(){
			if(currwidth > targetwidth){
				clearInterval(interval);
				return;
			}
			currwidth++;
			bar.style.width= currwidth +"%";
		},10);
	}
}



var done= false;

function check(){
	 var coord = sk.getBoundingClientRect();
	 if((coord.top< window.innerHeight) && !done ){
		 done=true;
		 console.log("skill section visible");
		 fillbars();
	 }else if (coord.top> window.innerHeight){
		 done=false;
		 initialBars();
	 }
}


*/



//IMPROVED VERSION OF ABOVE ..



var progressBars = document.querySelectorAll(".skill-progress > div");



function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-newwidth");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);

}



// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}



window.addEventListener("scroll", checkScroll);

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);

