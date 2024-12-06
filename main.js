while (true) {
    let user = +prompt("Son kiriting:");
    if (user === null){
        alert("amal bajarilmadi")
        break; 
    }
        

    let kiritish = prompt("Darajani kiriting:");
    if (kiritish === null){
        alert("amal bajarilmadi")
        break;
    }

     if (user === "" || isNaN(user) || user == 0 || 
        kiritish === "" || isNaN(kiritish) || kiritish == 0) {
        alert("Son yoki daraja noto'g'ri. Iltimos qaytadan kiriting.");
        continue;
    }

    let son = user; 
    let daraja = kiritish; 
    let umumiy = 1;

    for (let i = 0; i < daraja ; i++) {                                     
        umumiy *= son;
        
    } if (daraja < 0) {
        umumiy = 1 / umumiy;
        
    }

    
    console.log(`${son} ^ ${daraja} = ${umumiy}`);
    alert(`${son} ^ ${daraja} = ${umumiy}`);
    break;
}