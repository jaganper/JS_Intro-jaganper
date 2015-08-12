exports.ParseNumber = function(str){

	if(str == null || !str){
		return NaN;
	}

	return parseInt(str);

}

exports.ConvertNumberToString = function(num){

	if(typeof num != "number"){
		return "";
	}

	return num.toString();

}

exports.ParseDate = function(str){

		if(str == null || !str){
		return NaN;
	}

	return new Date(str);


}

exports.ConvertDateToString = function(dateValue){

	if(!(dateValue instanceof Date)){
		return "";
	}

	return dateValue.toString();
}

//Parse a string containing a comma seperated sequence of numbers
// and return an array containing the numbers. Return NaN for invalid
// numbers in the string.
exports.ParseStringOfNumbers = function(str){
	var arr = new Array();
	if(typeof str != "string" || !str){
		return arr;

	}
	var tempArr = str.split(",");


	for(var i = 0; i < tempArr.length; i++){
		var intVal = parseInt(tempArr[i]);
		arr.push(intVal);
	}

	return arr;
}

exports.ConvertArrayOfNumbersToString = function(obj){

	var str = "";
	if(!(obj instanceof Array)){
		return str;
	}

	return obj.toString();

}


exports.ConvertStringToObject = function(str){

	if(typeof str != "string" || !str){
		return null;
	}

	try
	{
		return JSON.parse(str);	
	}
	catch(e){
		//console.log(e);
		return null;
	}
}

exports.ConvertObjectToString = function(obj){

	if(obj == null){
		return "";
	}

	return JSON.stringify(obj);

}


