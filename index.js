let count=0

const val=document.getElementById('value')
const btnDecrease=document.getElementById('btn-decrease')
const btnIncrease=document.getElementById('btn-increase')
const btnReset=document.getElementById('btn-reset')
  
btnDecrease.addEventListener('click',()=>{
    count-=1
    val.textContent=count
    if(count<0){
        val.style.color="red"
        val.style.textShadow="0px 5px 5px red"; 
    }
    
    

})
btnIncrease.addEventListener('click',()=>{
    count+=1
    val.textContent=count
    if(count>0){
        val.style.color="green"
        val.style.textShadow="0px 5px 5px green"; 
    }
    
    

})

btnReset.addEventListener('click',()=>{
    count=0
    val.textContent=count
    if(count===0){
        val.style.color="black"
        val.style.textShadow="0px 5px 5px black"; 
    }
    
    

})