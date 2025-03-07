// List of currency codes with country names

const currencyList = [
    {
        "code":"AED",
        "decimals":2,
        "name":"United Arab Emirates dirham",
        "number":"784"
    },
    {
        "code":"XXX",
        "decimals":null,
        "name":"No currency",
        "number":"999"
    },
    {
        "code":"YER",
        "decimals":2,
        "name":"Yemeni rial",
        "number":"886"
    },
    {
        "code":"ZAR",
        "decimals":2,
        "name":"South African rand",
        "number":"710"
    },
    {
        "code":"AFN",
        "decimals":2,
        "name":"Afghan afghani",
        "number":"971"
    },
    {
        "code":"ALL",
        "decimals":2,
        "name":"Albanian lek",
        "number":"8"
    },
    {
        "code":"AMD",
        "decimals":2,
        "name":"Armenian dram",
        "number":"51"
    },
    {
        "code":"ANG",
        "decimals":2,
        "name":"Netherlands Antillean guilder",
        "number":"532"
    },
    {
        "code":"AOA",
        "decimals":2,
        "name":"Angolan kwanza",
        "number":"973"
    },
    {
        "code":"ARS",
        "decimals":2,
        "name":"Argentine peso",
        "number":"32"
    },
    {
        "code":"AUD",
        "decimals":2,
        "name":"Australian dollar",
        "number":"36"
    },
    {
        "code":"AWG",
        "decimals":2,
        "name":"Aruban florin",
        "number":"533"
    },
    {
        "code":"AZN",
        "decimals":2,
        "name":"Azerbaijani manat",
        "number":"944"
    },
    {
        "code":"BAM",
        "decimals":2,
        "name":"Bosnia and Herzegovina convertible mark",
        "number":"977"
    },
    {
        "code":"BBD",
        "decimals":2,
        "name":"Barbados dollar",
        "number":"52"
    },
    {
        "code":"BDT",
        "decimals":2,
        "name":"Bangladeshi taka",
        "number":"50"
    },
    {
        "code":"BGN",
        "decimals":2,
        "name":"Bulgarian lev",
        "number":"975"
    },
    {
        "code":"BHD",
        "decimals":3,
        "name":"Bahraini dinar",
        "number":"48"
    },
    {
        "code":"BIF",
        "decimals":0,
        "name":"Burundian franc",
        "number":"108"
    },
    {
        "code":"BMD",
        "decimals":2,
        "name":"Bermudian dollar (customarily known as Bermuda dollar)",
        "number":"60"
    },
    {
        "code":"BND",
        "decimals":2,
        "name":"Brunei dollar",
        "number":"96"
    },
    {
        "code":"BOB",
        "decimals":2,
        "name":"Boliviano",
        "number":"68"
    },
    {
        "code":"BOV",
        "decimals":2,
        "name":"Bolivian Mvdol (funds code)",
        "number":"984"
    },
    {
        "code":"BRL",
        "decimals":2,
        "name":"Brazilian real",
        "number":"986"
    },
    {
        "code":"BSD",
        "decimals":2,
        "name":"Bahamian dollar",
        "number":"44"
    },
    {
        "code":"BTN",
        "decimals":2,
        "name":"Bhutanese ngultrum",
        "number":"64"
    },
    {
        "code":"BWP",
        "decimals":2,
        "name":"Botswana pula",
        "number":"72"
    },
    {
        "code":"BYR",
        "decimals":0,
        "name":"Belarusian ruble",
        "number":"974"
    },
    {
        "code":"BZD",
        "decimals":2,
        "name":"Belize dollar",
        "number":"84"
    },
    {
        "code":"CAD",
        "decimals":2,
        "name":"Canadian dollar",
        "number":"124"
    },
    {
        "code":"CDF",
        "decimals":2,
        "name":"Congolese franc",
        "number":"976"
    },
    {
        "code":"CHE",
        "decimals":2,
        "name":"WIR Euro (complementary currency)",
        "number":"947"
    },
    {
        "code":"CHF",
        "decimals":2,
        "name":"Swiss franc",
        "number":"756"
    },
    {
        "code":"CHW",
        "decimals":2,
        "name":"WIR Franc (complementary currency)",
        "number":"948"
    },
    {
        "code":"CLF",
        "decimals":0,
        "name":"Unidad de Fomento (funds code)",
        "number":"990"
    },
    {
        "code":"CLP",
        "decimals":0,
        "name":"Chilean peso",
        "number":"152"
    },
    {
        "code":"CNY",
        "decimals":2,
        "name":"Chinese yuan",
        "number":"156"
    },
    {
        "code":"COP",
        "decimals":2,
        "name":"Colombian peso",
        "number":"170"
    },
    {
        "code":"COU",
        "decimals":2,
        "name":"Unidad de Valor Real",
        "number":"970"
    },
    {
        "code":"CRC",
        "decimals":2,
        "name":"Costa Rican colon",
        "number":"188"
    },
    {
        "code":"CUC",
        "decimals":2,
        "name":"Cuban convertible peso",
        "number":"931"
    },
    {
        "code":"CUP",
        "decimals":2,
        "name":"Cuban peso",
        "number":"192"
    },
    {
        "code":"CVE",
        "decimals":0,
        "name":"Cape Verde escudo",
        "number":"132"
    },
    {
        "code":"CZK",
        "decimals":2,
        "name":"Czech koruna",
        "number":"203"
    },
    {
        "code":"DJF",
        "decimals":0,
        "name":"Djiboutian franc",
        "number":"262"
    },
    {
        "code":"DKK",
        "decimals":2,
        "name":"Danish krone",
        "number":"208"
    },
    {
        "code":"DOP",
        "decimals":2,
        "name":"Dominican peso",
        "number":"214"
    },
    {
        "code":"DZD",
        "decimals":2,
        "name":"Algerian dinar",
        "number":"12"
    },
    {
        "code":"EGP",
        "decimals":2,
        "name":"Egyptian pound",
        "number":"818"
    },
    {
        "code":"ERN",
        "decimals":2,
        "name":"Eritrean nakfa",
        "number":"232"
    },
    {
        "code":"ETB",
        "decimals":2,
        "name":"Ethiopian birr",
        "number":"230"
    },
    {
        "code":"EUR",
        "decimals":2,
        "name":"Euro",
        "number":"978"
    },
    {
        "code":"FJD",
        "decimals":2,
        "name":"Fiji dollar",
        "number":"242"
    },
    {
        "code":"FKP",
        "decimals":2,
        "name":"Falkland Islands pound",
        "number":"238"
    },
    {
        "code":"GBP",
        "decimals":2,
        "name":"Pound sterling",
        "number":"826"
    },
    {
        "code":"GEL",
        "decimals":2,
        "name":"Georgian lari",
        "number":"981"
    },
    {
        "code":"GHS",
        "decimals":2,
        "name":"Ghanaian cedi",
        "number":"936"
    },
    {
        "code":"GIP",
        "decimals":2,
        "name":"Gibraltar pound",
        "number":"292"
    },
    {
        "code":"GMD",
        "decimals":2,
        "name":"Gambian dalasi",
        "number":"270"
    },
    {
        "code":"GNF",
        "decimals":0,
        "name":"Guinean franc",
        "number":"324"
    },
    {
        "code":"GTQ",
        "decimals":2,
        "name":"Guatemalan quetzal",
        "number":"320"
    },
    {
        "code":"GYD",
        "decimals":2,
        "name":"Guyanese dollar",
        "number":"328"
    },
    {
        "code":"HKD",
        "decimals":2,
        "name":"Hong Kong dollar",
        "number":"344"
    },
    {
        "code":"HNL",
        "decimals":2,
        "name":"Honduran lempira",
        "number":"340"
    },
    {
        "code":"HRK",
        "decimals":2,
        "name":"Croatian kuna",
        "number":"191"
    },
    {
        "code":"HTG",
        "decimals":2,
        "name":"Haitian gourde",
        "number":"332"
    },
    {
        "code":"HUF",
        "decimals":2,
        "name":"Hungarian forint",
        "number":"348"
    },
    {
        "code":"IDR",
        "decimals":2,
        "name":"Indonesian rupiah",
        "number":"360"
    },
    {
        "code":"ILS",
        "decimals":2,
        "name":"Israeli new shekel",
        "number":"376"
    },
    {
        "code":"INR",
        "decimals":2,
        "name":"Indian rupee",
        "number":"356"
    },
    {
        "code":"IQD",
        "decimals":3,
        "name":"Iraqi dinar",
        "number":"368"
    },
    {
        "code":"IRR",
        "decimals":0,
        "name":"Iranian rial",
        "number":"364"
    },
    {
        "code":"ISK",
        "decimals":0,
        "name":"Icelandic króna",
        "number":"352"
    },
    {
        "code":"JMD",
        "decimals":2,
        "name":"Jamaican dollar",
        "number":"388"
    },
    {
        "code":"JOD",
        "decimals":3,
        "name":"Jordanian dinar",
        "number":"400"
    },
    {
        "code":"JPY",
        "decimals":0,
        "name":"Japanese yen",
        "number":"392"
    },
    {
        "code":"KES",
        "decimals":2,
        "name":"Kenyan shilling",
        "number":"404"
    },
    {
        "code":"KGS",
        "decimals":2,
        "name":"Kyrgyzstani som",
        "number":"417"
    },
    {
        "code":"KHR",
        "decimals":2,
        "name":"Cambodian riel",
        "number":"116"
    },
    {
        "code":"KMF",
        "decimals":0,
        "name":"Comoro franc",
        "number":"174"
    },
    {
        "code":"KPW",
        "decimals":0,
        "name":"North Korean won",
        "number":"408"
    },
    {
        "code":"KRW",
        "decimals":0,
        "name":"South Korean won",
        "number":"410"
    },
    {
        "code":"KWD",
        "decimals":3,
        "name":"Kuwaiti dinar",
        "number":"414"
    },
    {
        "code":"KYD",
        "decimals":2,
        "name":"Cayman Islands dollar",
        "number":"136"
    },
    {
        "code":"KZT",
        "decimals":2,
        "name":"Kazakhstani tenge",
        "number":"398"
    },
    {
        "code":"LAK",
        "decimals":0,
        "name":"Lao kip",
        "number":"418"
    },
    {
        "code":"LBP",
        "decimals":0,
        "name":"Lebanese pound",
        "number":"422"
    },
    {
        "code":"LKR",
        "decimals":2,
        "name":"Sri Lankan rupee",
        "number":"144"
    },
    {
        "code":"LRD",
        "decimals":2,
        "name":"Liberian dollar",
        "number":"430"
    },
    {
        "code":"LSL",
        "decimals":2,
        "name":"Lesotho loti",
        "number":"426"
    },
    {
        "code":"LTL",
        "decimals":2,
        "name":"Lithuanian litas",
        "number":"440"
    },
    {
        "code":"LVL",
        "decimals":2,
        "name":"Latvian lats",
        "number":"428"
    },
    {
        "code":"LYD",
        "decimals":3,
        "name":"Libyan dinar",
        "number":"434"
    },
    {
        "code":"MAD",
        "decimals":2,
        "name":"Moroccan dirham",
        "number":"504"
    },
    {
        "code":"MDL",
        "decimals":2,
        "name":"Moldovan leu",
        "number":"498"
    },
    {
        "code":"MGA",
        "decimals":0,
        "name":"Malagasy ariary",
        "number":"969"
    },
    {
        "code":"MKD",
        "decimals":0,
        "name":"Macedonian denar",
        "number":"807"
    },
    {
        "code":"MMK",
        "decimals":0,
        "name":"Myanma kyat",
        "number":"104"
    },
    {
        "code":"MNT",
        "decimals":2,
        "name":"Mongolian tugrik",
        "number":"496"
    },
    {
        "code":"MOP",
        "decimals":2,
        "name":"Macanese pataca",
        "number":"446"
    },
    {
        "code":"MRO",
        "decimals":0,
        "name":"Mauritanian ouguiya",
        "number":"478"
    },
    {
        "code":"MUR",
        "decimals":2,
        "name":"Mauritian rupee",
        "number":"480"
    },
    {
        "code":"MVR",
        "decimals":2,
        "name":"Maldivian rufiyaa",
        "number":"462"
    },
    {
        "code":"MWK",
        "decimals":2,
        "name":"Malawian kwacha",
        "number":"454"
    },
    {
        "code":"MXN",
        "decimals":2,
        "name":"Mexican peso",
        "number":"484"
    },
    {
        "code":"MXV",
        "decimals":2,
        "name":"Mexican Unidad de Inversion (UDI) (funds code)",
        "number":"979"
    },
    {
        "code":"MYR",
        "decimals":2,
        "name":"Malaysian ringgit",
        "number":"458"
    },
    {
        "code":"MZN",
        "decimals":2,
        "name":"Mozambican metical",
        "number":"943"
    },
    {
        "code":"NAD",
        "decimals":2,
        "name":"Namibian dollar",
        "number":"516"
    },
    {
        "code":"NGN",
        "decimals":2,
        "name":"Nigerian naira",
        "number":"566"
    },
    {
        "code":"NIO",
        "decimals":2,
        "name":"Nicaraguan córdoba",
        "number":"558"
    },
    {
        "code":"NOK",
        "decimals":2,
        "name":"Norwegian krone",
        "number":"578"
    },
    {
        "code":"NPR",
        "decimals":2,
        "name":"Nepalese rupee",
        "number":"524"
    },
    {
        "code":"NZD",
        "decimals":2,
        "name":"New Zealand dollar",
        "number":"554"
    },
    {
        "code":"OMR",
        "decimals":3,
        "name":"Omani rial",
        "number":"512"
    },
    {
        "code":"PAB",
        "decimals":2,
        "name":"Panamanian balboa",
        "number":"590"
    },
    {
        "code":"PEN",
        "decimals":2,
        "name":"Peruvian nuevo sol",
        "number":"604"
    },
    {
        "code":"PGK",
        "decimals":2,
        "name":"Papua New Guinean kina",
        "number":"598"
    },
    {
        "code":"PHP",
        "decimals":2,
        "name":"Philippine peso",
        "number":"608"
    },
    {
        "code":"PKR",
        "decimals":2,
        "name":"Pakistani rupee",
        "number":"586"
    },
    {
        "code":"PLN",
        "decimals":2,
        "name":"Polish złoty",
        "number":"985"
    },
    {
        "code":"PYG",
        "decimals":0,
        "name":"Paraguayan guaraní",
        "number":"600"
    },
    {
        "code":"QAR",
        "decimals":2,
        "name":"Qatari riyal",
        "number":"634"
    },
    {
        "code":"RON",
        "decimals":2,
        "name":"Romanian new leu",
        "number":"946"
    },
    {
        "code":"RSD",
        "decimals":2,
        "name":"Serbian dinar",
        "number":"941"
    },
    {
        "code":"RUB",
        "decimals":2,
        "name":"Russian rouble",
        "number":"643"
    },
    {
        "code":"RWF",
        "decimals":0,
        "name":"Rwandan franc",
        "number":"646"
    },
    {
        "code":"SAR",
        "decimals":2,
        "name":"Saudi riyal",
        "number":"682"
    },
    {
        "code":"SBD",
        "decimals":2,
        "name":"Solomon Islands dollar",
        "number":"90"
    },
    {
        "code":"SCR",
        "decimals":2,
        "name":"Seychelles rupee",
        "number":"690"
    },
    {
        "code":"SDG",
        "decimals":2,
        "name":"Sudanese pound",
        "number":"938"
    },
    {
        "code":"SEK",
        "decimals":2,
        "name":"Swedish krona/kronor",
        "number":"752"
    },
    {
        "code":"SGD",
        "decimals":2,
        "name":"Singapore dollar",
        "number":"702"
    },
    {
        "code":"SHP",
        "decimals":2,
        "name":"Saint Helena pound",
        "number":"654"
    },
    {
        "code":"SLL",
        "decimals":0,
        "name":"Sierra Leonean leone",
        "number":"694"
    },
    {
        "code":"SOS",
        "decimals":2,
        "name":"Somali shilling",
        "number":"706"
    },
    {
        "code":"SRD",
        "decimals":2,
        "name":"Surinamese dollar",
        "number":"968"
    },
    {
        "code":"SSP",
        "decimals":2,
        "name":"South Sudanese pound",
        "number":"728"
    },
    {
        "code":"STD",
        "decimals":0,
        "name":"São Tomé and Príncipe dobra",
        "number":"678"
    },
    {
        "code":"SYP",
        "decimals":2,
        "name":"Syrian pound",
        "number":"760"
    },
    {
        "code":"SZL",
        "decimals":2,
        "name":"Swazi lilangeni",
        "number":"748"
    },
    {
        "code":"THB",
        "decimals":2,
        "name":"Thai baht",
        "number":"764"
    },
    {
        "code":"TJS",
        "decimals":2,
        "name":"Tajikistani somoni",
        "number":"972"
    },
    {
        "code":"TMT",
        "decimals":2,
        "name":"Turkmenistani manat",
        "number":"934"
    },
    {
        "code":"TND",
        "decimals":3,
        "name":"Tunisian dinar",
        "number":"788"
    },
    {
        "code":"TOP",
        "decimals":2,
        "name":"Tongan paʻanga",
        "number":"776"
    },
    {
        "code":"TRY",
        "decimals":2,
        "name":"Turkish lira",
        "number":"949"
    },
    {
        "code":"TTD",
        "decimals":2,
        "name":"Trinidad and Tobago dollar",
        "number":"780"
    },
    {
        "code":"TWD",
        "decimals":2,
        "name":"New Taiwan dollar",
        "number":"901"
    },
    {
        "code":"TZS",
        "decimals":2,
        "name":"Tanzanian shilling",
        "number":"834"
    },
    {
        "code":"UAH",
        "decimals":2,
        "name":"Ukrainian hryvnia",
        "number":"980"
    },
    {
        "code":"UGX",
        "decimals":2,
        "name":"Ugandan shilling",
        "number":"800"
    },
    {
        "code":"USD",
        "decimals":2,
        "name":"United States dollar",
        "number":"840"
    },
    {
        "code":"USN",
        "decimals":2,
        "name":"United States dollar (next day) (funds code)",
        "number":"997"
    },
    {
        "code":"USS",
        "decimals":2,
        "name":"United States dollar (same day) (funds code) (one source[who?] claims it is no longer used, but it is still on the ISO 4217-MA list)",
        "number":"998"
    },
    {
        "code":"UYI",
        "decimals":0,
        "name":"Uruguay Peso en Unidades Indexadas (URUIURUI) (funds code)",
        "number":"940"
    },
    {
        "code":"UYU",
        "decimals":2,
        "name":"Uruguayan peso",
        "number":"858"
    },
    {
        "code":"UZS",
        "decimals":2,
        "name":"Uzbekistan som",
        "number":"860"
    },
    {
        "code":"VEF",
        "decimals":2,
        "name":"Venezuelan bolívar fuerte",
        "number":"937"
    },
    {
        "code":"VND",
        "decimals":0,
        "name":"Vietnamese dong",
        "number":"704"
    },
    {
        "code":"VUV",
        "decimals":0,
        "name":"Vanuatu vatu",
        "number":"548"
    },
    {
        "code":"WST",
        "decimals":2,
        "name":"Samoan tala",
        "number":"882"
    },
    {
        "code":"XAF",
        "decimals":0,
        "name":"CFA franc BEAC",
        "number":"950"
    },
    {
        "code":"XAG",
        "decimals":null,
        "name":"Silver (one troy ounce)",
        "number":"961"
    },
    {
        "code":"XAU",
        "decimals":null,
        "name":"Gold (one troy ounce)",
        "number":"959"
    },
    {
        "code":"XBA",
        "decimals":null,
        "name":"European Composite Unit (EURCO) (bond market unit)",
        "number":"955"
    },
    {
        "code":"XBB",
        "decimals":null,
        "name":"European Monetary Unit (E.M.U.-6) (bond market unit)",
        "number":"956"
    },
    {
        "code":"XBC",
        "decimals":null,
        "name":"European Unit of Account 9 (E.U.A.-9) (bond market unit)",
        "number":"957"
    },
    {
        "code":"XBD",
        "decimals":null,
        "name":"European Unit of Account 17 (E.U.A.-17) (bond market unit)",
        "number":"958"
    },
    {
        "code":"XCD",
        "decimals":2,
        "name":"East Caribbean dollar",
        "number":"951"
    },
    {
        "code":"XDR",
        "decimals":null,
        "name":"Special drawing rights",
        "number":"960"
    },
    {
        "code":"XFU",
        "decimals":null,
        "name":"UIC franc (special settlement currency)",
        "number":"Nil"
    },
    {
        "code":"XOF",
        "decimals":0,
        "name":"CFA franc BCEAO",
        "number":"952"
    },
    {
        "code":"XPD",
        "decimals":null,
        "name":"Palladium (one troy ounce)",
        "number":"964"
    },
    {
        "code":"XPF",
        "decimals":0,
        "name":"CFP franc",
        "number":"953"
    },
    {
        "code":"XPT",
        "decimals":null,
        "name":"Platinum (one troy ounce)",
        "number":"962"
    },
    {
        "code":"XTS",
        "decimals":null,
        "name":"Code reserved for testing purposes",
        "number":"963"
    },
    {
        "code":"ZMW",
        "decimals":2,
        "name":"Zambian kwacha",
        "number":"967"
    }
]

