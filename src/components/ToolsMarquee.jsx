export default function ToolsMarquee({ tools = [] }) {
  if (!tools.length) return null;

  const loopTools = [...tools, ...tools];

  return (
    <div className="tools-marquee">
      <div className="tools-track">
        {loopTools.map((tool, index) => (
          <div className="tool-card" key={index}>
            <img src={tool.img} alt={tool.name} />
            <span>{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
