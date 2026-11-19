// 2) Bank hisob raqami
// const account = {
//   owner: "Ali",
//   balance: 500
// };

// withdraw(account, amount) funksiyasini yozing.

// Shart: Agar amount <= balance boâ€˜lsa, pulni yeching.
// Aks holda "Insufficient balance" qaytaring.
// Pul yechilgandan keyin yangi balansni qaytaring.

// Masalan:
// withdraw(account, 200);
// Natija: 300

// Keyin: withdraw(account, 400);
// Natija: Insufficient balance

let input = 8900

const account = {
  owner: "Ali",
  balance: 500
}

function withdraw(account, amount){
    if(amount <= account.balance){
        account.balance -= amount
        return account.balance
    }else{
        return "Insufficient balance"
    }
}

console.log(withdraw(account, input))