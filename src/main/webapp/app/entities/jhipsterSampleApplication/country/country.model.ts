export interface ICountry {
  id?: number;
  countryCode?: string;
  countryName?: string | null;
}

export class Country implements ICountry {
  constructor(public id?: number, public countryCode?: string, public countryName?: string | null) {}
}

export function getCountryIdentifier(country: ICountry): number | undefined {
  return country.id;
}
