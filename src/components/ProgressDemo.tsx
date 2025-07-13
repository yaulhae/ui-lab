import * as React from "react";
import { Progress, ProgressIndicator } from "@radix-ui/react-progress";

export default function ProgressDemo() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Progress
      className="relative w-[300px] h-4 rounded bg-gray-200 overflow-hidden"
      value={progress}
      max={100}
      style={{ transform: "translateZ(0)" }}
    >
      <ProgressIndicator
        className="h-full bg-blue-500 transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress>
  );
}
