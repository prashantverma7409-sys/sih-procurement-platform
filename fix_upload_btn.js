const fs = require('fs');
let code = fs.readFileSync('src/app/officer/post-tender/page.tsx', 'utf8');

// 1. Add file state
if (!code.includes('setFile')) {
  code = code.replace(/const \[rawText, setRawText\] = React.useState\(''\);/, "const [rawText, setRawText] = React.useState('');\n  const [file, setFile] = React.useState<File | null>(null);");
}

// 2. Replace handleSanitize entirely
const oldHandleSanitizeRegex = /const handleSanitize = async \(\) => \{[\s\S]*?setLoading\(false\);\n  \};/m;
const newHandleSanitize = `const handleSanitize = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      if (file) formData.append("file", file);
      if (rawText) formData.append("rawText", rawText);

      const res = await fetch("/api/sanitize-tender", {
        method: "POST",
        body: formData
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };`;
code = code.replace(oldHandleSanitizeRegex, newHandleSanitize);

// 3. Find the original 'Upload RFP' button and make it a real file input
const oldUploadBtn = `<button className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-container-high hover:bg-surface-bright text-on-surface transition-colors font-label-sm text-[12px] rounded" type="button"><span className="material-symbols-outlined text-[16px]">upload_file</span><span>Upload RFP</span></button>`;
const newUploadBtn = `<label className="cursor-pointer flex items-center gap-1.5 px-3 py-1.5 bg-surface-container-high hover:bg-surface-bright text-on-surface transition-colors font-label-sm text-[12px] rounded">
    <span className="material-symbols-outlined text-[16px]">upload_file</span>
    <span>{file ? file.name : "Upload RFP"}</span>
    <input type="file" className="hidden" accept=".pdf,.docx,.txt" onChange={(e) => setFile(e.target.files?.[0] || null)} />
  </label>`;

code = code.replace(oldUploadBtn, newUploadBtn);

fs.writeFileSync('src/app/officer/post-tender/page.tsx', code);
console.log('Fixed upload button!');
