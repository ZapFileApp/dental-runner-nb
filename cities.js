const newBrunswickCities = [
  "Rothesay", "Sackville", "Saint Andrews", "Saint John", "Salisbury",
  "Shediac", "Shippagan", "Springfield", "St-Antoine", "St-Basile",
  "St-Isidore", "St-Louis de Kent", "St-Quentin", "St. George", "St. Leonard",
  "St. Martins", "St. Stephen", "Stanley", "Ste-Anne-de-Madawaska", "Summerville",
  "Sussex", "Tabusintac", "Tobique First Nation", "Tracadie-Sheila", "Welsford",
  "Westfield", "Woodstock", "Young`s Cove Road",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < newBrunswickCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(newBrunswickCities[i]);
}

module.exports = { batches };
