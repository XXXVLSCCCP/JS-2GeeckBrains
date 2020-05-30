



document.querySelector(".clickStart").onclick = () => {
    
    let one = document.querySelector("#one"); 
    let two = one.value.replace(/[^Itn]'/g,'\"');
    one.value = " ";
    one.value = two;
    

}

document.querySelector(".clickDelit").onclick = () => {
    
    one.value = " ";
    
}