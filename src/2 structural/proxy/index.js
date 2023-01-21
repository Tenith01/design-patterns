var BankAccount = /** @class */ (function () {
    function BankAccount(balance) {
        this.balance = balance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            return true;
        }
        return false;
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
var BankAccountProxy = /** @class */ (function () {
    function BankAccountProxy(balance) {
        this.account = new BankAccount(balance);
    }
    BankAccountProxy.prototype.deposit = function (amount) {
        return this.account.deposit(amount);
    };
    BankAccountProxy.prototype.withdraw = function (amount) {
        return this.account.withdraw(amount);
    };
    BankAccountProxy.prototype.getBalance = function () {
        return this.account.getBalance();
    };
    return BankAccountProxy;
}());
