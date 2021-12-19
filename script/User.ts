import faker from 'faker';
// type definition

// never use default statement
// export default 'red';


export class User{
    name: string;
    location:{
        lat: number;
        lng: number;
    };

    // faker npmjs
    constructor(){
        this.name = faker.name.firstName();
        console.log(this.location);
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }

    markerContent(): string{
        return `User Name: ${this.name}`;
    }
}