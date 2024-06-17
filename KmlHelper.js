
class KmlHelper {
    static content = "";
    constructor(kmlName){
        this.name = kmlName;
        this.content = `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2" xmlns:gx="http://www.google.com/kml/ext/2.2" xmlns:kml="http://www.opengis.net/kml/2.2" xmlns:atom="http://www.w3.org/2005/Atom"> 
<Document><name>${kmlName}</name><Style id="style30"><LineStyle><color>ffff0000</color><width>2</width></LineStyle></Style>`;
    }

    AddTrackHeader(name, index) {
        this.content += `<Placemark><name>${name}</name><styleUrl>#style30</styleUrl><LineString><extrude>1</extrude><coordinates>`;
    }

    AddTrackPoint(lat, lng, ele){
        this.content += `${lng},${lat},${ele} `;
    }

    AddTrackFooter() {
        this.content += `</coordinates></LineString></Placemark>`;
    }

    AddEndDocument(){
        this.content += `</Document>`;
    }

    GetKml(){
        this.content += `</kml>`;
        return this.content;
    }


}
