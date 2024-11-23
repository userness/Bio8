import { ArrowRight, Github, Twitter, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50 dark:from-purple-950 dark:via-gray-900 dark:to-purple-950 p-8">
      <div className="max-w-md mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400">
            Beautiful Buttons
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Inspired by codex.lol, reimagined in purple
          </p>
        </div>

        <div className="space-y-4">
          {/* Square Glass Panel Button */}
          <Link to="/tutorials">
            <button className="w-full aspect-square relative group overflow-hidden rounded-xl backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/20 text-purple-700 dark:text-purple-300 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-transparent to-purple-400/10 group-hover:from-purple-400/20 group-hover:to-purple-400/20 transition-opacity"></div>
              <div className="relative flex flex-col items-center gap-4">
                <Sparkles className="h-12 w-12" />
                <span className="text-xl">View Tutorials</span>
              </div>
            </button>
          </Link>

          {/* Primary Button */}
          <button className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center justify-center gap-2 transition-all duration-200 shadow-[0_1px_0_0_rgba(139,92,246,0.3)_inset,0_-1px_0_0_rgba(139,92,246,0.3)_inset]">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </button>

          {/* Secondary Button */}
          <button className="w-full h-12 border border-purple-200 hover:border-purple-300 hover:bg-purple-50 text-purple-700 rounded-lg flex items-center justify-center gap-2 transition-all duration-200">
            Learn More
            <ArrowRight className="h-4 w-4" />
          </button>

          {/* Social Buttons with Glass Effect */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <button className="h-12 relative group overflow-hidden rounded-lg backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/20 text-gray-700 dark:text-gray-300 transition-all duration-300 flex items-center justify-center gap-2">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400/10 via-transparent to-gray-400/10 group-hover:from-gray-400/20 group-hover:to-gray-400/20 transition-opacity"></div>
              <Github className="h-4 w-4" />
              <span className="relative">GitHub</span>
            </button>

            <button className="h-12 relative group overflow-hidden rounded-lg backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/20 text-gray-700 dark:text-gray-300 transition-all duration-300 flex items-center justify-center gap-2">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400/10 via-transparent to-gray-400/10 group-hover:from-gray-400/20 group-hover:to-gray-400/20 transition-opacity"></div>
              <Twitter className="h-4 w-4" />
              <span className="relative">Twitter</span>
            </button>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Built with Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
}