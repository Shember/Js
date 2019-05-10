// const fs = require('fs') 
  
// fs.readFile('holi.txt', (err, data) => { 
//     if (err) throw err; 
// 	console.log(data.toString());        
// })

// var lineReader = require('readline').createInterface({
//   input: require('fs').createReadStream('holi.txt')
// });

// lineReader.on('line', function (line) {
//   console.log('Line from file:', line);
// });
var a = [], b = [], c = [], d = [], e = [];
var i = 0;
var lineReader = require('line-reader');
lineReader.open('holi.txt', function(err, reader) {
	while (reader.hasNextLine()) {
    	reader.nextLine(function(err, line) {
    		if (err) {
    			console.log(err);
    		} else {			
    			if(line===""){
    			 	b = e;
    			 	e = [];    			
    			}
    			else{
    				a = line.split(" ").map(function(element) {
  					return parseInt(element);
					});
					e.push(a);
			 	}
    		}
    	});
  	}
  	c = e; 
  	a=[];
  	//construcciòn de d
  	for (i=0; i < b.length; i++) {
  		for (var j=0; j<b[0].length; j++) {
  			a.push(0); 
		}
		d.push(a);	
		a=[];
	}
	// console.log(b);
	// console.log(c);
	// console.log(d);
	// console.log(e);
	
	var j=0, k=0;
	
	for(i=0; i < b.length; i++) {
		for (var j=0; j < b.length; j++) {
			for( k=0; k < b.length; k++){
				d[i][j] += b[i][k] * c[k][j];
			} k=0;
		} j = 0;
	}
	console.log(d);		
});
