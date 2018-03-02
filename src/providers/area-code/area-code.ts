import { Injectable } from '@angular/core';

/*
 * Database of North American area codes (includes US, Canada, and Caribbean)
 * Usage: 
 * 1. Import this provider
 * 2. AreaCodeProvider.getDetails(416) will return to you the details of 416 area code
 * 3. AreaCodeProvider.getAllByState(stateAbbr) does what it sounds like.
 * 
*/
@Injectable()
export class AreaCodeProvider {
  areaCodes: any = {
    "201": {
      "State":"NJ",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Hackensack, Jersey City, Union City, Rutherford, Leonia"
    },
    "202": {
      "State":"DC",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Washington, District of Columbia"
    },
    "203": {
      "State":"CT",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Bridgeport, New Haven, Stamford, Waterbury, Norwalk, Danbury, Greenwich"
    },
    "204": {
      "State":"MB",
      "Country":"CAN",
      "Timezone":-6,
      "Region":"Manitoba -- All regions"
    },
    "205": {
      "State":"AL",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Birmingham, Huntsville, Tuscaloosa, Anniston"
    },
    "206": {
      "State":"WA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Seattle, Everett"
    },
    "207": {
      "State":"ME",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Maine: All regions"
    },
    "208": {
      "State":"ID",
      "Country":"USA",
      "Timezone":-7,
      "Region":"Idaho: All regions"
    },
    "209": {
      "State":"CA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Stockton, Modesto, Merced, Oakdale"
    },
    "210": {
      "State":"TX",
      "Country":"USA",
      "Timezone":-6,
      "Region":"San Antonio"
    },
    "212": {
      "State":"NY",
      "Country":"USA",
      "Timezone":-5,
      "Region":"New York City (Manhattan only)"
    },
    "213": {
      "State":"CA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Los Angeles, Compton"
    },
    "214": {
      "State":"TX",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Dallas"
    },
    "215": {
      "State":"PA",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Philadelphia, Lansdale, Doylestown, Newtown, Quakertown"
    },
    "216": {
      "State":"OH",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Cleveland, Terrace, Independence, Montrose"
    },
    "217": {
      "State":"IL",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Springfield, Champaign Urbana, Decatur, Central Illinois"
    },
    "218": {
      "State":"MN",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Duluth, Virginia, Moorhead, Brainerd, Wadena"
    },
    "219": {
      "State":"IN",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Gary, Hammond, Merrillville, Portage, Michigan City, Valparaiso"
    },
    "224": {
      "State":"IL",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Overlay of 847 area code (Chicago)"
    },
    "225": {
      "State":"LA",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Baton Rouge and Surrounding Areas"
    },
    "226": {
      "State":"ON",
      "Country":"CAN",
      "Timezone":-5,
      "Region":"Overlay of 519 Area Code."
    },
    "228": {
      "State":"MS",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Gulfport, Biloxi, Pascagoula, Bay St. Louis"
    },
    "229": {
      "State":"GA",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Albany, Valdosta, Thomasville, Bainbridge, Tifton, Americus, Moultrie, Cordele"
    },
    "231": {
      "State":"MI",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Muskegon, Traverse City, Big Rapids, Cadillac, Cheboygan"
    },
    "234": {
      "State":"OH",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Overlay of 330 area code."
    },
    "239": {
      "State":"FL",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Ft. Myers, Naples, Cape Coral, Bonita Springs, Immokalee, Lehigh Acres, Sanibel, Captiva, Pine Island"
    },
    "240": {
      "State":"MD",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Overlay of 301 Area Code (Maryland)"
    },
    "242": {
      "State":"BA",
      "Country":"BHS",
      "Timezone":-5,
      "Region":"Bahamas"
    },
    "246": {
      "State":"",
      "Country":"BRB",
      "Timezone":-4,
      "Region":"Barbados"
    },
    "248": {
      "State":"MI",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Troy, Pontiac, Royal Oak, Birmingham, Rochester, Farmington Hills"
    },
    "249": {
      "State":"ON",
      "Country":"CAN",
      "Timezone":-5,
      "Region":"Overlay of 705 area code."
    },
    "250": {
      "State":"BC",
      "Country":"CAN",
      "Timezone":-8,
      "Region":"British Columbia: Victoria, Kamloops, Kelowna, Prince George, Nanaimo"
    },
    "251": {
      "State":"AL",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Mobile, Prichard, Tillmans Corner, Fairhope, Jackson, Gulfshores"
    },
    "252": {
      "State":"NC",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Greenville, Rocky Mount, Wilson, New Bern"
    },
    "253": {
      "State":"WA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Tacoma, Kent, Auburn"
    },
    "254": {
      "State":"TX",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Waco, Killeen, Temple"
    },
    "256": {
      "State":"AL",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Huntsville, Anniston, Decatur, Gadsden, Florence"
    },
    "260": {
      "State":"IN",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Fort Wayne, Huntington, Wabash, Lagrange"
    },
    "262": {
      "State":"WI",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Green Bay, Appleton, Racine, Kenosha, Oshkosh, Waukesha, Menomonee Falls, West Bend, Sheboygan"
    },
    "264": {
      "State":"",
      "Country":"AIA",
      "Timezone":-4,
      "Region":"Anguilla"
    },
    "267": {
      "State":"PA",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Overlay of 215 Area Code (Philadelphia Area)"
    },
    "268": {
      "State":"",
      "Country":"ATG",
      "Timezone":-4,
      "Region":"Antigua and Barbuda"
    },
    "269": {
      "State":"MI",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Kalamazoo, Battle Creek, St. Joseph, Three Rivers, South Haven, Benton Harbor, Sturgis, Hastings"
    },
    "270": {
      "State":"KY",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Bowling Green, Paducah, Owensboro, Hopkinsville"
    },
    "276": {
      "State":"VA",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Martinsville, Abingdon, Wytheville, Bristol, Marion, Collinsville"
    },
    "281": {
      "State":"TX",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Houston, Sugar Land, Buffalo, Airline, Greenspoint, Spring"
    },
    "284": {
      "State":"BV",
      "Country":"VGB",
      "Timezone":-4,
      "Region":"British Virgin Islands"
    },
    "289": {
      "State":"ON",
      "Country":"CAN",
      "Timezone":-5,
      "Region":"Overlay of 905 area code."
    },
    "301": {
      "State":"MD",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Rockville, Silver Spring, Bethesda, Gaithersburg, Frederick, Laurel, Hagerstown"
    },
    "302": {
      "State":"DE",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Delaware: All regions"
    },
    "303": {
      "State":"CO",
      "Country":"USA",
      "Timezone":-7,
      "Region":"Denver, Littleton, Englewood, Arvada, Boulder, Aurora"
    },
    "304": {
      "State":"WV",
      "Country":"USA",
      "Timezone":-5,
      "Region":"West Virginia: All regions"
    },
    "305": {
      "State":"FL",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Miami, Perrine, Homestead, Florida Keys"
    },
    "306": {
      "State":"SK",
      "Country":"CAN",
      "Timezone":-7,
      "Region":"Saskatchewan: All regions"
    },
    "307": {
      "State":"WY",
      "Country":"USA",
      "Timezone":-7,
      "Region":"Wyoming: All regions"
    },
    "308": {
      "State":"NE",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Grand Island, Kearney, North Platte, Scottsbluff"
    },
    "309": {
      "State":"IL",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Peoria, Bloomington, Rock Island, Galesburg, Macomb"
    },
    "310": {
      "State":"CA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Compton, Santa Monica, Beverly Hills, West LA, Inglewood, Redondo, El Segundo, Culver City, Torrance"
    },
    "312": {
      "State":"IL",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Chicago (Downtown area), Wheeling"
    },
    "313": {
      "State":"MI",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Detroit, Livonia, Dearborn"
    },
    "314": {
      "State":"MO",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Saint Louis, Ladue, Kirkwood, Creve Coeur, Overland, Ferguson"
    },
    "315": {
      "State":"NY",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Syracuse, Utica, Watertown, Rome"
    },
    "316": {
      "State":"KS",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Wichita, Hutchinson"
    },
    "317": {
      "State":"IN",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Indianapolis, Carmel, Fishers, Greenwood"
    },
    "318": {
      "State":"LA",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Shreveport, Monroe, Alexandria, Ruston, Natchitoches"
    },
    "319": {
      "State":"IA",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Cedar Rapids, Iowa City, Waterloo, Burlington"
    },
    "320": {
      "State":"MN",
      "Country":"USA",
      "Timezone":-6,
      "Region":"St. Cloud, Alexandria, Willmar, Little Falls"
    },
    "321": {
      "State":"FL",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Brevard County (Cocoa, Melbourne, Eau Gallie, Titusville), Overlay of most of 407 Area Code."
    },
    "323": {
      "State":"CA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Los Angeles, Montebello"
    },
    "325": {
      "State":"TX",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Albilene, San Angelo, Brownwood, Synder, Swee"
    },
    "330": {
      "State":"OH",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Akron, Youngstown, Canton, Warren, Kent, Alliance, Medina, New Philadelphia"
    },
    "331": {
      "State":"IL",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Overlay of the 630 area code."
    },
    "334": {
      "State":"AL",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Montgomery, Dothan, Auburn, Selma, Opelika, Phenix City, Tuskegee"
    },
    "336": {
      "State":"NC",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Greensboro, Winston Salem, Highpoint, Burlington, Lexington, Asheboro, Reidsville"
    },
    "337": {
      "State":"LA",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Lake Charles, Lafayette, New Iberia, Leesville, Opelousas, Crowley"
    },
    "339": {
      "State":"MA",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Overlay of 781 area code."
    },
    "340": {
      "State":"VI",
      "Country":"USA",
      "Timezone":-4,
      "Region":"U.S. Virgin Islands"
    },
    "343": {
      "State":"ON",
      "Country":"CAN",
      "Timezone":-5,
      "Region":"Overlay of 613 area code."
    },
    "345": {
      "State":"",
      "Country":"CYM",
      "Timezone":-5,
      "Region":"Cayman Islands"
    },
    "347": {
      "State":"NY",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Overlay of 718 Area Code (Bronx, Brooklyn, Queens, Staten Island)."
    },
    "351": {
      "State":"MA",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Overlay of 978 area code."
    },
    "352": {
      "State":"FL",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Gainesville, Ocala, Leesburg, Brookville"
    },
    "360": {
      "State":"WA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Vancouver, Olympia, Bellingham, Silverdale"
    },
    "361": {
      "State":"TX",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Corpus Christi, Victoria"
    },
    "365": {
      "State":"ON",
      "Country":"CAN",
      "Timezone":-5,
      "Region":"Overlay of 905 Area Code: Hamilton, Niagara Falls, Markham, Mississauga, Brampton"
    },
    "385": {
      "State":"UT",
      "Country":"USA",
      "Timezone":-7,
      "Region":"Overlay of 801 Area Code."
    },
    "386": {
      "State":"FL",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Daytona, Deland, Lake City, DeBary, Orange City, New Smyrna Beach, Palatka, Palm Coast"
    },
    "401": {
      "State":"RI",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Rhode Island: All regions"
    },
    "402": {
      "State":"NE",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Lincoln, Omaha, Norfolk, Columbus"
    },
    "403": {
      "State":"AB",
      "Country":"CAN",
      "Timezone":-7,
      "Region":"Alberta: Calgary, Lethbridge, Banff, Medicine Hat, Red Deer"
    },
    "404": {
      "State":"GA",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Atlanta"
    },
    "405": {
      "State":"OK",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Oklahoma City, Norman, Stillwater, Britton, Bethany, Moore"
    },
    "406": {
      "State":"MT",
      "Country":"USA",
      "Timezone":-7,
      "Region":"Montana: All regions"
    },
    "407": {
      "State":"FL",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Orlando, Winter Park, Kissimmee, Cocoa, Lake Buena Vista, Melbourne"
    },
    "408": {
      "State":"CA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"San Jose, Sunnyvale, Campbell Los Gatos, Salinas, San Martin, Saratoga, Morgan Hill, Gilroy"
    },
    "409": {
      "State":"TX",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Galveston, Beaumont, Port Arthur, Texas City, Nederland"
    },
    "410": {
      "State":"MD",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Baltimore, Annapolis, Towson, Catonsville, Glen Burnie"
    },
    "412": {
      "State":"PA",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Pittsburgh"
    },
    "413": {
      "State":"MA",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Springfield, Pittsfield, Holyoke, Amherst"
    },
    "414": {
      "State":"WI",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Milwaukee, Greendale, Franklin, Cudahy, St. Francis, Brown Deer, Whitefish Bay"
    },
    "415": {
      "State":"CA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"San Francisco"
    },
    "416": {
      "State":"ON",
      "Country":"CAN",
      "Timezone":-5,
      "Region":"Toronto"
    },
    "417": {
      "State":"MO",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Joplin, Springfield, Branson, Lebanon"
    },
    "418": {
      "State":"QC",
      "Country":"CAN",
      "Timezone":-5,
      "Region":"Quebec"
    },
    "419": {
      "State":"OH",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Toledo, Lima, Mansfield, Sandusky, Findlay"
    },
    "423": {
      "State":"TN",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Chattanooga, Cleveland, Johnson City, Bristol, Kingsport, Athens, Morristown, Greeneville"
    },
    "424": {
      "State":"CA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Overlay of 310 Area Code"
    },
    "425": {
      "State":"WA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Bothell, Everett, Bellevue, Kirkland, Renton"
    },
    "430": {
      "State":"TX",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Overlay of 903 Area Code."
    },
    "431": {
      "State":"MB",
      "Country":"CAN",
      "Timezone":-6,
      "Region":"Manitoba - Overlay of 204 Area Code"
    },
    "432": {
      "State":"TX",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Midland, Terminal, Odessa, Big Spring, Alpine, Pecos, Fort Stockton"
    },
    "434": {
      "State":"VA",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Lynchburg, Danville, Charlottesville, Madison Heights, South Boston"
    },
    "435": {
      "State":"UT",
      "Country":"USA",
      "Timezone":-7,
      "Region":"Logan, St. George, Park City, Tooele, Brigham City, Richfield, Moab, Blanding"
    },
    "437": {
      "State":"ON",
      "Country":"CAN",
      "Timezone":-5,
      "Region":"Overlay of 647 Area Code (Toronto)"
    },
    "438": {
      "State":"QC",
      "Country":"CAN",
      "Timezone":-5,
      "Region":"Overlay of 514 Area Code."
    },
    "440": {
      "State":"OH",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Willoughby, Hillcrest, Trinity, Lorain, Elyria"
    },
    "441": {
      "State":"BM",
      "Country":"BMU",
      "Timezone":-4,
      "Region":"Bermuda"
    },
    "442": {
      "State":"CA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Overlay of 760 area code."
    },
    "443": {
      "State":"MD",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Overlay of 410 Area Code"
    },
    "450": {
      "State":"QC",
      "Country":"CAN",
      "Timezone":-5,
      "Region":"Quebec: Laval, Saint Lambert, Longueuil, Sainte Therese"
    },
    "456": {
      "State":"",
      "Country":"USA",
      "Timezone":0,
      "Region":"Used for premium-rate calling"
    },
    "458": {
      "State":"OR",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Overlay of 541 Area Code."
    },
    "469": {
      "State":"TX",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Overlay of 214, 972 Area Codes (Greater Dallas Area)."
    },
    "470": {
      "State":"GA",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Overlay of 404, 678, 770."
    },
    "473": {
      "State":"",
      "Country":"GRD",
      "Timezone":-4,
      "Region":"Grenada"
    },
    "475": {
      "State":"CT",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Overlay of 203 area code."
    },
    "478": {
      "State":"GA",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Macon, Warner Robbins, Dublin, Milledgeville, Forsyth"
    },
    "479": {
      "State":"AR",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Fort Smith, Fayetteville, Rogers, Bentonville, Russellville"
    },
    "480": {
      "State":"AZ",
      "Country":"USA",
      "Timezone":-7,
      "Region":"Mesa, Scottsdale, Tempe, Chandler, Gilbert"
    },
    "484": {
      "State":"PA",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Overlay of 610 Area Code (Allentown, Reading, Bethlehem Area)"
    },
    "500": {
      "State":"",
      "Country":"USA",
      "Timezone":0,
      "Region":"Used for Personal Communication Services"
    },
    "501": {
      "State":"AR",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Little Rock, Hot Springs"
    },
    "502": {
      "State":"KY",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Louisville, Frankfort, Fort Knox, Pleasure Ridge Park"
    },
    "503": {
      "State":"OR",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Portland, Salem, Beaverton, Gresham, Hillsboro"
    },
    "504": {
      "State":"LA",
      "Country":"USA",
      "Timezone":-6,
      "Region":"New Orleans, Metairie, Kenner, Chalmette"
    },
    "505": {
      "State":"NM",
      "Country":"USA",
      "Timezone":-7,
      "Region":"New Mexico: Albuquerque, Bernalillo, Farmington, Gallup, Grants, Las Vegas, Los Alamos, Rio Rancho, Santa Fe"
    },
    "506": {
      "State":"NB",
      "Country":"CAN",
      "Timezone":-4,
      "Region":"New Brunswick: All regions"
    },
    "507": {
      "State":"MN",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Rochester, Mankato, Winona, Faribault, Luverne"
    },
    "508": {
      "State":"MA",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Worcester, Framingham, Brockton, Plymouth, New Bedford, Marlboro, Natick, Taunton, Auburn, Westboro, Easton"
    },
    "509": {
      "State":"WA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Spokane, Yakima, Walla Walla, Pullman, Kenwick"
    },
    "510": {
      "State":"CA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Oakland, Fremont, Newark, Hayward, Richmond"
    },
    "512": {
      "State":"TX",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Austin, San Marcos, Round Rock, Dripping Springs"
    },
    "513": {
      "State":"OH",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Cincinnati, Hamilton, Clermont, Middleton, Mason"
    },
    "514": {
      "State":"QC",
      "Country":"CAN",
      "Timezone":-5,
      "Region":"Province of Quebec: Montreal Area"
    },
    "515": {
      "State":"IA",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Des Moines, Ames, Jefferson"
    },
    "516": {
      "State":"NY",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Nassau County: Hempstead, Oceanside, Freeport, Long Beach, Garden City, Glen Cove, Mineola"
    },
    "517": {
      "State":"MI",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Lansing, Bay City, Jackson, Howell, Adrian"
    },
    "518": {
      "State":"NY",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Albany, Schenectady, Troy, Glens Falls, Saratoga Springs, Lake Placid"
    },
    "519": {
      "State":"ON",
      "Country":"CAN",
      "Timezone":-5,
      "Region":"Ontario: London Area, Kitchener, Cambridge, Windsor"
    },
    "520": {
      "State":"AZ",
      "Country":"USA",
      "Timezone":-7,
      "Region":"Tucson, Sierra Vista, Nogales, Douglass, Bisbee"
    },
    "530": {
      "State":"CA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Chico, Redding, Marysville, Auburn, Davis, Placerville"
    },
    "531": {
      "State":"NE",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Overlay of 402 Area Code."
    },
    "533": {
      "State":"",
      "Country":"USA",
      "Timezone":0,
      "Region":"Used for Personal Communication Services"
    },
    "534": {
      "State":"WI",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Overlay of 715 area code."
    },
    "539": {
      "State":"OK",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Overlay of 918 area code."
    },
    "540": {
      "State":"VA",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Roanoke, Harrisonburg, Fredericksburg, Blacksburg, Winchester, Staunton, Culpeper"
    },
    "541": {
      "State":"OR",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Eugene, Medford, Corvallis, Bend, Albany, Roseburg, Klamath Falls"
    },
    "544": {
      "State":"",
      "Country":"USA",
      "Timezone":0,
      "Region":"Used for Personal Communication Services"
    },
    "551": {
      "State":"NJ",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Overlay of 201 area code."
    },
    "559": {
      "State":"CA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Fresno, Visalia, Madera, San Joaquin, Porterville, Hanford"
    },
    "561": {
      "State":"FL",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Palm Beaches, Boca Raton, Boynton Beach"
    },
    "562": {
      "State":"CA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Long Beach, Norwalk, Alamitos, Downey, Whittier, Lakewood, La Habra"
    },
    "563": {
      "State":"IA",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Davenport, Dubuque, Clinton, Muscatine, Decorah, Manchester, West Union"
    },
    "567": {
      "State":"OH",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Overlay of 419 area code."
    },
    "570": {
      "State":"PA",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Wilkes-Barre, Scranton, Stroudsburg, Williamsport, Pittston"
    },
    "571": {
      "State":"VA",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Overlay of 703 area code."
    },
    "573": {
      "State":"MO",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Columbia, Cape Girardeau, Jefferson City"
    },
    "574": {
      "State":"IN",
      "Country":"USA",
      "Timezone":-5,
      "Region":"South Bend, Elkhart, Mishawaka, Granger, La Porte"
    },
    "575": {
      "State":"NM",
      "Country":"USA",
      "Timezone":-7,
      "Region":"Split of 505 area code. Alamogordo, Carlsbad, Clovis, Deming, El Rito, Galina, Hatch, Hobbs, Las Cruces, Penasco, Raton, Taos"
    },
    "579": {
      "State":"QC",
      "Country":"CAN",
      "Timezone":-5,
      "Region":"Overlay of 450 Area Code."
    },
    "580": {
      "State":"OK",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Lawton, Enid, Ponca City, Ardmore, Duncan"
    },
    "581": {
      "State":"QC",
      "Country":"CAN",
      "Timezone":-5,
      "Region":"Overlay of 418 Area Code."
    },
    "585": {
      "State":"NY",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Rochester, East Rochester, Olean, Batavia, Webster, Fairport, Henrietta"
    },
    "586": {
      "State":"MI",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Warren, Mount Clemens, Roseville, Center Line, Utica, Romeo, Richmond, Washington, New Baltimore"
    },
    "587": {
      "State":"AB",
      "Country":"CAN",
      "Timezone":-7,
      "Region":"Overlay of 403 and 780 Area Codes."
    },
    "601": {
      "State":"MS",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Southern Mississippi: Jackson, Hattiesburg, Vicksburg, Meridian"
    },
    "602": {
      "State":"AZ",
      "Country":"USA",
      "Timezone":-7,
      "Region":"Phoenix"
    },
    "603": {
      "State":"NH",
      "Country":"USA",
      "Timezone":-5,
      "Region":"New Hampshire: All regions"
    },
    "604": {
      "State":"BC",
      "Country":"CAN",
      "Timezone":-8,
      "Region":"British Columbia: Vancouver, Richmond, New Westminster"
    },
    "605": {
      "State":"SD",
      "Country":"USA",
      "Timezone":-6,
      "Region":"South Dakota: All regions"
    },
    "606": {
      "State":"KY",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Ashland, Winchester, Pikeville, Somerset"
    },
    "607": {
      "State":"NY",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Elmira, Ithaca, Stamford, Binghamton, Endicott, Oneonta"
    },
    "608": {
      "State":"WI",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Madison, La Crosse, Janesville, Middleton, Monroe, Platteville, Dodgeville"
    },
    "609": {
      "State":"NJ",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Atlantic City, Trenton, Princeton, Pleasantville, Fort Dix, Lawrenceville"
    },
    "610": {
      "State":"PA",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Allentown, Reading, Bethlehem, West Chester, Pottstown"
    },
    "611": {
      "State":"",
      "Country":"USA",
      "Timezone":0,
      "Region":"Used for telephone repair service in many Areas"
    },
    "612": {
      "State":"MN",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Minneapolis, Richfield"
    },
    "613": {
      "State":"ON",
      "Country":"CAN",
      "Timezone":-5,
      "Region":"Ontario East: Ottawa, Kingston, Belleville, Cornwall, Kanata"
    },
    "614": {
      "State":"OH",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Columbus, Worthington, Dublin, Reynoldsburg, Westerville, Gahanna, Hilliard"
    },
    "615": {
      "State":"TN",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Nashville, Mufreesboro, Hendersonville, Frank"
    },
    "616": {
      "State":"MI",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Grand Rapids, Holland, Grand Haven, Greenville, Zeeland, Ionia"
    },
    "617": {
      "State":"MA",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Boston, Cambridge, Quincy, Newton, Brookline, Brighton, Somerville, Dorchester, Hyde Park, Jamaica Plain"
    },
    "618": {
      "State":"IL",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Collinsville, Alton, Carbondale, Belleville, Mount Vernon, Centralia"
    },
    "619": {
      "State":"CA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"San Diego, Chula Vista, El Cajon, La Mesa, National City, Coronado"
    },
    "620": {
      "State":"KS",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Hutchinson, Emporia, Liberal, Pittsburg, Dodge City, Garden City, Coffeyville"
    },
    "623": {
      "State":"AZ",
      "Country":"USA",
      "Timezone":-7,
      "Region":"Glendale, Sun City, Peoria"
    },
    "626": {
      "State":"CA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Pasadena, Alhambra, Covina, El Monte, La Puenta"
    },
    "630": {
      "State":"IL",
      "Country":"USA",
      "Timezone":-6,
      "Region":"La Grange, Roselle, Hinsdale, Downers Grove, Naperville, Lombard, Elmhurst, Aurora, Wheaton"
    },
    "631": {
      "State":"NY",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Suffolk County: Brentwood, Farmingdale, Central Islip, Riverhead, Huntington, Deer Park, Amityville, Lindenhurst"
    },
    "636": {
      "State":"MO",
      "Country":"USA",
      "Timezone":-6,
      "Region":"St. Charles, Fenton, Harvester, Chesterfield, Manchester"
    },
    "639": {
      "State":"SK",
      "Country":"CAN",
      "Timezone":-7,
      "Region":"Overlay of 306 area code"
    },
    "641": {
      "State":"IA",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Fairfield, Mason City, Grinnell, Newton, Knoxville"
    },
    "646": {
      "State":"NY",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Overlay of 212 Area Code (New York City)."
    },
    "647": {
      "State":"ON",
      "Country":"CAN",
      "Timezone":-5,
      "Region":"Overlay of 416 (Toronto)."
    },
    "649": {
      "State":"",
      "Country":"TCA",
      "Timezone":-5,
      "Region":"Turks & Caicos Islands"
    },
    "650": {
      "State":"CA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"South San Francisco, Palo Alto, San Mateo, Mountain View, Redwood City"
    },
    "651": {
      "State":"MN",
      "Country":"USA",
      "Timezone":-6,
      "Region":"St. Paul, Redwing, Farmington, Eagan, Lino Lakes, North Branch, Roseville Valley"
    },
    "657": {
      "State":"CA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Overlay of 714 area code."
    },
    "660": {
      "State":"MO",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Warrensburg, Kirksville, Sedalia, Chillicothe, Moberly, Marshall"
    },
    "661": {
      "State":"CA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Bakersfield, Santa Clarita, Palmdale, Simi Valley"
    },
    "662": {
      "State":"MS",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Northern Mississippi: Tupelo, Columbus, Greenwood, Greenville, Oxford"
    },
    "664": {
      "State":"",
      "Country":"MSR",
      "Timezone":-4,
      "Region":"Montserrat"
    },
    "667": {
      "State":"MD",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Overlay of 410, 443 area codes"
    },
    "669": {
      "State":"CA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Overlay of 408 area code (San Jose, San Jose, Sunnyvale, etc.)"
    },
    "670": {
      "State":"MP",
      "Country":"MNP",
      "Timezone":10,
      "Region":"Commonwealth of Northern Mariana Islands (Saipan)"
    },
    "671": {
      "State":"GU",
      "Country":"GUM",
      "Timezone":10,
      "Region":"Guam"
    },
    "678": {
      "State":"GA",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Overlay of 404 & 770 area codes."
    },
    "680": {
      "State":"PW",
      "Country":"PLW",
      "Timezone":9,
      "Region":"Palau"
    },
    "681": {
      "State":"WV",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Overlay of 304 Area Code."
    },
    "682": {
      "State":"TX",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Overlay of 817 area code."
    },
    "684": {
      "State":"AS",
      "Country":"ASM",
      "Timezone":-11,
      "Region":"American Samoa"
    },
    "691": {
      "State":"FM",
      "Country":"FSM",
      "Timezone":11,
      "Region":"Federated States of Micronesia"
    },
    "692": {
      "State":"MH",
      "Country":"MHL",
      "Timezone":12,
      "Region":"Marshall Islands"
    },
    "700": {
      "State":"",
      "Country":"USA",
      "Timezone":0,
      "Region":"Used for Value Added Special Services"
    },
    "701": {
      "State":"ND",
      "Country":"USA",
      "Timezone":-6,
      "Region":"North Dakota: All regions"
    },
    "702": {
      "State":"NV",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Las Vegas & Surrounding Areas."
    },
    "703": {
      "State":"VA",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Arlington, Alexandria, Fairfax, Falls Church, Quantico, Herndon, Vienna"
    },
    "704": {
      "State":"NC",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Charlotte, Asheville, Gastonia, Concord, Statesville, Salisbury, Shelby, Monroe"
    },
    "705": {
      "State":"ON",
      "Country":"CAN",
      "Timezone":-5,
      "Region":"Eastern Ontario: North Bay, Sault Sainte Marie, Barrie, Sudbury, Peterborough, Lindsay, Huntsville"
    },
    "706": {
      "State":"GA",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Augusta, Columbus, Athens, Rome, Dalton"
    },
    "707": {
      "State":"CA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Eureka, Napa, Santa Rosa, Petaluma, Vallejo"
    },
    "708": {
      "State":"IL",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Oak Brook, Calumet City, Harvey (South suburbs of Chicago)"
    },
    "709": {
      "State":"NL",
      "Country":"CAN",
      "Timezone":-4,
      "Region":"Newfoundland and Labrador: All regions. Note: Newfoundland ISLAND's time zone is - 3 hours & 30 minutes."
    },
    "710": {
      "State":"",
      "Country":"USA",
      "Timezone":0,
      "Region":"Federal Government Special Services"
    },
    "712": {
      "State":"IA",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Sioux City, Council Bluffs, Spencer, Cherokee, Denison"
    },
    "713": {
      "State":"TX",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Houston"
    },
    "714": {
      "State":"CA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Anaheim, Santa Anna"
    },
    "715": {
      "State":"WI",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Eau Claire, Wausau, Stevens Point, Superior"
    },
    "716": {
      "State":"NY",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Buffalo, Niagara Falls, Tonawanda, Williamsville, Jamestown, Lancaster"
    },
    "717": {
      "State":"PA",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Harrisburg, York, Lancaster"
    },
    "718": {
      "State":"NY",
      "Country":"USA",
      "Timezone":-5,
      "Region":"New York City (Bronx, Brooklyn, Queens, Staten Island)"
    },
    "719": {
      "State":"CO",
      "Country":"USA",
      "Timezone":-7,
      "Region":"Colorado Springs, Pueblo, Lamar"
    },
    "720": {
      "State":"CO",
      "Country":"USA",
      "Timezone":-7,
      "Region":"Overlay of 303 area code."
    },
    "724": {
      "State":"PA",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Greensburg, Uniontown, Butler, Washington, New Castle, Indiana"
    },
    "727": {
      "State":"FL",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Clearwater, St. Petersburg, New Port Richey, Tarpon Springs"
    },
    "731": {
      "State":"TN",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Jackson, Dyersburg, Union City, Paris, Brownsville"
    },
    "732": {
      "State":"NJ",
      "Country":"USA",
      "Timezone":-5,
      "Region":"New Brunswick, Metuchen, Rahway, Perth Amboy, Toms River, Bound Brook"
    },
    "734": {
      "State":"MI",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Ann Arbor, Livonia, Wayne, Wyandotte, Ypsilanti, Plymouth, Monroe"
    },
    "740": {
      "State":"OH",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Portsmouth, Newark, Zanesville, Wheeling, Steubenville"
    },
    "747": {
      "State":"CA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Overlay of 818 Area Code."
    },
    "754": {
      "State":"FL",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Overlay of 954 Area Code (Ft. Lauderdale Area)."
    },
    "757": {
      "State":"VA",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Norfolk, Newport News, Williamsburgh"
    },
    "758": {
      "State":"",
      "Country":"USA",
      "Timezone":-5,
      "Region":"St. Lucia"
    },
    "760": {
      "State":"CA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Oceanside, Palm Springs, Victorville, Escondido, Vista, Palm Desert"
    },
    "762": {
      "State":"GA",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Overlay of 706 Area Code."
    },
    "763": {
      "State":"MN",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Brooklyn Park, Coon Rapids, Maple Grove, Plymouth, Cambridge, Blaine, Anoka"
    },
    "765": {
      "State":"IN",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Lafayette, Muncie, Kokomo, Anderson, Richmond, Marion"
    },
    "767": {
      "State":"",
      "Country":"DMA",
      "Timezone":-4,
      "Region":"Dominica"
    },
    "769": {
      "State":"MS",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Overlay of 601 area code (Southern Mississippi)."
    },
    "770": {
      "State":"GA",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Norcross, Chamblee, Smyrna, Tucker, Marietta, Alpharetta, Gainesville"
    },
    "772": {
      "State":"FL",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Vero Beach, Port St. Lucie, Stuart, Fort Pierce, Sebastian, Hobe Sound, Jensen Beach, Indiantown"
    },
    "773": {
      "State":"IL",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Chicago (except downtown Area is 312)"
    },
    "774": {
      "State":"MA",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Overlay of 508 area code."
    },
    "775": {
      "State":"NV",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Reno, Carson City"
    },
    "778": {
      "State":"BC",
      "Country":"CAN",
      "Timezone":-8,
      "Region":"Overlay of 250 and 604 area codes."
    },
    "779": {
      "State":"IL",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Overlay of 815 area code."
    },
    "780": {
      "State":"AB",
      "Country":"CAN",
      "Timezone":-7,
      "Region":"Alberta: Edmonton, Fort McMurray, Leduc, Lloydminster, Sherwood Park"
    },
    "781": {
      "State":"MA",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Waltham, Lexington, Burlinton, Dedham, Woburn, Lynn, Malden, Saugus, Reading, Braintree, Wellesley"
    },
    "784": {
      "State":"",
      "Country":"VCT",
      "Timezone":-5,
      "Region":"St. Vincent & the Grenadines"
    },
    "785": {
      "State":"KS",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Topeka, Lawrence, Manhattan, Salina, Junction"
    },
    "786": {
      "State":"FL",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Overlay of 305 area code (Miami)."
    },
    "787": {
      "State":"PR",
      "Country":"PRI",
      "Timezone":-4,
      "Region":"Puerto Rico: All regions"
    },
    "800": {
      "State":"",
      "Country":"USA",
      "Timezone":0,
      "Region":"Toll Free"
    },
    "801": {
      "State":"UT",
      "Country":"USA",
      "Timezone":-7,
      "Region":"Utah: Salt Lake City, Provo, Ogden, Orem, American Fork, Spanish Fork, Bountiful, Kaysville, Morgan"
    },
    "802": {
      "State":"VT",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Vermont: All regions"
    },
    "803": {
      "State":"SC",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Columbia"
    },
    "804": {
      "State":"VA",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Richmond, Lynchburg, Petersburg,"
    },
    "805": {
      "State":"CA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Santa Barbara, Thousand Oaks, San Luis Obispo, Ventura, Oxnard, Simi Valley"
    },
    "806": {
      "State":"TX",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Amarillo, Lubbock"
    },
    "807": {
      "State":"ON",
      "Country":"CAN",
      "Timezone":-5,
      "Region":"Western Ontario: Thunder Bay"
    },
    "808": {
      "State":"HI",
      "Country":"USA",
      "Timezone":-10,
      "Region":"Hawaii: All regions"
    },
    "809": {
      "State":"",
      "Country":"USA",
      "Timezone":-4,
      "Region":"Caribbean Islands without their own Area Code (Nevis/St. Kitts)"
    },
    "810": {
      "State":"MI",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Flint, Port Huron, Lapeer, Brighton, Sandusky"
    },
    "812": {
      "State":"IN",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Evansville, Bloomington, Terre Haute, New Albany"
    },
    "813": {
      "State":"FL",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Tampa"
    },
    "814": {
      "State":"PA",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Altoona, Johnstown, Erie, Punxsutawney"
    },
    "815": {
      "State":"IL",
      "Country":"USA",
      "Timezone":-6,
      "Region":"La Salle, Joliet, Rockford, DeKalb"
    },
    "816": {
      "State":"MO",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Kansas City, Saint Joseph, Independence, Gladstone"
    },
    "817": {
      "State":"TX",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Fort Worth, Arlington, Euless, Grapevine"
    },
    "818": {
      "State":"CA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Van Nuys, Canoga Park, Burbank, San Fernando, Glendale, N. Hollywood"
    },
    "819": {
      "State":"QC",
      "Country":"CAN",
      "Timezone":-5,
      "Region":"Hull, Sherbrooke, Trois-Riviers, Gatineau"
    },
    "828": {
      "State":"NC",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Asheville, Hickory, Morganton, Hendersonville, Lenoir, Boone, Andrews, Murphy, Marble"
    },
    "829": {
      "State":"",
      "Country":"DOM",
      "Timezone":-4,
      "Region":"Dominican Republic"
    },
    "830": {
      "State":"TX",
      "Country":"USA",
      "Timezone":-6,
      "Region":"New Braunfels, Del Rio, Seguin, Kerrville, Eagle Pass, Fredericksburg"
    },
    "831": {
      "State":"CA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Monterey, Santa Cruz, Salinas, Hollister, Aptos, Carmel"
    },
    "832": {
      "State":"TX",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Overlay of 713, 281 Area Codes (Houston)."
    },
    "843": {
      "State":"SC",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Charleston, Florence, Myrtle Beach, Hilton Head"
    },
    "845": {
      "State":"NY",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Poughkeepsie, Spring Valley, Newburgh, Kingston, Nyack, Middletown, Brewster, Pearl River"
    },
    "847": {
      "State":"IL",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Northbrook, Skokie, Evanston, Glenview, Waukegan, Desplaines, Elk Grove (North suburbs of Chicago)"
    },
    "848": {
      "State":"NJ",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Overlay of 732 area code."
    },
    "849": {
      "State":"",
      "Country":"DOM",
      "Timezone":-4,
      "Region":"Dominican Republic"
    },
    "850": {
      "State":"FL",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Tallahassee, Pensacola, Fort Walton Beach, Panama City"
    },
    "855": {
      "State":"",
      "Country":"USA",
      "Timezone":0,
      "Region":"Toll Free"
    },
    "856": {
      "State":"NJ",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Camden, Haddonfield, Moorestown, Merchantville, Vineland, Laurel Springs"
    },
    "857": {
      "State":"MA",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Overlay of 617 area code."
    },
    "858": {
      "State":"CA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"La Jolla, Rancho Bernardo, del Mar, Poway, Rancho Penasquitos, Rancho Santa Fe"
    },
    "859": {
      "State":"KY",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Lexington, Covington, Boone, Winchester, Richmond, Danville, Mount Sterling"
    },
    "860": {
      "State":"CT",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Hartford, New London, Norwich, Middletown, Bristol"
    },
    "862": {
      "State":"NJ",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Overlay of 973 area code."
    },
    "863": {
      "State":"FL",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Lakeland, Winter Haven, Lake Wales, Sebring, Haines City, Bartow, Avon Park, Okeechobee, Wachula"
    },
    "864": {
      "State":"SC",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Greenville, Spartanburg, Anderson"
    },
    "865": {
      "State":"TN",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Knoxville, Maryville, Oak Ridge, Sevierville, Gatlinburg, Concord, Powell"
    },
    "866": {
      "State":"",
      "Country":"USA",
      "Timezone":0,
      "Region":"Toll Free"
    },
    "867": {
      "State":"YT",
      "Country":"CAN",
      "Timezone":-8,
      "Region":"Yukon, Northwest Territories: Whitehorse, Yellow Knife, Nunavut"
    },
    "868": {
      "State":"",
      "Country":"TTO",
      "Timezone":-4,
      "Region":"Trinidad and Tobago"
    },
    "869": {
      "State":"",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Nevis & St. Kitts"
    },
    "870": {
      "State":"AR",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Texarkana, Jonesboro, Pine Bluff, El Dorado"
    },
    "872": {
      "State":"IL",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Overlay of 312 and 773 area codes."
    },
    "873": {
      "State":"QC",
      "Country":"CAN",
      "Timezone":-5,
      "Region":"Overlay of 819 Area Code"
    },
    "876": {
      "State":"",
      "Country":"JAM",
      "Timezone":-5,
      "Region":"Jamaica\n877,,USA,0,"
    },
    "878": {
      "State":"PA",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Overlay of 412, 724 area codes."
    },
    "880": {
      "State":"",
      "Country":"USA",
      "Timezone":0,
      "Region":"Carribean to U.S. or Canada OR Canada to U.S. Toll Free"
    },
    "881": {
      "State":"",
      "Country":"USA",
      "Timezone":0,
      "Region":"Carribean to U.S. or Canada OR Canada to U.S. Toll Free"
    },
    "888": {
      "State":"",
      "Country":"USA",
      "Timezone":0,
      "Region":"Toll Free"
    },
    "900": {
      "State":"",
      "Country":"USA",
      "Timezone":0,
      "Region":"Used for Mass Calling Value Added Information"
    },
    "901": {
      "State":"TN",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Memphis, Collierville"
    },
    "902": {
      "State":"NS",
      "Country":"CAN",
      "Timezone":-4,
      "Region":"Nova Scotia, Prince Edward Island"
    },
    "903": {
      "State":"TX",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Longview, Tyler, Texarkana, Paris, Kilgore, Sherman, Denison"
    },
    "904": {
      "State":"FL",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Jacksonville, Saint Augustine, Orange Park, Fernandina Beach"
    },
    "905": {
      "State":"ON",
      "Country":"CAN",
      "Timezone":-5,
      "Region":"Ontario: Hamilton, Niagara Falls, Markham, Mississauga, Brampton"
    },
    "906": {
      "State":"MI",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Marquette, Iron Mountain, Houghton, Sault Ste Marie"
    },
    "907": {
      "State":"AK",
      "Country":"USA",
      "Timezone":-9,
      "Region":"Alaska: All regions"
    },
    "908": {
      "State":"NJ",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Elizabeth, New Brunswick, Somerville, Freehold, Unionville, Plainfield"
    },
    "909": {
      "State":"CA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"San Bernardino, Ontario, Upland, Pomona, Riverside, Colton, Chino"
    },
    "910": {
      "State":"NC",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Fayetteville, Wilmington, Jacksonville, Lumberton, Laurinburg, Southern Pines"
    },
    "912": {
      "State":"GA",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Savannah, Macon, Waycross, Brunswick, Statesboro, Vidalia"
    },
    "913": {
      "State":"KS",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Melrose, Kansas City"
    },
    "914": {
      "State":"NY",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Westchester, Monroe, Mount Vernon, Mount Kisco, Pleasantville"
    },
    "915": {
      "State":"TX",
      "Country":"USA",
      "Timezone":-7,
      "Region":"El Paso, Socorro, Fabens, Dell City, Van Horn, Fort Bliss"
    },
    "916": {
      "State":"CA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Sacramento, Roseville, Fair Oaks, Folsom, Elk Grove, South Placer"
    },
    "917": {
      "State":"NY",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Overlay of 212/718 (New York City - cellular/pager only)"
    },
    "918": {
      "State":"OK",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Tulsa, Broken Arrow, Muskogee, Bartlesville, McAlester"
    },
    "919": {
      "State":"NC",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Raleigh, Durham, Cary, Chapel Hill, Goldsboro, Apex, Sanford, Wake Forest"
    },
    "920": {
      "State":"WI",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Green Bay, Appleton, Racine, Fond du Lac, Oshkosh, Sheboygan"
    },
    "925": {
      "State":"CA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Walnut Creek, Pleasanton, Concord, Livermore, Bishop Ranch, Danville, Antioch"
    },
    "928": {
      "State":"AZ",
      "Country":"USA",
      "Timezone":-7,
      "Region":"Yuma, Flagstaff, Prescott, Sedona, Bullhead City, Kingman, Lake Havasu City"
    },
    "929": {
      "State":"NY",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Overlay of 718 Area Code (Bronx, Brooklyn, Queens, Staten Island)."
    },
    "931": {
      "State":"TN",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Clarksville, Shelbyville, Cookeville, Columbia"
    },
    "936": {
      "State":"TX",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Conroe, Nacogdoches, Huntsville, Lufkin, Madisonville"
    },
    "937": {
      "State":"OH",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Dayton, Springfield, Bellefontaine, Beavercreek, Franklin"
    },
    "938": {
      "State":"AL",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Overlay of 256 area code."
    },
    "939": {
      "State":"PR",
      "Country":"PRI",
      "Timezone":-4,
      "Region":"Overlay of 787 area code."
    },
    "940": {
      "State":"TX",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Wichita Falls, Denton, Gainesville"
    },
    "941": {
      "State":"FL",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Sarasota, Bradenton, Venice, Port Charlotte, Punta Gorda"
    },
    "947": {
      "State":"MI",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Overlay of 248 Area Code."
    },
    "949": {
      "State":"CA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Irvine, Saddleback Valley, Newport Beach, Capistrano Valley, Laguna Beach"
    },
    "951": {
      "State":"CA",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Riverside, Corona, Temecula, Arlington, Hemet, Moreno Valley, Murietta, Sun City, Elsinore"
    },
    "952": {
      "State":"MN",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Bloomington, Burnsville, Eden Prairie, Minnetonka, Edina, St. Louis Park, Apple Valley"
    },
    "954": {
      "State":"FL",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Fort Lauderdale, Hollywood, Pompano Beach, Deerfield Beach, Coral Springs"
    },
    "956": {
      "State":"TX",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Brownsville, Laredo, McAllen, Harlingen, Edinburg"
    },
    "970": {
      "State":"CO",
      "Country":"USA",
      "Timezone":-7,
      "Region":"Fort Collins, Greeley, Grand Junction, Loveland, Durango, Vail"
    },
    "971": {
      "State":"OR",
      "Country":"USA",
      "Timezone":-8,
      "Region":"Overlay of 503 area code."
    },
    "972": {
      "State":"TX",
      "Country":"USA",
      "Timezone":-6,
      "Region":"Texas: Dallas Metro (overlays 214/469)"
    },
    "973": {
      "State":"NJ",
      "Country":"USA",
      "Timezone":-5,
      "Region":"New Jersey: Newark, Paterson, Morristown (see overlay 862; split from 201)\"\n975,MO,USA,-6,"
    },
    "978": {
      "State":"MA",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Massachusetts: north of Boston to NH (see split 978 -- this is the northern half of old 508; see overlay 351)"
    },
    "979": {
      "State":"TX",
      "Country":"USA",
      "Timezone":-6,
      "Region":"SE Texas: Bryan, College Station, Bay City (split from 409, see also 936)"
    },
    "980": {
      "State":"NC",
      "Country":"USA",
      "Timezone":-5,
      "Region":"North Carolina: (overlay on 704; perm 5/1/00, mand 3/15/01)"
    },
    "984": {
      "State":"NC",
      "Country":"USA",
      "Timezone":-5,
      "Region":"E North Carolina: Raleigh (overlaid on 919, perm 8/1/01, mand 2/5/02 POSTPONED)"
    },
    "985": {
      "State":"LA",
      "Country":"USA",
      "Timezone":-6,
      "Region":"E Louisiana: SE/N shore of Lake Pontchartrain: Hammond, Slidell, Covington, Amite, Kentwood, area SW of New Orleans, Houma, Thibodaux, Morgan City (split from 504; perm 2/12/01; mand 10/22/01)"
    },
    "989": {
      "State":"MI",
      "Country":"USA",
      "Timezone":-5,
      "Region":"Upper central Michigan: Mt Pleasant, Saginaw (split from 517; perm 4/7/01)"
    }
  };

  constructor() {
    console.log('Area Code Provider is in da house and ready to call');
  }

  getAllByState(stateAbbr) {
    let results = [];

    Object.keys(this.areaCodes).forEach(areaCode => {
      let details = this.areaCodes[areaCode];
      if (details.State == stateAbbr)
      {
        results.push(this.areaCodes[areaCode]);
      }
    });

    return results;
  }
  getDetails(areaCode) {
    let ac = areaCode.toString();
    if (this.areaCodes[ac]) 
      return this.areaCodes[ac]
    else
    {
      console.log(ac+ " is invalid area code");
      return null;
    }
  }

}
