const fs = require('fs');
let code = fs.readFileSync('src/app/officer/post-tender/page.tsx', 'utf8');

code = code.replace(/useState\(\[\]\)/g, 'useState<any[]>([])');
code = code.replace(/useState\(null\)/g, 'useState<any>(null)');

code = code.replace(/disabled="disabled"/g, 'disabled={true}');
code = code.replace(/disabled="true"/g, 'disabled={true}');
code = code.replace(/checked="checked"/g, 'defaultChecked={true}');
code = code.replace(/checked="true"/g, 'defaultChecked={true}');
code = code.replace(/required="required"/g, 'required={true}');
code = code.replace(/required="true"/g, 'required={true}');
code = code.replace(/readOnly="readOnly"/g, 'readOnly={true}');
code = code.replace(/readOnly="true"/g, 'readOnly={true}');
code = code.replace(/selected="selected"/g, 'defaultValue={true}');

fs.writeFileSync('src/app/officer/post-tender/page.tsx', code);
console.log('Fixed TS issues');
