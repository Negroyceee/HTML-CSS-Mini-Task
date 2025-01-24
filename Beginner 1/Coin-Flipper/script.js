function coinFlipper(){
    let flip = Math.floor(Math.random() * 2);
    
    if (flip == 0){
        return 'tail';
    }
    else if (flip == 1){
        return 'heads';
    }
    else {
         return 'Error';
    }
    
}

console.log("Coin: " + coinFlipper())