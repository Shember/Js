function fac(n){
	if( n == 2)
		return 2;
	return n * fac(n-1)
}

function factorial(n){
	var result =1;
	while(n>1){
		result *= n;
		n--;
	}
	return result;
}

	console.log(fac(9));
	console.log(factorial(9));