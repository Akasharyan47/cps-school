//  teacher list show


// function fetchData() {
//     fetch("https://yg1y0egp9c.execute-api.ap-south-1.amazonaws.com/dev/teachers-detail")
//         .then(response => {
//             if (!response.ok) {
//                 throw Error("ERROR");
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log(data.data);
//             const html = data.data
//                 .map(user => {
//                     return `
//                     <div class="column">
//                         <div class="column1">
//                             <div class="a">
//                                 <p><img src="${user.avatar}" alt="${user.first_name}" ></p>
//                             </div>
                            
//                             <div class="b">
//                                  <p>Name: ${user.first_name}</p>
//                                 <p>Email: ${user.email}</p> 
//                             </div> 
                            
//                         </div> 
//                     </div>
//                     <div class="column">
//                     <div class="column1">
//                         <div class="a">
//                             <p><img src="${user.avatar}" alt="${user.first_name}" ></p>
//                         </div>
                        
//                         <div class="b">
//                              <p>Name: ${user.first_name}</p>
//                             <p>Email: ${user.email}</p> 
//                         </div> 
                        
//                     </div> 
//                 </div>
                
                    
//                     `;
//                 })
//                 .join("");
//             console.log(html)
//             document.querySelector('#teacherlist').insertAdjacentHTML('afterbegin', html);

//         }).catch(error => {
//             console.log(error);
//         })

// }
fetchData(); 

function fetchData(){
    fetch('https://yg1y0egp9c.execute-api.ap-south-1.amazonaws.com/dev/teachers-detail',{
    method:'GET', 
    headers:{
      'content-type': 'application/json',
      'Accept': 'application/json',
    }, 
    body: JSON.stringify(),
  })
  
    .then((response) => response.json()) 
    .then((response) => { 
      if (response.apiStatus == true) {  
          console.log(response.teachersDetail); 
                      const html = response.teachersDetail
                .map(user => {
                    return `
                    <div class="column">
                        <div class="column1">
                            <div class="a">
                                <p><img src="${user.imageUrl}" alt="${user.name}" ></p>
                            </div>
                            
                            <div class="b">
                                 <p><b>Name:</b> ${user.name}</p>
                                 <p><b>Email:</b> ${user.subjects}</p> 
                            </div>  
                        </div> 
                    </div> 
                </div> 
                    `;
                })
                .join(""); 
            document.querySelector('#teacherlist').insertAdjacentHTML('afterbegin', html);
      } 
    });
} 
