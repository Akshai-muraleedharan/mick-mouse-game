const warRoomTop = document.querySelector('.war_room_top_image')
const warRoomBottom = document.querySelector('.war_room_bottom_image')



const screenWidth = window.innerWidth 

    let initialLength = 0
    let warTopInterval = setInterval(() => {
    let randomNum = Math.floor(Math.random() *  screenWidth > 1000 ? 80 : 30)
    let changeValue = initialLength += randomNum
    warRoomTop.style.transform = `translateX(${changeValue}px)`
    warRoomTop.style.transition = `transform ${screenWidth > 1000 ? '0.2s' : '0.5s'} ease-in`

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
let randomNum = Math.floor(Math.random() *  screenWidth > 1000 ? 80 : 30)


let changeValue = initialLengthBottom += randomNum
warRoomBottom.style.transform = `translateX(${changeValue}px)`
warRoomBottom.style.transition = `transform ${screenWidth > 1000 ? '0.2s' : '0.5s'} ease-in`
    

    if( initialLengthBottom > screenWidth - 140){
     let clearInter =  setInterval(() => {
      
        let changeValue = initialLengthBottom -= randomNum
        warRoomBottom.style.transform = `translateX(${changeValue}px)`
        warRoomBottom.style.transition = `transform ${screenWidth > 1000 ? '0.2s' : '0.5s'} ease-in`
        if(initialLength <= 60){
            clearInterval(clearInter)
           }
       },2000)
       
       
    }
},2000)


