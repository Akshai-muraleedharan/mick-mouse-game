const warRoomTop = document.querySelector('.war_room_top_image')
const warRoomBottom = document.querySelector('.war_room_bottom_image')
const bombContainer = document.querySelector('.bomb_container')


const screenWidth = window.innerWidth 

    let initialLength = 0
    let warTopInterval = setInterval(() => {
    let randomNum = Math.floor(Math.random() *  screenWidth > 1000 ? 80 : 30)
    let changeValue = initialLength += randomNum

     if(changeValue){
        console.log("hai");

        let createDiv = document.createElement('div')
           
            createDiv.style.transform = `translateX(${changeValue}px)`
             createDiv.classList.add('bomber_div')
        bombContainer.appendChild(createDiv)

        if( initialLength > screenWidth - 140){
            bombContainer.removeChild(createDiv)
        }
        
     }

    warRoomTop.style.transform = `translateX(${changeValue}px)`
    warRoomTop.style.transition = `transform ${screenWidth > 1000 ? '0.2s' : '0.5s'} ease-in`
    
    
    const bomberDiv  = document.querySelectorAll('.bomber_div')

console.log(bomberDiv);

    let bomberDivEle = bomberDiv;
  
    bomberDivEle.forEach((item) => {
       
       
        item.addEventListener('click',() => {
            item.classList.add('remove_bomb')

            
        })

         
    if(bomberDiv.length > 4) {
       item.remove()
    }
       
    })
   
  
 







        if( initialLength > screenWidth - 140){
         let clearInter =  setInterval(() => {
         
            let changeValue = initialLength -= randomNum
            warRoomTop.style.transform = `translateX(${changeValue}px)`
          
             
            warRoomTop.style.transition = `transform ${screenWidth > 1000 ? '0.2s' : '0.5s'} ease-in`
            
            if(initialLength <= 60){
                clearInterval(clearInter)
               }
           },2000)
           
           
        }
},2000)


let initialLengthBottom = 0
let warBottomInterval = setInterval(() => {
let randomNum = Math.floor(Math.random() *  screenWidth > 1000 ? 80 : 40)


let changeValue = initialLengthBottom += randomNum
warRoomBottom.style.transform = `translateX(${changeValue}px)`
warRoomBottom.style.transition = `transform ${screenWidth > 1000 ? '0.2s' : '0.5s'} ease-in`


    if( initialLengthBottom > screenWidth - 150){
     let clearInter =  setInterval(() => {
      
        let changeValue = initialLengthBottom -= randomNum
        warRoomBottom.style.transform = `translateX(${changeValue}px)`
        warRoomBottom.style.transition = `transform ${screenWidth > 1000 ? '0.2s' : '0.5s'} ease-in`
        if(initialLengthBottom < 85){
            clearInterval(clearInter)
           
            
           }
       },2000)
       
       
    }
},2000)


