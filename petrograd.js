window.addEventListener("load", sidenVises);

function sidenVises (){
    console.log ("siden vises");
    visProdukt();
}

function visProdukt (){
    var klon = document.querySelector("#produkt_template").content.cloneNode(true);

    document.querySelector(".produktliste").appendChild(klon);
}
