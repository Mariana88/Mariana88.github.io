if (self.CavalryLogger) { CavalryLogger.start_js(["9DoZJ"]); }

__d("AdsCallToActionGeoUtils",["AdsGetDirectionsActionLink","GeoCoordinates","GeoPlace"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h={isValidGeoLink:function i(j){return h.parseGeoLink(j)!=null},parseGeoLink:function i(j){var k=j.match(c("AdsGetDirectionsActionLink").URI_REGEX);if(k==null)return;var l=+k[1],m=+k[2];if(!isNaN(l)&&!isNaN(m)&&Math.abs(l)<=90&&Math.abs(m)<=180)return new(c("GeoPlace"))(new(c("GeoCoordinates"))(l,m),k[3])},makeGeoLink:function i(j){return c("AdsGetDirectionsActionLink").LINK_START+(j.coordinates.latitude+","+j.coordinates.longitude)+(j.name!=null?',"'+j.name+'"':"")},makeBulkEditGeoLink:function i(j){return c("AdsGetDirectionsActionLink").LINK_START+(j.latitude+","+j.longitude)+(',"'+j.full_address+'"')}};f.exports=h}),null);