export const cepRegex = (cep: string) => {
  if (cep.length > 9) {
    cep = cep.slice(0, 9);
  }
  cep = cep.replace(/\D/g, ""); //Removes everything that is not a digit
  cep = cep.replace(/^(\d{5})(\d)/g, "$1-$2"); //Place parentheses between the first four digits
  return cep;
};
