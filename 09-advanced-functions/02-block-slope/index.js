//* This variable is in the block scope
let bird = 'mandarin duck';

function birdWatch() {
    //* These variables are in the function scope
    let bird = 'golden pheasant';
    console.log(bird);
}

birdWatch();
console.log(bird);
