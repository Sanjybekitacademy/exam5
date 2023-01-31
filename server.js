const inp = document.querySelector('.inp')
const btn = document.querySelector('.sr')
const keepbtn = document.querySelector('.keep')
const result = document.querySelector('.result')

let arr = []
keepbtn.addEventListener('click', () => {
   let name = inp.value
   for(let i = 0; i < arr.length; i++){
    if(arr[i] === name){
        return name
    }
   }
   return arr.push(name)
})
keepbtn.addEventListener('click', () => {
    result.innerHTML = arr.join(', ')
})
btn.addEventListener('click', () => {
    arr.innerHTML = ''
    const min = arr.sort(function (a, b)  {
        return a.localeCompare(b)
    })
    arr.forEach(el => {
        result.innerHTML = min
            btn.addEventListener('click', () => {
                arr.innerHTML = ''
                const max = arr.sort(function (a, b)  {
                    return b.localeCompare(a)
                })
                arr.forEach(el => {
                    result.innerHTML = max
                }) 
            })
    }) 
})





