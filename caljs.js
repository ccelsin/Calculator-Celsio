const bouttons = [...document.querySelectorAll('button')];
const BouttonTab  = bouttons.map(boutton => boutton.dataset.key);


const output = document.querySelector('.calc');

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

 toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){

        body.style.backgroundBlendMode = 'lighten';
        body.style.transition = '5s';
        body.style.background = 'linear-gradient(to right, #434343 0%, black 100%)';
        body.style.color = 'white';
        document.getElementById('CelsioStyle').style.backgroundColor = 'grey';
        body.style.background ='linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898';
        body.style.background = '#f8f8f8';
        body.style.transition = '2s';
        body.style.color = 'black';
        body.style.transition = '30';
        body.style.transition = '5s';
        body.style.backgroundBlendMode = 'lighten';
        document.getElementById('CelsioStyle').style.backgroundColor = '#C9CCD3';
    }else{
        body.style.background = 'linear-gradient(to right, #434343 0%, black 100%)';
        body.style.color = 'white';
        body.style.transition = '2s';
        document.getElementById('CelsioStyle').style.backgroundColor = 'grey';
    }
});

document.addEventListener('Keydown', (c) =>{
    console.log(c);
    const value = c.keyCode.toString();
    operation(value);
  
});

document.addEventListener('click', (c) =>{
     const value = c.target.dataset.key;
    operation(value);

  });


const operation = (value) => {
    if(BouttonTab.includes(value)){
        switch(value){
            case'8':
                output.textContent = "";
                break;

            case'13':
                const result = eval(output.textContent);
                output.textContent = result;
                break;
        
            default : 
            const numbers = BouttonTab.indexOf(value);
            const boutton = bouttons[numbers];
            output.textContent = output.textContent+boutton.innerHTML;
        }
    }
       
    }

    window.addEventListener('error' , (c) => {
        output.textContent = 'Error';
    })


    function factorial(a) {
        if (a == 0) return 1;
        let product = 1;
        for (let i = a; i > 0; i--) {
          product *= i;
        }
        return product;
    }



 