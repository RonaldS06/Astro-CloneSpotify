import{u as y,j as t,P as p,a as P}from"./Player.yluLr2Fq.js";import"./index.Ba-IbuDT.js";const f=({id:n})=>{const{currentMusic:i,isPlaying:o,setIsPlaying:a,setCurrentMusic:r}=y(s=>s),e=o&&i?.playlist.id===n,u=()=>{if(e){a(!1);return}fetch(`/api/get-info-playlist.json?id=${n}`).then(s=>s.json()).then(s=>{const{songs:l,playlist:c}=s;a(!0),r({songs:l,playlist:c,song:l[0]})})};return t.jsx("button",{onClick:u,className:"card-play-button bg-green-600 p-3.5 rounded-full hover:scale-110 transition-all duration-200",children:e?t.jsx(p,{}):t.jsx(P,{})})};export{f as default};
