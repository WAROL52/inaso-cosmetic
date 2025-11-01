"use client";

import { useTheme } from "next-themes";

const backgroundLight = `
  radial-gradient(ellipse 80% 60% at 70% 20%, rgba(175, 109, 255, 0.85), transparent 68%),
  radial-gradient(ellipse 70% 60% at 20% 80%, rgba(255, 100, 180, 0.75), transparent 68%),
  radial-gradient(ellipse 60% 50% at 60% 65%, rgba(255, 235, 170, 0.98), transparent 68%),
  radial-gradient(ellipse 65% 40% at 50% 60%, rgba(120, 190, 255, 0.3), transparent 68%),
  linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%)
`;

const backgroundDark = `
            radial-gradient(circle at 50% 100%, rgba(70, 85, 110, 0.5) 0%, transparent 60%),
          radial-gradient(circle at 50% 100%, rgba(99, 102, 241, 0.4) 0%, transparent 70%),
          radial-gradient(circle at 50% 100%, rgba(181, 184, 208, 0.3) 0%, transparent 80%)
`;
export function ThemeBody({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  console.log({ theme });

  if (theme === "dark") {
    return <ModeDark>{children}</ModeDark>;
  }
  return <ModeLight>{children}</ModeLight>;
}

function ModeLight({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-white relative">
      {/* Morning Haze */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
          radial-gradient(circle at 50% 100%, rgba(253, 224, 71, 0.4) 0%, transparent 60%),
          radial-gradient(circle at 50% 100%, rgba(251, 191, 36, 0.4) 0%, transparent 70%),
          radial-gradient(circle at 50% 100%, rgba(244, 114, 182, 0.5) 0%, transparent 80%)
        `,
        }}
      />
      {children}
    </div>
  );
}

function ModeDark({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-black relative">
      {/* Midnight Mist */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
          radial-gradient(circle at 50% 100%, rgba(70, 85, 110, 0.5) 0%, transparent 60%),
          radial-gradient(circle at 50% 100%, rgba(99, 102, 241, 0.4) 0%, transparent 70%),
          radial-gradient(circle at 50% 100%, rgba(181, 184, 208, 0.3) 0%, transparent 80%)
        `,
        }}
      />
      {children}
    </div>
  );
}
