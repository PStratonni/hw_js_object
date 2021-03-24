const footballTeam = {
  teamName: "",
  teamCity: "",
  yearFoundation: "",
  playres: [],
};

footballTeam.teamName = prompt("Как ты назовёшь команду?", "Санкт-Паули");
footballTeam.teamCity = prompt("Откуда мы? (Город)", "Гамбург");
footballTeam.yearFoundation = +prompt("Год основания", "1900");
let coachNumber = 1;
let goalkeeperNumber = 3;
let backNumber = 7;
let midfieldersNumber = 8;
let forwardNumber = 4;
let staffNumber =
  goalkeeperNumber +
  backNumber +
  midfieldersNumber +
  forwardNumber +
  coachNumber;
for (let i = 0; i < staffNumber; i++) {
  const playre = {
    position: "",
    name: "",
    age: "",
    endContract: "",
  };
  if (i < goalkeeperNumber) {
    playre.position = "Вратарь";
  } else if (i < goalkeeperNumber + backNumber) {
    playre.position = "Защитник";
  } else if (i < goalkeeperNumber + backNumber + midfieldersNumber) {
    playre.position = "Полузащитник";
  } else if (
    i <
    goalkeeperNumber + backNumber + midfieldersNumber + forwardNumber
  ) {
    playre.position = "Нападающий";
  } else {
    playre.position = "Тренер";
  }
  //   playre.name = `Playre ${i + 1}`;
  let key;
  do {
    key = 0;
    playre.name = prompt(`Имя игрока ${i + 1}`);
    if (playre.name === "" || +playre.name === 0) {
      alert("Вы зыбыли про имя, или ввели число");
      key = 1;
    } else {
      for (let j = 0; j < i; j++) {
        if (playre.name === footballTeam.playres[j].name) {
          alert("Он уже у нас играет. Введи новое имя");
          key = 1;
          break;
        }
      }
    }
  } while (key);
  playre.age = 18 + Math.floor(Math.random() * Math.floor(7));
  playre.endContract = 2022 + Math.floor(Math.random() * Math.floor(4));
  if (i >= staffNumber - coachNumber) {
    playre.name = "Coach";
    playre.age = 40 + Math.floor(Math.random() * Math.floor(20));
  }
  footballTeam.playres.push(playre);
}

console.table(footballTeam);
