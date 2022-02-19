
let inputValue = document.querySelector('.curr')
let inputValue1 = document.querySelector('.curr1')
let inputBtn = document.querySelector('.get-rates')
let output = document.querySelector('.output')
let input = document.querySelector('.input')

fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => {
        console.log(data)

    })


fetch(`https://api.exchangerate.host/latest?base=${inputValue1.value}`)

    .then(res => res.json())
    .then(data =>  {
        console.log(data)
        Object.keys(data.rates).map(item =>{
           inputValue.innerHTML += `
            <option value="${item}">${item}</option>
        `
       })

        const newOp = Object.keys(data.rates).map(item =>{
            inputValue1.innerHTML += `
            <option value="${item}">${item}</option>
        `
        })

        inputBtn.addEventListener('click' , () =>{
            fetch(`https://api.exchangerate.host/latest?base=${inputValue1.value}`)
                .then(res => res.json())
                .then(data =>  {
                    console.log(data)
                    output.value = (input.value * data.rates[inputValue.value]).toFixed(2)
                })
            console.log(inputValue.value)
        })

})


