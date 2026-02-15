// components/ui/ProgressBar.tsx
interface ProgressBarProps {
  current: number;
  goal: number;
  className?: string;
  showPercentage?: boolean;
}

export default function ProgressBar({ current, goal, className = "", showPercentage = false }: ProgressBarProps) {
  const percentage = Math.min(Math.round((current / goal) * 100), 100);

  return (
    <div className={`w-full ${className}`}>
      {showPercentage && (
        <div className="flex justify-between text-sm mb-1">
          <span className="font-medium">Raised: Rs. {current.toLocaleString()}</span>
          <span className="text-gray-600">{percentage}%</span>
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-primary h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      {showPercentage && (
        <div className="text-right text-sm text-gray-600 mt-1">
          Goal: Rs. {goal.toLocaleString()}
        </div>
      )}
    </div>
  );
}