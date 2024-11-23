import TutorialCard from '@/components/TutorialCard';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const tutorials = [
  {
    title: "Getting Started with React",
    description: "Learn the fundamentals of React, including components, props, and state management",
    level: "Beginner" as const
  },
  {
    title: "Advanced TypeScript Patterns",
    description: "Master advanced TypeScript features like generics, utility types, and decorators",
    level: "Advanced" as const
  },
  {
    title: "Building with Tailwind CSS",
    description: "Create beautiful, responsive designs using Tailwind's utility-first approach",
    level: "Intermediate" as const
  },
  {
    title: "State Management with Redux",
    description: "Learn how to manage complex application state using Redux and middleware",
    level: "Intermediate" as const
  },
  {
    title: "React Performance Optimization",
    description: "Techniques for optimizing React applications for better performance",
    level: "Advanced" as const
  },
  {
    title: "CSS Animation Fundamentals",
    description: "Create engaging user experiences with CSS transitions and animations",
    level: "Beginner" as const
  }
];

function TutorialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50 dark:from-purple-950 dark:via-gray-900 dark:to-purple-950 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center gap-4">
          <Link 
            to="/"
            className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
          >
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400">
            Tutorials
          </h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {tutorials.map((tutorial, index) => (
            <TutorialCard key={index} {...tutorial} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TutorialsPage;