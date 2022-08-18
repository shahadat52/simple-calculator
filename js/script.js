let display = document.getElementById('display');
let buttons = document.getElementsByClassName('button');

for( let button of buttons){
    button.addEventListener('click', function(event){
        const text = event.target.innerText;
        switch(text){
            case 'C': 
            display.innerText = '';
            break;
            case '←':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
                case '=':
                    try{
                        display.innerText = eval(display.innerText);
                    } 
                    catch{
                        display.innerText = 'Error!!';
                    }
                break;
         default:
         display.innerText += text;
       }
    })
}
