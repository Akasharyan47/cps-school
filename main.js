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
        window.open("studentdetail.html", '_blank').focus(); {
          let unm = (response.user_name);
          document.getElementById("urnme").innerHTML = unm;
          //  console.log(response.user_name);
          console.log(unm);
 
        }
      }
      else {
        alert("invaled pass")
      }
      form.reset();

    })
 
 
});

// login============ END==========
 

//////////END 
  
 