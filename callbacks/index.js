const successMessage = (squaredNumber) => {
    console.log('successfully completed homework', squaredNumber)
}

const completedHomework = function (subject, callback) {
    alert(`You have finished your ${subject} homework`)

    const squareNumber = (number) => number * number

    const squaredNumber = squareNumber(54)

    if (typeof callback === 'function') {
        callback(squaredNumber)
    }
}

completedHomework('math', successMessage)

const button = document.getElementById('clicker')

button.addEventListener('click', (event) => {
    console.log(event)
    console.log('successfully completed homework')
})
