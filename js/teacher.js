//  teacher list show

function fetchData() {
    fetch("https://reqres.in/api/users")
        .then(response => {
            if (!response.ok) {
                throw Error("ERROR");
            }

            return response.json();
        })
        .then(data => {
            console.log(data.data);
            const html = data.data
                .map(user => {
                    return `
                    <div class="column">
                        <div class="column1">
                            <div class="a">
                                <p><img src="${user.avatar}" alt="${user.first_name}" ></p>
                            </div>
                            
                            <div class="b">
                                 <p>Name: ${user.first_name}</p>
                                <p>Email: ${user.email}</p> 
                            </div> 
                            
                        </div> 
                    </div>
                    <div class="column">
                    <div class="column1">
                        <div class="a">
                            <p><img src="${user.avatar}" alt="${user.first_name}" ></p>
                        </div>
                        
                        <div class="b">
                             <p>Name: ${user.first_name}</p>
                            <p>Email: ${user.email}</p> 
                        </div> 
                        
                    </div> 
                </div>
                
                    
                    `;
                })
                .join("");
            console.log(html)
            document.querySelector('#app').insertAdjacentHTML('afterbegin', html);

        }).catch(error => {
            console.log(error);
        })

}
fetchData(); 
