abstract class BankAccount { // É uma classe modelo, não pode ser instanciada
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 40
  wallet: number = 0
  status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      if (this.wallet < value) {
        console.log(`Você não pode depositar ${value} no banco, você não posui isso na carteira`)
      } else {
        console.log(`Voce depositou ${value} dinheiros`);
        this.balance += value
        this.wallet -= value
      }
    } else {
      console.log(`Conta inativa. Impossível fazer transações.`)
    }
  }

  withdraw = (value: number): void => {
    if (this.validateStatus()) {
      if (this.balance < value) {
        console.log(`Você não pode sacar mais dinheiro do que possui`)
      } else {
        console.log(`Voce sacou ${value} dinheiros`);
        this.balance -= value
        this.wallet += value
      }
    } else {
      console.log(`Conta inativa. Impossível fazer transações.`)
    }
  }

  private getBalance = (): number => {
    return this.balance
  }

  // Validando o status da conta

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    } else {
      return false
    }
  }

}

export { BankAccount }