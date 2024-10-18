function calcularIdade() {
    //CHAMANDO OS INPUTS
    let numberDay = parseInt(document.getElementById("number-day").value);
    let numberMonth = parseInt(document.getElementById("number-month").value); // Agora os meses vão de 1 a 12
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
    const hoje = new Date();
    const anoHoje = hoje.getFullYear();
    const mesHoje = hoje.getMonth() + 1; // Ajustando para meses de 1 a 12
    const diaHoje = hoje.getDate();

    // Função para colorir erros
    function colorirErros() {
        for (let i = 0; i < colorLabels.length; i++) {
            colorLabels[i].style.color = "var(--color-light-red)";
            colorBorders[i].style.borderColor = "var(--color-light-red)";
        }
    }

    // CAMPOS VAZIOS ***************************************************************************
    if (isNaN(numberDay) || isNaN(numberMonth) || isNaN(numberYear)) {
        colorirErros();
        for (let i = 0; i < colorLabels.length; i++) {
            campoRequerido[i].innerHTML = "This field is required";
        }
        return; // Para a execução
    }

    // SE AS DATAS SÃO VÁLIDAS
    if (numberYear > anoHoje || numberMonth < 1 || numberMonth > 12 || numberDay < 1 || numberDay > 31) {
        diaRequerido.innerHTML = "Must be a valid day";
        mesRequerido.innerHTML = "Must be a valid month";
        anoRequerido.innerHTML = "Must be in the past";
        colorirErros();
        return;
    }

    // Validar meses com 30 dias
    if ((numberMonth === 4 || numberMonth === 6 || numberMonth === 9 || numberMonth === 11) && numberDay > 30) {
        diaRequerido.innerHTML = "Must be a valid date";
        colorirErros();
        return;
    }

    // Validar fevereiro
    if (numberMonth === 2) { // Fevereiro
        let isAnoBissexto = (numberYear % 4 === 0 && (numberYear % 100 !== 0 || numberYear % 400 === 0));
        if ((isAnoBissexto && numberDay > 29) || (!isAnoBissexto && numberDay > 28)) {
            diaRequerido.innerHTML = "Must be a valid date";
            colorirErros();
            return;
        }
    }

    // CÁLCULO DAS DIFERENÇAS
    let diferencaAno = anoHoje - numberYear;
    let diferencaMes = mesHoje - numberMonth;
    let diferencaDias = diaHoje - numberDay;

    // Ajustar se o mês ainda não completou este ano
    if (diferencaMes < 0) {
        diferencaAno--;
        diferencaMes += 12; // Adiciona 12 meses
    }

    // Ajustar se o dia ainda não completou
    if (diferencaDias < 0) {
        diferencaMes--;
        // Pega o último dia do mês anterior
        const ultimoDiaMesAnterior = new Date(anoHoje, mesHoje - 1, 0).getDate();
        diferencaDias += ultimoDiaMesAnterior;
    }

    // Atualizar o resultado
    document.getElementById("resultado-year").innerHTML = diferencaAno;
    document.getElementById("resultado-month").innerHTML = diferencaMes;
    document.getElementById("resultado-day").innerHTML = diferencaDias;
}
