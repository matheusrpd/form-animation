const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");

// Adicionar classe ao form para realizar animação
btnLogin.addEventListener("click", event => {
  event.preventDefault();

  // Pega todos os input
  const fields = [...document.querySelectorAll(".input-block input")];

  fields.forEach(field => {
    if (field.value === "") {
      form.classList.add("validate-error");
    }
  });

  // Caso exista o formError, ou seja, algum input vazio.
  // Ao final da animação, será removido a classe de error
  // e adicionará a classe da animação down.
  const formError = document.querySelector(".validate-error");
  if (formError) {
    formError.addEventListener("animationend", event => {
      if (event.animationName === "nono") {
        formError.classList.remove("validate-error");
      }
    });
  } else {
    form.classList.add("form-hide");
  }
});

// Não mostrar barra de rolagem
form.addEventListener("animationstart", event => {
  if (event.animationName === "down") {
    document.querySelector("body").style.overflow = "hidden";
  }
});

// Apagar o elemento da tela após saída da tela
form.addEventListener("animationend", event => {
  if (event.animationName === "down") {
    form.style.display = "none";
    document.querySelector("body").style.overflow = "hidden";
  }
});
