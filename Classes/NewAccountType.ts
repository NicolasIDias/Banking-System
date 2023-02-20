import { BankAccount } from "./BankAccount"

class NewAccountType extends BankAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber);
  }

  deposit = (value: number): void => {
    if (this.checkStatus()) {
      if (this.wallet < value) {
        console.log(`Você não pode depositar ${value} no banco, você não posui isso na carteira`)
      } else {
        console.log(`Voce depositou ${value} dinheiros e ganhou +10 de bonus`);
        this.balance += value + 10
        this.wallet -= value
      }
    } else {
      console.log(`Conta inativa. Impossível fazer transações.`)
    }
  }

  private checkStatus(): boolean{
    if(this.status){
      return true;
    }else{
      return false;
    }
  }
}

export { NewAccountType }