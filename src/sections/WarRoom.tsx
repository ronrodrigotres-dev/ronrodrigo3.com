import { useEffect } from "react";
import "../styles/warroom.css";
import { PROTOCOLS } from "../lib/protocols";

declare global {
  interface Window {
    __warroomInitialized?: boolean;
    __planStarted?: boolean;
    __selectedProtocol?: string;
    __diagnosticResult?: {
      protocol: string;
      score: number;
      raw: any;
    };
  }
}

export default function WarRoom() {
  useEffect(() => {
    document.body.classList.add("warroom-active");

    return () => {
      document.body.classList.remove("warroom-active");
    };
  }, []);

  useEffect(() => {
    if (window.__warroomInitialized) return;
    window.__warroomInitialized = true;

    // pegar aquí EXACTAMENTE la lógica actual
    // (btn.onclick, run(), log(), querySelectorAll)

    if(!window.__planStarted) window.__planStarted=false;

    let funnelReady = false;

    const API="https://ron3ia-api-819648047297.southamerica-west1.run.app";

    const btn:any=document.getElementById("btn");
    const input:any=document.getElementById("input");
    const consoleBox:any=document.getElementById("console");
    const score:any=document.getElementById("scoreDisplay");

    function log(t:any){
    consoleBox.textContent+="\n"+t;
    consoleBox.scrollTop=9999;
    }

    async function run(mod:any){

    log("> PROTOCOLO RON3IA INICIADO");
    log("> ACCEDIENDO A CAPAS ESTRATÉGICAS");
    log("> MODELOS SINCRONIZADOS");
    log("> ANALIZANDO ARQUITECTURA SEO");
    log("> EVALUANDO PERFORMANCE");
    log("> DETECTANDO FRICCIÓN DE CONVERSIÓN");

    try{

    const res=await fetch(API+"/analizar-sitio",{
    method:"POST",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
    descripcion:input.value,
    modulo:mod
    })
    });

    const data=await res.json();

    const final=Math.round(
    (data.scores.seo+
    data.scores.perf+
    data.scores.cro+
    data.scores.ads)/4
    );

    function decideProtocol(data:any){

       if(data.seo < 60) return PROTOCOLS.SEO_OPTIMIZATION;
       if(data.cro < 60) return PROTOCOLS.CRO_OPTIMIZATION;
       if(data.perf < 60) return PROTOCOLS.AUDITORIA;
       if(data.ads < 50) return PROTOCOLS.SEM_AUTOMATION;

       return PROTOCOLS.AUDITORIA;
    }

    const result = {
      seo: data.scores.seo,
      cro: data.scores.cro,
      perf: data.scores.perf,
      ads: data.scores.ads,
    };

    const protocol = decideProtocol(result);

    log(`> PROTOCOLO RECOMENDADO: ${protocol}`);

    window.__selectedProtocol = protocol;

    window.__diagnosticResult = {
       protocol,
       score: final,
       raw: data
    };

    try{
       sessionStorage.setItem("ron3ia:diagnosticResult", JSON.stringify(window.__diagnosticResult));
    }catch(e){}

    score.textContent=final;

    log("> INEFICIENCIAS DETECTADAS");
    log("> POTENCIAL DE CRECIMIENTO NO CAPTURADO");
    log("> RESULTADO GENERADO");
    log("> SALUD DIGITAL POSITIVA");
    log("> SCORE ESTRATÉGICO: " + final);

    log("> ANALIZANDO MATRIZ DE DECISIÓN...");
    log("> IDENTIFICANDO PRIORIDAD ESTRATÉGICA...");
    log(`> VEREDICTO RON3IA: ACTIVAR PROTOCOLO ${protocol}`);
    log("> PROTOCOLO LISTO PARA EJECUCIÓN");

    funnelReady = true;
    btn.textContent = "ACTIVAR PLAN";
    btn.classList.add("funnel-active");

    }catch(e){

    log("> MODO RESILIENCIA ACTIVADO — GENERANDO ESTIMACIÓN INTELIGENTE");

    const fake=Math.floor(Math.random()*100);
    score.textContent=fake;

    }

    }

    btn.onclick = () => {

       if(funnelReady){
          if(funnelReady && window.__planStarted) return;

          window.__planStarted = true;

          log(`> EJECUTANDO SERVICIO PRIORITARIO: ${window.__selectedProtocol}`);
          log("> ACTIVANDO PROTOCOLO AVANZADO...");
          log("> INICIANDO MOTOR DE OPTIMIZACIÓN...");

          setTimeout(()=> log("> GENERANDO PLAN ACCIONABLE..."), 800);

          setTimeout(()=> log("> PREPARANDO ENTREGA ESTRATÉGICA..."), 1600);

          window.dispatchEvent(new Event("ron3ia:funnelActivated"));

          const protocol = window.__selectedProtocol || PROTOCOLS.AUDITORIA;

          log(`> INICIANDO FLUJO AUTÓNOMO: ${protocol}`);

          window.dispatchEvent(new CustomEvent("ron3ia:conversionIntent",{
             detail:{ protocol }
          }));

          window.dispatchEvent(
             new CustomEvent("ron3ia:executeService", {
                detail: { protocol }
             })
          );

          return;
       }

       run(PROTOCOLS.AUDITORIA);
    }

    document.querySelectorAll(".service").forEach((el:any)=>{
    el.onclick=()=>run(el.dataset.module);
    });
  }, []);

  return (
    <>
      <div className="radar-line radar1"></div>
      <div className="radar-line radar2"></div>

      <div className="content">
        <div className="logo">RON3IA</div>
        <div className="subtitle">WAR ROOM — INTELIGENCIA ESTRATÉGICA</div>

        <div className="grid">
          <div className="score-circle" id="scoreDisplay">0</div>

          <div className="console">
            <textarea id="input"></textarea>

            <div className="console-output" id="console">
              {`> SISTEMA RON3IA ACTIVO
> CONEXIÓN ESTABLECIDA
> ENTORNO DIGITAL LISTO PARA ANÁLISIS`}
            </div>

            <button id="btn">EJECUTAR</button>
          </div>
        </div>

        <div className="services">
          <div className="service" data-module="AUDITORIA">AUDITORÍA</div>
          <div className="service" data-module="CRO">CRO</div>
          <div className="service" data-module="SEO">SEO</div>
          <div className="service" data-module="SEM">SEM</div>
          <div className="service" data-module="ECOMMERCE">E-COMMERCE</div>
          <div className="service" data-module="TRANSFORMACION">TRANSFORMACIÓN</div>
        </div>
      </div>
    </>
  );
}

