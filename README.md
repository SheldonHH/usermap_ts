### Wrap up
restrict the exposures from index.ts to users
limit the number of things they can do


🌟 Other class have to accustom to CustomMap.ts, when customMap.addMarker

![](https://postimg.cc/3dwyFWK4)

Interface + Class
it will check
```
export interface Mappable{
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
    color: string;
}
```


1. Generate a Google Dev Project 
http://console.developers.google.com

2. Enable Google Maps support inside the project

3. Generate an API Key

4. Add the google maps **script tag** to our HTML file

![](https://pbs.twimg.com/media/FG83IiKVgAE6tGw?format=png&name=900x900)

install Live Server Extension

npm install @types/googlemaps

Define interface what needed in mappable, set of instructions
rather to say addMarket method need to accomondate User,Company and etc.

User have to choose correct name, correct type.
Cmd+Shift+P: Fold Level2

InfoWindow is pop-up 
marker.addListener()