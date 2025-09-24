function sum(a, b, callback) {
    const result = a + b;
    callback(result);
}

sum(5, 7, function(result) {
    console.log('The sum is:', result);
});
