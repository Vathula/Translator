import { Component } from '@angular/core';
import { SpeechService } from 'src/service/speech.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ticketone';
  listening = false;
  recognizedText: string = '';
  // supportedLanguages = ['english', 'spanish', 'french', 'german', 'chinese'];
  supportedLanguages = [
    'Afrikaans',
    'Albanian',
    'Arabic',
    'Armenian',
    'Azerbaijani',
    'Basque',
    'Belarusian',
    'Bengali',
    'Bosnian',
    'Bulgarian',
    'Catalan',
    'Cebuano',
    'Chinese (Simplified)',
    'Chinese (Traditional)',
    'Croatian',
    'Czech',
    'Danish',
    'Dutch',
    'English',
    'Esperanto',
    'Estonian',
    'Filipino',
    'Finnish',
    'French',
    'Galician',
    'Georgian',
    'German',
    'Greek',
    'Gujarati',
    'Haitian Creole',
    'Hebrew',
    'Hindi',
    'Hmong',
    'Hungarian',
    'Icelandic',
    'Indonesian',
    'Irish',
    'Italian',
    'Japanese',
    'Javanese',
    'Kannada',
    'Kazakh',
    'Khmer',
    'Korean',
    'Kurdish (Kurmanji)',
    'Kyrgyz',
    'Lao',
    'Latin',
    'Latvian',
    'Lithuanian',
    'Macedonian',
    'Malagasy',
    'Malay',
    'Malayalam',
    'Marathi',
    'Mongolian',
    'Nepali',
    'Norwegian',
    'Persian',
    'Polish',
    'Portuguese',
    'Punjabi',
    'Romanian',
    'Russian',
    'Serbian',
    'Sinhala',
    'Slovak',
    'Slovenian',
    'Somali',
    'Spanish',
    'Sundanese',
    'Swahili',
    'Swedish',
    'Tamil',
    'Telugu',
    'Thai',
    'Turkish',
    'Ukrainian',
    'Urdu',
    'Vietnamese',
    'Welsh',
    'Xhosa',
    'Yiddish',
    'Yoruba',
    'Zulu'
  ];



  constructor(private speechService: SpeechService,
  ) { }

  startRecognition() {
    debugger
    this.listening = true
    this.speechService.startRecognition();
  }

  stopRecognition() {
    this.listening = false

    this.speechService.stopRecognition();

    setTimeout(() => {
      //   this.recognizedText = this.speechService.getRecognizedText();
      // console.log(this.recognizedText);
      this.getRecognizedText();

    }, 2000);


  }

  getRecognizedText() {
    this.recognizedText = this.speechService.getRecognizedText();
    console.log(this.recognizedText);
    this.processRecognizedText(this.recognizedText)

    // this.translateText(this.recognizedText)

  }
  ngAfterViewInit(): void {
    this.loadGoogleTranslateScript();
  }

  private loadGoogleTranslateScript() {

    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(script);

      window['googleTranslateElementInit'] = function () {
        new window['google'].translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
      };
    }
  }

  private processRecognizedText(text: string): void {
    debugger
    const regex = /translate (\w+)/i; // Regex to match "translate to <language>"
    const match = text.match(regex);

    if (match && match[1]) {
      // const language = match[1].toLowerCase();
      const language = match[1];

      if (this.supportedLanguages.includes(language)) {
        this.changeTranslationLanguage(language);
      } else {
        console.warn('Language not supported');
      }
    }
  }

  private changeTranslationLanguage(language: string): void {
    debugger
    const languageMap: { [key: string]: string } = {
      abkhaz: 'ab',
      acehnese: 'ace',
      acholi: 'ach',
      afar: 'aa',
      afrikaans: 'af',
      albanian: 'sq',
      alur: 'alz',
      amharic: 'am',
      arabic: 'ar',
      armenian: 'hy',
      assamese: 'as',
      avar: 'av',
      awadhi: 'awa',
      aymara: 'ay',
      azerbaijani: 'az',
      balinese: 'ban',
      baluchi: 'bal',
      bambara: 'bm',
      baoulé: 'bci',
      bashkir: 'ba',
      basque: 'eu',
      batakKaro: 'btx',
      batakSimalungun: 'bts',
      batakToba: 'bbc',
      belarusian: 'be',
      bemba: 'bem',
      bengali: 'bn',
      betawi: 'bew',
      bhojpuri: 'bho',
      bikol: 'bik',
      bosnian: 'bs',
      breton: 'br',
      bulgarian: 'bg',
      buryat: 'bua',
      cantonese: 'yue',
      catalan: 'ca',
      cebuano: 'ceb',
      chamorro: 'ch',
      chechen: 'ce',
      chichewa: 'ny',
      chineseSimplified: 'zh-CN',
      chineseTraditional: 'zh-TW',
      chuukese: 'chk',
      chuvash: 'cv',
      corsican: 'co',
      crimeanTatarCyrillic: 'crh',
      crimeanTatarLatin: 'crh-Latn',
      croatian: 'hr',
      czech: 'cs',
      danish: 'da',
      dari: 'fa-AF',
      dhivehi: 'dv',
      dinka: 'din',
      dogri: 'doi',
      dombe: 'dov',
      dutch: 'nl',
      dyula: 'dyu',
      dzongkha: 'dz',
      esperanto: 'eo',
      estonian: 'et',
      ewe: 'ee',
      faroese: 'fo',
      fijian: 'fj',
      filipino: 'tl',
      finnish: 'fi',
      fon: 'fon',
      french: 'fr',
      frenchCanada: 'fr-CA',
      frisian: 'fy',
      friulian: 'fur',
      fulani: 'ff',
      ga: 'gaa',
      galician: 'gl',
      georgian: 'ka',
      german: 'de',
      greek: 'el',
      guarani: 'gn',
      gujarati: 'gu',
      haitianCreole: 'ht',
      hakhaChin: 'cnh',
      hausa: 'ha',
      hawaiian: 'haw',
      hebrew: 'iw',
      hiligaynon: 'hil',
      hindi: 'hi',
      hmong: 'hmn',
      hungarian: 'hu',
      hunsrik: 'hrx',
      iban: 'iba',
      icelandic: 'is',
      igbo: 'ig',
      ilocano: 'ilo',
      indonesian: 'id',
      inuktutLatin: 'iu-Latn',
      inuktutSyllabics: 'iu',
      irishGaelic: 'ga',
      italian: 'it',
      jamaicanPatois: 'jam',
      japanese: 'ja',
      javanese: 'jw',
      jingpo: 'kac',
      kalaallisut: 'kl',
      kannada: 'kn',
      kanuri: 'kr',
      kapampangan: 'pam',
      kazakh: 'kk',
      khasi: 'kha',
      khmer: 'km',
      kiga: 'cgg',
      kikongo: 'kg',
      kinyarwanda: 'rw',
      kituba: 'ktu',
      kokborok: 'trp',
      komi: 'kv',
      konkani: 'gom',
      korean: 'ko',
      krio: 'kri',
      kurdishKurmanji: 'ku',
      kurdishSorani: 'ckb',
      kyrgyz: 'ky',
      lao: 'lo',
      latgalian: 'ltg',
      latin: 'la',
      latvian: 'lv',
      ligurian: 'lij',
      limburgish: 'li',
      lingala: 'ln',
      lithuanian: 'lt',
      lombard: 'lmo',
      luganda: 'lg',
      luo: 'luo',
      luxembourgish: 'lb',
      macedonian: 'mk',
      madurese: 'mad',
      maithili: 'mai',
      makassar: 'mak',
      malagasy: 'mg',
      malay: 'ms',
      malayJawi: 'ms-Arab',
      malayalam: 'ml',
      maltese: 'mt',
      mam: 'mam',
      manx: 'gv',
      maori: 'mi',
      marathi: 'mr',
      marshallese: 'mh',
      marwadi: 'mwr',
      mauritianCreole: 'mfe',
      meadowMari: 'chm',
      meiteilonManipuri: 'mni-Mtei',
      minang: 'min',
      mizo: 'lus',
      mongolian: 'mn',
      myanmarBurmese: 'my',
      nKo: 'bm-Nkoo',
      nahuatlEasternHuasteca: 'nhe',
      ndau: 'ndc-ZW',
      ndebeleSouth: 'nr',
      nepalBhasaNewari: 'new',
      nepali: 'ne',
      norwegian: 'no',
      nuer: 'nus',
      occitan: 'oc',
      odiaOriya: 'or',
      oromo: 'om',
      ossetian: 'os',
      pangasinan: 'pag',
      papiamento: 'pap',
      pashto: 'ps',
      persian: 'fa',
      polish: 'pl',
      portugueseBrazil: 'pt',
      portuguesePortugal: 'pt-PT',
      punjabiGurmukhi: 'pa',
      punjabiShahmukhi: 'pa-Arab',
      quechua: 'qu',
      qeqchi: 'kek',
      romani: 'rom',
      romanian: 'ro',
      rundi: 'rn',
      russian: 'ru',
      samiNorth: 'se',
      samoan: 'sm',
      sango: 'sg',
      sanskrit: 'sa',
      santaliLatin: 'sat-Latn',
      santaliOlChiki: 'sat',
      scotsGaelic: 'gd',
      sepedi: 'nso',
      serbian: 'sr',
      sesotho: 'st',
      seychelloisCreole: 'crs',
      shan: 'shn',
      shona: 'sn',
      sicilian: 'scn',
      silesian: 'szl',
      sindhi: 'sd',
      sinhala: 'si',
      slovak: 'sk',
      slovenian: 'sl',
      somali: 'so',
      spanish: 'es',
      sundanese: 'su',
      susu: 'sus',
      swahili: 'sw',
      swati: 'ss',
      swedish: 'sv',
      tahitian: 'ty',
      tajik: 'tg',
      tamazight: 'ber-Latn',
      tamazightTifinagh: 'ber',
      tamil: 'ta',
      tatar: 'tt',
      telugu: 'te',
      tetum: 'tet',
      thai: 'th',
      tibetan: 'bo',
      tigrinya: 'ti',
      tiv: 'tiv',
      tokPisin: 'tpi',
      tongan: 'to',
      tshiluba: 'lua',
      tsonga: 'ts',
      tswana: 'tn',
      tulu: 'tcy',
      tumbuka: 'tum',
      turkish: 'tr',
      turkmen: 'tk',
      tuvan: 'tyv',
      twi: 'ak',
      udmurt: 'udm',
      ukrainian: 'uk',
      urdu: 'ur',
      uyghur: 'ug',
      uzbek: 'uz',
      venda: 've',
      venetian: 'vec',
      vietnamese: 'vi',
      waray: 'war',
      welsh: 'cy',
      wolof: 'wo',
      xhosa: 'xh',
      yakut: 'sah',
      yiddish: 'yi',
      yoruba: 'yo',
      yucatecMaya: 'yua',
      zapotec: 'zap',
      zulu: 'zu',
    };
    const language1 = language.toLowerCase();
    const languageCode = languageMap[language1];

    // Set the dropdown value
    const translateElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (translateElement) {
      translateElement.value = languageCode;

      // Trigger the change event on the dropdown to update the translation
      const event = new Event('change');
      translateElement.dispatchEvent(event);
    }
  }

  // Method to capitalize the first letter of a string
  private capitalizeFirstLetter(text: string): string {
    if (text && text.length > 0) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    }
    return text;
  }

}
