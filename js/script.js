const gladiia = {
  fileNumber: "AA05",
  codename: "Gladiia",
  realName: "Gladiia",
  faction: "Ægir",
  subFaction: "Abyssal Hunters",
  class: "Specialist",
  branch: "Hookmaster",
  position: "Melee",
  combatExperienceYears: 17,
  heightCm: 181,
  isInfected: false,
  specialtySkills: `
    Waterless Parting of the Great Ocean
    Waterless Grasp of the Raging Seas
    Waterless Dance of the Shattered Maelstrom`
};

var databaseName = "Rhodes Island Personnel Archive";
const DEFAULT_CLEARANCE = "Level 8";

function displayOperatorProfile(operator) {
  let infectionStatus = operator.isInfected ? "Infected" : "Non-infected";
  const clearanceLevel = DEFAULT_CLEARANCE;


  console.log("===================================");
  console.log(`DATABASE: ${databaseName}`);

  console.log("===================================");
  console.log(`File Number: ${operator.fileNumber}`);
  console.log(`Codename: ${operator.codename}`);
  console.log(`Real Name: ${operator.realName}`);
  console.log(`Faction: ${operator.faction}`);
  console.log(`Sub Faction: ${operator.subFaction}`);
  console.log(`Class: ${operator.class}`);
  console.log(`Branch: ${operator.branch}`);
  console.log(`Position: ${operator.position}`);
  console.log(`Years of Combat Experience: ${operator.combatExperienceYears}`);
  console.log(`Height: ${operator.heightCm} CM`);
  console.log(`Infection Status: ${infectionStatus}`);
  console.log(`Security Level: ${clearanceLevel}`);

  console.log(`Skills: ${operator.specialtySkills}`);
  console.log("===================================");
}

displayOperatorProfile(gladiia);
