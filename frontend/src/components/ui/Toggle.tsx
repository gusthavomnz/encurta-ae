interface ToggleProps {
  label: string;
  description?: string;
}

export function Toggle({ label, description }: ToggleProps) {
  return (
    <label className="flex items-center justify-between cursor-pointer group">
      <div className="flex flex-col">
        <span className="text-sm text-slate-800 font-medium">{label}</span>
        {description && <span className="text-xs text-gray-400">{description}</span>}
      </div>
      <input type="checkbox" className="sr-only peer" />
      <div className="relative w-10 h-5 bg-gray-200 rounded-full peer-checked:bg-slate-700 transition-colors after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:w-4 after:h-4 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-5" />
    </label>
  );
}

export default Toggle;