const fromCountry=document.getElementById("from-currency")
const toCountry=document.getElementById("to-currency")
function selectCountry(){

    for (let element of currencyList) {
        let option1=document.createElement("option")
        option1.value=element.code
        let option2=document.createElement("option")
        option2.value=element.code
        option1.textContent=`${element.name} ${element.code}`
        option2.textContent=`${element.name} ${element.code}`
        fromCountry.appendChild(option1)
        toCountry.appendChild(option2)
    }
}

const convert=document.getElementById("convert")
convert.addEventListener('click',(e)=>{
    convert.style.backgroundColor = "#ff5733";
    e.preventDefault();
    getExchange();
})


function getExchange(){
    const results=document.getElementById("result")
    const amount=document.getElementById("amount")
    let amountVal=amount.value
    if(amountVal=="0" ||amountVal=="" ){
        amount.value=1;
        amountVal=1
    }
    
    let url=`https://v6.exchangerate-api.com/v6/ff54b0220e0f04cf9d605646/latest/${fromCountry.value}`

    fetch(url).then(response=>response.json()).then(result=>{
        let exchangerate=result.conversion_rates[toCountry.value]
        console.log(result)
        let totalExchnageRate=exchangerate*amountVal
        results.innerHTML = `Converted Amount: ${totalExchnageRate.toFixed(2)}`;

        // Clear previous result and show new result
        
            // Clear input field after conversion
            amount.value = "";
    })

}





document.addEventListener("DOMContentLoaded",selectCountry)
fromCountry.addEventListener("change", resetButtonColor);
toCountry.addEventListener("change", resetButtonColor);

function resetButtonColor() {
    convert.style.backgroundColor = "#28a745"; // Green when reselecting data
}