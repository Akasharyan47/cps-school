//  teacher list show

teachersdata();

function teachersdata() {
    fetch('https://nsch6pq5cd.exeecute-api.ap-south-1.amazonaws.com/dev/teachers-detail', {
        method: 'GET',
        headers: {
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
                    <div class="teachercolumn">
                        <div class="teachercolumn1">
                            <div class="a  ">
                                <p><img src="${user.imageUrl}" alt="${user.name}" ></p>
                            </div>
                            
                            <div class="b row"> 
                                <a><p>Name:</p>${user.name}</a><br><br>
                                <a><p>Subject:</p>${user.subjects}</a>
                            </div>  
                        </div> 
                    </div> 
                </div> 
                    `;
                    })
                    .join("")
                    .replace(/[|]/g, ' , ');

                document.querySelector('#teacherlist').insertAdjacentHTML('afterbegin', html);
            }
        });
} 
