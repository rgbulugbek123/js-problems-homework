// Izoh:
// 1) User login
// const user = {
//   username: "admin",
//   password: "12345"
// };

// login(user, username, password) funksiyasini yozing.

// Shart:
// Agar username va password toâ€˜gâ€˜ri boâ€˜lsa:
// Login successful

// Aks holda:
// Invalid username or password

// Masalan:
// login(user, "admin", "12345");

let username = "admsin"
let password = "12345"

const user = {
  username: "admin",
  password: "12345"
}


function login(user, username, password){
    if(user.username == username && user.password == password){
      return "Login successful"
    }else {
      return "Invalid username or password"
    }
}


console.log(login(user,username, password))