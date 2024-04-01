let myLibrary=[]
let gridContainer=document.querySelector(".grid-container")
let addBtn=document.querySelector(".add-btn")
let signBtn=document.querySelector(".sign-up")
let bodyy=document.querySelector("body")
let formContainer=document.querySelector("form")
let navContainer=document.querySelector("nav")

function book(title, author, pages, haveRead) {
    this.title=title,
    this.author=author,
    this.pages=pages,
    this.haveRead=haveRead
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook)
}

let book1= new book("tile","leo",50,true)
console.log(book1.title)
addBookToLibrary(book1)
console.log(myLibrary)

addBtn.addEventListener("click", () => {
    addBtn.style.cssText="background-color: rgba(0,0,0,0); z-index: -1;"
    bodyy.style.cssText="background-color: rgba(0,0,0,0.4); z-index: 1;";
    navContainer.style.cssText="z-index: -1; background-color: rgba(0,0,0,0)"
    signBtn.style.cssText="z-index: -1;"
    formContainer.style.visibility="visible"
})
