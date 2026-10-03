const fs = require('fs');
let code = fs.readFileSync('src/components/Sidebar.tsx', 'utf8');

if (!code.includes('import Image')) {
  code = code.replace(/import Link from 'next\/link';/, "import Link from 'next/link';\nimport Image from 'next/image';");
}

code = code.replace(/<img alt="([^"]+)" className="([^"]+)" src="([^"]+)" \/>/, '<Image alt="$1" className="$2" src="$3" width={32} height={32} />');

fs.writeFileSync('src/components/Sidebar.tsx', code);
console.log('Sidebar updated');
