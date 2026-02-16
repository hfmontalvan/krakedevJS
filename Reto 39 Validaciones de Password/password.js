function validarPassword(password) {

  let tieneMayuscula = false;
  let tieneMinuscula = false;
  let tieneNumero = false;
  let tieneEspecial = false;

  if (password.length < 8) {
    return "La contraseña debe tener mínimo 8 caracteres";
  }

  for (let i = 0; i < password.length; i++) {

    let letra = password.charAt(i);
    let codigo = letra.charCodeAt(0);

    if (codigo >= 65 && codigo <= 90) {
      tieneMayuscula = true;
    }

    if (codigo >= 97 && codigo <= 122) {
      tieneMinuscula = true;
    }

    if (codigo >= 48 && codigo <= 57) {
      tieneNumero = true;
    }

    if (
      !(codigo >= 65 && codigo <= 90) &&
      !(codigo >= 97 && codigo <= 122) &&
      !(codigo >= 48 && codigo <= 57)
    ) {
      tieneEspecial = true;
    }
  }

  if (tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial) {
    return "Password válido";
  } else {
    return "Password inválido (Debe tener mayúscula, minúscula, número y carácter especial)";
  }
}

function ejecutarValidacion() {
  let password = document.getElementById("txtPassword").value;
  let mensaje = validarPassword(password);
  document.getElementById("lblResultado").textContent = mensaje;
}
