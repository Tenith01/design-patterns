var Settings = /** @class */ (function () {
    function Settings() {
        this.mode = 'dark';
        this.name = 'teni';
        this.randomNumber = 0;
        this.randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    }
    Settings.getInstance = function () {
        if (!Settings.instance) {
            Settings.instance = new Settings();
        }
        return Settings.instance;
    };
    return Settings;
}());
var s1 = Settings.getInstance();
var s2 = Settings.getInstance();
console.log(s1.randomNumber);
console.log(s2.randomNumber);
