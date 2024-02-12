console.log('Load From APP.JS')



    const popular = () =>{
        const ur =  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=all';
        fetch(ur)
        .then(res => res.json())
        .then(data => popularDisplay(data.drinks))
        .catch(error => console.error('STOP...!!! Debug First. Data Not Found', error))


    }



   const popularDisplay = popular =>{
    // console.log(popular)
    
    const rowForColumns = document.getElementById('rowForColumns'); 
    popular = popular.slice(0,8)

    popular.forEach(data => {        
            const columns = document.createElement('div')
            columns.classList.add('col');
            columns.innerHTML = ` 
                <div class="card display-primary-color  ">
                <img src="${data.strDrinkThumb}" class="card-img-top p-2" alt="...">
                    <div class="card-body ">
                        <h5 class="card-title">${data.strDrink}</h5>
                        <p class="card-text">${data.strCategory}</p>
                    </div>
                </div>
            `;
            rowForColumns.appendChild(columns);
        });


    

   }




   popular()