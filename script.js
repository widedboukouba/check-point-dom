//jaime button
let likes=document.getElementsByClassName("like");
for(let i=0; i<likes.length; i++){
    let like=likes[i];
    like.addEventListener("click", function(){
        if(  like.firstChild.style.color=="black"){
            like.firstChild.style.color="red";
        }else{
like.firstChild.style.color="black";
        }

    })
}
//plus button
let plus=document.getElementsByClassName("plus-btn");
for(let i=0; i<plus.length;i++){
    let plusbtn=plus[i];
    plusbtn.addEventListener("click", function(){
        plusbtn.previousElementSibling.value++
    })
}


//minus button
let minus=document.getElementsByClassName("minus-btn");
for(let i=0; i<minus.length; i++){
    let oneminus=minus[i];
    oneminus.addEventListener("click", function(){

        if( oneminus.nextElementSibling.value>1)
        oneminus.nextElementSibling.value--
    })
  
}
// delete
var offet = document.getElementsByClassName('delete');
console.log(offet);
for ( var i = 0; i < offet.length; i++){ 
var buttom = offet[i]
buttom.addEventListener('click', function(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
})

}

