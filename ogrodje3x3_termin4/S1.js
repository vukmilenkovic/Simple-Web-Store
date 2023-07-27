
/**
 * NFKP number of individual bread slices and salami slices.
 * It calculates the max number of sanwiches we can produce with those ingredient counts.
 * where we follow this rules:
 * for making a sandwich we need all of bellow:
 * - 2 slices of bread
 * - 4 slices of salami (for filling)
 * ALGORITHM
 * divide problem of calculating result into two sub problems
 * P1) calculate max sandwich breads (without fillings) we could make with breadSlicesCount
 *			subALGORITHM: 1. divide breadSlicesCount
 *						  2. round result
 * P2) calculate max sandwich fillings (without bread) we could make with salamiSlicesCount
 * P3) calculate max sandwiches from P1 and P2
 * --------
 * P1 - subALGORITHM:
 *		1. divide breadSlicesCount by 2
 *		2. discard decimals from result (Math.floor)
 * P2 - subALGORITHM:
 *		1. divide salamiSlicesCount by 4
 *		2. discard decimals from result (Math.floor)
 * P3 - we deduced following rules:
 *        for making a sandwich we need all of bellow
 * 			- sandwich bread (from P1) - call them sandwichBread
 * 			- sandwich filling (from P2) - call it sandwichFilling
 * P3 - ALGORITHM
 *	   1. we need both so the minumum number is the number of sandwich we can produce
 * @param breadSlicesCount {Number} number of individual bread slices
 * @param salamiSlicesCount {Number} number of individual salami slices
 * @return {Number} max number of sanwiches we can produce with those ingredient counts
 */
function getNumerOfSandwiches (breadSlicesCount, salamiSlicesCount) {
	console.log("getNumerOfSandwiches invoked with params", breadSlicesCount, salamiSlicesCount)
	sandwichBread = Math.floor(breadSlicesCount/2);
	sandwichFilling = Math.floor(salamiSlicesCount/4);
	maxSandwiches = Math.min(sandwichBread, sandwichFilling);
	console.log("getNumerOfSandwiches returning maxSandwiches", maxSandwiches)
	return maxSandwiches
}
