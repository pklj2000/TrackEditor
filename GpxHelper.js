
    class GpxHelper {
        static content = "";
        constructor(gpxName){
            this.name = gpxName;
            this.content = `<?xml version="1.0" encoding="UTF-8"?><gpx version="1.0"><name>${gpxName}</name>\n`;
        }

        AddTrackHeader(name, index) {
            this.content += `<trk><name>${name}</name><trkseg>\n`;
        }

        AddTrackPoint(lat, lng, ele){
            this.content += `<trkpt lat="${lat}" lon="${lng}"><ele>${ele}</ele></trkpt>\n`;
        }

        AddTrackFooter() {
            this.content += `</trkseg></trk>`;
        }

        GetGpx(){
            this.content += `</gpx>`;
            return this.content;
        }


    }
