"use client";

const routes = [
  {
    route: "EMPANGENI",
    vehicleName: "Toyota Quantum 2.5D",
    vehicleColor: "Silver",
    reg: "ND 45 AB ZN",
    driver: "MTHEMBU",
    status: "IYALAYISHA",
    next: ["ND 11 CD ZN", "ND 22 EF ZN", "ND 33 GH ZN", "ND 44 JK ZN"],
    departure: "14:20",
  },
  {
    route: "ESHOWE",
    vehicleName: "Toyota HiAce GL",
    vehicleColor: "White",
    reg: "NJ 22 CD ZN",
    driver: "ZULU",
    status: "AYIKAQALI UKULAYISHA",
    next: ["NJ 10 AA ZN", "NJ 19 BB ZN", "NJ 31 CC ZN", "NJ 40 DD ZN"],
    departure: "14:35",
  },
  {
    route: "ULUNDI",
    vehicleName: "Mercedes Sprinter",
    vehicleColor: "Blue",
    reg: "NU 77 EF ZN",
    driver: "NDLOVU",
    status: "IYALAYISHA",
    next: ["NU 25 ZZ ZN", "NU 17 YY ZN", "NU 11 XX ZN", "NU 29 WW ZN"],
    departure: "14:50",
  },
  {
    route: "MTUBATUBA",
    vehicleName: "Toyota Quantum VX",
    vehicleColor: "Grey",
    reg: "NR 88 GH ZN",
    driver: "KHUMALO",
    status: "AYIKAQALI UKULAYISHA",
    next: ["NR 22 AA ZN", "NR 30 BB ZN", "NR 41 CC ZN", "NR 48 DD ZN"],
    departure: "15:05",
  },
  {
    route: "ST LUCIA",
    vehicleName: "Nissan NV350",
    vehicleColor: "White",
    reg: "NL 12 JK ZN",
    driver: "HLABISA",
    status: "IYALAYISHA",
    next: ["NL 15 AA ZN", "NL 28 BB ZN", "NL 36 CC ZN", "NL 43 DD ZN"],
    departure: "14:40",
  },
  {
    route: "MELMOTH",
    vehicleName: "Toyota HiAce Deluxe",
    vehicleColor: "Silver",
    reg: "NM 33 LM ZN",
    driver: "GUMEDE",
    status: "AYIKAQALI UKULAYISHA",
    next: ["NM 20 AA ZN", "NM 24 BB ZN", "NM 32 CC ZN", "NM 39 DD ZN"],
    departure: "14:55",
  },
];

// 🔥 FIX: generate consistent fake driver per reg
const generateDriver = (reg: string) => {
  const drivers = ["DLAMINI", "ZONDI", "MBEKE", "MNGUNI", "KHANYILE", "SIBIYA", "NDLOVU"];
  const index = reg.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return drivers[index % drivers.length];
};

const statusColor = (status: string) => {
  switch (status) {
    case "IYALAYISHA":
      return "bg-green-500 text-black";
    case "AYIKAQALI UKULAYISHA":
      return "bg-yellow-400 text-black";
    default:
      return "bg-blue-500 text-white";
  }
};

export default function DisplayBoard() {
  return (
    <main className="h-screen w-full text-white flex flex-col relative overflow-hidden">

      {/* 🔴 BRAND BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-black to-zinc-950 opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.25),transparent_60%)]" />

      <div className="relative flex flex-col h-full">

        {/* HEADER */}
        <header className="h-[10vh] flex flex-col justify-center items-center border-b border-white/10 backdrop-blur-xl">
          <h1 className="text-3xl md:text-5xl font-black tracking-widest">
            RICHARDS BAY TAXI RANK
          </h1>
          <p className="text-green-400 text-lg md:text-2xl font-bold">
            LIVE QUEUE CONTROL BOARD
          </p>
        </header>

        {/* GRID */}
        <section className="flex-1 overflow-y-auto p-3">
          <div className="grid grid-cols-3 gap-3 auto-rows-[minmax(280px,1fr)]">

            {routes.map((item, i) => (
              <div
                key={i}
                className="rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-xl overflow-hidden flex flex-col"
              >

                {/* ROUTE */}
                <div className="p-2 text-center border-b border-white/10 bg-black/40">
                  <h2 className="text-sm font-bold tracking-widest text-yellow-400">
                    {item.route}
                  </h2>
                </div>

                {/* BODY */}
                <div className="p-3 flex-1 space-y-2">

                  {/* BIG REG */}
                  <div className="bg-gradient-to-r from-green-600/20 via-black to-green-600/20 border border-green-500/40 rounded-2xl p-4 text-center">
                    <p className="text-xs text-zinc-400">NEXT VEHICLE</p>

                    <h3 className="text-4xl md:text-5xl font-black text-green-400 tracking-widest">
                      {item.reg}
                    </h3>

                    <p className="text-xs text-zinc-400 mt-1">
                      DRIVER: {item.driver}
                    </p>
                  </div>

                  {/* VEHICLE */}
                  <div className="bg-black/30 p-2 rounded-xl text-xs border border-white/10">
                    <p className="text-zinc-400">VEHICLE</p>
                    <p className="font-bold">{item.vehicleName}</p>
                  </div>

                  {/* STATUS */}
                  <div className={`text-xs p-2 rounded-xl text-center font-black ${statusColor(item.status)}`}>
                    {item.status}
                  </div>

                  {/* 🚦 QUEUE (FIXED DRIVER PER REG) */}
                  <div className="bg-black/40 p-3 rounded-2xl border border-white/10">
                    <p className="text-blue-400 font-bold text-xs mb-2">
                      QUEUE BEHIND
                    </p>

                    <div className="space-y-2">
                      {item.next.slice(0, 3).map((reg, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center bg-black/30 p-2 rounded-xl border border-white/10"
                        >
                          <span className="text-sm font-bold text-zinc-400">
                            {idx + 2}.
                          </span>

                          {/* REG */}
                          <span className="text-lg font-black text-white tracking-wide">
                            {reg}
                          </span>

                          {/* FIXED: UNIQUE DRIVER PER QUEUE ITEM */}
                          <span className="text-xs text-green-300 font-semibold">
                            {generateDriver(reg)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* FOOTER */}
                <div className="p-2 border-t border-white/10 flex justify-between items-center bg-black/60">
                  <span className="text-[10px] text-zinc-400">
                    DEPARTURE
                  </span>
                  <span className="text-yellow-400 text-xl font-black">
                    {item.departure}
                  </span>
                </div>

              </div>
            ))}

          </div>
        </section>

        {/* FOOTER */}
        <footer className="h-[6vh] flex items-center justify-center text-xs text-zinc-300 border-t border-white/10 backdrop-blur-xl">
          PLEASE CHECK YOUR POSITION IN QUEUE • SYSTEM ACTIVE
        </footer>

      </div>
    </main>
  );
}