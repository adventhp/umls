import * as XLSX from 'xlsx';
import {join } from 'path';
const { read, utils: { sheet_to_json } } = XLSX;

export function readFirstSheet(data: any, options: XLSX.ParsingOptions = {}) {
	const wb: XLSX.WorkBook = read(data, options);
	console.log(wb);
	const ws: XLSX.WorkSheet = wb.Sheets[wb.SheetNames[0]];
	// return sheet_to_json(ws, { header: 1, raw: true });
}

console.log(readFirstSheet(join(__dirname, '../umls.xlsx')));
