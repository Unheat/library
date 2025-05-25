const mylibrary =[];


function Book(author, title, pages, read_status){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read_status = read_status;
    this.id = crypto.randomUUID();
}
function addBook(author, title, pages, read_status){
    const new_book = new Book(author, title, pages, read_status);
    mylibrary.push(new_book);
    
}
function display(){
   
    const props = ["author","title","pages","read_status"];
    const col =  [ ".author",".title",".pages",".read_status"];
    for(let j =0; j< mylibrary.length; j++){
        props.forEach((prop,i) =>{
            const cell = document.createElement("div");
            cell.textContent = mylibrary[j][prop];
            document.querySelector(col[i]).appendChild(cell);
        } )
    }       
}
function display_new(){
    const props = ["author","title","pages","read_status"];
    const col =  [ ".author",".title",".pages",".read_status"];
        props.forEach((prop,i) =>{
            const cell = document.createElement("div");
            cell.textContent = mylibrary[mylibrary.length-1][prop];
            document.querySelector(col[i]).appendChild(cell);
        })

}
function input(){
    const dialog = document.querySelector('dialog');
    let author_in = document.getElementById('author').value;
    let title_in = document.getElementById('title').value;
    let pages_in = document.getElementById('pages').value;
    let read_in = document.getElementById('read').value;
    addBook(author_in,title_in,pages_in,read_in);
    document.getElementById('author').value ='';
    document.getElementById('title').value = '';
    document.getElementById('pages').value ='';
    document.getElementById('read').value='';

    display_new();
    dialog.close();
}

document.addEventListener("DOMContentLoaded", () => {
    const dialog = document.querySelector('dialog');
    document.querySelector('.submit').addEventListener("click", input);
    document.querySelector(".addBook").addEventListener("click",()=>{
    dialog.show();
});
    display();
  });