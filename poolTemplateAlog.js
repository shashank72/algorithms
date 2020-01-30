const generatePoolTemplateAlog = n => {
  let temp = [...Array(n).keys()].map(x => ++x);

  let matches = 0,
    teamList = [];
  if (n % 2 === 1) {
    temp.push("d");
    matches = n * ((n - 1) / 2);
    ++n;
  } else {
    matches = (n - 1) * (n / 2);
  }
  console.log(matches);
  while (teamList.length < matches) {
    for (i = 0; i < n / 2; i++) {
      //console.log(temp);
      if (temp[i] !== "d" && temp[n - 1 - i] !== "d") {
        if (teamList.length != 0) {
          if (
            !teamList[teamList.length - 1].includes(temp[i]) &&
            !teamList[teamList.length - 1].includes(temp[n - 1 - i])
          ) {
            if (!checkDuplicate(teamList, [temp[i], temp[n - 1 - i]]))
              teamList.push([temp[i], temp[n - 1 - i]]);
          }
        } else {
          teamList.push([temp[i], temp[n - 1 - i]]);
        }
      }
    }
    temp.splice(1, 0, temp.pop());
  }

  return teamList;
};

const checkDuplicate = (teamList, team) => {
  debugger;
  return teamList.find(data => {
    return data.join() == team.join();
  });
};

const assignRefere = (teamCreteria, n) => {
  console.log(teamCreteria);
  let temp = [...Array(n).keys()].map(x => ++x);
  let remainingTeams;
  for (let i = 0; i < teamCreteria.length; i++) {
    if (i == teamCreteria.length - 1) {
      remainingTeams = getRemaingItems(temp, [...teamCreteria[i]]);
      //console.log(remainingTeams);
    } else {
      remainingTeams = getRemaingItems(temp, [
        ...teamCreteria[i],
        ...teamCreteria[i + 1]
      ]);
    }
    if (remainingTeams.length == 1) {
      teamCreteria[i].push(...remainingTeams);
    } else {
      teamCreteria[i].push(
        remainingTeams[Math.floor(Math.random() * remainingTeams.length)]
      );
    }
  }
  console.log("After adding refere");
  console.log(teamCreteria);
};

const getRemaingItems = (arr1, arr2) => {
  return arr1.filter(x => !arr2.includes(x));
};

//const gen

let teamCreteria = generatePoolTemplateAlog(5);

assignRefere(teamCreteria, 5);
