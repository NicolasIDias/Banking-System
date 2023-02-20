import { PersonalAccount } from "./Classes/PersonalAccount"; 
import { CompanyAccount } from "./Classes/CompanyAccount";
import { NewAccountType } from "./Classes/NewAccountType";

const usuario1: PersonalAccount = new PersonalAccount(1, "Nicolas", 123);
//console.log(usuario1);
// console.log(usuario1.getName())
// usuario1.setName("Nicolas Dias")
// console.log(usuario1.getName())
  usuario1.withdraw(35)
  usuario1.deposit(3)
  //console.log(usuario1)

const newAccountUser: NewAccountType = new NewAccountType("Nicolas", 1232)
newAccountUser.withdraw(40)
newAccountUser.deposit(40)
console.log(newAccountUser)

const company1: CompanyAccount = new CompanyAccount("Empresa1", 123);
//console.log(company1)
//company1.deposit()
