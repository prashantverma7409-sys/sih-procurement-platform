const fs = require('fs');

function updateFile(path, replacer) {
  let code = fs.readFileSync(path, 'utf8');
  if (!code.includes('import Skeleton')) {
    code = code.replace(/import React/, "import React from 'react';\nimport Skeleton, { SkeletonText } from '@/components/Skeleton';\n//");
    // Some files don't have import React explicitly, so just inject at top
    if (code.includes('//')) {
      code = code.replace(/('use client';\n)/, "$1import Skeleton, { SkeletonText } from '@/components/Skeleton';\n");
    }
  }
  code = replacer(code);
  fs.writeFileSync(path, code);
}

// 1. Update Post Tender
updateFile('src/app/officer/post-tender/page.tsx', (code) => {
  const oldLoading = `<div className="flex items-center justify-center p-space-lg text-on-surface-variant font-label-sm">\n                          Analyzing tender parameters...\n                        </div>`;
  const newLoading = `<div className="flex flex-col gap-4 p-space-md">\n                          <Skeleton className="h-6 w-1/3" />\n                          <SkeletonText lines={4} />\n                          <Skeleton className="h-20 w-full mt-4" />\n                        </div>`;
  return code.replace(oldLoading, newLoading);
});

// 2. Update Sandbox
updateFile('src/app/sandbox/page.tsx', (code) => {
  const oldLoading = `{loading ? "Fetching mock payload for " + datasetType + "..." : (data ? JSON.stringify(data, null, 2) : "// Awaiting generation command...")}`;
  const newLoading = `{loading ? (\n          <div className="flex flex-col gap-3 py-2">\n            <Skeleton className="h-4 w-[40%]" />\n            <SkeletonText lines={12} />\n          </div>\n        ) : (data ? JSON.stringify(data, null, 2) : "// Awaiting generation command...")}`;
  return code.replace(oldLoading, newLoading);
});

console.log('Skeletons added!');
