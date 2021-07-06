let addBtn = document.getElementById("add-btn");
let addTitle = document.getElementById("book-title");
let addTxt = document.getElementById("book-text");

addBtn.addEventListener("click", (e) => {
    if(addTitle.value == "" || addTxt.value == "" ){
        return alert("Please add note title and details")
    }

    let books = localStorage.getItem("books");
    if(books == null){
        booksObj = [];
    }
    else {
        booksObj = JSON.parse(books)
    }
    let myObj = {
        title: addTitle.value,
        text: addTxt.value
    }
    booksObj.push(myObj);
    localStorage.setItem("books", JSON.stringify(booksObj));
    addTitle.value="";
    addTxt.value = "";
    showbooks();
})

function showbooks(){
    let books = localStorage.getItem("books");
    if(books == null){
        booksObj = [];
    }
    else{
        booksObj = JSON.parse(books);
    }

    let html = "";
    booksObj.forEach(function(element,index){
        html +=`
        <div class="card" style="width: 18rem;" id="books">
        <div class="card-body" id="books">
        <p class="card-text">${index + 1}</p>
      <h3 class="card-title">${element.title}</h3>
      <p class="card-text">${element.text}</p>
      <button class="book-btn" id="${index}" onclick="deleteNote(this.id)" >DELETE BOOK</button>
    </div>
  </div>
        `;
    })
      let bookElm = document.getElementById("books");
      if(booksObj.length !=0){
          bookElm.innerHTML = html;
      }
    else{
        bookElm.innerHTML = "Add books from above"
    }
}

function deleteNote(index){
    let confirmDel = confirm("You are deleting this note")
    if(confirmDel == true){
        let books = localStorage.getItem("books")
        if(books==null){
            booksObj =[];
        }
        else{
            booksObj = JSON.parse(books)
        }
        booksObj.splice(index,1)
        localStorage.setItem("books",JSON.stringify(booksObj));
        showbooks();
    }
}
showbooks();