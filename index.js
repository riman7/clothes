//For Horizontal Scroll
var items = document.querySelectorAll('.items');

for(let i=0; i<items.length; i++){
    items[i].addEventListener("wheel", e=>{
            e.preventDefault();
            items[i].scrollLeft += e.deltaY;
        })
}

//menu
var menu = document.querySelector('.menu');
var profile = document.querySelector('.profile');
profile.addEventListener('click', fun =>{
    if(menu.style.display == 'flex'){
        menu.style.display = 'none';
        }
    else{menu.style.display = 'flex';} 
    }  
)

var otherBotton = document.querySelector('.other-botton');
var mid = document.querySelector('.mid');
var other = document.querySelector('.other');
otherBotton.addEventListener('click', f =>{
    if(otherBotton.textContent == 'Others •'){
        menu.style.display = 'none'
        mid.style.display = 'none';
        other.style.display = 'block';
        otherBotton.textContent = 'Go back •'
    }
    else{
            mid.style.display = 'block';
            other.style.display = 'none';
            menu.style.display = 'none'
            otherBotton.textContent = 'Others •'
    }
})

var lightMode = document.querySelector('.light-mode');
var screen = document.querySelector('.screen');
lightMode.addEventListener('click', f=>{
    if(lightMode.textContent == 'Light Mode •'){
        screen.classList.add('light');
        lightMode.textContent = 'Dark Mode •';
        menu.style.display = 'none'
    }
    else{
        screen.classList.remove('light');
        lightMode.textContent = 'Light Mode •';
        menu.style.display = 'none'
    }
})
// For DISPLAY
// Top

var clickedItemTop = document.querySelectorAll('.top-item');
var topDisplayItem = document.querySelector('.top-display-item');

for(let i=0; i<clickedItemTop.length; i++ ){
    clickedItemTop[i].addEventListener("click", f=>{
        topDisplayItem.src = clickedItemTop[i].src;
    })
}

//buttom
var clickedItemButtom = document.querySelectorAll('.buttom-item');
var buttomDisplayItem = document.querySelector('.buttom-display-item');


for(let i=0; i<clickedItemButtom.length; i++ ){
    clickedItemButtom[i].addEventListener("click", f=>{
        buttomDisplayItem.src = clickedItemButtom[i].src;
    })
}

//shoes
var clickedItemShoes = document.querySelectorAll('.shoes-item');
var shoesDisplayItem = document.querySelector('.shoes-display-item');

for(let i=0; i<clickedItemShoes.length; i++ ){
    clickedItemShoes[i].addEventListener("click", f=>{
        shoesDisplayItem.src = clickedItemShoes[i].src;
    })
}
//others
var otherItem1 = document.querySelectorAll('.item-1');
var otherItem2 = document.querySelectorAll('.item-2');
var otherItem3 = document.querySelectorAll('.item-3');
var otherDisplayItem1 = document.querySelector('.other-display-item-1');
var otherDisplayItem2 = document.querySelector('.other-display-item-2');
var otherDisplayItem3 = document.querySelector('.other-display-item-3');
for(let i=0; i<otherItem1.length; i++ ){
    otherItem1[i].addEventListener("click", f=>{
        otherDisplayItem1.src = otherItem1[i].src;
    })
}
for(let i=0; i<otherItem2.length; i++ ){
    otherItem2[i].addEventListener("click", f=>{
        otherDisplayItem2.src = otherItem2[i].src;
    })
}
for(let i=0; i<otherItem3.length; i++ ){
    otherItem3[i].addEventListener("click", f=>{
        otherDisplayItem3.src = otherItem3[i].src;
    })
}

addOuter = document.querySelector('.outer');
topDisplay = document.querySelector('.top-display');
addOuter.addEventListener('click', g =>{
    

    if(addOuter.textContent=='Add Outer'){
        addOuter.textContent = 'Remove Outer';
        topDisplay.insertAdjacentHTML('beforeend',
        ' <div class="top-display-child top-display-child-2 display-box"><img src="/top clothes/rBVaVV3CvDGACquPAAVEmB-ZoIg962.jpg" alt="jdj" class="display-item top-display-item top-display-item-2"></div> ');
        var topDisplayItem2 = document.querySelector('.top-display-item-2');
        for(let i=0; i<clickedItemTop.length; i++ ){
            if(clickedItemTop[i].className.includes('top-item-2') == true){
            clickedItemTop[i].addEventListener("click", f=>{
                topDisplayItem2.src = clickedItemTop[i].src;
            })
        }
        
    }
}
    else{addOuter.textContent = 'Add Outer';
        document.querySelector('.top-display-child-2').remove();       
}
} ) 

var alert = document.querySelector('.alert');
var alertMsg = document.querySelector('.alert-msg');
var plus = document.querySelectorAll('.plus');
var ok = document.querySelector('.ok-button');
for(let i=0; i<plus.length; i++){
plus[i].addEventListener('click', func =>{
    alert.style.display = "block";
});}

ok.addEventListener('click', func =>{
    if(ok.textContent=='Thanks'){
        alert.style.display = "none";
        alertMsg.textContent = "Idiot, You already have that much dress. Still need more?";
        ok.textContent = "Sorry";
    }
    else{
        alertMsg.textContent = "It's Okay, your soft sorry melted my heart, Contact Riman Maharjan to add clothes for now.";
        ok.textContent = "Thanks";
    }
});
