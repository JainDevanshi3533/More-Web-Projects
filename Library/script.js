//constructor
function Book(name, author, type){
    this.name=name; 
    this.author=author;
    this.type=type;
}

//Display Constructor
function Display(){

}

        //Add methods to display prototype
//implement the validate function
Display.prototype.validate=function(book){
    if(book.name.length<2 || book.author.length <2){
        return false;
    }else{
        return true;
    }
}
//implementing the add function
Display.prototype.add = function(book){
    console.log("adding to ui");
    let tableBody =document.getElementById('tableBody');
    let uiString =
    `
    <tr>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
    </tr>
    `;
    tableBody.innerHTML += uiString;
}
//implementing clear function
Display.prototype.clear = function(){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

//implementing show function
Display.prototype.show =function(type,msg_txt){
    let message =document.getElementById('message');
    message.innerHTML= `   
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>Message!</strong> ${msg_txt}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `;

    setTimeout(() => {
        message.innerHTML=``;
    }, 2000);
}


        //Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit',lib_submit);

function lib_submit(e){
    e.preventDefault();
    let name=document.getElementById('name').value ;
    let author=document.getElementById('author').value ;
    
            //ficton, proramming, cooking  ...to get the selected one
    let fiction=document.getElementById('fiction') ;
    let proramming=document.getElementById('programming') ;
    let cooking=document.getElementById('cooking') ;

    let type;

    if(fiction.checked){
        type=fiction.value;
    }else if(proramming.checked){
        type=proramming.value;
    }else if(cooking.checked){
        type=cooking.value;
    }

    let book =new Book(name,author,type);
    console.log("You have submitted Library form");
    console.log(book);


    //to display the content
    let display = new Display();
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success','Your book has been successfully added!');
    }else{
        display.show('danger', "Sorry, You can not add this book...");
    }


    //danger and succes are just part of Bootstrap
      
}



//to dos:->
// 1. Store all the data to local Storage
// 2. give an option to delete a book
// 3. add a scroll bar to the tablelist.