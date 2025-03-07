function woodQuantity(chairQuantity,tableQuantity,bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;

    const totalWoodQuantity = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;

    return totalWoodQuantity;
}

console.log(woodQuantity(36,6,6));