function calcularIdade() {
    //CHAMANDO OS INPUTS
    let numberDay = parseInt(document.getElementById("number-day").value);

    let numberMonth = parseInt(document.getElementById("number-month").value) - 1;

    let numberYear = parseInt(document.getElementById("number-year").value);
    

    // CAMPOS REQUERIDOS 
    let diaRequerido = document.getElementById('dia-requerido');
    let mesRequerido = document.getElementById('mes-requerido');
    let anoRequerido = document.getElementById('ano-requerido');

    //Inputs e label - ESTILOS
    let colorLabels = document.getElementsByTagName('label');
    let colorBorders = document.getElementsByTagName('input');
    let campoRequerido = document.getElementsByClassName("campo-requerido");

    // CALCULO DA DIFERENÇA
    //DATA HOJE
    const hoje = new Date();
    const anoHoje = hoje.getFullYear();
    const mesHoje = hoje.getMonth();
    const diaHoje = hoje.getDate();
    

    // DATA DIGITADA
    const dataNascimento = new Date(numberYear, numberMonth, numberDay);
    console.log(dataNascimento)
    const anoNascimento = dataNascimento.getFullYear();
    const mesNascimento = dataNascimento.getMonth();
    const diaNascimento = dataNascimento.getDate();

    // CALCULO DAS DIFERENÇAS
    let diferencaAno = anoHoje - anoNascimento;
    let diferencaMes = mesHoje - mesNascimento;
    
    // transformando a data em milissegundos
    let diaHojeMilissegundos = hoje.getTime();
    let diaNascimentoMilissegundos = dataNascimento.getTime();

    //diferença de milissegundos
    let difMilissegundos = diaHojeMilissegundos - diaNascimentoMilissegundos;

    //1 dia em milissegundos
    const umDiaMilissegundos = 1000*60*60*24;

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
