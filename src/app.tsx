import { ThemeProvider } from "./components/theme-provider";
import { TypingTest } from "./components/typing-test";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="typing-speed-game-theme">
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 -z-[1]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#8d068d2d_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#8d068d2d,transparent)]"></div>
        
        <h1 className="absolute top-20 left-0 right-0 text-3xl text-center text-transparent font-semibold bg-gradient-to-tl to-pink-800 from-purple-600 bg-clip-text">
          SpeedKeys
        </h1>
        <TypingTest />
      </div>
    </ThemeProvider>
  );
}
