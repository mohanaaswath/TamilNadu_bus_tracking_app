import { Bus as BusIcon, Radio, Shield } from "lucide-react";

interface HeaderProps {
  busCount: number;
  districtName: string | null;
}

const Header = ({ busCount, districtName }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between px-5 py-3 bg-primary text-primary-foreground shadow-lg">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-primary-foreground/15 backdrop-blur-sm">
          <BusIcon className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-lg font-extrabold tracking-tight leading-tight">redBus</h1>
          <p className="text-[11px] opacity-80 font-medium">Live Bus Tracking • Tamil Nadu</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {districtName && (
          <span className="text-xs bg-primary-foreground/15 backdrop-blur-sm px-3 py-1.5 rounded-full font-semibold">
            📍 {districtName}
          </span>
        )}
        <div className="flex items-center gap-1.5 text-xs bg-primary-foreground/15 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <Radio className="h-3 w-3 text-green-300 animate-pulse" />
          <span className="font-bold">{busCount}</span>
          <span className="opacity-80">live</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
