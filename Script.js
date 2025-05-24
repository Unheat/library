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
addBook("sdsa","s","ji","sd");
addBook("sdsa","s","ji","sd");
addBook("sdsa","s","ji","sd");
addBook("sdsa","s","ji","sd");
addBook("sdsa","s","ji","sd");
document.addEventListener("DOMContentLoaded", () => {
    display();
  });