export interface Dictionary {
  data: Datum[];
}

export interface Datum {
  _id: string;
  ko: string;
  th: string;
  en: string;
  example: string;
}
