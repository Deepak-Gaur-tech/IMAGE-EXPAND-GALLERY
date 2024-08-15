const cards=document.querySelectorAll(".deepak");


function removeclass(){
    cards.forEach(card=>{
        card.classList.remove("active")
    });

};


cards.forEach(card =>{
    card.addEventListener("click",()=>{
        removeclass();
        card.classList.add("active")
    });
});