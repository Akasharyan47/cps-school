//     responsive  mobile nav bar 
{
  const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
 

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
 
};

mobile_nav.addEventListener("click", () => toggleNavbar());

function bars() {
  document.getElementById("main").style.display = "none";
}

function xmark() {
  document.getElementById("main").style.display = "block";
}

}
//     responsive  mobile nav bar    END

 


 

// var modal = document.getElementById('id01');
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

 
// end ----------------------^


// == LOGIN =========START==============

document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
  var obj = {
    form: document.getElementById("form"),
    user_id: document.getElementById("user_id").value,
    password: document.getElementById("password").value,
  };
  fetch('http://127.0.0.1:5000/login', {
    method: "POST",
    headers: {
      'content-type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(obj),
  })

    .then((response) => response.json())
    .then((response) => {

      if (response.status == "success") {
        //  window.open("studentdetail.html", '_blank').focus();
        // window.location.href = "studentdetail.html";
        // window.open("studentdetail.html", '_blank').focus(); 
 
        {
          // let unm = (response.user_name);
          // unm=document.getElementById("urnme").innerHTML = unm;
          // console.log(response.user_name);
          // console.log(unm);
          
          let user_name = (response.user_name); 
          window.open("studentdetail.html", '_blank').focus();

          user_name=document.getElementById("user_name")
          localStorage.setItem("user_name",response.user_name) 
 
        }
        
 
      }
      else {
        alert("invaled pass")
      }
      form.reset()
    })
});


 

// login============ END==========
 
// cps  image slide start
 


 
 
 

// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }



let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
 
 //END 
  
  

 