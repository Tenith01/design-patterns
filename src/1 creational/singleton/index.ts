class Settings{
    static instance:Settings;
    public readonly mode = 'dark';
    public name:string = 'teni';
    public randomNumber: number =0;

    private constructor() {
        this.randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    }

    static getInstance() : Settings
    {

        if(!Settings.instance)
        {
            Settings.instance = new Settings();
        }
        return Settings.instance;
    }
}

const s1 = Settings.getInstance()
const s2 = Settings.getInstance()
console.log(s1.randomNumber)
console.log(s2.randomNumber)
