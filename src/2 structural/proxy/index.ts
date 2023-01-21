class BankAccount {
    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    public deposit(amount: number) {
        this.balance += amount;
    }

    public withdraw(amount: number) {
        if (this.balance >= amount) {
            this.balance -= amount;
            return true;
        }
        return false;
    }

    public getBalance() {
        return this.balance;
    }
}

class BankAccountProxy {
    private account: BankAccount;

    constructor(balance: number) {
        this.account = new BankAccount(balance);
    }

    public deposit(amount: number) {
        return this.account.deposit(amount);
    }

    public withdraw(amount: number) {
        return this.account.withdraw(amount);
    }

    public getBalance() {
        return this.account.getBalance();
    }
}
