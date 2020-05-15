const hello = () => {
    console.log('Hello',this.name);
};

const asd = () => {
    console.log(this.name);
    return 'asd';
};


module.exports = (name) => {
    this.name = name;
    return {
        hello: hello,
        asd
    };
};