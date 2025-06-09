import { PillarCardProps } from "@/types";

export default async function Pill({children, className = ""}: PillarCardProps) {
  return (
    <div className={` dark:bg-gray-800 p-4 line-block bg-transparent border border-gray-400 rounded-full px-3 py-1 text-sm text-gray-700 shadow-md ${className}`}>
      {children}
    </div>
  );

}