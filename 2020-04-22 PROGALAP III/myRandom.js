const nextInt = (a) => {
    const nextIntRandom = Math.round(Math.random()) * 10 - a;
    console.log(nextIntRandom);
}

nextInt(3);