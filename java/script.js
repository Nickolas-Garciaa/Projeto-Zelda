function zelda (){
    let imagem = document.getElementById("imagem");
    let trocar = Math.trunc(Math.random()*10);
    imagem.src = "img/zelda" + trocar + ".jpg";
}