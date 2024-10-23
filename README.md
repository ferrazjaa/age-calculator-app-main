# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [O desafio (The challenge)](#the-challenge)
  - [Links](#links)
- [Meu processo (My process)](#my-process)
  - [Construído com (Built with)](#built-with)
  - [O que aprendi (What I learned)](#what-i-learned)
  - [Desenvolvimento Contínuo (Continued development)](#continued-development)
- [Autor (Author)](#author)
- [Referências](#acknowledgments)



## Overview

Este projeto é um formulário que calcula a idade de uma pessoa com base em uma data de nascimento fornecida. Ele valida se a data é válida e exibe erros se o usuário inserir um dia, mês ou ano incorreto. A interface é responsiva e fornece feedback visual em tempo real sobre a validade dos dados. O projeto serve como uma prática de manipulação de datas em JavaScript e de validação de formulários.


### O desafio (The challenge)

#### <u>Português</u>
Os usuários devem ser capazes de:

Visualizar a idade em anos, meses e dias após enviar uma data válida pelo formulário
Receber erros de validação se:
Qualquer campo estiver vazio ao enviar o formulário
O número do dia não estiver entre 1-31
O número do mês não estiver entre 1-12
O ano estiver no futuro
A data for inválida, por exemplo, 31/04/1991 (abril tem 30 dias)
Visualizar o layout ideal para a interface, dependendo do tamanho da tela do dispositivo
Ver os estados de foco e hover para todos os elementos interativos da página
Bônus: Ver os números da idade animarem até o valor final quando o formulário for enviado

#### <u>English </u>
Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted


### Links

- Live Site URL: [Add live site URL here](https://ferrazjaa.github.io/age-calculator-app-main/)

## Meu processo (My process)

Comecei identificando os requisitos do projeto, como a validação de datas e o cálculo da idade. Meu foco inicial foi entender como o JavaScript manipula datas e como garantir que as entradas fossem validadas corretamente (dias, meses e anos). Ao longo do processo, me concentrei em aprimorar a usabilidade e o design da interface, garantindo feedback visual para erros no formulário e validações. O desenvolvimento seguiu um ciclo de testar e corrigir problemas até chegar em uma versão funcional.


### Construído com (Built with)
- HTML5 para a estrutura da página (Semantic HTML5 markup)
- CSS3 para o estilo e responsividade (CSS custom properties)
- JavaScript para manipulação de dados e validação de formulários


### O que aprendi (What I learned)

Durante o desenvolvimento deste projeto, aprendi a:
- Manipular datas no JavaScript usando o objeto `Date`, inclusive trabalhar com anos bissextos.
- Implementar validações em formulários, como verificar se o dia é válido para o mês específico.
- Melhorar a usabilidade de formulários exibindo mensagens de erro visuais.
- Aplicar correções de estilo com base nos estados de hover e focus para elementos interativos.
- Trabalhar com lógica condicional para ajustar a diferença de anos, meses e dias, levando em conta variações de calendário.



### Desenvolvimento Contínuo (Continued development)

- Estrutura do DOM
- Melhorar estruturas de repetições.
- Implementar usos de funções.
- Melhorias nas validações: se apenas alguns do campos colocados, o retorno apenas para esse campo.
- Suporte a Mobile: Melhorar ainda mais a responsividade e otimização para dispositivos móveis.


## Author

- Website - [Jessica Ferraz](https://www.your-site.com)
- Frontend Mentor - [@ferrazjaa](https://www.frontendmentor.io/profile/ferrazjaa)



## Referências 

- [Ano Bissexto em JavaScript: Como validar](https://www.javascriptprogressivo.net/2018/12/Ano-Bissexto-JavaScript-Validar.html#google_vignette)
- [Calcular a diferença de dias entre duas datas em javascript](https://horadecodar.com.br/calcular-a-diferenca-de-dias-entre-duas-datas-em-javascript//)
- [MDN Web Docs - Date](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [Date JavaScript - Trabalhando com data e hora em JS](https://www.devmedia.com.br/date-javascript-trabalhando-com-data-e-hora-em-js/37222)
- [Program to calculate age](https://www.geeksforgeeks.org/program-calculate-age/)

