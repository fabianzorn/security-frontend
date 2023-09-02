import {ProgressBarService} from "./progress-bar.service";

describe('ProgressBarService', () => {

  it('initial no progress bar expected', () => {
    const progressBarService = new ProgressBarService();
    expect(progressBarService.active).toBeFalsy();
  });


});
