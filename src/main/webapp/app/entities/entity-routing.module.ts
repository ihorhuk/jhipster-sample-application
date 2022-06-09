import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'country',
        data: { pageTitle: 'jhipsterSampleApplicationApp.jhipsterSampleApplicationCountry.home.title' },
        loadChildren: () =>
          import('./jhipsterSampleApplication/country/country.module').then(m => m.JhipsterSampleApplicationCountryModule),
      },
      {
        path: 'currency',
        data: { pageTitle: 'jhipsterSampleApplicationApp.jhipsterSampleApplicationCurrency.home.title' },
        loadChildren: () =>
          import('./jhipsterSampleApplication/currency/currency.module').then(m => m.JhipsterSampleApplicationCurrencyModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
