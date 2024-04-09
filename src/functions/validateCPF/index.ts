export function validateCPF(cpf: string): boolean {
  // Remove caracteres não numéricos do CPF
  cpf = cpf.replace(/\D/g, "");

  if (cpf.length !== 11 || cpf === "00000000000") {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }

  let remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === parseInt(cpf.charAt(9))) {
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === parseInt(cpf.charAt(10))) {
      return true;
    }
  }

  return false;
};
