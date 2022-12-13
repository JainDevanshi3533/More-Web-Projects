//if user adds a node ... add it to local storage..
showNotes();
let addBtn= document.getElementById('addBtn');
addBtn.addEventListener('click',function(e){
    let addTxt =document.getElementById('addTxt');
    let addTitle =document.getElementById('addTitle')
    let notes =localStorage.getItem('notes');
    if(notes == null){
        notesObj=[];
    }else{
        notesObj =JSON.parse(notes);
    }

    let myObj ={
      title:addTitle.value,
      text:addTxt.value
    }

    notesObj.push(myObj);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value="";
    addTitle.value="";
    //console.log(notesObj);
    showNotes();
});  

//function to  show elements from localStorage..
function showNotes(){
    let notes =localStorage.getItem('notes');
    if(notes == null){
        notesObj=[];
    }else{
        notesObj =JSON.parse(notes);
    }

    let html ="";
    notesObj.forEach(function(element,index) {
        html+=
        `<div class="noteCard my-2 mx-2 card" style="width: 16rem;">
            <div class="card-body">
            <h5 class="card-title">Note ${index+1}</h5>
            <h6> ${element.title}</h6>
            <p class="card-text">${element.text}</p>
            <button id="${index}"  onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
        </div>`;
    });
    let notesElm =document.getElementById('notes_main');
    if(notesObj.length!=0){
        notesElm.innerHTML=html;
    }else{
        notesElm.innerHTML=`Nothing to show!  Use "Add a Note" to create notes...`;
    }
}

//function to delete a note...
function deleteNote(index){
    //console.log('i am deleting',index," note");
    let notes =localStorage.getItem('notes');
    if(notes == null){
        notesObj=[];
    }else{
        notesObj =JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}


//search ...
let submitBtn=document.getElementById('submitBtn');
submitBtn.addEventListener('click',function(e){
    e.preventDefault();
    let search = document.getElementById('search_main');
    let inputVal = search.value;
    //console.log("input event fired",inputVal);
    
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt=element.getElementsByTagName('h6')[0].innerText;
        if(!cardTxt.includes(inputVal)){
            element.style.display="none";
        }
    })
})




//------------------------------------------------------------------

//if user adds a node ... add it to local storage..
/*showNotes();
let addBtn= document.getElementById('addBtn');
addBtn.addEventListener('onclick',function(e){
    let addTxt =document.getElementById('addTxt');
    let addTitle =document.getElementById('addTitle')
    let notes =localStorage.getItem('notes');
    if(notes == null){
        notesObj=[];
    }else{
        notesObj =JSON.parse(notes);
    }

    let myObj ={
      title:addTitle.value,
      text:addTxt.value
    }

    notesObj.push(myObj);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value="";
    addTitle.value="";
    //console.log(notesObj);
    showNotes();
});  

//function to  show elements from localStorage..
function showNotes(){
    let notes =localStorage.getItem('notes');
    if(notes == null){
        notesObj=[];
    }else{
        notesObj =JSON.parse(notes);
    }

    let html ="";
    notesObj.forEach(function(element,index) {
        html+=
        `<div class="noteCard my-2 mx-2 card" style="width: 16rem;">
            <div class="card-body">
            <h5 class="card-title">Note ${index+1}</h5>
            <h6> ${element.title}</h6>
            <p class="card-text">${element.text}</p>
            <button id="${index}" style="background-color:#484b5c;" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
            <button id="${index}" onclick="updateNote(this.id)" class="btn btn-primary">update</button>
            </div>
        </div>`;
    });
    let notesElm =document.getElementById('notes_main');
    if(notesObj.length!=0){
        notesElm.innerHTML=html;
    }else{
        notesElm.innerHTML=`Nothing to show!  Use "Add a Note" to create notes...`;
    }
}

//function to delete a note...
function deleteNote(index){
    //console.log('i am deleting',index," note");
    let notes =localStorage.getItem('notes');
    if(notes == null){
        notesObj=[];
    }else{
        notesObj =JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}


//search ...
let submitBtn=document.getElementById('submitBtn');
submitBtn.addEventListener('click',function(e){
    e.preventDefault();
    let search = document.getElementById('search_main');
    let inputVal = search.value;
    //console.log("input event fired",inputVal);
    
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt=element.getElementsByTagName('p')[0].innerText;
        if(!cardTxt.includes(inputVal)){
            element.style.display="none";
        }
    })
})

//function to update note...
function updateNote(index){
    let notes =localStorage.getItem('notes');
    if(notes == null){
        notesObj=[];
    }else{
        notesObj =JSON.parse(notes);
    }

    let myObj ={
        title:addTitle.value,
        text:addTxt.value
      }
      notesObj.splice(index,1, myObj);
      localStorage.setItem('notes', JSON.stringify(notesObj));
     showNotes();
}

*/
