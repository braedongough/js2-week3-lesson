console.log('first')

let count = 0

const interval = setInterval(() => {
    console.log(count)

    count++
}, 500)

console.log('third')

setTimeout(() => {
    clearInterval(interval)
    console.log('cleared the interval')
}, 5000)
