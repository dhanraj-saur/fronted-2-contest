let book_name=document.getElementById("book_name")
let issued_name=document.getElementById("issued_name")
let submit=document.getElementById("submit")
let bookData={}
submit.addEventListener("click",addBookData);
let data=[];
let id=0;
function addBookData(event){
    event.preventDefault();
   if(book_name.value=="" && issued_name.value=="" ){
    alert("Please Enter Input")
    return false
   }
    bookData=[{
    id:id+1,
    book_name:book_name.value,
    issued_to:issued_name.value,
    issued_time:getDate(),
    status:""
   }]
 
  data.push([...bookData,bookData])
}

console.log(data)
function getDate(){
    let datetime =  moment().format('DD/MM/YYYY')+ " at "+ moment().format('h:mm A') ;
    return datetime ;
}