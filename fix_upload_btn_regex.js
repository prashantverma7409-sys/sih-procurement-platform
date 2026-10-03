const fs = require('fs');
let code = fs.readFileSync('src/app/officer/post-tender/page.tsx', 'utf8');

// Replace the specific "Upload RFP" button using a regex that captures everything inside that button tag
const buttonRegex = /<button[^>]*><span[^>]*>upload_file<\/span><span>Upload RFP<\/span><\/button>/g;

const newUploadBtn = `<label className="cursor-pointer px-2 py-1 bg-surface-container hover:bg-surface-container-high text-on-surface text-[11px] font-label-sm rounded flex items-center gap-1 transition-colors">
  <span className="material-symbols-outlined text-[13px]">upload_file</span>
  <span>{file ? file.name : "Upload RFP"}</span>
  <input type="file" className="hidden" accept=".pdf,.docx,.txt" onChange={(e) => setFile(e.target.files?.[0] || null)} />
</label>`;

if (buttonRegex.test(code)) {
  code = code.replace(buttonRegex, newUploadBtn);
  fs.writeFileSync('src/app/officer/post-tender/page.tsx', code);
  console.log("Upload button replaced successfully!");
} else {
  console.log("Could not find the button to replace. Dumping code snippet for debugging:");
  console.log(code.substring(code.indexOf('Upload RFP') - 100, code.indexOf('Upload RFP') + 100));
}
