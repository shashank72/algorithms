const assignPoolToCourt = (pools, courts) => {
  let overAllTotalCount = internalArrayItemsCount(pools);

  const overAllTeam = [...Array(courts).keys()].map((temp, index) => {
    let x = [];
    return x;
  });

  while (internalArrayItemsCount(overAllTeam) < overAllTotalCount) {
    debugger;
    for (let i = 0; i < pools.length; i++) {
      for (let j = 0; j < courts; j++) {
        overAllTeam[j].push(...pools[i].splice(0, 1));
      }
    }
  }
  console.log(overAllTeam);
};

const internalArrayItemsCount = array => {
  return array.reduce((total, a1) => {
    return total + a1.length;
  }, 0);
};

let team1 = [
  [" Smallwood/Semo", " Vaught/Webber", "Patterson/Budinger"],
  [" Guerreiro/Ashment", "Patterson/Budinger", " Vaught/Webber"],
  [" Smallwood/Semo", "Patterson/Budinger", " Guerreiro/Ashment"],
  [" Vaught/Webber", " Guerreiro/Ashment", " Smallwood/Semo"],
  [" Smallwood/Semo", " Guerreiro/Ashment", "Patterson/Budinger"],
  ["Patterson/Budinger", " Vaught/Webber", " Smallwood/Semo"]
];

let team2 = [
  [" Deuchar/Haine", " Caldwell/Meer", " Mewhirter/Burik"],
  ["Crabb/Gibb", " Mewhirter/Burik", " Caldwell/Meer"],
  [" Deuchar/Haine", " Mewhirter/Burik", " Caldwell/Meer"],
  [" Caldwell/Meer", "Crabb/Gibb", " Deuchar/Haine"],
  [" Deuchar/Haine", "Crabb/Gibb", " Mewhirter/Burik"],
  [" Mewhirter/Burik", " Caldwell/Meer", " Deuchar/Haine"]
];

let team3 = [
  ["Dalhausser/Lucena", " Hiehle/Semo", " Paulis/Satterfield"],
  [" Paulis/Satterfield", " Rosener/Cervantes", " Hiehle/Semo"],
  ["Dalhausser/Lucena", " Rosener/Cervantes", " Paulis/Satterfield"],
  [" Hiehle/Semo", " Paulis/Satterfield", "Dalhausser/Lucena"],
  ["Dalhausser/Lucena", " Paulis/Satterfield", " Rosener/Cervantes"],
  [" Rosener/Cervantes", " Hiehle/Semo", " Paulis/Satterfield"]
];

assignPoolToCourt(
  [
    JSON.parse(JSON.stringify(team1)),
    JSON.parse(JSON.stringify(team2)),
    JSON.parse(JSON.stringify(team3))
  ],
  2
);
