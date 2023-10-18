// let nome 
// let ruolo
// let foto

// const team = {

//     "nome" : ['Wayne Barnett','Angela Caroll','Walter Gordon','Angela Lopez','Scott Estrada','Barbara Ramos'],

//     "ruolo" : ['Founder & CEO','Chief Editor','Office Manager','Social Media Manager','Developer','Graphic Designer'],

//     "foto" : ['wayne-barnett-founder-ceo.jpg','angela-caroll-chief-editor.jpg','walter-gordon-office-manager.jpg','angela-lopez-social-media-manager.jpg','scott-estrada-developer.jpg','barbara-ramos-graphic-designer.jpg'],
// }

// console.log(team)


// const teamMember = {
//     name : "A",
//     role : "B",
//     photo: "C"
// }


// CREO UN OGGETTO TEAM CON ALL' INETERNO UN ARRAY CHE CONTIENE A SUA VOLTA DIVERSI OGGETTI QUANTI SONO I MEMBRI DEL TEAM, ALL INETRNO DEGLI OGGETTI ABBIAMO DELLE KEY VALORIZZATE CON UNA STRINGA :


const team = {

    members : [
        {
            name : "Wayne Barnett",
            role : "Founder & CEO",
            photo: "wayne-barnett-founder-ceo.jpg"
        },
        {
            name : "Angela Caroll",
            role : "Chief Editor",
            photo: "angela-caroll-chief-editor.jpg"
        },
        {
            name : "Walter Gordon",
            role : "Office Manager",
            photo: "walter-gordon-office-manager.jpg"
        },
        {
            name : "Angela Lopez",
            role : "Social Media Manager",
            photo: "angela-lopez-social-media-manager.jpg"
        },
        {
            name : "Scott Estrada",
            role : "Developer",
            photo: "scott-estrada-developer.jpg"
        },
        {
            name : "Barbara Ramos",
            role : "Graphic Designer",
            photo: "barbara-ramos-graphic-designer.jpg"
        },      
    ],
}

// RECUPERO ELEMENTI DEL DOM : 

containerDOMElement = document.querySelector('.container')
console.log(containerDOMElement)

// CICLO L'ARRAY MEMBRI CONTENUTO ALL' INTERNO DELL' OGGETTO TEAM E VALORIZZO LE VARIABILI CURRENT NAME , CURRENT ROLE , E CURRENT SRC CON IL VALORE DELL' INDEX INIZZIALIZZATO A ZERO E  I <.TEAM.members.length ; PRINTO POI I CURRENT NAME, ROLE ED SRC ALL' INTERNO DEL DOM :

for (let i = 0; i < team.members.length; i++ ) {
    let currentName = team.members[i].name
    let currentRole = team.members[i].role
    let currentSrc = team.members[i].photo
    console.log(currentName)
    console.log(currentRole)
    console.log(currentSrc)

    containerDOMElement.innerHTML += currentName + " / " + currentRole + " / " + currentSrc + " / "
}


// console.log(team.members[0].name)