//add money to diposite
document.getElementById('diposite-btn').addEventListener('click',function(){
    
    let addDiposite = document.getElementById('diposite-amount').value;
    addDiposite = parseFloat(addDiposite);
    
    let currentDipoBalance = document.getElementById('curent-dipo-amount').innerText;
    currentDipoBalance = parseFloat(currentDipoBalance);

    let dipositeBalance = addDiposite + currentDipoBalance;
    //update deposite balance
    document.getElementById('curent-dipo-amount').innerText = dipositeBalance;
    //clear diposite input feild
    document.getElementById('diposite-amount').value = ' ';

    //update curent balance
    let currentTotalBalance = document.getElementById('balance-total').innerText;
    currentTotalBalance = parseFloat(currentTotalBalance);

    let totalBalance = currentTotalBalance + addDiposite;

    document.getElementById('balance-total').innerText = totalBalance;
    
})

//Withdrow money from Balance
document.getElementById('withdrow-btn').addEventListener('click',function(){
    
    let addWithdrow = document.getElementById('withdrow-amount').value;
    addWithdrow = parseFloat(addWithdrow);
    
    let currentWithdrowBalance = document.getElementById('current-withdrow-balance').innerText;
    currentWithdrowBalance = parseFloat(currentWithdrowBalance);

    let totalWithdrowBalance = addWithdrow + currentWithdrowBalance;
    //update withdrow balance
    document.getElementById('current-withdrow-balance').innerText = totalWithdrowBalance;
    //clear withdrow input feild
    document.getElementById('withdrow-amount').value = ' ';

    //update curent balance
    let currentTotalBalance = document.getElementById('balance-total').innerText;
    currentTotalBalance = parseFloat(currentTotalBalance);

    let totalBalance = currentTotalBalance - addWithdrow;

    document.getElementById('balance-total').innerText = totalBalance;
    
})