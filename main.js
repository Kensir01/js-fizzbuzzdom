const containerElement = document.getElementById("container");

for (let i = 1; i <= 100; i++) {

    if (i%3 == 0 && i%5 == 0) {
        containerElement.innerHTML = containerElement.innerHTML + "<div class='box multiplo3_5'>FizzBuzz</div>"
    }
    else if (i%3 == 0) {
        containerElement.innerHTML = containerElement.innerHTML + "<div class='box multiplo3'>Fizz</div>"
    }
    else if (i%5 == 0) {
        containerElement.innerHTML = containerElement.innerHTML + "<div class='box multiplo5'>Buzz</div>"
    }
    else {
        containerElement.innerHTML = containerElement.innerHTML + "<div class='box'>" + i + "</div>"
    }
}
