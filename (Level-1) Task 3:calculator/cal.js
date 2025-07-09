
let string=" ";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click',(e)=>{
    //when clicked on "="it needa be evaluated
    if(e.target.innerHTML == '='){
      string=eval(string);//eval is used to evaluate the string
    } 
      if(e.target.innerHTML == "A/C"){
        string="";
        //when clicked on "A/C"it needa be cleared
        document.querySelector('input').value=string;
      }
    else{
  console.log(e.target)
    string=string+e.target.innerHTML;
    document.querySelector('input').value=string;
    }
    
  })
})