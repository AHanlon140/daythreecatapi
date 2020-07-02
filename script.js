
const cat_btn = document.getElementById('cat_btn');
const cat_result = document.getElementById('cat_result');

cat_btn.addEventListener('click', getRandomCat);


function getRandomCat() {
    let result = document.querySelector(".result") 
    result.innerHTML = ""

	fetch('https://api.thecatapi.com/v1/images/search')
		.then(Response => Response.json())
		.then(data => {
        let catsImgUrl =  data[0].url

        let catsImgEl = document.createElement("img") 
        catsImgEl.setAttribute('src', `${catsImgUrl}`)
        

       let result = document.querySelector(".result") 
        result.appendChild(catsImgEl)
           
        })
       
}


