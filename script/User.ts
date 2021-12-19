import faker from 'faker';
import {Mappable} from './CustomMap'
// type definition

// never use default statement
// export default 'red';

export class User implements Mappable{ // OPTIONAL: set dependency from User to Mappable
    name: string;
    location:{
        lat: number;
        lng: number;
    };
    color: string = 'red';

    // faker npmjs
    constructor(){
        this.name = faker.name.firstName();
        // console.log(this.location);
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }

    markerContent(): string{
        return `User Name: ${this.name}`;
    }
}