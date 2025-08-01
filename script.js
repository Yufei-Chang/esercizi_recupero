// for (let i = 0; i <= 10; i++){
//     console.log(i)
// }

// let somma = 0;
// for (let i = 1; i <= 5; i++){
//     somma = somma + i;
// }
// console.log(somma)

// for (let i = 5; i >= 1; i--){
//     console.log(i)
// }

// for (let i = 1; i <= 10; i++) {
//     if( i % 2 === 0){
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 5; i++){
//     console.log("Saluta numero " + i);
// }

// const animePreferiti = ["Berserk", "Shigurui", "Vagabond", "GTO", "Ergo Proxy"];

// for (let i = 0; i < animePreferiti.length; i++) {
//   console.log(animePreferiti[i]);
// }

// const names = ["Saitama", "Eren", "Guts", "All Might", "Black Wargreymon"]
// for (let i = 0; i < names.length; i++) {
//     console.log((i + 1) + ". " + names[i])
// }

// const negozio = {
//     reparti: ["cibo", "manga"],
//     indirizzo: {
//         via: "indipendenza",
//         numero: 50, 
//     }
// }
// console.log("Il negozio ha anche il reparto: " + negozio.reparti[1] + ", e si trova in via: " + negozio.indirizzo.via + ".")

// const negozio = {
//     reparti: [
//         {
//             nome: "Manga",
//             prodotti: ["Planet Panga", "J-pop", "Feltrinelli", "Mondadori"],
//         },
//         {
//             nome: "Figures",
//             prodotti: ["Banpresto", "Megahouse", "Sega", "F4F", "Good Smile Compagny"],
//         }
//     ]
// }

// for (let i = 0; i < negozio.reparti.length; i++) {
//     console.log("Reparto:", negozio.reparti[i].nome);

//     for (let j = 0; j < negozio.reparti[i].prodotti.length; j++) {
//         console.log("- " + negozio.reparti[i].prodotti[j]);
//     }

//     console.log(""); // riga vuota tra i reparti
// }

// const figurePrefe = [
//     {nome: "Superman", prezzo: 149,},
//     {nome: "Venom", prezzo: 179,},
//     {nome: "Goku Ssj4", prezzo: 219,},
//     {nome: "Kratos", prezzo: 199,},
//     {nome: "Aloy", prezzo: 179,},
//     {nome: "Guts", prezzo: 249,}
// ]

// for (let i = 0; i < figurePrefe.length; i++){
//     console.log("Il prezzo della figure " + figurePrefe[i].nome + " è di " + figurePrefe[i].prezzo + "€.")
// }

// const biblioteca = {
//     scaffali: [
//         { categoria: "Figures", titoli: ["Banpresto", "Megahouse", "Alter", "Sega"] },
//         { categoria: "Manga", titoli: ["One Piece", "You lie in april", "Voglio mangiare il tuo pancreas", "Berserk"] }
//     ]
// }

// for (let i = 0; i < biblioteca.scaffali.length; i++){
//     console.log("Scaffale di: " + biblioteca.scaffali[i].categoria)

//     for (let j = 0; j < biblioteca.scaffali[i].titoli.length; j++){
//         console.log("- " + biblioteca.scaffali[i].titoli[j])
//     }
// }

// const negozio = {
//     reparti: [
//         { nome: "Action Figures", prodotti: ["Luffy", "Zoro", "Goku"] },
//         {nome: "Manga", prodotti: ["Berserk", "One Piece", "Naruto"]}
//     ]
// }
// // console.log(negozio.reparti[1].nome)
// // console.log(negozio.reparti[0].prodotti[0])
// // console.log(negozio.reparti[1].prodotti[2])
// for(let i = 0; i < negozio.reparti[1].prodotti.length; i++){
//     console.log([i + 1] + ". " + negozio.reparti[1].prodotti[i])
// }

// const prodottiManga = ["Berserk", "One Piece", "Naruto"];
//  prodottiManga.map((currProd => console.log("⭐ " + currProd)))

// const negozio = {
//   reparti: [
//     { nome: "Action Figures", prodotti: ["Luffy", "Zoro", "Goku"] },
//     { nome: "Manga", prodotti: ["Berserk", "One Piece", "Naruto"] }
//   ]
// }

// const prodottiFigures = negozio.reparti[0].prodotti;

// prodottiFigures.map((curProd, i) => console.log(i+1 + " " + curProd + ` è disponibile nel reparto ${negozio.reparti[0].nome}`))

// const prodottiFigures = ["Luffy", "Zoro", "Goku"];

// const comingSoon = prodottiFigures.map((figures, i) => {
//     return `${i+1} 🔥 IN ARRIVO: ${figures.toUpperCase()}`
// })

// for(let i = 0; i < comingSoon.length; i++){
//     console.log(comingSoon[i])
// }

// const utenti = [
//   { nome: "Chris", ruolo: "Admin" },
//   { nome: "Marco", ruolo: "Editor" },
//   { nome: "Elisa", ruolo: "Viewer" }
// ];

// const ruoli = utenti.map(e => {
//     return `${e.nome} ha il ruolo di ${e.ruolo}`
// })

// for(let r = 0; r < ruoli.length; r++){
//     console.log(ruoli[r])
// }

// const libri = [
//   { titolo: "Berserk", autore: "Miura" },
//   { titolo: "Naruto", autore: "Kishimoto" },
//   { titolo: "One Piece", autore: "Oda" }
// ];

// const autori = libri.map(o => `${o.titolo} è scritto da ${o.autore}`)

// for(let i= 0; i < autori.length; i++){
//   console.log(autori[i])
// }

// const numeri = [5, 12, 8, 21, 3, 30];

// const grandi = numeri.filter( g => g > 10 );
// console.log(grandi)

// const prodotti = [
//   { nome: "Luffy", prezzo: 35 },
//   { nome: "Zoro", prezzo: 40 },
//   { nome: "Berserk", prezzo: 12 },
//   { nome: "Naruto", prezzo: 15 }
// ];

// prodotti
//   .filter(p => p.prezzo > 20)
//   .forEach(p => console.log(`La figure di ${p.nome} costa ${p.prezzo}€`))

// const prodotti = [
//   { nome: "Luffy", prezzo: 35 },
//   { nome: "Zoro", prezzo: 40 },
//   { nome: "Berserk", prezzo: 12 },
//   { nome: "Naruto", prezzo: 15 },
//   { nome: "Goku", prezzo: 50 }
// ];

// prodotti
// .filter(p => p.prezzo > 20)
// .map(p => console.log(`${p.nome} costa ${p.prezzo}`))

// const negozio = [
//   {
//     reparto: "Action Figures",
//     prodotti: [
//       { nome: "Luffy", prezzo: 35, disponibili: 5 },
//       { nome: "Zoro", prezzo: 40, disponibili: 0 },
//       { nome: "Goku", prezzo: 50, disponibili: 3 }
//     ]
//   },
//   {
//     reparto: "Manga",
//     prodotti: [
//       { nome: "Berserk", prezzo: 12, disponibili: 10 },
//       { nome: "Naruto", prezzo: 15, disponibili: 2 },
//       { nome: "One Piece", prezzo: 20, disponibili: 0 }
//     ]
//   }
// ];

// const esauriti = negozio
//   .map(reparto =>
//     reparto.prodotti
//       .filter(prodotto => prodotto.disponibili === 0)
//       .map(prodotto => prodotto.nome)
//     )
//   .flat();
// console.log(esauriti)

// const catena = [
//   {
//     citta: "Roma",
//     negozi: [
//       {
//         nome: "Otaku Store",
//         reparti: [
//           {
//             nome: "Figures",
//             prodotti: [
//               { nome: "Luffy", prezzo: 35, disponibili: 5 },
//               { nome: "Zoro", prezzo: 40, disponibili: 0 }
//             ]
//           },
//           {
//             nome: "Manga",
//             prodotti: [
//               { nome: "Berserk", prezzo: 12, disponibili: 10 },
//               { nome: "Naruto", prezzo: 15, disponibili: 0 }
//             ]
//           }
//         ]
//       }
//     ]
//   },
//   {
//     citta: "Milano",
//     negozi: [
//       {
//         nome: "Anime World",
//         reparti: [
//           {
//             nome: "Figures",
//             prodotti: [
//               { nome: "Goku", prezzo: 50, disponibili: 3 },
//               { nome: "Vegeta", prezzo: 55, disponibili: 0 }
//             ]
//           },
//           {
//             nome: "Manga",
//             prodotti: [
//               { nome: "One Piece", prezzo: 20, disponibili: 0 },
//               { nome: "Bleach", prezzo: 18, disponibili: 5 }
//             ]
//           }
//         ]
//       }
//     ]
//   }
// ];

// const esauriti = catena
//   .map(c => c.negozi.map(
//     n => n.reparti.map(
//       r => r.prodotti
//         .filter( p => p.disponibili === 0 )
//         .map( d => `${d.nome} è esaurito nel reparto ${r.nome} di ${n.nome} a ${c.citta}` )
//     )
//   ))
//   .flat(3);

//  for(let e = 0; e < esauriti.length; e++){
//   console.log(esauriti[e])
//  }

// const scuole = [
//   {
//     nome: "Liceo Galileo",
//     classi: [
//       {
//         nome: "1A",
//         studenti: [
//           { nome: "Marco", voto: 8 },
//           { nome: "Sara", voto: 6 },
//           { nome: "Luca", voto: 9 }
//         ]
//       },
//       {
//         nome: "2B",
//         studenti: [
//           { nome: "Anna", voto: 7 },
//           { nome: "Paolo", voto: 5 },
//           { nome: "Marta", voto: 10 }
//         ]
//       }
//     ]
//   },
//   {
//     nome: "Istituto Volta",
//     classi: [
//       {
//         nome: "3C",
//         studenti: [
//           { nome: "Giulia", voto: 4 },
//           { nome: "Simone", voto: 7 },
//           { nome: "Francesca", voto: 8 }
//         ]
//       },
//       {
//         nome: "4D",
//         studenti: [
//           { nome: "Davide", voto: 9 },
//           { nome: "Chiara", voto: 5 },
//           { nome: "Stefano", voto: 6 }
//         ]
//       }
//     ]
//   }
// ];

// const bocciati = scuole.map(
//   s => s.classi.map(
//     c => c.studenti
//     .filter( v => v.voto < 6 )
//     .map( b => `${b.nome} ha insufficienza nella classe ${c.nome} del ${s.nome}`)
//   )
// )
// .flat(2);
// console.log(bocciati)

// const scuole = [
//   {
//     nome: "Liceo Galileo",
//     classi: [
//       {
//         nome: "1A",
//         studenti: [
//           {
//             nome: "Marco",
//             materie: [
//               { nome: "Matematica", voto: 8 },
//               { nome: "Italiano", voto: 5 }
//             ]
//           },
//           {
//             nome: "Sara",
//             materie: [
//               { nome: "Matematica", voto: 6 },
//               { nome: "Italiano", voto: 4 }
//             ]
//           }
//         ]
//       }
//     ]
//   },
//   {
//     nome: "Istituto Volta",
//     classi: [
//       {
//         nome: "3C",
//         studenti: [
//           {
//             nome: "Giulia",
//             materie: [
//               { nome: "Storia", voto: 4 },
//               { nome: "Geografia", voto: 7 }
//             ]
//           },
//           {
//             nome: "Davide",
//             materie: [
//               { nome: "Storia", voto: 9 },
//               { nome: "Geografia", voto: 5 }
//             ]
//           }
//         ]
//       }
//     ]
//   }
// ];

// const recupero = scuole.flatMap(
//   sc => sc.classi.flatMap(
//     c => c.studenti.flatMap(
//       st => st.materie
//                       .filter( v => v.voto < 6 )
//                       .map( r => `${st.nome} ha insufficienza in ${r.nome} nella classe ${c.nome} del ${sc.nome}`)
//     )
//   )
// );
// console.log(recupero)

// const prodotti = [
//   { nome: "Luffy", prezzo: 35 },
//   { nome: "Zoro", prezzo: 40 },
//   { nome: "Berserk", prezzo: 12 },
//   { nome: "Naruto", prezzo: 15 }
// ];

// const economico = prodotti.find(p=>p.prezzo<20)
// console.log(`Ho trovato ${economico.nome} che costa ${economico.prezzo}€`)

// const negozio = {
//   reparti: [
//     {
//       nome: "Figures",
//       prodotti: [
//         { nome: "Luffy", prezzo: 35 },
//         { nome: "Zoro", prezzo: 40 }
//       ]
//     },
//     {
//       nome: "Manga",
//       prodotti: [
//         { nome: "Berserk", prezzo: 12 },
//         { nome: "Naruto", prezzo: 15 }
//       ]
//     }
//   ]
// };

// const allProd = negozio.reparti.map(r=> r.prodotti).flat();
// const cheap = allProd.find(c=>c.prezzo<20);
// console.log(`Ho trovato ${cheap.nome} a ${cheap.prezzo}€`)

// const studenti = [
//   { nome: "Marco", voto: 8 },
//   { nome: "Sara", voto: 5 },
//   { nome: "Luca", voto: 9 },
//   { nome: "Giulia", voto: 4 }
// ];

// const insuff = studenti.find(v=>v.voto<6)
// console.log(`Il primo insufficiente è ${insuff.nome} con voto ${insuff.voto}`)

// const libri = [
//   { titolo: "Berserk", pagine: 350 },
//   { titolo: "Naruto", pagine: 200 },
//   { titolo: "One Piece", pagine: 450 },
//   { titolo: "Dragon Ball", pagine: 150 }
// ];

// const corto = libri.find(p=>p.pagine<300);
// console.log(`Il primo libro corto è ${corto.titolo} con ${corto.pagine} pagine`)

// const prodotti = [
//   { nome: "Mouse", prezzo: 25 },
//   { nome: "Tastiera", prezzo: 50 },
//   { nome: "Monitor", prezzo: 200 },
//   { nome: "Cuffie", prezzo: 40 }
// ];

// const costoso = prodotti.find(p=>p.prezzo>100)
// console.log(`Il primo prodotto costoso è ${costoso.nome} e costa ${costoso.prezzo}€`)

// const animali = [
//   { specie: "Cane", eta: 3 },
//   { specie: "Gatto", eta: 1 },
//   { specie: "Coniglio", eta: 2 },
//   { specie: "Pappagallo", eta: 5 }
// ];

// const vecchio = animali.find(e=>e.eta>4)
// console.log(`Il primo animale anziano è ${vecchio.specie} con ${vecchio.eta} anni`)

// const negozi = [
//   { nome: "Otaku Store", prodotti: ["Luffy", "Zoro", "Goku"] },
//   { nome: "Anime World", prodotti: ["Naruto", "Sasuke", "Sakura"] },
//   { nome: "Manga Planet", prodotti: ["Berserk", "One Piece"] }
// ];

//negozi.map( n => console.log(`${n.nome} vende: ${n.prodotti} `))


// const prodotti = [
//   { nome: "Luffy", prezzo: 35 },
//   { nome: "Naruto", prezzo: 15 },
//   { nome: "Zoro", prezzo: 40 },
//   { nome: "Berserk", prezzo: 12 }
// ];

// prodotti.filter(p=>p.prezzo<20)
// .map(e=>console.log(e))

// const economico = prodotti.find(p=>p.prezzo<20)
// console.log(`Il primo prodotto economico è ${economico.nome} e costa ${economico.prezzo}€`)

// const studenti = [
//   { nome: "Marco", voto: 7 },
//   { nome: "Sara", voto: 9 },
//   { nome: "Luca", voto: 5 },
//   { nome: "Giulia", voto: 8 }
// ];

// const bocciato = studenti.find(v=>v.voto<6);
// console.log(`Lo studente bocciato è ${bocciato.nome} perché ha la media del ${bocciato.voto}`)

// const classi = [
//   {
//     nome: "1A",
//     studenti: [
//       { nome: "Marco", voto: 7 },
//       { nome: "Sara", voto: 9 }
//     ]
//   },
//   {
//     nome: "2B",
//     studenti: [
//       { nome: "Luca", voto: 5 },
//       { nome: "Giulia", voto: 8 }
//     ]
//   }
// ];

// const studenti = classi.flatMap(s => s.studenti);
// const bocciato = studenti.find(s=>s.voto<6);
// console.log(bocciato)

// const scuole = [
//     {
//         nome: "Liceo Galileo",
//         classi: [
//             {
//                 nome: "1A",
//                 studenti: ["Marco", "Sara"]
//             }, {
//                 nome: "2B",
//                 studenti: ["Luca", "Giulia"]
//             }
//         ]
//     },
//     {
//         nome: "Istituto Volta",
//         classi: [
//             {
//                 nome: "3C",
//                 studenti: ["Anna", "Davide"]
//             }, {
//                 nome: "4D",
//                 studenti: ["Simone", "Chiara"]
//             }
//         ]
//     }
// ];

//  const studenti = scuole.flatMap(
//      s => s.classi.flatMap(
//          c => c.studenti
//      )
//  )

// const studenti = scuole.map(
//     s => s.classi.map(
//         c => c.studenti
//     )
// )
// .flat(2)
// console.log(studenti)

// 🎯 Stampa in console il primo e l’ultimo numero dell’array.
// const numeri = [5, 10, 15, 20, 25];
// console.log(numeri[0],numeri[4])

//🎯 Usa un ciclo for per stampare ogni frutto preceduto dalla posizione (es: 1. mela).
// const frutti = ["mela", "pera", "banana", "kiwi"];
// for(let i=0; i<frutti.length; i++){
//     console.log(i+1 + ". " + frutti[i])
// }

// 🎯 Stampa in console: La Tastiera costa 50€
// const prodotti = [
//   { nome: "Mouse", prezzo: "25€" },
//   { nome: "Tastiera", prezzo: "50€" }
// ];
// console.log(`La ${prodotti[1].nome} costa ${prodotti[1].prezzo}`)

// 🎯 Usa .map() per stampare ogni nome in console.
// const nomi = ["marco", "sara", "giulia"];
// nomi.map(n=> console.log(n))

// const studenti = [
//   { nome: "Marco", voto: 8 },
//   { nome: "Sara", voto: 6 },
//   { nome: "Luca", voto: 9 }
// ];

// studenti.map( s => console.log(`${s.nome} ha voto ${s.voto}`))

// const nomi = ["Luca", "Giulia", "Anna", "Cristina"];

// const lunghi = nomi.filter( l => l.length > 5);
// console.log(lunghi)

// const studenti = [
//   { nome: "Marco", voto: 8 },
//   { nome: "Sara", voto: 5 },
//   { nome: "Luca", voto: 9 }
// ];

// const aMinchia = studenti.find( s => s.voto < 6 );
// console.log(`Il primo insufficiente è ${aMinchia.nome} con voto ${aMinchia.voto}`)

// 🎯 Usa .find() per trovare il primo frutto che inizia con la lettera “b” e stampalo così:
// Il primo frutto che inizia con B è banana

// const frutti = ["mela", "pera", "banana", "kiwi"];

// const bFruit = frutti.find( elem => elem[0] === "b" );
// console.log(`Il primo frutto che inizia con la B è ${bFruit}`)

// const studenti = [
//   { nome: "Anna", voto: 9 },
//   { nome: "Paolo", voto: 6 },
//   { nome: "Marta", voto: 4 },
//   { nome: "Gianni", voto: 7 }
// ];

// const recupero = studenti.filter( s=> s.voto < 7);
// const risultati = recupero.map( r => console.log(r))

// const parole = ["sole", "luna", "montagna", "mare"];

// const lunghe = parole.filter( l => l.length > 4 );
// console.log(lunghe);

// const studenti = [
//   { nome: "Carlo", voto: 8 },
//   { nome: "Stefania", voto: 5 },
//   { nome: "Luca", voto: 6 }
// ];

// const bocciato = studenti.find( v => v.voto < 6 )
// console.log(`Il primo insufficiente è ${bocciato.nome} con voto ${bocciato.voto}`)

// const animali = ["cane", "gatto", "leone", "cavallo"];

// const lanimal = animali.find( l => l[0] === "l" )
// console.log(`Il primo animale che inizia con L è ${lanimal}`)