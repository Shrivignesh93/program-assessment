var app = angular.module('app', []);


app.controller('appCtrl', ['$scope', '$http', function ($scope, $http) {

    // To run app install node, run npm install here, in cmd run command 'node server.js', open http://localhost:5000/ in browser or open index.html file to display hardcoded data instead from http call

    // To read data from file using angular http we need to run local server. So, Node server is included here which is running in 5000 port
    //Since the assignment is to prove angular proficiencu used many angular functions to display my proficiency on angular 
    
    // Function to read data.json file  and because of cors issue, if .json file is not loading, call function to hardcode data
    $http.get('data.json').then(function (response) {
        console.log('countries data', response.data);
        parseThroughData(response.data);
    },function(error){
        // if app is not running through node
        hardCodeJsonDataAsHtmlIsNotRunningThroughServer();
    });

   

    // Function that parses countries data in required formats
    function parseThroughData(data) {
        $scope.totalDevices = 0;
        $scope.totalChannels = 0;
        var number = 1;
        for (eachData in data) {
            number++;
            data[eachData] = {
                "Devices": data[eachData].Devices,
                "Channels": data[eachData].Channels,
                "number": number
            };
            eachData.number = number;
            $scope.totalDevices = $scope.totalDevices + data[eachData].Devices;
            $scope.totalChannels = $scope.totalChannels + data[eachData].Channels;
        }
        // converting json data into array format
        $scope.data = [];
        for (var key in data) {
            $scope.data.push({
                "key": key,
                "value": data[key]
            });
        }
        var x = {
            "key": "All",
            "value": {
                "Devices": $scope.totalDevices,
                "Channels": $scope.totalChannels,
                "number": 1
            }
        };
        $scope.data.push(x);
        $scope.data.All = {
            "Devices": $scope.totalDevices,
            "Channels": $scope.totalChannels,
            "number": 1
        };

        $scope.selectedValue = "All";

    }

    // initialisation to display all data
    $scope.displayAll = true;

    // Function that will be called on change of dropdown
    $scope.dropdownChanged = function (data) {
        // filtering the data to be displayed on selection
        angular.forEach($scope.data, function (eachData) {
            if (eachData.key === data) {
                if (eachData.key === "All") {
                    $scope.displayAll = true;
                } else {
                    $scope.displayAll = false;
                }
                $scope.selectedState = eachData.key;
                $scope.selectedDevices = eachData.value.Devices;
                $scope.selectedChannels = eachData.value.Channels;
            }
        });
    };


    // When app is running through index.html file, because of cors,data.json file will not be loaded such situation is caught here and data is hardcoded for testing purpose.
    function hardCodeJsonDataAsHtmlIsNotRunningThroughServer() {
        var data = {"Abkhazia":{"Devices":5,"Channels":2},"Afghanistan":{"Devices":1,"Channels":1},"Akrotiri and Dhekelia":{"Devices":2,"Channels":2},"Albania":{"Devices":27,"Channels":15},"Algeria":{"Devices":214,"Channels":84},"American Samoa":{"Devices":21,"Channels":3},"Andorra":{"Devices":3,"Channels":2},"Angola":{"Devices":2,"Channels":2},"Anguilla":{"Devices":0,"Channels":0},"Antigua and Barbuda":{"Devices":26,"Channels":18},"Argentina":{"Devices":8,"Channels":4},"Armenia":{"Devices":212,"Channels":86},"Aruba":{"Devices":7,"Channels":2},"Ascension Island":{"Devices":47,"Channels":13},"Australia":{"Devices":197,"Channels":17},"Austria":{"Devices":65,"Channels":6},"Azerbaijan":{"Devices":24,"Channels":18},"Bahamas":{"Devices":23,"Channels":8},"Bahrain":{"Devices":0,"Channels":0},"Bangladesh":{"Devices":11,"Channels":6},"Barbados":{"Devices":6,"Channels":1},"Belarus":{"Devices":8,"Channels":7},"Belgium":{"Devices":3,"Channels":3},"Belize":{"Devices":2,"Channels":2},"Benin":{"Devices":2,"Channels":1},"Bermuda":{"Devices":1,"Channels":1},"Bhutan":{"Devices":3,"Channels":2},"Bolivia":{"Devices":2,"Channels":2},"Bosnia and Herzegovina":{"Devices":0,"Channels":0},"Botswana":{"Devices":9,"Channels":2},"Brazil":{"Devices":5,"Channels":5},"British Virgin Islands":{"Devices":50,"Channels":30},"Brunei":{"Devices":4,"Channels":2},"Bulgaria":{"Devices":54,"Channels":31},"Burkina Faso":{"Devices":6,"Channels":5},"Burundi":{"Devices":148,"Channels":20},"Cambodia":{"Devices":17,"Channels":11},"Cameroon":{"Devices":10,"Channels":6},"Canada":{"Devices":20,"Channels":16},"Cape Verde":{"Devices":19,"Channels":13},"Cayman Islands":{"Devices":60,"Channels":20},"Central African Republic":{"Devices":64,"Channels":32},"Chad":{"Devices":23,"Channels":5},"Chile":{"Devices":51,"Channels":39},"China":{"Devices":19,"Channels":16},"Christmas Island":{"Devices":17,"Channels":11},"Cocos (Keeling) Islands":{"Devices":10,"Channels":7},"Colombia":{"Devices":26,"Channels":24},"Comoros":{"Devices":17,"Channels":8},"Cook Islands":{"Devices":24,"Channels":7},"Costa Rica":{"Devices":7,"Channels":4},"Croatia":{"Devices":0,"Channels":0},"Cuba":{"Devices":2,"Channels":1},"Cura\u0324ao":{"Devices":24,"Channels":11},"Cyprus":{"Devices":16,"Channels":5},"Czech Republic":{"Devices":20,"Channels":6},"C\u032bte d'Ivoire":{"Devices":2,"Channels":2},"Democratic Republic of the Congo":{"Devices":42,"Channels":25},"Denmark":{"Devices":0,"Channels":0},"Djibouti":{"Devices":60,"Channels":5},"Dominica":{"Devices":1,"Channels":1},"Dominican Republic":{"Devices":8,"Channels":1},"East Timor (Timor-Leste)":{"Devices":4,"Channels":3},"Easter Island":{"Devices":11,"Channels":5},"Ecuador":{"Devices":167,"Channels":83},"Egypt":{"Devices":2,"Channels":2},"El Salvador":{"Devices":5,"Channels":2},"Equatorial Guinea":{"Devices":5,"Channels":5},"Eritrea":{"Devices":3,"Channels":1},"Estonia":{"Devices":24,"Channels":12},"Ethiopia":{"Devices":18,"Channels":14},"Falkland Islands":{"Devices":1,"Channels":1},"Faroe Islands":{"Devices":74,"Channels":48},"Federated States of Micronesia":{"Devices":50,"Channels":23},"Fiji":{"Devices":3,"Channels":1},"Finland":{"Devices":54,"Channels":34},"France":{"Devices":6,"Channels":5},"French Guiana":{"Devices":14,"Channels":9},"French Polynesia":{"Devices":2,"Channels":2},"Gabon":{"Devices":1,"Channels":1},"Gambia":{"Devices":8,"Channels":2},"Georgia":{"Devices":1,"Channels":1},"Germany":{"Devices":0,"Channels":0},"Ghana":{"Devices":34,"Channels":20},"Gibraltar":{"Devices":3,"Channels":1},"Greece":{"Devices":1,"Channels":1},"Greenland":{"Devices":5,"Channels":1},"Grenada":{"Devices":0,"Channels":0},"Guam":{"Devices":2,"Channels":1},"Guatemala":{"Devices":7,"Channels":5},"Guernsey":{"Devices":5,"Channels":5},"Guinea":{"Devices":62,"Channels":55},"Guinea-Bissau":{"Devices":9,"Channels":9},"Guyana":{"Devices":138,"Channels":68},"Haiti":{"Devices":2,"Channels":1},"Honduras":{"Devices":9,"Channels":9},"Hungary":{"Devices":1,"Channels":1},"Iceland":{"Devices":3,"Channels":3},"India":{"Devices":3,"Channels":3},"Indonesia":{"Devices":8,"Channels":8},"Iran":{"Devices":4,"Channels":4},"Iraq":{"Devices":9,"Channels":7},"Ireland":{"Devices":8,"Channels":1},"Isle of Man":{"Devices":0,"Channels":0},"Israel":{"Devices":23,"Channels":4},"Italy":{"Devices":8,"Channels":5},"Jamaica":{"Devices":13,"Channels":2},"Japan":{"Devices":0,"Channels":0},"Jersey":{"Devices":1,"Channels":1},"Jordan":{"Devices":140,"Channels":30},"Kazakhstan":{"Devices":21,"Channels":19},"Kenya":{"Devices":1,"Channels":1},"Kiribati":{"Devices":1,"Channels":1},"Kosovo":{"Devices":13,"Channels":2},"Kuwait":{"Devices":1,"Channels":1},"Kyrgyzstan":{"Devices":55,"Channels":43},"Laos":{"Devices":172,"Channels":74},"Latvia":{"Devices":2,"Channels":2},"Lebanon":{"Devices":1,"Channels":1},"Lesotho":{"Devices":6,"Channels":1},"Liberia":{"Devices":15,"Channels":5},"Libya":{"Devices":6,"Channels":4},"Liechtenstein":{"Devices":1,"Channels":1},"Lithuania":{"Devices":10,"Channels":4},"Luxembourg":{"Devices":16,"Channels":6},"Macedonia":{"Devices":1,"Channels":1},"Madagascar":{"Devices":6,"Channels":2},"Malawi":{"Devices":1,"Channels":1},"Malaysia":{"Devices":48,"Channels":5},"Maldives":{"Devices":1,"Channels":1},"Mali":{"Devices":2,"Channels":2},"Malta":{"Devices":21,"Channels":18},"Marshall Islands":{"Devices":141,"Channels":75},"Mauritania":{"Devices":2,"Channels":2},"Mauritius":{"Devices":171,"Channels":33},"Mexico":{"Devices":2,"Channels":2},"Moldova":{"Devices":0,"Channels":0},"Monaco":{"Devices":7,"Channels":3},"Mongolia":{"Devices":11,"Channels":4},"Montenegro":{"Devices":19,"Channels":18},"Montserrat":{"Devices":1,"Channels":1},"Morocco":{"Devices":3,"Channels":1},"Mozambique":{"Devices":2,"Channels":2},"Myanmar":{"Devices":1,"Channels":1},"Nagorno-Karabakh Republic":{"Devices":2,"Channels":1},"Namibia":{"Devices":5,"Channels":2},"Nauru":{"Devices":0,"Channels":0},"Nepal":{"Devices":12,"Channels":11},"Netherlands":{"Devices":7,"Channels":6},"New Caledonia":{"Devices":1,"Channels":1},"New Zealand":{"Devices":5,"Channels":4},"Nicaragua":{"Devices":5,"Channels":1},"Niger":{"Devices":19,"Channels":3},"Nigeria":{"Devices":4,"Channels":4},"Niue":{"Devices":56,"Channels":33},"Norfolk Island":{"Devices":1,"Channels":1},"North Korea":{"Devices":89,"Channels":14},"Northern Cyprus":{"Devices":17,"Channels":14},"United Kingdom Northern Ireland":{"Devices":3,"Channels":3},"Northern Mariana Islands":{"Devices":102,"Channels":17},"Norway":{"Devices":7,"Channels":5},"Oman":{"Devices":6,"Channels":1},"Pakistan":{"Devices":21,"Channels":1},"Palau":{"Devices":0,"Channels":0},"Palestine":{"Devices":3,"Channels":3},"Panama":{"Devices":0,"Channels":0},"Papua New Guinea":{"Devices":1,"Channels":1},"Paraguay":{"Devices":23,"Channels":5},"Peru":{"Devices":5,"Channels":3},"Philippines":{"Devices":91,"Channels":19},"Pitcairn Islands":{"Devices":2,"Channels":2},"Poland":{"Devices":5,"Channels":3},"Portugal":{"Devices":3,"Channels":1},"Puerto Rico":{"Devices":19,"Channels":5},"Qatar":{"Devices":2,"Channels":2},"Republic of China (Taiwan)":{"Devices":0,"Channels":0},"Republic of the Congo":{"Devices":5,"Channels":1},"Romania":{"Devices":1,"Channels":1},"Russia":{"Devices":19,"Channels":11},"Rwanda":{"Devices":3,"Channels":3},"Saint Barth\u0329lemy":{"Devices":14,"Channels":7},"Saint Helena":{"Devices":5,"Channels":3},"Saint Kitts and Nevis":{"Devices":14,"Channels":2},"Saint Lucia":{"Devices":3,"Channels":3},"Saint Martin":{"Devices":9,"Channels":4},"Saint Pierre and Miquelon":{"Devices":1,"Channels":1},"Saint Vincent and the Grenadines":{"Devices":12,"Channels":10},"Samoa":{"Devices":6,"Channels":2},"San Marino":{"Devices":0,"Channels":0},"Saudi Arabia":{"Devices":137,"Channels":92},"Scotland":{"Devices":89,"Channels":65},"Senegal":{"Devices":10,"Channels":10},"Serbia":{"Devices":13,"Channels":13},"Seychelles":{"Devices":0,"Channels":0},"Sierra Leone":{"Devices":8,"Channels":2},"Singapore":{"Devices":17,"Channels":7},"Sint Maarten":{"Devices":5,"Channels":2},"Slovakia":{"Devices":2,"Channels":2},"Slovenia":{"Devices":27,"Channels":6},"Solomon Islands":{"Devices":46,"Channels":27},"Somalia":{"Devices":8,"Channels":5},"Somaliland":{"Devices":1,"Channels":1},"South Africa":{"Devices":2,"Channels":2},"South Georgia and the South Sandwich Islands":{"Devices":5,"Channels":5},"South Korea":{"Devices":7,"Channels":3},"South Ossetia":{"Devices":8,"Channels":8},"South Sudan South Sudan":{"Devices":54,"Channels":5},"Spain":{"Devices":1,"Channels":1},"Sri Lanka":{"Devices":2,"Channels":2},"Sudan":{"Devices":3,"Channels":2},"Suriname":{"Devices":2,"Channels":2},"Swaziland":{"Devices":18,"Channels":9},"Sweden":{"Devices":22,"Channels":19},"Switzerland":{"Devices":158,"Channels":86},"Syria":{"Devices":32,"Channels":11},"":{"Devices":20,"Channels":5},"Tajikistan":{"Devices":0,"Channels":0},"Tanzania":{"Devices":117,"Channels":17},"Thailand":{"Devices":47,"Channels":16},"Togo":{"Devices":0,"Channels":0},"Tonga":{"Devices":1,"Channels":1},"Transnistria":{"Devices":36,"Channels":1},"Trinidad and Tobago":{"Devices":6,"Channels":5},"Tristan da Cunha":{"Devices":2,"Channels":2},"Tunisia":{"Devices":5,"Channels":3},"Turkey":{"Devices":2,"Channels":1},"Turkmenistan":{"Devices":0,"Channels":0},"Turks and Caicos Islands":{"Devices":14,"Channels":2},"Tuvalu":{"Devices":5,"Channels":3},"Uganda":{"Devices":6,"Channels":4},"Ukraine":{"Devices":1,"Channels":1},"United Arab Emirates":{"Devices":1,"Channels":1},"United Kingdom; England":{"Devices":6,"Channels":4},"United States":{"Devices":86,"Channels":14},"United States Virgin Islands":{"Devices":2,"Channels":1},"Uruguay":{"Devices":11,"Channels":8},"Uzbekistan":{"Devices":12,"Channels":12},"Vanuatu":{"Devices":4,"Channels":4},"Vatican City":{"Devices":3,"Channels":3},"Venezuela":{"Devices":50,"Channels":17},"Vietnam":{"Devices":5,"Channels":2},"Wales":{"Devices":24,"Channels":18},"Wallis and Futuna":{"Devices":1,"Channels":1},"Western Sahara":{"Devices":6,"Channels":6},"Yemen":{"Devices":73,"Channels":39},"Zambia":{"Devices":14,"Channels":9},"Zimbabwe":{"Devices":16,"Channels":7}}
        parseThroughData(data);
    }


}]);