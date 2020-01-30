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
          if (n < 5) {
            teamList.push([temp[i], temp[n - 1 - i]]);
          } else {
            if (
              !teamList[teamList.length - 1].includes(temp[i]) &&
              !teamList[teamList.length - 1].includes(temp[n - 1 - i]) &&
              !checkDuplicate(teamList, [temp[i], temp[n - 1 - i]])
            )
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
  let temp = [...Array(n).keys()].map(x => ++x);
  let remainingTeams;
  for (let i = 0; i < teamCreteria.length; i++) {
    if (i == teamCreteria.length - 1 || n < 5) {
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
  //console.log("After adding refere");
  console.log(teamCreteria);
  return teamCreteria;
};

const getRemaingItems = (arr1, arr2) => {
  return arr1.filter(x => !arr2.includes(x));
};

//const gen

const poolManagement = noOfTeams => {
  let teamCreteria = generatePoolTemplateAlog(TeamCount);
  console.log(assignRefere(teamCreteria, TeamCount));
};

const TeamScheduler = TeamsList => {
  if (TeamsList.length == 0) {
    console.log("there are no teams");
  } else {
    let teamCreteria = generatePoolTemplateAlog(TeamsList.length);
    assigingTeams(TeamsList, assignRefere(teamCreteria, TeamsList.length));
  }
};

const assigingTeams = (TeamsList, TeamCreteriaWithRef) => {
  //console.log(TeamsList);
  let finalTeams = [];
  TeamCreteriaWithRef.forEach(match => {
    let Match = {};
    Match["match"] = `${TeamsList[match[0] - 1]} , ${TeamsList[match[1] - 1]}`;
    Match["ref"] = TeamsList[match[2] - 1];
    finalTeams.push(Match);
  });
  console.log(finalTeams);
};

let Teams = [
  "Dalhausser/Lucena",
  " Paulis/Satterfield",
  " Rosener/Cervantes",
  " Hiehle/Semo",
  " Deuchar/Haine"
];

TeamScheduler(Teams);
