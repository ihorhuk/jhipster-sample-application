export interface ICurrency {
  id?: number;
  currencyCode?: string;
  currencyName?: string | null;
}

export class Currency implements ICurrency {
  constructor(public id?: number, public currencyCode?: string, public currencyName?: string | null) {}
}

export function getCurrencyIdentifier(currency: ICurrency): number | undefined {
  return currency.id;
}
