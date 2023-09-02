import {Injectable} from "@angular/core";
import {Configuration} from "./configuration.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ConfigurationService  {
  configuration: Configuration;

  constructor(private httpClient: HttpClient) {
  }

  async getConfiguration(): Promise<Configuration> {
    const configuration: Configuration = await this.httpClient
      .get<Configuration>('assets/app-config.ts')
      .toPromise();

    this.configuration = configuration;

    return configuration;
  }
}
