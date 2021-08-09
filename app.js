scores = 0
a = prompt("Выберите язык разметки: а) HTML b) CSS c) JS ");
if (a == "a") {
  scores +=2;
}

b = prompt("Выберите что бы вы хотели создать: a) Игру b) Сайт c) Программу ");
if (b == "b") {
  scores +=2
}

c = prompt("Выберите лучшую машину: a) Mersedes - Benz b) Audi c) BMW");
if (c =="c") {
  scores +=100
}
alert(` ${scores} - результат.`);
