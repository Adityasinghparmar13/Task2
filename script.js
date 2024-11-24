document.querySelector(".tracker").style.width = "0%";
const btnnxtc = document.querySelector('.btn-next')
btnnxtc.addEventListener('click', () =>{
    movetrk()
    cirfill()
    updateBtn()
})

const btnprevc = document.querySelector('.btn-prev')
btnprevc.addEventListener('click', () =>{
    revtrk()
    cirdefill()
    updateBtn()
})

function movetrk(){
    let x = parseFloat(document.querySelector(".tracker").style.width);
    if(x!=90){
        x = x + 30;
        document.querySelector(".tracker").style.width=(x)+"%";
        document.querySelector(".btn-next").style.backgroundColor = "#268add";    
    }
}

function revtrk(){
    let p = parseFloat(document.querySelector(".tracker").style.width);
    if(p!=0){
        p = p - 30;
        document.querySelector(".tracker").style.width=(p)+"%";
    }
}

function cirfill(){
    let y = parseFloat(document.querySelector(".tracker").style.width);
    if(y>=30){
        document.querySelector(".two").classList.add('active')
    }
    if(y>=60){
        document.querySelector(".three").classList.add('active')
    }
    if(y>=90){
        document.querySelector(".four").classList.add('active')
    }
}

function cirdefill(){
    let z = parseFloat(document.querySelector(".tracker").style.width);
    if(z<30){
        document.querySelector(".two").classList.remove('active')
    }
    if(z<60){
        document.querySelector(".three").classList.remove('active')
    }
    if(z<90){
        document.querySelector(".four").classList.remove('active')
    }
}

function updateBtn() {
    let width = parseFloat(document.querySelector(".tracker").style.width);

    if (width == 0) {
        btnprevc.disabled = true;
        btnprevc.style.backgroundColor = "#dcdcdc";
    } else {
        btnprevc.disabled = false;
        btnprevc.style.backgroundColor = "#268add";
    }

    if (width == 90) {
        btnnxtc.disabled = true;
        btnnxtc.style.backgroundColor = "#dcdcdc";
    } else {
        btnnxtc.disabled = false;
        btnnxtc.style.backgroundColor = "#268add";
    }
}
updateBtn();