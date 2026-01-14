function isTwentyOne (arg) {
		
	// this object must contain twenty one's as the keys and the string description of each key must be values of the given object  
	let twentyOneS = {
		 "twenty one": "21 written in English",
		 "21": "string number of 21",
		21: "number 21 in arabic numerals",
		"XXI": "number 21 in roman numerals using latin letters",
		"двадцать один": "twenty one on russian",
		"двадцать адин": "twenty one on russian with spelling mistake",
		"жиырма бір": "twenty one on kazakh",
		"7*3": "twenty one prime factorized and represented as a string",
		"7x3": "twenty one prime factorized and represented as a string",
		"10101": "twenty one in binary in 5-bit representation",
		"0001 0101": "twenty one in binary in 8-bit representation with space in the middle between bytes",
		"00010101": "twenty one in binary in 8-bit representation",
		


	};
	return `${arg}: twentyOneS[arg]`;
	

}




console.log(isTwentyOne(21));
