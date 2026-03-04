import { useState } from "react";
import "./App.css";

// Glassmorphism reusable
const glassButton =
  "w-full py-6 font-mono text-sm tracking-[0.2em] uppercase " +
  "bg-white/5 backdrop-blur-md border border-cyan-200/30 " +
  "shadow-[0_0_20px_rgba(56,189,248,0.15)] " +
  "hover:bg-white/10 hover:border-cyan-200/50 " +
  "active:scale-[0.99] transition-all duration-200";

export default function App() {
  const [analysisComplete, setAnalysisComplete] = useState(false);

  return (
  <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
    
    <h2 style={{ color: "red", marginBottom: "20px" }}>
      CAMBIO REAL APP.TSX
    </h2>

    <h1 className="text-4xl font-mono tracking-widest mb-12 text-center">
      RON3IA WAR ROOM
    </h1>

      {!analysisComplete && (
        <button
          className={glassButton}
          onClick={() => setAnalysisComplete(true)}
        >
          [ EJECUTAR DIAGNÓSTICO ]
        </button>
      )}

      {analysisComplete && (
        <div className="w-full max-w-xl mt-10 space-y-6">
          
          <div className="p-6 border border-white/20 backdrop-blur-md bg-white/5 rounded-lg">
            <p className="font-mono text-xs tracking-wider opacity-80 mb-2">
              RESULTADO:
            </p>
            <p className="font-mono text-lg">
              Score detectado: <span className="text-cyan-400">67 / 100</span>
            </p>
          </div>

          <button
            className={glassButton}
            onClick={async () => {
              try {
                const response = await fetch(
                  "https://ron3ia-api-819648047297.southamerica-west1.run.app/create-checkout-session",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      email: "cliente@demo.com",
                      report_id: "temp-report-001",
                    }),
                  }
                );

                if (!response.ok) {
                  throw new Error("Error creando sesión Stripe");
                }

                const data = await response.json();

                if (data.checkout_url) {
                  window.location.href = data.checkout_url;
                } else {
                  console.error("No llegó checkout_url");
                }

              } catch (error) {
                console.error("Stripe error:", error);
              }
            }}
          >
            [ DESBLOQUEAR DIAGNÓSTICO COMPLETO ]
          </button>

        </div>
      )}
    </div>
  );
}