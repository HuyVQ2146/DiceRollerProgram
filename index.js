function rollDice(){
    const num = document.getElementById('num').value;
    const res = document.getElementById('res');
    const img = document.getElementById('img');
    const values = [];
    const images = [];

    if (num < 1 || num > 27){
        alert('The number of dice must be greater than 0 and less than or equal to 27.');
        return;
    }
    
    for (let i = 0; i < num; i++) {
        const value  = Math.floor(Math.random() * 6) +1;
        values.push(value);
        images.push(`<img src="dice/dice${value}.jpg" alt="Dice ${value}" >`);
            // cái này có thể push cả img bằng lệnh trong html (phải dùng ``)
            // và trong `` vx có thể dùng ${} để format
    };

    res.textContent = `Dice: ${values.join(', ')}`;
    img.innerHTML = images.join('');
}
