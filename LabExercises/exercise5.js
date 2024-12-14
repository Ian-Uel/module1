let westStates = ["Texas", "Oregon", "California","Wisconsin", "Montana"];

westStates[0] = "Washington";
westStates[3] = "Nevada";

westStates.unshift("Alaska");
westStates.pop();

console.log(westStates);