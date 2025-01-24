function passwordGenerator(length){
    const char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUV1234567890!@#$%^&*()-_=+./,';
    let passWord = '';

    for (let i = 0; i < length; i++){
        const randomChar = Math.floor(Math.random()*char.length);
        passWord += char[randomChar];
    }
    return passWord;
}

console.log(passwordGenerator(10))