import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dictionary', pathMatch: 'full' },
  {
    path: 'dictionary',
    loadChildren: () =>
      import('./../pages/dictionary/dictionary.module').then(
        (m) => m.DictionaryModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramContainerRoutingModule {}
