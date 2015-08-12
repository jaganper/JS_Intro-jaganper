exports.ReverseString = function(str){

	var len = str.length;
	var temp = str.charAt(len-1);

	for(var i = len - 2; i >= 0; i--){
		temp = temp.concat(str.charAt(i));
	}

	return temp;

}

// Given a string with lname,fname - return an array with the first names.
// Example: SplitString("Gates,Bill;Jobs,Steve;Page,Larry") should return
// an array ["Bill","Steve","Larry"]

exports.GetFirstNames = function(str){
	if(str == null){
		return null;
	}
	//seperate by ;
	var fullNameArray = str.split(";");

	var firstNameArray = new Array();

	for(var i = 0; i < fullNameArray.length;i++){

		var firstName = fullNameArray[i].split(",");

		if(firstName.length < 1 || !firstName[1]){
			continue;
		}

		firstNameArray.push(firstName[1]);

	}
	return firstNameArray;
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){

}

// Given an array of sentences, create a paragraph by concatenating all the strings and adding
// fullstop (.) after each senetences.
exports.CreateParagraph = function(arrayOfStrings){

	if(arrayOfStrings == null){
		return null;
	}

	var paragraph = "";

	if(arrayOfStrings.length == 0){
		return paragraph;
	}

	for(var i = 0; i < arrayOfStrings.length; i++){
		paragraph += arrayOfStrings[i];

		paragraph += ".";
	}

	return paragraph;
}

