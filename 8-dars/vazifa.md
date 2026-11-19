Izoh:
1) User login
const user = {
  username: "admin",
  password: "12345"
};

login(user, username, password) funksiyasini yozing.

Shart:
Agar username va password to‘g‘ri bo‘lsa:
Login successful

Aks holda:
Invalid username or password

Masalan:
login(user, "admin", "12345");

2) Bank hisob raqami
const account = {
  owner: "Ali",
  balance: 500
};

withdraw(account, amount) funksiyasini yozing.

Shart: Agar amount <= balance bo‘lsa, pulni yeching.
Aks holda "Insufficient balance" qaytaring.
Pul yechilgandan keyin yangi balansni qaytaring.

Masalan:
withdraw(account, 200);
Natija: 300

Keyin: withdraw(account, 400);
Natija: Insufficient balance

3) Employee salary
const employee = {
  name: "Vali",
  salary: 500,
  experience: 3
};

calculateSalary(employee) funksiyasini yozing.

Shart:
Agar experience >= 3 bo‘lsa, salaryga 20% bonus qo‘shilsin.
Aks holda salary o‘zgarmasin.

Masalan:
calculateSalary(employee);

Natija:600