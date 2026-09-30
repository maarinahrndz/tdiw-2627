function confirmaRegistre(){
    alert("registrant estudiant");
    document.getElementById("formDiv").innerHTML = "<p class='important'>T'has registrat amb èxit!</p>";
    console.log("registrant estudiant");
    return false;
}

async function carregaMencions(){
    //completa
    //step 0: get the degree
    const degree = document.getElementById("graus").value;

    //step 1: AJAX call to get the mentions
    const result = await fetch("mencions.php?grau=" + degree);
    //step 2: get results
    const options = await result.text();
    //step 3: modify the mentions options
    document.getElementsById("mencions").innerHTML = options;
} 