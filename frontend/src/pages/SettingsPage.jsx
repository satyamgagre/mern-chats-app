import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
import { Send, Palette, Eye } from "lucide-react";
import { useState } from "react";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: false },
  { id: 2, content: "I'm doing great! Just working on some new features.", isSent: true },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();
  const [hoveredTheme, setHoveredTheme] = useState(null);

  return (
    <div className="min-h-screen bg-base-100">
      {/* IMPORTANT: pt-24 fixes fixed-navbar overlap */}
      <div className="container mx-auto px-4 pt-24 pb-10 max-w-6xl">

        {/* ===== PAGE HEADER ===== */}
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 rounded-lg bg-primary text-primary-content">
            <Palette size={20} />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Appearance</h1>
            <p className="text-sm text-base-content/60">
              Customize how your chat looks
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* ===== THEME SELECTOR ===== */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Palette size={16} />
              <h2 className="font-semibold">Themes</h2>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
              {THEMES.map((t) => (
                <button
                  key={t}
                  aria-label={`Switch to ${t} theme`}
                  onClick={() => theme !== t && setTheme(t)}
                  onMouseEnter={() => setHoveredTheme(t)}
                  onMouseLeave={() => setHoveredTheme(null)}
                  className={`
                    rounded-lg p-2 border transition
                    ${theme === t
                      ? "border-primary bg-base-200"
                      : "border-base-300 hover:bg-base-200"}
                  `}
                >
                  <div
                    className="h-10 rounded-md overflow-hidden mb-1"
                    data-theme={t}
                  >
                    <div className="grid grid-cols-2 grid-rows-2 gap-0.5 p-1 h-full bg-base-100">
                      <div className="bg-primary rounded"></div>
                      <div className="bg-secondary rounded"></div>
                      <div className="bg-accent rounded"></div>
                      <div className="bg-neutral rounded"></div>
                    </div>
                  </div>

                  <span className="text-xs font-medium block text-center truncate">
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </span>

                  {(theme === t || hoveredTheme === t) && (
                    <span className="sr-only">Selected</span>
                  )}
                </button>
              ))}
            </div>
          </section>

          {/* ===== PREVIEW ===== */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Eye size={16} />
              <h2 className="font-semibold">Preview</h2>
            </div>

            <div className="rounded-xl border border-base-300 overflow-hidden bg-base-100">

              {/* Chat Header */}
              <div className="p-4 border-b border-base-300 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary text-primary-content flex items-center justify-center font-medium">
                  J
                </div>
                <div>
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-base-content/60">Online</p>
                </div>
              </div>

              {/* Messages */}
              <div className="p-4 space-y-3 min-h-[220px] bg-base-100">
                {PREVIEW_MESSAGES.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.isSent ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`
                        max-w-[75%] px-4 py-2 rounded-xl text-sm
                        ${msg.isSent
                          ? "bg-primary text-primary-content"
                          : "bg-base-200"}
                      `}
                    >
                      {msg.content}
                      <div className="text-[10px] mt-1 opacity-60">
                        12:00 PM
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-base-300 flex gap-2">
                <input
                  type="text"
                  readOnly
                  placeholder="Type a message..."
                  className="input input-bordered flex-1 text-sm"
                />
                <button className="btn btn-primary btn-square">
                  <Send size={18} />
                </button>
              </div>
            </div>

            {/* Current Theme */}
            <p className="mt-4 text-sm text-center text-base-content/60">
              Current theme: <span className="font-medium">{theme}</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
