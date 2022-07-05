const Fizz = (n) => {

    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz")
        } else if (i % 3 == 0) {
            console.log("Fizz", i)
        } else if (i % 5 == 0) {
            console.log("Buzz", i)
        } else {
            console.log(i)
        }
    }
}


Fizz(15)