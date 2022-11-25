# Generative Art Starter for Artblocks
## Introduction
This repository is contains a few key pieces of functionality for developing generative art for the Artblocks.io platform. The goal of this starter is to encourage rapid iteration, fluid development, and inexpensive deployments to the blockchain.

![Sample UI](https://raw.githubusercontent.com/lostPixels/gen-art-starter-ab/main/samples/start.png)


### Seed Management
In production your project will get a predetermined seed from the TX Hash. This will ultimately determine the unique composition of your artwork via the PRNG. 

In development, it is useful to lock the random seed in order to reproduce the artwork and iterate. Eventually this is how your project will work in production.

### Live Reload
In order to quickly iterate this starter pack comes bundled with Webpack's dev server.

### Minification and splitting
In order to minimize gas fees this start pack has pre-built solutions to reduce filesize and split the production bundle in to 10kb chunks (a requirement of Artblocks.)

## Getting Started
1. Clone the repository
2. Run `npm i` in your project folder
3. Run `rpm run start` in your project folder
4. Edit `src/sketch.js` to begin working on your project.

## Preparing for a deployment to the test net.
1. Run `npm run build` in your project folder
2. Open `dist/main.js` and find methods/variables that havent been minified already. These can be further packed down.
3. Add them to `replace.config.json`
4. Run `npm run split`
5. You will now have your chunked project scripts in `dist`, upload these to your project shell. 

## FAQ
#### Should I use the `ab-random` methods or `random()` from P5? 
A. Either is fine, I like the P5 version a little more.


#### How do I handle my features script?
A. In a future update I'll include boilerplate for this

