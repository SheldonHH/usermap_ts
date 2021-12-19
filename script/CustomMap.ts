// hiding functionality
// isolate google map
export class CustomMap{
    private googleMap: google.maps.Map; // instance of the class

    // initalize 
    constructor(divId: string){
        this.googleMap = new google.maps.Map(document.getElementById(divId),{
            // second argument look at the interface definition
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            } 
        });

    }
}