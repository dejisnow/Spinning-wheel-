window.onlwindow.onload=()=>{
    let btn = document.querySelector(".btn")
    let main = document.querySelector(".main")
    
    let count =  Math.ceil(Math.random() * 1200)
    btn.addEventListener("click",()=>{
        
        count+= Math.ceil(Math.random() * 1100)
        console.log(count )
        main.style.transform = `rotate(${count }deg)`
        setTimeout(()=>{alert("done")
        },5000)
        
    })
    
    
    
}￼Enter
