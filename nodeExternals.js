import fs from 'fs';

// 同步读取 package.json 文件
const packageJson = fs.readFileSync('package.json', 'utf8');
const packageData = JSON.parse(packageJson);
const dependencies = packageData.dependencies;
const packageNames = Object.keys(dependencies);
console.log('packageNames', packageNames);

export { packageNames };
