import { BankAccount } from "./BankAccount";

class PersonalAccount extends BankAccount {
  doc_id: number
  constructor(doc_id: number, name: string, accountNumber: number) {
    super(name, accountNumber);
    this.doc_id = doc_id;
  }

  // deposit = (): void => { // Polimorfismo, declarando a mesma funcao da classe mae, para ter um retorno diferente (é a mesma funcao)
  //   console.log("O usuario depositou");
  // }

}

export { PersonalAccount }