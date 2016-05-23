export function multiplicationTables(row,col){
	function createRows(col,rowCount){
		let _rows = [];
		let count = 1;
		let i;
		for(i=0;i<col;i++){
			_rows.push(count * rowCount);
			count++;
		}
		return _rows;
	}
	function createCol(row,col){
		let rowCount = 1;
		let arr = [];
		for(var i =0;i<row;i++){
			arr.push(createRows(col,rowCount));	
			rowCount++;
		}
		return arr;
	}
	return createCol(row,col);
}


// export function multiplicationTables(row,col){

//   return [...Array(row)].map((_, i) =>
//     [...Array(col)].map((_, j) => (i + 1) * (j + 1))
//   );
// }