// let user = {
//     name : "Ali",
//     age : 23
// }

// user.name = "Valisher"
// user.age = 100

// delete user.age

// console.log(user)
"use strict"

// let fullname = "Ali Valiyev"
// let obj = {
//     name : "ali",
//     info : function(){
//         return "Alisher"
//     },
//     isAdmin : true,
//     Address : {
//         region : "Sirdaryo",
//     },
//     name : fullname,
//     23 : "Salom",
//     true:false
// }

// console.log(obj["Address"]["region"])
// console.log(obj['23'])


// let obj = Object({name:"Salim"})
// console.log(obj)


// let user = {
//     name:"ali",
// }

// user.age = 23
// user.isAdmin = true

// console.log(user)


// let user = {
//     name: "Ali",
//     age: 23,
//     isAdmin: true,
//     job: "dev",
// }
// let user2 = {
//     length : 34,
//     weight : 100
// }

// let user3 = Object.assign(user2,user)
// console.log(user2)

// let data = Object.keys(user)
// let data = Object.values(user)
// let data = Object.entries(user)
// Object.freeze(user)

// user.name = "Qodir"
// delete user.name

// let obj = {
//     length: 100,
//     job: "Makler",
//     ...user,
//     weight: 1000,
// }


// console.log(obj)


// let obj = Object.create({})
// obj.name = "Ali"

// console.log(obj)



let user = {
    name: "Ali",
    age: 23,
    isAdmin: true,
    job: "dev",
}


for(let key in user){
    console.log(user[key])
}
