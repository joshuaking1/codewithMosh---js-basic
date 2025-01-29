showNumbers(10);

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        const message = (i % 2 === 0) ? "EVEN" : "OOD";
        console.log(i, message)
    }
}