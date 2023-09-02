import {APP_INITIALIZER, NgModule} from "@angular/core";
import {ConfigurationService} from "./configuration/configuration.service";
import {Configuration} from "./configuration/configuration.model";
import {ProgressBarService} from "./progress-bar.service";
import {ToastrNotificationService} from "./toastr-notification.service";
import {MatPaginatorIntl} from "@angular/material/paginator";
import {MatPaginatorTranslated} from "./paging/mat-paginator-translated";
import {TranslateService} from "@ngx-translate/core";

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeConfiguration,
      deps: [ConfigurationService],
      multi: true
    },
    {
      provide: MatPaginatorIntl,
      useClass: MatPaginatorTranslated,
      deps: [TranslateService]
    },
    ProgressBarService,
    ToastrNotificationService
  ]
})
export class CommonModule {

}
export function initializeConfiguration(
  configurationService: ConfigurationService
): () => Promise<Configuration> {
  return () => configurationService.getConfiguration();
}

