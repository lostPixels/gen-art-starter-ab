import Random from './ab-random';

let PRODUCTION = process.env.NODE_ENV === 'production';

window.setup = () => {

    if (tokenData.hash) {
        const R = new Random();
        let randomSeedValue = R.random_dec() * 100000000000000000;
        randomSeed(randomSeedValue);
        noiseSeed(randomSeedValue);
    }

    if (!PRODUCTION) {
        console.log(`Random Seed: ${tokenData.hash}`);
    }

    createCanvas(1000, 600);
}

window.draw = () => {
    background(255)
    circle(width / 2, height / 2, 400);
}