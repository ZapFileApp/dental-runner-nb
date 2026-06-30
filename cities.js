const newBrunswickCities = [
  "Albert", "Albert Mines", "Allardville", "Alma", "Baie-Ste-Anne",
  "Baker Brook", "Balmoral", "Bath", "Bathurst", "Belledune",
  "Beresford", "Blacks Harbour", "Blackville", "Boiestown", "Bouctouche",
  "Browns Flat", "Campbellton", "Campobello Island", "Canterbury", "Cap-Pele",
  "Caraquet", "Centreville", "Chatham", "Chipman", "Clair",
  "Clarks Corners", "Cocagne", "Dalhousie", "Debec", "Dieppe",
  "Doaktown", "Dorchester", "Edmundston", "Florenceville", "Fords Mills",
  "Fredericton", "Fredericton Junction", "Gagetown", "Glassville", "Grand Bay",
  "Grand Falls", "Grand Manan", "Grand-Sault", "Grande-Anse", "Hampstead",
  "Hampton", "Harewood", "Hartland", "Havelock", "Hillsborough",
  "Hoyt", "Jacquet River", "Kedgwick", "Keswick", "Lameque",
  "Maces Bay", "McAdam", "Meductic", "Memramcook", "Millville",
  "Minto", "Miramichi", "Miscou Island", "Moncton", "Nackawic",
  "Neguac", "New Denmark", "Norton", "Oromocto", "Paquetville",
  "Perth-Andover", "Petit Rocher", "Petitcodiac", "Plaster Rock", "Port Elgin",
  "Quispamsis", "Red Bank", "Richibucto", "Riverview", "Rogersville",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < newBrunswickCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(newBrunswickCities[i]);
}

module.exports = { batches };
