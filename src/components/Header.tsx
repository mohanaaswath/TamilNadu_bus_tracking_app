import { Bus as BusIcon, Radio } from "lucide-react";

interface HeaderProps {
  busCount: number;
  districtName: string | null;
}

const Header = ({ busCount, districtName }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground shadow-md">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-primary-foreground/10">
          <BusIcon className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-base font-bold tracking-tight leading-tight">TN Bus Tracker</h1>
          <p className="text-[11px] opacity-75 font-medium">Real-Time Tracking • Tamil Nadu</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {districtName && (
          <span className="text-xs bg-primary-foreground/15 px-2.5 py-1 rounded-full font-medium">
            {districtName}
          </span>
        )}
        <div className="flex items-center gap-1.5 text-xs bg-primary-foreground/15 px-2.5 py-1 rounded-full">
          <Radio className="h-3 w-3 text-green-300 animate-pulse" />
          <span className="font-semibold">{busCount}</span>
          <span className="opacity-75">live</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
