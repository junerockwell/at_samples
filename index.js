var arr = [7, 8, 1, 3, 2, 6];

var arr2 = arr.slice();
arr2.sort((a, b) => a - b);
console.log("arr: ", arr);
console.log("arr2: ", arr2);

function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time);
    });
}

async function run() {
    console.log('Hello');
    // sleep(2000)
    // .then(() => {
    //     console.log('June');
    // });
    await sleep(2000);
    console.log('June');
}

// run();
