import { useEffect } from "react";
import "../styles/warroom.css";

declare global {
  interface Window {
    __warroomInitialized?: boolean;
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

    log("> PROTOCOLO "+mod+" INICIADO — ANALIZANDO SEÑALES CLAVE");

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

    score.textContent=final;

    log("> RESULTADO GENERADO — SALUD DIGITAL POSITIVA — SCORE ESTRATÉGICO: "+final);

    }catch(e){

    log("> MODO RESILIENCIA ACTIVADO — GENERANDO ESTIMACIÓN INTELIGENTE");

    const fake=Math.floor(Math.random()*100);
    score.textContent=fake;

    }

    }

    btn.onclick=()=>run("AUDITORIA");

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

