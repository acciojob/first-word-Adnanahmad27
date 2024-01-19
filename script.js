function firstWord(s){
  // your code here
	// let index = 0;
	// for(let i=0 ; i<s.length ; i++){
	// 	if(s[i]===" "){
	// 		index = i;
	// 		break;
	// 	}
	// }
	// return s.slice(0,index);
	let result = "";
	for(let i=0 ; i<s.length ; i++){
		if(s[i]===" "){
			if(!(result.length === 0)){
				return result;
			}
		}else{
			result += s[i];
		}
	}
	return result;
}

// Do not change the code below

const s = prompt("Enter String:");

alert(firstWord(s));
