let string = "";
let texts = document.getElementById('text');
let buttons = document.getElementsByClassName('buttons');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=> {
        if(e.target.innerHTML == '='){
            string = eval(string)
            texts.innerHTML = string;
        }else if(e.target.innerHTML == 'AC'){
            string = ""
            texts.innerHTML = string;
            
        }else if(e.target.innerHTML == '⌫'){
            string = string.slice(0, -1)
            texts.innerHTML = string;
            
        }else if(e.target.innerHTML == '±'){
            string = string*-1;
            texts.innerHTML = string;
        }else{
            string = string + e.target.innerHTML;
            texts.innerHTML = string;
        }
    })
})
