
const tabcontainer = document.querySelector('.about-tabs');
const aboutsection = document.querySelector('.about-section');

tabcontainer.addEventListener('click', (e) =>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabcontainer.querySelector(".active").classList.remove("active");
        e.target.classList.add('active');

        const target = e.target.getAttribute("data-target");
        aboutsection.querySelector(".tab-content.active").classList.remove("active");
        aboutsection.querySelector(target).classList.add("active");
    }
});

document.addEventListener('keyup', (e) =>{
    if(e.key == "Escape" && document.querySelector('.portfolio-popup').classList.contains("open")){
        togglePortfolio();
    }
})    

document.addEventListener('click', (e) =>{
    if(e.target.classList.contains("view-project-button")){
        togglePortfolio();
        portfoliodetails(e.target.parentElement);
    }
})    

function togglePortfolio(){
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
    document.body.classList.toggle("hide-scrolling")
});

function hidesection(){
    document.querySelector('section.active').classList.toggle("fade-out");
    document.querySelector('.nav').classList.remove('hidden');
}

function toggleon(){
    document.querySelector('.header').classList.toggle("active");
}

document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('link-item') && e.target.hash !== ""){
        document.querySelector('.overlay').classList.add("active");
        navtoggler.classList.add("hide");
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
            document.body.classList.remove('hide-scrolling');
            document.querySelector('.overlay').classList.remove("active");
            navtoggler.classList.remove("hide");
        },500);
    }
})

const subbtn = document.getElementById('submit-form')

subbtn.addEventListener('click',async (e)=>{
    e.preventDefault()

    const user_name = document.getElementById('name-inp').value
    const user_email = document.getElementById('email-inp').value
    const user_subject = document.getElementById('subject-inp').value
    const user_message = document.getElementById('message-inp').value

    const form_data = {user_name,user_email,user_subject,user_message}

    const res = await fetch('https://stormy-forest-73172.herokuapp.com/api/contact',{
        method:'POST',
        mode:'cors',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(form_data)
    }).then(res=>res.json())
    .then(data=>{
        if(data.success){
            document.querySelector('.ctf').reset()
        }
    })
})
