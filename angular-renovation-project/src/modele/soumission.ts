import { ISoumission } from './../interface/ISoumission';

export class Soumission implements ISoumission {
    public setName(name: string) {
        this.userName = name;
    }
    public setCourriel(courriel: string) {
        this.courriel = courriel;
    }
    public setTelephone(telephone: string) {
        this.telephone = telephone;
    }
    public setBudget(budget: number) {
        this.budget = budget;
    }
    public setDescription(description: string) {
        this.description = description;
    }
    constructor(public userName?: string, public courriel?: string, public telephone?: string, public budget?: number, 
        public description?: string) { }
}
