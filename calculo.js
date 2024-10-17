function calcularIdade() {
    //CHAMANDO OS INPUTS
    let numberDay = parseInt(document.getElementById("number-day").value);

    let numberMonth = parseInt(document.getElementById("number-month").value);

    let numberYear = parseInt(document.getElementById("number-year").value);
    

    // CAMPOS REQUERIDOS 
    let diaRequerido = document.getElementById('dia-requerido');
    let mesRequerido = document.getElementById('mes-requerido');
    let anoRequerido = document.getElementById('ano-requerido');

    //Inputs e label - ESTILOS
    let colorLabels = document.getElementsByTagName('label');
    let colorBorders = document.getElementsByTagName('input');
    let campoRequerido = document.getElementsByClassName("campo-requerido");


    //DATA HOJE
    let hoje = new Date();
    diaHoje = hoje.getDate();
    mesHoje = hoje.getMonth() + 1; //o mês no js é de 0 a 11
    anoHoje = hoje.getFullYear();

    /** Calculo dos dias */
    //usando o ano atual para poder haver essa contagem de dias
    const dataDigitada = new Date(anoHoje, numberMonth - 1, numberDay);

    var dataDigitadaMilissegundos = dataDigitada.getTime();
    var dataHojeMilissegundos = hoje.getTime();

    // 1 dia em milissegundos
    var umDiaMilissegundos = 1000 * 60 * 60 * 24;

    //diferença de milissegundos
    var difMilissegundos = dataHojeMilissegundos - dataDigitadaMilissegundos;

    //transformando em dia de novo
    var diferencaDias = Math.round(difMilissegundos / umDiaMilissegundos);





    // CAMPOS VAZIOS //////////////////////////
    if (isNaN(numberDay) || isNaN(numberMonth) || isNaN(numberYear)) {

        for (let i = 0; i < colorLabels.length; i++) {
            colorLabels[i].style.color = "var(--color-light-red)";

            colorBorders[i].style.borderColor = "var(--color-light-red)";

            campoRequerido[i].innerHTML = "This field is required";

        }

        return; // Para a execução se houver campo vazio

    } 
    
    // SE AS DATAS SÃO VALIDAS
    if ((numberYear > anoHoje) || (numberMonth < 1 || numberMonth > 12) || (numberDay < 0 || numberDay > 31)) {

        diaRequerido.innerHTML = "Must be a valid day";

        mesRequerido.innerHTML = "Must be a valid month";

        anoRequerido.innerHTML = "Must be in the past";

        for (let i = 0; i < colorLabels.length; i++) {
            colorLabels[i].style.color = "var(--color-light-red)";

            colorBorders[i].style.borderColor = "var(--color-light-red)";
        }

       
        return;


    } else {
        if (numberMonth == 4 || numberMonth == 6 || numberMonth == 9 || numberMonth == 11) {
            if (numberDay >= 31) {
                diaRequerido.innerHTML = "Must be a valid date";
                for (let i = 0; i < colorLabels.length; i++) {
                    colorLabels[i].style.color = "var(--color-light-red)";

                    colorBorders[i].style.borderColor = "var(--color-light-red)";
                }
            } else {
                diferencaAno = anoHoje - numberYear;
                diferencaMes = Math.abs(mesHoje - numberMonth);


                document.getElementById("resultado-year").innerHTML = diferencaAno;
                document.getElementById("resultado-month").innerHTML = diferencaMes;
                document.getElementById("resultado-day").innerHTML = diferencaDias;
            }
        } else if (numberMonth == 2) {
            //se ano não bissexto
            if (numberYear % 4 != 0 || (numberYear % 100 == 0 && numberYear % 400 != 0)) {
                if (numberDay > 28) {
                    diaRequerido.innerHTML = "Must be a valid date";
                    for (let i = 0; i < colorLabels.length; i++) {
                        colorLabels[i].style.color = "var(--color-light-red)";

                        colorBorders[i].style.borderColor = "var(--color-light-red)";
                    }
                } else {
                    diferencaAno = anoHoje - numberYear;
                    diferencaMes = Math.abs(mesHoje - numberMonth);


                    document.getElementById("resultado-year").innerHTML = diferencaAno;
                    document.getElementById("resultado-month").innerHTML = diferencaMes;
                    document.getElementById("resultado-day").innerHTML = diferencaDias;
                }
                //ano bissexto
            } else {
                if (numberDay > 29) {
                    diaRequerido.innerHTML = "Must be a valid date";
                    for (let i = 0; i < colorLabels.length; i++) {
                        colorLabels[i].style.color = "var(--color-light-red)";

                        colorBorders[i].style.borderColor = "var(--color-light-red)";
                    }
                } else {
                    diferencaAno = anoHoje - numberYear;
                    diferencaMes = Math.abs(mesHoje - numberMonth);


                    document.getElementById("resultado-year").innerHTML = diferencaAno;
                    document.getElementById("resultado-month").innerHTML = diferencaMes;
                    document.getElementById("resultado-day").innerHTML = diferencaDias;
                }


            }
        } else {
            diferencaAno = anoHoje - numberYear;
            diferencaMes = Math.abs(mesHoje - numberMonth);


            document.getElementById("resultado-year").innerHTML = diferencaAno;
            document.getElementById("resultado-month").innerHTML = diferencaMes;
            document.getElementById("resultado-day").innerHTML = diferencaDias;
        }

    }











}
