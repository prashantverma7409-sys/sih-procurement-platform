const fs = require('fs');

const path = 'C:\\Users\\prash\\OneDrive\\Desktop\\Project\\sih-procurement-platform\\src\\app\\page.tsx';
let content = fs.readFileSync(path, 'utf8');

const startTag = '<div className="grid grid-cols-1 xl:grid-cols-2 gap-space-lg">';
const endTagMarker = '<div className="bg-surface-container rounded p-space-md flex flex-col gap-space-sm shadow-md">';

const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTagMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error("Tags not found");
  process.exit(1);
}

const replacement = `<div className="grid grid-cols-1 xl:grid-cols-2 gap-space-lg">
  {mockFeedData.map((tender) => (
    <div key={tender.id} className="relative bg-surface-container rounded p-space-lg flex flex-col justify-between shadow-md overflow-hidden group hover:bg-surface-container-high transition-all">
      <div className={\`absolute top-0 left-0 w-1.5 h-full bg-\${tender.themeColor}\${tender.themeColor === 'primary' && tender.id === '5' ? '-container' : ''}\${tender.themeColor === 'secondary' && tender.id === '6' ? '-container' : ''}\`}></div>
      <div className={\`absolute top-0 right-0 px-space-sm py-0.5 bg-\${tender.themeColor}/20 text-\${tender.themeColor} font-label-sm text-label-sm uppercase font-semibold rounded-bl\`}>
        {tender.priorityMission}
      </div>
      <div className="flex flex-col gap-space-sm pl-space-xs">
        <div className="flex items-center justify-between pr-24 flex-wrap gap-1">
          <div className="flex items-center gap-1.5">
            <span className={\`w-2 h-2 rounded-full bg-\${tender.themeColor}\${tender.id === '1' ? ' animate-pulse' : ''}\`}></span>
            <span className={\`font-label-sm text-label-sm text-\${tender.themeColor} uppercase font-bold tracking-widest\`}>{tender.department}</span>
          </div>
          <div className="flex items-center gap-1 bg-surface-container-lowest px-2 py-0.5 rounded">
            <span className="font-label-sm text-label-sm text-on-surface-variant">RFP:</span>
            <span className="font-data-mono text-data-mono text-on-surface font-semibold">{tender.rfpId}</span>
            <button className={\`text-on-surface-variant hover:text-\${tender.themeColor} transition-colors ml-1\`} title="Copy GeM ID" type="button">
              <span className="material-symbols-outlined text-[14px]">content_copy</span>
            </button>
          </div>
        </div>

        <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight leading-snug">
          {tender.title}
        </h2>

        <div className="bg-surface-container-lowest p-space-sm rounded flex items-start gap-space-sm">
          <span className={\`material-symbols-outlined text-\${tender.themeColor} text-[18px] shrink-0 mt-0.5\`}>{tender.icon}</span>
          <div className="flex flex-col">
            <span className={\`font-label-sm text-label-sm text-\${tender.themeColor} font-semibold uppercase tracking-wider\`}>{tender.aiSanitizerTitle}</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {tender.aiSanitizerDesc}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-space-xs pt-1">
          <div className="bg-surface-container-low p-space-xs rounded flex flex-col">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Escrow Quantum</span>
            <span className="font-headline-sm text-headline-sm text-secondary font-bold">{tender.escrowQuantum}</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">{tender.escrowSubtext}</span>
          </div>
          <div className="bg-surface-container-low p-space-xs rounded flex flex-col">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">{tender.sprintVelocityLabel}</span>
            <span className="font-headline-sm text-headline-sm text-on-surface font-bold">{tender.sprintVelocity}</span>
            <span className="font-label-sm text-label-sm text-primary">{tender.sprintSubtext}</span>
          </div>
          <div className="bg-surface-container-low p-space-xs rounded flex flex-col justify-between">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">{tender.securityDepLabel}</span>
            <span className="inline-flex items-center gap-1 font-label-md text-label-md text-secondary font-semibold">
              <span className="material-symbols-outlined text-[14px]">verified</span>
              {tender.securityDepStatus}
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">{tender.securityDepSubtext}</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 flex-wrap pt-1">
          {tender.tags.map((tag, i) => (
            <span key={i} className={\`px-2 py-0.5 bg-surface-container-lowest text-\${tag.color} font-label-sm text-label-sm rounded font-medium\`}>{tag.text}</span>
          ))}
        </div>

        <div className="p-space-xs bg-surface-container-low rounded flex items-center justify-between">
          {tender.squadStatus.type === 'forming' ? (
            <>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1.5">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-on-primary">{tender.squadStatus.seats?.k1}</div>
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-[10px] font-bold text-on-secondary">{tender.squadStatus.seats?.r9}</div>
                  <div className="w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] text-on-surface-variant">{tender.squadStatus.seats?.unknown}</div>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface">{tender.squadStatus.text}<span className="text-tertiary font-semibold">{tender.squadStatus.highlight}</span></span>
              </div>
              <span className="font-label-sm text-label-sm text-tertiary">{tender.squadStatus.extra}</span>
            </>
          ) : tender.squadStatus.type === 'recruiting' ? (
            <>
              <span className="font-label-sm text-label-sm text-on-surface">{tender.squadStatus.text}<span className={\`\${tender.id === '4' ? 'text-secondary' : 'text-secondary'} font-semibold\`}>{tender.squadStatus.highlight}</span></span>
              <span className={tender.id === '4' ? "font-data-mono text-data-mono text-secondary" : tender.id === '2' ? "font-label-sm text-label-sm text-on-surface-variant" : "font-label-sm text-label-sm text-tertiary"}>{tender.squadStatus.extra}</span>
            </>
          ) : (
            <>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-secondary text-[16px]">{tender.squadStatus.icon}</span>
                <span className="font-label-sm text-label-sm text-on-surface">{tender.squadStatus.text}<span className="text-secondary font-semibold">{tender.squadStatus.highlight}</span></span>
              </div>
              <span className="font-label-sm text-label-sm text-primary font-bold">{tender.squadStatus.extra}</span>
            </>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between gap-space-sm pt-space-md border-t-0 pl-space-xs mt-space-sm">
        <button className="px-space-md py-1.5 bg-surface-container-low hover:bg-surface-container-lowest text-on-surface font-label-sm text-label-sm uppercase font-semibold rounded flex items-center gap-1.5 transition-colors" type="button">
          <span className={\`material-symbols-outlined text-[16px] text-\${tender.themeColor}\`}>{tender.viewDiffIcon}</span>
          <span>{tender.viewDiffText}</span>
        </button>
        <button className="px-space-lg py-1.5 bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md uppercase font-bold rounded flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all" type="button">
          <span className="material-symbols-outlined text-[16px]">{tender.applyIcon}</span>
          <span>Form Squad &amp; Apply</span>
        </button>
      </div>
    </div>
  ))}
</div>

`;

const newContent = content.slice(0, startIndex) + replacement + content.slice(endIndex);
fs.writeFileSync(path, newContent, 'utf8');
console.log("Replacement successful");
