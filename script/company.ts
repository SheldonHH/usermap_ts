import faker from 'faker'

export class Company{
    companyName: string;
    catchPhrase: string;
    location:{
        lat: number;
        lng: number;
    }

    cosntructor(){
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.lattitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
}

/*
show google map 
*/