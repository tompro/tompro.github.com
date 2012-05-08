$(function(){
	
	var lineCount = 120;
	var aside = $($('aside pre')[0]);
	
	log(aside);
	
	for(var i=0; i<lineCount; i++){
		aside.append( i + '\n');
	}
	
});





















