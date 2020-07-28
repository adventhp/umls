import { join } from 'path';
import { readFile } from 'fs';
import { parse } from 'papaparse';

const filepath = join(__dirname, '../umls.csv');

function headerTransform(header: string) {
	return header.replace(/[^\w+]/g, '');
}

export function search(params: any) {
	return new Promise((resolve, reject) => {
		readFile(filepath, { encoding: 'utf8' }, (error, data) => {
			if (error) {
				return reject(error);
			}
			const jsonData = parse(data, { header: true, transformHeader: headerTransform });
			resolve(jsonData.data.filter((value: any) =>
				Object.keys(params).every(key => value[key] === params[key])
			));
		});
	})
}
