let countryList={ /* first thing is key which is currency-code and second one is country-code*/
  AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW",
};
let BASEURL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
console.log(BASEURL);
let fromcurr=document.querySelector(".from select");
let tocurr=document.querySelector(".to select");

let dropdowns=document.querySelectorAll(".dropdown select");
console.log(dropdowns);
for ( let select1 of dropdowns){
    console.log(select1);
    for (let currcode in countryList){
        let newelement=document.createElement("option");
        newelement.innerText=currcode;
        if (select1.name==="from" && currcode==="USD"){
            newelement.selected="selected";/* if in all the options by default we need to choose 1 option already we use selected property*/
        }
        if (select1.name==="to" && currcode==="INR"){
            newelement.selected="selected";
        }
        select1.append(newelement);
    };
    /* change event is used generally on selecting any 1 option from dropdowns*/
    select1.addEventListener("change",(evt)=>{
        console.log(evt)
        console.log(evt.target);
        updateflag(evt.target.value)
        console.log(fromcurr);
        console.log(fromcurr.value);
    })
};
let updateflag=(element)=>{
    let currcode1=element;
    console.log(currcode1);
    let countrycode=countryList[currcode1];
    let newlink=`https://flagsapi.com/${countrycode}/flat/64.png`;
    let img= document.querySelector("img");
    img.src=newlink;
};
let btn1=document.querySelector("button");
btn1.addEventListener("click",async (evt)=>{
    evt.preventDefault();/* after clicking the button automeaic things done by browser like refreshing on their own all that will be removed*/
    let amnt=document.querySelector(".amount input");
    let amntvalue=amnt.value;
    console.log(amntvalue);
    let URL=`${BASEURL}/${fromcurr.value.toLowerCase()}.json`;/* api not works in capitalcase*/
    let response=await fetch(URL);
    let data=await response.json();
    console.log(data);
    let rate=data[fromcurr.value.toLowerCase()][[tocurr.value.toLowerCase()]];
    console.log(rate);
    let finalamt=amntvalue*rate;
    msg.innerText=`${amntvalue}${fromcurr.value}=${finalamt}${tocurr.value}`;
});
let msg=document.querySelector(".msg");


