var level1A = {parent: "", color: "red", wheels: 4, below: []};

var level2A = {parent: "", color: "orange", wheels: 3, below: []};
var level2B = {parent: "", color: "yellow", wheels: 3, below: []};

var level3A = {parent: "", color: "green", wheels: 2, below: []};
var level3B = {parent: "", color: "blue", wheels: 2, below: []};
var level3C = {parent: "", color: "indigo", wheels: 2, below: []};

var level4A = {parent: "", color: "cyan", wheels: 1, below: []};
var level4B = {parent: "", color: "merigold", wheels: 1, below: []};
var level4C = {parent: "", color: "cyan", wheels: 1, below: []};
var level4D = {parent: "", color: "vermillion", wheels: 1, below: []};

level1A.below.push(level2A);
level2A.parent = "level1A";
console.log(level2A);
level1A.below.push(level2B);
level2B.parent = "level1A";
console.log(level2B);

level2B.below.push(level3A);
level3A.parent = "level2B"
level2B.below.push(level3B);
level3B.parent = "level2B"
level2B.below.push(level3C);
level3C.parent = "level2B"

level3C.below.push(level4A);
level4A.parent = "level3C"
level3C.below.push(level4B);
level4B.parent = "level3C"
level3C.below.push(level4C);
level4C.parent = "level3C"
level3C.below.push(level4D);
level4D.parent = "level3C"

console.log(level1A.below[1].below[2].below[0]); //Will show the object "level4A".
console.log(level1A.below[1].below[2].below[0].color); //Will show the object "level4A"'s color "cyan".

//Change objects and auto update - objects automatically update, not matter where they are on the heiarchy

level1A.below[1].below[2].below[0].color ="not cyan anymore";
console.log(level1A.below[1].below[2].below[0].color); //Will show the object "level4A"'s color "cyan".

console.log("The parent of level4D is: " + level1A.below[1].below[2].below[3].parent);

var whoIsMyGrandParent = (eval(level4D.parent)).parent;
var whoIsMyGreatGrandParent = (eval(whoIsMyGrandParent)).parent;
