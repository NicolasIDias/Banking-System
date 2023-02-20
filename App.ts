import { PersonalAccount } from "./Classes/PersonalAccount"; 
import { CompanyAccount } from "./Classes/CompanyAccount";
import { NewAccountType } from "./Classes/NewAccountType";

const usuario1: PersonalAccount = new PersonalAccount(1, "Nicolas", 123);
usuario1.withdraw(35)
usuario1.deposit(3)


const newAccountUser: NewAccountType = new NewAccountType("Nicolas", 1232)
newAccountUser.withdraw(40)
newAccountUser.deposit(40)
console.log(newAccountUser)

const company1: CompanyAccount = new CompanyAccount("Empresa1", 123);
company1.getLoan(100)

