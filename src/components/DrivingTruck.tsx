import { Truck } from "lucide-react";

/** Bandeau décoratif : un camion qui roule en continu sur une route. */
export default function DrivingTruck() {
  return (
    <div className="relative h-16 w-full overflow-hidden" aria-hidden="true">
      {/* Route */}
      <div className="absolute bottom-3 left-0 h-1 w-full bg-white/25" />
      {/* Marquage central animé */}
      <div
        className="absolute bottom-[18px] left-0 h-0.5 w-full animate-road-dash"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(255,255,255,0.7) 0 28px, transparent 28px 52px)",
        }}
      />
      {/* Camion */}
      <div className="absolute bottom-[14px] left-0 animate-drive">
        <div className="animate-wheel-bob flex items-center gap-1 text-white drop-shadow-lg">
          <Truck className="h-9 w-9" strokeWidth={1.75} />
        </div>
      </div>
    </div>
  );
}
