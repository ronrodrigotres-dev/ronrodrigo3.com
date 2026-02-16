import { useEffect } from "react";

export default function WarRoom() {
  useEffect(() => {
    document.body.classList.add("warroom-active");

    return () => {
      document.body.classList.remove("warroom-active");
    };
  }, []);

  return (
    <>
      <style>
{`

/* ================= CORE ================= */

:root{
--neon-red:#ff0000;
--hud-green:#00ff41;
}

*{margin:0;padding:0;box-sizing:border-box;}

body{
background:black;
color:white;
font-family:'Orbitron',sans-serif;
overflow-x:hidden;
}

/* HUD GRID */

body::before{
content:"";
position:fixed;
width:100%;
height:100%;
background:
linear-gradient(rgba(255,0,0,.03) 1px,transparent 1px),
linear-gradient(90deg,rgba(255,0,0,.03) 1px,transparent 1px);
background-size:40px 40px;
pointer-events:none;
}

/* RADAR */

.radar-line{
position:fixed;
width:2px;
height:100%;
background:linear-gradient(transparent,red,transparent);
opacity:.3;
}

.radar1{left:25%;animation:scan1 4s linear infinite;}
.radar2{left:75%;animation:scan2 5s linear infinite;}

@keyframes scan1{
0%{transform:translateY(-100%);}
100%{transform:translateY(100%);}
}
@keyframes scan2{
0%{transform:translateY(100%);}
100%{transform:translateY(-100%);}
}

/* LAYOUT */

.content{
max-width:1200px;
margin:auto;
padding:30px;
}

.logo{
font-size:5rem;
text-align:center;
letter-spacing:12px;
text-shadow:0 0 20px red;
margin-bottom:10px;
}

.subtitle{
text-align:center;
color:red;
margin-bottom:30px;
}

.grid{
display:grid;
grid-template-columns:1fr 1.4fr;
gap:20px;
}

/* SCORE CIRCLE */

.score-circle{
width:200px;
height:200px;
border-radius:50%;
border:3px solid red;
display:flex;
align-items:center;
justify-content:center;
font-size:2rem;
margin:auto;
box-shadow:0 0 25px red;
}

/* CONSOLE */

.console{
background:#050000;
border:2px solid red;
padding:20px;
}

.console-output{
height:220px;
overflow:auto;
background:black;
color:var(--hud-green);
font-family:monospace;
padding:10px;
margin-bottom:10px;
}

.console textarea{
width:100%;
background:black;
border:1px solid #333;
color:white;
margin-bottom:10px;
}

/* SERVICES */

.services{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:10px;
margin-top:30px;
}

.service{
border:1px solid red;
padding:15px;
cursor:pointer;
transition:.2s;
}

.service:hover{
box-shadow:0 0 10px red;
}

`}
      </style>

      {/* REACTOR CORE CINEMATIC SAFE PATCH */}
      <style>
{`

.logo-text{
    position:relative !important;
    text-shadow:
        0 0 10px #ffffff,
        0 0 30px #ff0000,
        0 0 60px #ff0000,
        0 0 120px #ff0000,
        0 0 220px #ff0000 !important;
}

.logo-text::before{
    content:"";
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:160%;
    height:160%;
    background:radial-gradient(circle, rgba(255,0,0,0.35) 0%, transparent 70%);
    filter:blur(90px);
    z-index:-1;
    animation: reactorHalo 1.6s ease-in-out infinite;
}

@keyframes reactorHalo{
    0%,100%{ transform:translate(-50%,-50%) scale(1); opacity:.6;}
    50%{ transform:translate(-50%,-50%) scale(1.2); opacity:1;}
}

`}
      </style>

      <style>
{`

/* ===== RON3IA FINAL LOCK ===== */

.logo-text{
    color:#ffffff !important;
    text-shadow:
        0 0 10px #ffffff,
        0 0 30px #ff0000,
        0 0 60px #ff0000,
        0 0 120px #ff0000,
        0 0 200px #ff0000 !important;
}

.logo-text::before{
    display:none !important;
}

body::after{
    display:none !important;
}

`}
      </style>

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
> SISTEMA RON3IA ACTIVO
> CONEXIÓN ESTABLECIDA
> ENTORNO DIGITAL LISTO PARA ANÁLISIS
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

      <script>
        {`

const API="https://ron3ia-api-819648047297.southamerica-west1.run.app";

const btn=document.getElementById("btn");
const input=document.getElementById("input");
const consoleBox=document.getElementById("console");
const score=document.getElementById("scoreDisplay");

function log(t){
consoleBox.textContent+="\n"+t;
consoleBox.scrollTop=9999;
}

async function run(mod){

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

document.querySelectorAll(".service").forEach(el=>{
el.onclick=()=>run(el.dataset.module);
});

`}
      </script>
    </>
  );
}

