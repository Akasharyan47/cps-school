//  teacher list show
 
teachersdata(); 

function teachersdata(){
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
                                 <p><b>Subject:</b> ${user.subjects}</p> 
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
