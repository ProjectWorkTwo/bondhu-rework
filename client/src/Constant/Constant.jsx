export const primaryColor = "#132A13";
export const secondaryColor = "#31572C";
export const grayColor = "#464646";
export const whiteColor = "#ffffff";

export const baseURL = "http://localhost:5000";
export const imgbbBaseURL = "https://api.imgbb.com/1/upload";
export const dummyProfilePic =
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);

  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const currentDate = () => {
  const time = new Date();

  return `${time.getDate() < 10 ? "0" + time.getDate() : time.getDate()} ${
    months[time.getMonth()]
  } ${time.getFullYear()}`;
};

export const bgDefault = (coverImg) => ({
  background: `url('${coverImg}')`,
  backgroundSize: "cover !important",
  backgroundPosition: "center !important",
  backgroundRepeat: "no-repeat !important",
});

export const toCapitalize = (str) => {
  const temp = str[0].toUpperCase();
  str = str.toLowerCase().split("");
  str[0] = temp;
  return str.join("");
};

export const languages = [
  {
    name: "English",
    code: "en",
  },
  {
    name: "Bengali",
    code: "bn",
  },
  {
    name: "Afrikaans",
    code: "af",
  },
  {
    name: "Albanian",
    code: "sq",
  },
  {
    name: "Amharic",
    code: "am",
  },
  {
    name: "Arabic",
    code: "ar",
  },
  {
    name: "Armenian",
    code: "hy",
  },
  {
    name: "Assamese",
    code: "as",
  },
  {
    name: "Aymara",
    code: "ay",
  },
  {
    name: "Azerbaijani",
    code: "az",
  },
  {
    name: "Bambara",
    code: "bm",
  },
  {
    name: "Basque",
    code: "eu",
  },
  {
    name: "Belarusian",
    code: "be",
  },
  {
    name: "Bhojpuri",
    code: "bho",
  },
  {
    name: "Bosnian",
    code: "bs",
  },
  {
    name: "Bulgarian",
    code: "bg",
  },
  {
    name: "Catalan",
    code: "ca",
  },
  {
    name: "Cebuano",
    code: "ceb",
  },
  {
    name: "Chichewa",
    code: "ny",
  },
  {
    name: "Chinese (Simplified)",
    code: "zh-CN",
  },
  {
    name: "Chinese (Traditional)",
    code: "zh-TW",
  },
  {
    name: "Corsican",
    code: "co",
  },
  {
    name: "Croatian",
    code: "hr",
  },
  {
    name: "Czech",
    code: "cs",
  },
  {
    name: "Danish",
    code: "da",
  },
  {
    name: "Dhivehi",
    code: "dv",
  },
  {
    name: "Dogri",
    code: "doi",
  },
  {
    name: "Dutch",
    code: "nl",
  },
  {
    name: "Esperanto",
    code: "eo",
  },
  {
    name: "Estonian",
    code: "et",
  },
  {
    name: "Ewe",
    code: "ee",
  },
  {
    name: "Filipino",
    code: "tl",
  },
  {
    name: "Finnish",
    code: "fi",
  },
  {
    name: "French",
    code: "fr",
  },
  {
    name: "Frisian",
    code: "fy",
  },
  {
    name: "Galician",
    code: "gl",
  },
  {
    name: "Georgian",
    code: "ka",
  },
  {
    name: "German",
    code: "de",
  },
  {
    name: "Greek",
    code: "el",
  },
  {
    name: "Guarani",
    code: "gn",
  },
  {
    name: "Gujarati",
    code: "gu",
  },
  {
    name: "Haitian Creole",
    code: "ht",
  },
  {
    name: "Hausa",
    code: "ha",
  },
  {
    name: "Hawaiian",
    code: "haw",
  },
  {
    name: "Hebrew",
    code: "iw",
  },
  {
    name: "Hindi",
    code: "hi",
  },
  {
    name: "Hmong",
    code: "hmn",
  },
  {
    name: "Hungarian",
    code: "hu",
  },
  {
    name: "Icelandic",
    code: "is",
  },
  {
    name: "Igbo",
    code: "ig",
  },
  {
    name: "Ilocano",
    code: "ilo",
  },
  {
    name: "Indonesian",
    code: "id",
  },
  {
    name: "Irish",
    code: "ga",
  },
  {
    name: "Italian",
    code: "it",
  },
  {
    name: "Japanese",
    code: "ja",
  },
  {
    name: "Javanese",
    code: "jw",
  },
  {
    name: "Kannada",
    code: "kn",
  },
  {
    name: "Kazakh",
    code: "kk",
  },
  {
    name: "Khmer",
    code: "km",
  },
  {
    name: "Kinyarwanda",
    code: "rw",
  },
  {
    name: "Konkani",
    code: "gom",
  },
  {
    name: "Korean",
    code: "ko",
  },
  {
    name: "Krio",
    code: "kri",
  },
  {
    name: "Kurdish (Kurmanji)",
    code: "ku",
  },
  {
    name: "Kurdish (Sorani)",
    code: "ckb",
  },
  {
    name: "Kyrgyz",
    code: "ky",
  },
  {
    name: "Lao",
    code: "lo",
  },
  {
    name: "Latin",
    code: "la",
  },
  {
    name: "Latvian",
    code: "lv",
  },
  {
    name: "Lingala",
    code: "ln",
  },
  {
    name: "Lithuanian",
    code: "lt",
  },
  {
    name: "Luganda",
    code: "lg",
  },
  {
    name: "Luxembourgish",
    code: "lb",
  },
  {
    name: "Macedonian",
    code: "mk",
  },
  {
    name: "Maithili",
    code: "mai",
  },
  {
    name: "Malagasy",
    code: "mg",
  },
  {
    name: "Malay",
    code: "ms",
  },
  {
    name: "Malayalam",
    code: "ml",
  },
  {
    name: "Maltese",
    code: "mt",
  },
  {
    name: "Maori",
    code: "mi",
  },
  {
    name: "Marathi",
    code: "mr",
  },
  {
    name: "Meiteilon (Manipuri)",
    code: "mni-Mtei",
  },
  {
    name: "Mizo",
    code: "lus",
  },
  {
    name: "Mongolian",
    code: "mn",
  },
  {
    name: "Myanmar (Burmese)",
    code: "my",
  },
  {
    name: "Nepali",
    code: "ne",
  },
  {
    name: "Norwegian",
    code: "no",
  },
  {
    name: "Odia (Oriya)",
    code: "or",
  },
  {
    name: "Oromo",
    code: "om",
  },
  {
    name: "Pashto",
    code: "ps",
  },
  {
    name: "Persian",
    code: "fa",
  },
  {
    name: "Polish",
    code: "pl",
  },
  {
    name: "Portuguese",
    code: "pt",
  },
  {
    name: "Punjabi",
    code: "pa",
  },
  {
    name: "Quechua",
    code: "qu",
  },
  {
    name: "Romanian",
    code: "ro",
  },
  {
    name: "Russian",
    code: "ru",
  },
  {
    name: "Samoan",
    code: "sm",
  },
  {
    name: "Sanskrit",
    code: "sa",
  },
  {
    name: "Scots Gaelic",
    code: "gd",
  },
  {
    name: "Sepedi",
    code: "nso",
  },
  {
    name: "Serbian",
    code: "sr",
  },
  {
    name: "Sesotho",
    code: "st",
  },
  {
    name: "Shona",
    code: "sn",
  },
  {
    name: "Sindhi",
    code: "sd",
  },
  {
    name: "Sinhala",
    code: "si",
  },
  {
    name: "Slovak",
    code: "sk",
  },
  {
    name: "Slovenian",
    code: "sl",
  },
  {
    name: "Somali",
    code: "so",
  },
  {
    name: "Spanish",
    code: "es",
  },
  {
    name: "Sundanese",
    code: "su",
  },
  {
    name: "Swahili",
    code: "sw",
  },
  {
    name: "Swedish",
    code: "sv",
  },
  {
    name: "Tajik",
    code: "tg",
  },
  {
    name: "Tamil",
    code: "ta",
  },
  {
    name: "Tatar",
    code: "tt",
  },
  {
    name: "Telugu",
    code: "te",
  },
  {
    name: "Thai",
    code: "th",
  },
  {
    name: "Tigrinya",
    code: "ti",
  },
  {
    name: "Tsonga",
    code: "ts",
  },
  {
    name: "Turkish",
    code: "tr",
  },
  {
    name: "Turkmen",
    code: "tk",
  },
  {
    name: "Twi",
    code: "ak",
  },
  {
    name: "Ukrainian",
    code: "uk",
  },
  {
    name: "Urdu",
    code: "ur",
  },
  {
    name: "Uyghur",
    code: "ug",
  },
  {
    name: "Uzbek",
    code: "uz",
  },
  {
    name: "Vietnamese",
    code: "vi",
  },
  {
    name: "Welsh",
    code: "cy",
  },
  {
    name: "Xhosa",
    code: "xh",
  },
  {
    name: "Yiddish",
    code: "yi",
  },
  {
    name: "Yoruba",
    code: "yo",
  },
  {
    name: "Zulu",
    code: "zu",
  },
];

