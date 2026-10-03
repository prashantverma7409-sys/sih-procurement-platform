const fs = require('fs');

const layoutPath = 'C:/Users/prash/OneDrive/Desktop/Project/sih-procurement-platform/src/app/layout.tsx';
let content = fs.readFileSync(layoutPath, 'utf8');

// Add import
content = content.replace("import Link from 'next/link';", "import Sidebar from '@/components/Sidebar';\n");

// Replace aside
content = content.replace(/<aside[\s\S]*?<\/aside>/, '<Sidebar />');

fs.writeFileSync(layoutPath, content);
