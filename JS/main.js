
function clicou() {
    document.getElementById("Agradecimento").innerHTML = "Obrigado por clicar";
    //alert("OBRIGADO")
};

function chamaGoogle() {
    window.open('https://www.google.com/')
    //window.location.href = "https://www.google.com/"
}

function trocar(a) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    a.innerHTML = "Obrigado por passar o mouse"
};
function voltar(a) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
    a.innerHTML = "Passe o mouse aqui!"
};

function load(a) {
    alert("pagina carregada")
    
}

/*function soma (n1,n2){
    return n1+n2;
}

function validaIdade(idade) {
    var validar;
    if (idade>=18) {
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}
var idade = prompt('Qual a sua Idade?');
console.log(validaIdade(idade))
*/


/*var count = 0;
while(count < 5 ){
    console.log(count);
    count++;
}
for(count=0; count<5; count++){ console.log(count)};
*/

/*var idade = prompt('Sua IDADE?') 
if(idade >= 18){
    alert('Maior de Idade');
}else alert("Menor de idade");
*/

/*var frutas = [{nome:"maçã", cor:"Vermelha"},{nome:"uva", cor:"Roxo"}];
console.log(frutas);
alert(frutas[1].nome);
*/

/*var fruta = {nome:"maçã", cor:"Vermelha"}
console.log(fruta);
alert(frutas.nome)
*/

/*var lista = ["maçã", "pera","laranja"];
lista.push("uva");
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" | "));
*/

/*var nome = "Ramon Fidencio";
var n1 = 5;
var n2 = 3;
var frase = "Japão melhor do Mundo!";
//alert(nome +" tem " + Idade);
//alert(n1+n2);
console.log(nome);
console.log(n1+n2);
console.log (frase);
console.log (frase.replace ("Japão","Brasil"));
*/