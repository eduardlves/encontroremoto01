

//entradas
let listaPecas = ["computador", "mouse", "teclado","monitor", "fone", "calculadora", "caneta", "hdmi", "usb", "vga"];
let nomePeca = "pc";
let pesoPeca = 350;



//processamento
if(listaPecas.length >= 10){//sem espaço
    console.log("limite de cadastro atingido");
} 
else{ //caso tenha espaço

    if(pesoPeca >= 100){//confirmar peso da peça
        console.log("Peça pode ser cadastrada");
    }
        if(nomePeca.length < 3 ){//caso peça tenha quantidade de caracteres
            console.log("ATENÇAO:nome da peça deve conter mais de 3 caracteres");
        }

}






