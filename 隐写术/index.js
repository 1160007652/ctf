window.onload=()=>{
	console.log(1);
	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');
	ctx.font="14px Arial";
	ctx.fillText('你能找到falg吗？',100,100);
	let crr = ctx.getImageData(0, 0, 58, 1); 
	
	// 146 154 141 147 58 32 167 167 167 46 157 153 145 170 46   8进制  56 length
	
	const str = '146 154 141 147 58 32 167 167 167 46 157 153 145 170 46'.split(' ');
	let strs = '';
	for (let i=0; i< str.length; i++){
		const arr = str[i].split('');
		if(arr.length % 3 === 0){
			strs += arr[0];
			strs += arr[1];
			strs += arr[2];
			strs += '0';
		}
		if(arr.length % 2 === 0){
			strs += arr[0];
			strs += arr[1];
			strs += '0';
			strs += '1';
		}
	}
	strs.split('').forEach((item,index)=>{
		crr[index] = item;
	});
	ctx.putImageData(crr, 0, 0);
}