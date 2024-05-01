import { Link } from "@tanstack/react-router";

export default function Header() {
  const selectedTheme = localStorage.getItem("theme")!;

  const onThemeChange = (name: string) => {
    const e = new CustomEvent("theme-changed", { detail: name });

    localStorage.setItem("theme", name);
    document.dispatchEvent(e);
  };

  return (
    <header className="w-full bg-primary text-neutral px-56 flex flex-row justify-between items-center">
      <Link
        to="/"
        className="font-bold text-2xl transition-all duration-700 hover:text-3xl"
      >
        <h1 className="font-rubik text-accent-content transition-colors duration-500 hover:text-neutral-content">
          Card Game
        </h1>
      </Link>

      <nav className="join mx-10">
        <Link to="/" className="btn btn-primary rounded join-item">
          Home
        </Link>
      </nav>

      <label htmlFor="theme-selector" className="form-control py-0.5">
        <div className="label py-1">
          <span className="label-text text-accent-content text-xs">Theme:</span>
        </div>
        <select
          data-choose-theme
          name="theme-selector"
          className="select select-xs select-bordered bg-neutral text-neutral-content"
          id="theme-selector"
          onChange={(e) => onThemeChange(e.target.value)}
          defaultValue={selectedTheme}
        >
          <option value="cyberpunk">Cyberpunk</option>
          <option value="synthwave">Synthwave</option>
          <option value="sunset">Sunset</option>
          <option value="black">Black</option>
          <option value="coffee">Coffee</option>
          <option value="dracula">Dracula</option>
          <option value="cupcake">Cupcake</option>
          <option value="halloween">Halloween</option>
          <option value="lemonade">Lemonade</option>
          <option value="aqua">Aqua</option>
        </select>
      </label>
    </header>
  );
}
