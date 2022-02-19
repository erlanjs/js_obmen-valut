// const API_KEY = 'api_key=1cf50e628dc270629e802686245c2c8'
// const BASE_URL = 'https://api.themoviedb.org/3'
// const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY

const container = document.querySelector('.row')
const input = document.querySelector('form #myList')


fetch("https://restcountries.com/v2/all")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.slice(0, data.length).map(el => {
            container.innerHTML += `
<div class="movie col-3">
<img src="${el.flag}"
                 alt="image">

            <div class="movie-info">
                <h3>${el.name}</h3>
                <span class="green">${el.alpha3Code}</span>
            </div>

            <div class="overview">
                <h3>${el.capital}</h3>
                Насиление: ${el.population} люди <br>
                ${el.region} <br>
                Код номер тел: +${el.callingCodes[0]} ... ... ...
              
            </div>
        </div>
                
            `
            input.innerHTML += `
                <option value="${el.name}"></option>

            `

        })
    })


// console.log(data)
// data.results.slice(0,6).map(el => {
//     images.innerHTML += `
//     <div class="col-4 w-10 h-50">
//     <h3 class="col-title">${el.title}</h3>
//     <p class="col-desc">${el.opening_crawl}</p>
//     <h3 class="produser">Продюсеры: ${el.producer}</h3>
//     <h3 class="produser">${el.episode_id}</h3>