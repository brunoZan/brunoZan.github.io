
//entendo porque nao está dando pra fazer oush pro github

let imagemDefaut = document.querySelector("img");

var imagens ={
	volei: 'https://pbs.twimg.com/media/FX-l4b3XwAExnbO?format=jpg&name=large', 
	monstro:'https://pbs.twimg.com/media/FZMz-dmagAE4F-D?format=jpg&name=900x900'  
};
		

imagemDefaut.onclick = function (){ trocarImg() };
botao.onclick = function (){ defineNomeUser() };

function trocarImg(){
	let mySrc = imagemDefaut.getAttribute('src');
	if(mySrc === imagens.volei){
		imagemDefaut.setAttribute('src', imagens.monstro);
	}
	else{
		imagemDefaut.setAttribute('src', imagens.volei);
	}
}
//////////////////////////////////////////////////////////

let botao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');
meuCabecalho.textContent = 'Hello!';

function defineNomeUser(){
	let userName = prompt('Nome!');
	if(!userName){
		defineNomeUser();
	} 
	else {
		 localStorage.setItem( 'nome', userName );
	 	 meuCabecalho.innerHTML = 'Otario: ' + nomeGuardado;
	}
}

if( !localStorage.getItem('nome' )){
		defineNomeUser();
	}
	 else {
		 let storedName = localStorage.getItem( 'nome');
	 	 meuCabecalho.innerHTML = 'Otario: ' + storedName;
	}
botao.onclick = function () {
	defineNomeUser();
}

///https://pbs.twimg.com/media/FX-l4b3XwAExnbO?format=jpg&name=large





