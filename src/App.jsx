// import { useState } from "react";

// function App() {

//   const [colore, setColore] = useState("")

//   function inputUtente(valore){
//     setColore(valore.target.value)
//   }

//   return (
//    <div className="container">
//       <h2>Il tuo colore preferito è: {colore}</h2>
//       <input className="input" type="text" value={colore} onChange={inputUtente} />
//    </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function Contatore() {

//   let iniziale = 0;
//   const [counter, setCounter] = useState(iniziale);

// function aggiorna(valore){
//   setCounter(counter + valore)
// }

// function resetta(){
//   setCounter(iniziale)
// }

//   return (
//     <div className="container">
//       <h2>Qui vedi il tuo contatore: {counter || "Clicca i bottoni!"}</h2>
//       <div className="buttons">
//         <button value={counter} onClick={() => aggiorna(1)}> + </button>
//         <button value={counter} onClick={() => aggiorna(-1)} disabled={counter === 0}> - </button>
//       </div>
//       <button className="reset" value={counter} onClick={resetta}> Reset </button>
//     </div>
//   )
// }

// export default Contatore;

// import { useState, useEffect } from "react";

// export default function App() {

//   const [name, setName] = useState("");

//   function inputUtente(inserimento) {
//     setName(inserimento.target.value)
//   }

//   useEffect(() => {
//     if (name === "") {
//       document.title = `Benvenuto!`
//     } else {
//       document.title = `Ciao, ${name}!`
//     };

//     console.log(`Aggiornato il nome a: ${name}`)
//   }, [name])

//   return (
//     <div className="container">
//       <input type="text" placeholder="Inserisci qui il tuo nome" value={name} onChange={inputUtente} style={{ padding: 20 }} />
//     </div>
//   )

// }

import { useState, useEffect } from "react";

// export default function App() {
//   const [click, setClick] = useState(0);
//   const [messaggio, setMessaggio] = useState("");

//   useEffect(() => {
//     setMessaggio(`Hai cliccato ${click} volte`);
//   }, [click]);

//   return (
//     <div>
//       <button onClick={() => setClick(click + 1)}>Click</button>
//       <p>{messaggio}</p>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";

// export default function App() {
//   const [numero, setNumero] = useState("");
//   const [tipo, setTipo] = useState("");

//   useEffect(() => {
//     const n = parseInt(numero);
//     if (!isNaN(n)) {
//       setTipo(n % 2 === 0 ? "Pari" : "Dispari");
//     } else {
//       setTipo("");
//     }
//   }, [numero]);

//   return (
//     <div>
//       <input
//       style={{padding: 20}}
//         type="number"
//         value={numero}
//         onChange={e => setNumero(e.target.value)}
//         placeholder="Inserisci un numero"
//       />
//       <p>{tipo && `Il numero è: ${tipo}`}</p>
//     </div>
//   );
// }

// export default function App() {

//   const [count, setCount] = useState(0);
//   const [message, setMessage] = useState("");

// function aggiorna( valore){
//   if(count === 0 && valore < 0){
//   return;
//   }
//   setCount(count + valore);
// }

//   useEffect(() => {
//     setMessage(`Hai aggiornato il contatore! Valore attuale: ${count}`);
//     console.log(`Hai aggiornato il contatore! Valore attuale: ${count}`)
//   }, [count])

//   return (
//     <>
//       <div className="buttons">
//         <button value={count} onClick={() => aggiorna(1)}> + </button>
//         <button value={count} onClick={() => aggiorna(-1)}> - </button>
//       </div>
//       <p>{message}</p>
//     </>
//   )
// }

// export default function App(){

//   const [nome, setNome] = useState("");
//   const [message, setMessage] = useState("");

//   function inserimentoUtente(e){
//     setNome(e.target.value);
//   }

//   useEffect(() => {
//     if(nome === ""){
//       setMessage(`Nessun nome inserito.`)
//     }else{
//     setMessage(`Ciao, ${nome}!`)}
//     console.log(`Nuovo nome inserito: ${nome}`)
//   }, [nome])

//   return(
//     <div className="container">
//     <input style={{padding:20}} type="text" value={nome} onChange={inserimentoUtente} />
//     <p>{message}</p>
//     </div>
//   )
// }

// export default function App() {

//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     if (password === "") {
//       setMessage(`Inserisci una password`)
//     } else if (password.length < 6) {
//       setMessage(`Password troppo corta`)
//     } else{
//       setMessage(`Password accettata`)
//     };
//   }, [password])

//   return (
//     <form className="container">
//       <input style={{ padding: 20 }} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Scegli la password" />
//       <p>{message}</p>
//     </form>
//   )
// }

export default App(){

  return (
    <>
      <h1>Prova git add</h1>
    </>
  )
};