
const tabcontainer = document.querySelector('.about-tabs');
const aboutsection = document.querySelector('.about-section');

tabcontainer.addEventListener('click', (e) =>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabcontainer.querySelector(".active").classList.remove("active");
        e.target.classList.add('active');

        const target = e.target.getAttribute("data-target");
        // console.log(target);
        aboutsection.querySelector(".tab-content.active").classList.remove("active");
        aboutsection.querySelector(target).classList.add("active");
    }
});


document.addEventListener('click', (e) =>{
    if(e.target.classList.contains("view-project-button")){
        togglePortfolio();
        // document.querySelector('.portfolio-popup').style.visibility = "visible";
        portfoliodetails(e.target.parentElement);
    }
})    


document.addEventListener('keyup', (e) =>{
    if(e.target.classList.contains("view-project-button") && e.key == "Escape" && document.querySelector('.portfolio-popup').classList.contains("open")){
        togglePortfolio();
        // document.querySelector('.portfolio-popup').style.visibility = "visible";
    }
})    

function togglePortfolio(){
    // document.querySelector('.portfolio-popup').style.visibility = "visible";
    document.querySelector('.portfolio-popup').classList.toggle("open");
    document.body.classList.toggle('hide-scrolling');
    document.querySelector(".main").classList.toggle("fade-out");

}

function portfoliodetails(value){
    console.log(value);
    document.querySelector('.pp-thumbnail img').src = value.querySelector('.portfolio-item-thumnail img').src;
    document.querySelector(".pp-header h3").innerHTML = value.querySelector('.portfolio-item-title').innerHTML;
    document.querySelector('.pp-body').innerHTML = value.querySelector('.portfolio-item-details').innerHTML;
}

document.querySelector('.pp-close').addEventListener('click', togglePortfolio);

const navtoggler = document.querySelector('.nav-toggle');

navtoggler.addEventListener('click', ()=>{

    hidesection();
    toggleon();
});

function hidesection(){
    document.querySelector('section.active').classList.toggle("fade-out")
}

function toggleon(){
    document.querySelector('.header').classList.toggle("active");
}

document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('link-item') && e.target.hash !== ""){
        if(e.target.classList.contains('nav-item')){
            toggleon();
        }
        else{
            console.log(false);
        }
        setTimeout(() =>{
            document.querySelector('section.active').classList.remove("active","fade-out")
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
        },500);
    }
})