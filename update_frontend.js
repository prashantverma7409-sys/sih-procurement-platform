const fs = require('fs');
let code = fs.readFileSync('src/app/officer/post-tender/page.tsx', 'utf8');

// 1. Add file state
if (!code.includes('setFile')) {
  code = code.replace(/const \[rawText, setRawText\] = useState<any>\([^)]*\);/, "const [rawText, setRawText] = useState<any>('');\n  const [file, setFile] = useState<File | null>(null);");
}

// 2. Modify handleSanitize to use FormData
const oldFetchRegex = /const res = await fetch\("\/api\/sanitize-tender",\s*\{\s*method:\s*"POST",\s*headers:\s*\{\s*"Content-Type":\s*"application\/json"\s*\},\s*body:\s*JSON\.stringify\(\{\s*rawText\s*\}\)\s*\}\);/m;

const newFetch = `
        const formData = new FormData();
        if (file) formData.append("file", file);
        if (rawText) formData.append("rawText", rawText);

        const res = await fetch("/api/sanitize-tender", {
          method: "POST",
          body: formData
        });`;
        
code = code.replace(oldFetchRegex, newFetch.trim());

// 3. Add file upload UI above the textarea
const oldTextareaDiv = `<div className="p-space-md border-b border-outline-variant/30">`;
const newTextareaDiv = `<div className="p-space-md border-b border-outline-variant/30">
                <div className="mb-3 p-3 border border-dashed border-primary/40 bg-primary/5 rounded text-center transition-all hover:bg-primary/10">
                  <label className="cursor-pointer font-label-sm text-primary flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">upload_file</span>
                    {file ? file.name : "Upload PDF Tender (LlamaParse)"}
                    <input type="file" className="hidden" accept=".pdf,.docx,.txt" onChange={(e) => setFile(e.target.files?.[0] || null)} />
                  </label>
                </div>
`;

code = code.replace(oldTextareaDiv, newTextareaDiv);

fs.writeFileSync('src/app/officer/post-tender/page.tsx', code);
console.log('Frontend updated for file upload!');
