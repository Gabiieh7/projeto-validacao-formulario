const inputs = document.querySelectorAll('.input');
const spans = document.querySelectorAll('.span');
const btnEnviar = document.querySelector('.btn-enviar');

btnEnviar.addEventListener('click', (event) => {
    inputs.forEach((input) => {
        spans.forEach((span) => {
            const inputSelecionado = input.name;
            if (input.value != '') {
                input.classList.remove('vazio');
                input.classList.add('valido');
                if (span.id === inputSelecionado) {
                    span.classList.remove('visivel');
                }
            } else {
                input.classList.remove('valido');
                input.classList.add('vazio');
                if (span.id === inputSelecionado) {
                    span.classList.add('visivel');
                }
                event.preventDefault();
            }
        })
    })
})


// document
//     .querySelector('.btn-enviar')
//     .addEventListener('click', (event) => {
//             document
//                 .querySelectorAll('.item')
//                 .forEach(item => {
//                     const input = item.firstElementChild;
//                     const span = item.lastElementChild;
//                     if (input.value == '' || input.value == undefined) {
//                         span.classList.add('visivel');
//                         input.classList.remove('valido');
//                         input.classList.add('vazio');
//                         event.preventDefault();
//                     } else {
//                         span.classList.remove('visivel');
//                         input.classList.add('valido');
//                     }
//                 })
//     })


