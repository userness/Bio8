import { FC } from 'react';

interface TutorialCardProps {
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

const TutorialCard: FC<TutorialCardProps> = ({ title, description, level }) => {
  return (
    <div className="p-6 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 transition-all hover:bg-white/20">
      <h2 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-2">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-3">
        {description}
      </p>
      <span className="inline-block px-3 py-1 rounded-full text-sm bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300">
        {level}
      </span>
    </div>
  );
};

export default TutorialCard;