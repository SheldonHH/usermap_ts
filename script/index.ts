import { Company } from './Company';
import {User} from './User';
import { CustomMap } from './CustomMap';

// const customMap = new CustomMap();
// customMap.googleMap wrong because
// https://i.ibb.co/Pc6bjNH/image.png

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');


// help typescript understand how thirdparty works
// general name 
// @types/googlemaps

// customMap.google 
// https://postimg.cc/bDNHnVbt
customMap.addMarker(user);
customMap.addMarker(company);
// if user satisfy the mappable interface
// because user correctly implement the interface

// avoid other user https://docs.google.com/presentation/d/1opM1aq3zXltaBvTTL021fLnLBh1GOJQDWE0umbne9BM/edit#slide=id.g10425a408b6_0_7

