function timeout(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, delay, 'done');
    });
}

timeout(1000).then((value) => {
    console.log(value);
});

