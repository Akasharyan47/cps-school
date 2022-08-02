

//   LOGOUT FUNCTION
function close_window() {
    if (confirm("LOGOUT")) {
        close();
    }
}


//  th  and   td   function  data
function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

//          STUDENT DETAILS FUNCTION 


function lkg() {
    reloadDiv();
    lkgdata();
}
function ukg() {
    reloadDiv();
    ukgdata();
}


//  reload function    

function reloadDiv() {
    $("#clear").load(window.location.href + " #clear");
}

//   ukg payload function  send data 

function lkgdata() {
    const data = { class: 'lkg' };
    fetch("http://127.0.0.1:5000/student-details", {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(result => result.json())
        .then(json => show(json.student_details))
}

//   ukg payload function  send data 

function ukgdata() {

    const data = { class: 'ukg' };
    fetch("http://127.0.0.1:5000/student-details", {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(result => result.json())
        .then(json => show(json.student_details))
}

//    show data  function 

function show(student_details) {
    let table = document.getElementById('data');

    for (let i = 0; i < student_details.length; i++) {

        let obj = student_details[i];
        let count = Object.keys(student_details).length
        console.log(count);
        let row = document.createElement('tr');
        let s_rollno = document.createElement('td');
        let s_name = document.createElement('td');
        let s_id = document.createElement('td');

        s_rollno.innerHTML = obj.s_rollno
        s_name.innerHTML = obj.s_name
        s_id.innerHTML = obj.s_id


        row.appendChild(s_name)
        row.appendChild(s_rollno)
        row.appendChild(s_id)

        table.appendChild(row)
 
        document.getElementById("tnum").innerHTML = count;
    }
}
//   new formate drop down  


function toggleItems() {
    $('.dropdown-menu').toggleClass('open');
}

$('.dropdown-menu li').click(function () {
    var text = $(this).text(); // get text of the clicked item
    $(".dropdown-toggle").text(text); // set text text to the button (dropdown)
});

function test() {
    var element = document.getElementById("flat-example-2");

    if ($(element).hasClass('on')) {
        element.classList.remove("on");
    } else {
        element.classList.add("on");
    }
}


  //  end    fromate  btn   

//     hide  and  show     student detail  btn     START
 
 
function replace() {
    var x = document.getElementById('show1');
    var y = document.getElementById('show2');
    if (x.style.display == 'none')
     {
        x.style.display = 'block';
        y.style.display = 'none';

    } else {
        x.style.display = 'none';
        y.style.display = 'block';

    }
}


//    HIDE STD DETIL     END   

//  user name print  start 
   
    // let user_name = (response.user_name); 
    // user_name=document.getElementById("user_name")
    // localStorage.gtItem("user_name",response.user_name) 
    //  user_name=document.getElementById("user_name").innerHTML = user_name;
 
  

     var user_name = document.getElementById("user_name");

     for ( var i = 0, len = localStorage.length; i < len; ++i ) {
        user_name.innerHTML = ( localStorage.getItem( localStorage.key( i ) ) );
     }

 
