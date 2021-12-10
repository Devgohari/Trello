
const debounce = (func, delay) => {
    let debounceTimer
    return function () {
        const context = this
        const args = arguments
        clearTimeout(debounceTimer)
        debounceTimer = setTimeout(() => func.apply(context, args), delay)
    }
}
console.log(debounce(function () {
    alert("Hello\nNo matter how many times you" +
        "click the debounce button, I get " +
        "executed once every 3 seconds!!")
}, 3000))