const fs = require('fs');

const path = 'C:/Users/prash/OneDrive/Desktop/Project/sih-procurement-platform/src/app/officer/post-tender/page.tsx';
let content = fs.readFileSync(path, 'utf8');

const hookLogic = `
  const [rawText, setRawText] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState(null);

  const handleSanitize = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/sanitize-tender", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rawText }),
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };
`;

content = content.replace('export default function Page() {', 'export default function Page() {\n' + hookLogic);

// Add value and onChange to textarea
content = content.replace(/<textarea([^>]*)>/, '<textarea$1 value={rawText} onChange={(e) => setRawText(e.target.value)}>');

// Add onClick to Sanitize button
// It's the button containing "INITIATE NLP SANITIZATION"
content = content.replace(/<button([^>]+)type="button">([\s\S]*?)INITIATE NLP SANITIZATION/, '<button$1 type="button" onClick={handleSanitize} disabled={loading}>$2{loading ? "SANITIZING..." : "INITIATE NLP SANITIZATION"}');

// Replace static content with dynamic content
content = content.replace(
  /<span className="font-data-mono text-\[10px\] text-outline uppercase">Pune Smart City Dev Corp<\/span>/,
  '<span className="font-data-mono text-[10px] text-outline uppercase">{result?.department || "Pune Smart City Dev Corp"}</span>'
);

content = content.replace(
  /<h2 className="font-headline-md text-headline-md font-bold text-on-surface mt-0\.5 tracking-tight group-hover:text-primary transition-colors">Edge-AI Traffic Modulator<\/h2>/,
  '<h2 className="font-headline-md text-headline-md font-bold text-on-surface mt-0.5 tracking-tight group-hover:text-primary transition-colors">{result?.title || "Edge-AI Traffic Modulator"}</h2>'
);

content = content.replace(
  /<strong className="text-secondary">Clean AI TL;DR:<\/strong>([^<]+)<\/p>/,
  '<strong className="text-secondary">Clean AI TL;DR:</strong> {result?.tldr || "$1"}</p>'
);

content = content.replace(
  /<span className="font-data-mono text-\[14px\] text-primary font-bold mt-0\.5">₹175\.00 Lakhs<\/span>/,
  '<span className="font-data-mono text-[14px] text-primary font-bold mt-0.5">{result?.budget || "₹175.00 Lakhs"}</span>'
);

content = content.replace(
  /<span className="font-data-mono text-\[14px\] text-tertiary font-bold mt-0\.5">14 Weeks<\/span>/,
  '<span className="font-data-mono text-[14px] text-tertiary font-bold mt-0.5">{result ? result.timelineDays + " Days" : "14 Weeks"}</span>'
);

fs.writeFileSync(path, content);
