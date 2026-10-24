function confirmaRegistre(){
    alert("registrant estudiant");
    document.getElementById("formDiv").innerHTML = "<p class='important'>T'has registrat amb èxit!</p>";
    console.log("registrant estudiant");
    return false;
}

async function carregaMencions(){
    //completa

    // 0. Agafem el grau seleccionat pel usuari
    const grau = document.getElementById("graus").value

    // 1. Consulta AJAX -> Quina mencions corresponen al grau escollit
    const resultat = await fetch("mencions.php?grau="+grau)

    // 2. Resultat retorna les optionvalues pel q afagem els texts (les mencions)
    const opions = await resultat.text()

    // 3. Fiquem les opcions al HTML
    document.getElementById("mencions").innerHTML = options

}