export const countries = [
  "Christmas Island",
  "Eritrea",
  "Samoa",
  "North Macedonia",
  "Djibouti",
  "Jordan",
  "Pakistan",
  "French Polynesia",
  "Ireland",
  "Mauritania",
  "Denmark",
  "Namibia",
  "Ghana",
  "South Sudan",
  "Slovakia",
  "American Samoa",
  "Moldova",
  "North Korea",
  "Macau",
  "Turks and Caicos Islands",
  "Seychelles",
  "Armenia",
  "Curaçao",
  "Guadeloupe",
  "British Indian Ocean Territory",
  "Equatorial Guinea",
  "Syria",
  "Angola",
  "Tajikistan",
  "Venezuela",
  "United States Minor Outlying Islands",
  "Åland Islands",
  "Poland",
  "Saudi Arabia",
  "Republic of the Congo",
  "Bosnia and Herzegovina",
  "United States Virgin Islands",
  "New Caledonia",
  "San Marino",
  "Czechia",
  "Guatemala",
  "South Korea",
  "Estonia",
  "Nepal",
  "Kosovo",
  "Botswana",
  "Philippines",
  "Saint Pierre and Miquelon",
  "Iraq",
  "Lebanon",
  "Burundi",
  "Mongolia",
  "Faroe Islands",
  "Paraguay",
  "Svalbard and Jan Mayen",
  "Tokelau",
  "Guernsey",
  "Caribbean Netherlands",
  "Algeria",
  "France",
  "Netherlands",
  "Greenland",
  "Sint Maarten",
  "Chad",
  "Finland",
  "Panama",
  "Palestine",
  "Yemen",
  "Brazil",
  "Nigeria",
  "Palau",
  "Japan",
  "Tanzania",
  "Kazakhstan",
  "Portugal",
  "South Georgia",
  "Sri Lanka",
  "Germany",
  "Western Sahara",
  "Myanmar",
  "Colombia",
  "Peru",
  "Senegal",
  "Kyrgyzstan",
  "China",
  "Afghanistan",
  "Turkey",
  "Liberia",
  "South Africa",
  "Chile",
  "Malta",
  "Kiribati",
  "Cape Verde",
  "Jersey",
  "Iceland",
  "Gambia",
  "Vanuatu",
  "Uruguay",
  "Oman",
  "Sudan",
  "India",
  "Laos",
  "Aruba",
  "Martinique",
  "Comoros",
  "Spain",
  "Antigua and Barbuda",
  "Uzbekistan",
  "Maldives",
  "Gibraltar",
  "Indonesia",
  "Pitcairn Islands",
  "Vietnam",
  "Malaysia",
  "Cook Islands",
  "Eswatini",
  "Uganda",
  "Madagascar",
  "Fiji",
  "Norway",
  "Antarctica",
  "Bouvet Island",
  "Cyprus",
  "Taiwan",
  "Papua New Guinea",
  "Rwanda",
  "DR Congo",
  "Cameroon",
  "Serbia",
  "Lithuania",
  "French Southern and Antarctic Lands",
  "Cambodia",
  "Saint Helena, Ascension and Tristan da Cunha",
  "United Arab Emirates",
  "Bermuda",
  "Monaco",
  "Cuba",
  "Hong Kong",
  "Northern Mariana Islands",
  "Togo",
  "Luxembourg",
  "Mauritius",
  "Argentina",
  "Grenada",
  "Nicaragua",
  "Niue",
  "Ukraine",
  "Guyana",
  "Niger",
  "Benin",
  "Saint Lucia",
  "Tuvalu",
  "Norfolk Island",
  "Egypt",
  "Saint Kitts and Nevis",
  "Lesotho",
  "Tonga",
  "Georgia",
  "Ethiopia",
  "Dominican Republic",
  "Saint Vincent and the Grenadines",
  "Belize",
  "Isle of Man",
  "Morocco",
  "Haiti",
  "Mayotte",
  "Burkina Faso",
  "Bangladesh",
  "Kuwait",
  "Réunion",
  "Jamaica",
  "Romania",
  "São Tomé and Príncipe",
  "Bahamas",
  "Mexico",
  "Saint Martin",
  "El Salvador",
  "Saint Barthélemy",
  "Micronesia",
  "Turkmenistan",
  "Anguilla",
  "Central African Republic",
  "Suriname",
  "Belgium",
  "Sweden",
  "Bolivia",
  "Montenegro",
  "Mozambique",
  "Latvia",
  "Malawi",
  "Mali",
  "Vatican City",
  "Montserrat",
  "Austria",
  "Albania",
  "British Virgin Islands",
  "Zambia",
  "French Guiana",
  "Liechtenstein",
  "Qatar",
  "Solomon Islands",
  "Nauru",
  "Greece",
  "Libya",
  "Guinea-Bissau",
  "Barbados",
  "Honduras",
  "Somalia",
  "Cayman Islands",
  "Italy",
  "Wallis and Futuna",
  "Andorra",
  "Ecuador",
  "Kenya",
  "Bahrain",
  "United Kingdom",
  "Guinea",
  "Heard Island and McDonald Islands",
  "Russia",
  "Brunei",
  "Zimbabwe",
  "Guam",
  "Australia",
  "Slovenia",
  "Belarus",
  "Thailand",
  "New Zealand",
  "Tunisia",
  "Marshall Islands",
  "Sierra Leone",
  "Bhutan",
  "United States",
  "Switzerland",
  "Falkland Islands",
  "Cocos (Keeling) Islands",
  "Gabon",
  "Dominica",
  "Canada",
  "Trinidad and Tobago",
  "Puerto Rico",
  "Singapore",
  "Hungary",
  "Costa Rica",
  "Israel",
  "Bulgaria",
  "Azerbaijan",
  "Timor-Leste",
  "Iran",
  "Croatia",
  "Ivory Coast",
];
