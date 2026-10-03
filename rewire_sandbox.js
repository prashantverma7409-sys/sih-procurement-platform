const fs = require('fs');

const path = 'C:/Users/prash/OneDrive/Desktop/Project/sih-procurement-platform/src/app/sandbox/page.tsx';
let content = fs.readFileSync(path, 'utf8');

const hookLogic = `
  const [datasetType, setDatasetType] = React.useState('Live Traffic Telemetry (MoRTH NHAI-V2X)');
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(null);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/generate-sandbox-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ datasetType }),
      });
      const json = await res.json();
      setData(json.data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const handleCopy = () => {
    if (data) {
      navigator.clipboard.writeText(JSON.stringify(data, null, 2));
      alert("Copied to clipboard!");
    }
  };
`;

content = content.replace('export default function Page() {', 'export default function Page() {\n' + hookLogic);

// Add value and onChange to <select>
content = content.replace(/<select([^>]*id="datasetSelector"[^>]*)>/, '<select$1 value={datasetType} onChange={(e) => setDatasetType(e.target.value)}>');

// Add onClick to Generate button
content = content.replace(/<button([^>]*id="btnGenerate"[^>]*)>([\s\S]*?)<\/button>/, '<button$1 onClick={handleGenerate} disabled={loading}>\n$2\n</button>');
// And replace text inside button conditionally
content = content.replace(/GENERATE TEST PAYLOAD \[⌘ \+ ⏎\]/, '{loading ? "GENERATING PAYLOAD..." : "GENERATE TEST PAYLOAD [⌘ + ⏎]"}');

// Replace the pre content with dynamic JSON
const preStart = '<pre className="font-data-mono text-data-mono text-on-surface leading-relaxed" id="jsonPayloadDisplay">';
const preRegex = new RegExp(preStart + '[\\s\\S]*?<\\/pre>');
content = content.replace(preRegex, preStart + '{loading ? "Fetching mock payload for " + datasetType + "..." : (data ? JSON.stringify(data, null, 2) : "// Awaiting generation command...")}</pre>');

// Add onClick to Copy button
content = content.replace(/<button([^>]*id="btnCopyTerminal"[^>]*)>/, '<button$1 onClick={handleCopy}>');

fs.writeFileSync(path, content);
