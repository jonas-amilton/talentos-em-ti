
// Leia o c�digo

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [ "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", "Virginia Cavendish" ], 
	transmissoesHoje: [
		{ canal: "Telecine", horario: "21h" }, 
		{ canal: "Canal Brasil", horario: "19h" }, 
		{ canal: "Globo", horario: "14h" }
	]
}

// O que vai ser impresso no console?

console.log(filme.elenco[0])
// Matheus Nachtergaele

console.log(filme.elenco[filme.elenco.length - 1])
// Virginia Cavendish

console.log(filme.transmissoesHoje[2])
// { canal: "Globo", horario: "14h" }
