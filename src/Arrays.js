exports.SumOfArray = function(arrayOfNums){

	var sum = 0;

	for(var i = 0; i < arrayOfNums.length; i++){
		sum += arrayOfNums[i];
	}
	return sum;

}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
	var sum = 0;
	var numWasSeen = new Object();

	for(var i = 0; i < arrayOfNums.length; i++)
	{
		var number = arrayOfNums[i];

		if(numWasSeen[number] == null){
			sum += number;
			numWasSeen[number] = true;
		}
	}
	return sum;


}

//2-D array exercises
// Given a 2-d array, verify it is of equal dimensions and return
// the sum of diagonal elements.

exports.SumOfDiagonalCells = function(array2d){

	if(!(array2d instanceof Array)){
		return NaN;
	}
	var numRows = array2d.length;
	var sum = 0;

	for(var i = 0; i < numRows; i++){

		if( !(array2d[i] instanceof Array) || array2d[i].length != numRows){
			return NaN;
		}

		sum += array2d[i][i];
	}
	return sum;

}
