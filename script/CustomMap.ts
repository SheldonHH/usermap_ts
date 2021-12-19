// hiding functionality
// isolate google map
// Instructions to every other class
// on how they can be an argument to 'addMarker'
interface Mappable{
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
}

export class CustomMap{
    private googleMap: google.maps.Map; // instance of the class

    // initalize 
    constructor(divId: string){
        this.googleMap = new google.maps.Map(document.getElementById(divId),{
            // second argument looek at the interface definition
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            } 
        });
    }


 

    // add marker by just looking at type definition file
    // |: or  // https://postimg.cc/68PT523N typescript will look at the properties
    // Bad IMplementation:  // https://postimg.cc/4K54MB0w
    // as long as they satisfy requirement for Mappable, they can be argument in addMarker
    addMarker(mappable: Mappable): void{
        // https://postimg.cc/56gVf6gN
        // fullfill Mappable
        // single value in typescript can have multiple different types
       const marker = new google.maps.Marker({ //MarkerOptions, Marker
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        }); 
        // pass in MarkerOption

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });
            infoWindow.open(this.googleMap, marker);
            // reference to the map
            // reference to the marker
        })
//        https://postimg.cc/GBDjrsR4
    }
}