import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {

  private static readonly MIN_PROGRESS_VALUE = 0;
  private static readonly MAX_PROGRESS_VALUE = 100;

  active: boolean = false;
  mode: number = 0;

  progressValue = ProgressBarService.MIN_PROGRESS_VALUE;

  public startIndeterminateProgressbar() {
    this.active = true;
    this.mode = 0;
  }

  public startDeterminateProgressbar() {
    this.active = true;
    this.mode = 1;

    this.progressValue = ProgressBarService.MIN_PROGRESS_VALUE;
  }

  public increaseProgressValue(value: number): void {
    this.progressValue =
      Math.max(ProgressBarService.MIN_PROGRESS_VALUE,
      Math.min(ProgressBarService.MAX_PROGRESS_VALUE, this.progressValue + value));
  }

  public complete(): void {
    this.active = false;
    this.progressValue = ProgressBarService.MAX_PROGRESS_VALUE;
  }
}
