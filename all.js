// Template Literal , Temaplte String

let person = {
    name: "Mg Mg",
    brother: "Aung Aung",
    sister: "Su Su",
    parents: ["U Ba","Daw Myat"]

}

let mgData = `

<h5>${person.name} Information</h5>
    <ul>

        <li>Father : ${person.parents[0]}</li>
        <li>Mother : ${person.parents[1]}</li>
        <li>Name : ${person.name}</li>
        <li>Brother : ${person.brother}</li>
        <li>Sister : ${person.sister}</li>

    </ul>

`;



document.querySelector('.para').innerHTML = mgData;