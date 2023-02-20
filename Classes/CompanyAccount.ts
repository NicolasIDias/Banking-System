import { BankAccount } from "./BankAccount";

class CompanyAccount extends BankAccount {
  
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);

  }

  getLoan = (value: number): void => {
    if(this.checkAccount()){
      console.log(`Você pegou um empréstimo de ${value}`)
      this.balance += value;
    }else{
      console.log(`Conta inativa. Impossível fazer transações.`)
    }
  }

  private checkAccount(): boolean{
    if(this.status){
      return true;
    }else{
      return false
    }
  }

}

export { CompanyAccount }