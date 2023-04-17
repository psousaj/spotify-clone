import { useState, ChangeEvent } from "react";

export default function LayoutResizer() {
  const [width, setWidth] = useState<number>(266);

  function handleResize(event: ChangeEvent<HTMLInputElement>) {
    setWidth(Number(event.currentTarget.value));
  }

  return (
    <div className="LayoutResizer">
      <div className="LayoutResizer__content">
        <header className="LayoutResizer__header">Header</header>
        <main className="LayoutResizer__main" style={{ width: `${width}px` }}>
          Main content
        </main>
      </div>
      <div className="LayoutResizer__resize-bar LayoutResizer__inline-end">
        <label className="hidden-visually">
          Redimensionar navegação principal
          <input
            className="LayoutResizer__input"
            type="range"
            min="120"
            max="384"
            step="10"
            value={width}
            onChange={handleResize}
          />
        </label>
      </div>
    </div>
  );
}
