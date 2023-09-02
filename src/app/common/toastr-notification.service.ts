import {Injectable} from "@angular/core";
import {ToastrService} from "ngx-toastr";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class ToastrNotificationService {

  private static readonly LOADING_SUCCESS_TITLE = 'notification.title.loading.success';
  private static readonly LOADING_ERROR_TITLE = 'notification.title.loading.error';
  private static readonly CREATION_SUCCESS_TITLE = 'notification.title.creation.success';
  private static readonly CREATION_ERROR_TITLE = 'notification.title.creation.error';
  private static readonly MODIFICATION_SUCCESS_TITLE = 'notification.title.modification.success';
  private static readonly MODIFICATION_ERROR_TITLE = 'notification.title.modification.error';
  private static readonly DELETION_SUCCESS_TITLE = 'notification.title.deletion.success';
  private static readonly DELETION_ERROR_TITLE = 'notification.title.deletion.error';
  private static readonly OPERATION_NOT_POSSIBLE_ERROR_TITLE = 'notification.title.operation.not-possible-error';

  constructor(private toastrService: ToastrService, private translateService: TranslateService) {
  }

  loadingSuccess(messageKey: string) {
    this.translateService.get([ToastrNotificationService.LOADING_SUCCESS_TITLE, messageKey]).subscribe(
      translations => {
        this.toastrService.success(
          translations[messageKey],
          translations[ToastrNotificationService.LOADING_SUCCESS_TITLE]
        );
      }
    )
  }

  loadingError(messageKey: string, status: string) {
    this.translateService.get([ToastrNotificationService.LOADING_ERROR_TITLE, messageKey]).subscribe(
      translations => {
        this.toastrService.error(
          String(translations[messageKey]).replace('{{status}}', status),
          translations[ToastrNotificationService.LOADING_ERROR_TITLE]
        );
      }
    )
  }

  creationSuccess(messageKey: string) {
    this.translateService.get([ToastrNotificationService.CREATION_SUCCESS_TITLE, messageKey]).subscribe(
      translations => {
        this.toastrService.success(
          translations[messageKey],
          translations[ToastrNotificationService.CREATION_SUCCESS_TITLE]
        );
      }
    )
  }

  creationError(messageKey: string, status: string) {
    this.translateService.get([ToastrNotificationService.CREATION_ERROR_TITLE, messageKey]).subscribe(
      translations => {
        this.toastrService.error(
          String(translations[messageKey]).replace('{{status}}', status),
          translations[ToastrNotificationService.CREATION_ERROR_TITLE]
        );
      }
    )
  }

  modificationSuccess(messageKey: string) {
    this.translateService.get([ToastrNotificationService.MODIFICATION_SUCCESS_TITLE, messageKey]).subscribe(
      translations => {
        this.toastrService.success(
          translations[messageKey],
          translations[ToastrNotificationService.MODIFICATION_SUCCESS_TITLE]
        );
      }
    )
  }

  modificationError(messageKey: string, status: string) {
    this.translateService.get([ToastrNotificationService.MODIFICATION_ERROR_TITLE, messageKey]).subscribe(
      translations => {
        this.toastrService.error(
          String(translations[messageKey]).replace('{{status}}', status),
          translations[ToastrNotificationService.MODIFICATION_ERROR_TITLE]
        );
      }
    )
  }

  deletionSuccess(messageKey: string) {
    this.translateService.get([ToastrNotificationService.DELETION_SUCCESS_TITLE, messageKey]).subscribe(
      translations => {
        this.toastrService.success(
          translations[messageKey],
          translations[ToastrNotificationService.DELETION_SUCCESS_TITLE]
        );
      }
    )
  }

  deletionError(messageKey: string, status: string) {
    this.translateService.get([ToastrNotificationService.DELETION_ERROR_TITLE, messageKey]).subscribe(
      translations => {
        this.toastrService.error(
          String(translations[messageKey]).replace('{{status}}', status),
          translations[ToastrNotificationService.DELETION_ERROR_TITLE]
        );
      }
    )
  }

  operationNotPossibleError(messageKey: string) {
    this.translateService.get([ToastrNotificationService.OPERATION_NOT_POSSIBLE_ERROR_TITLE, messageKey]).subscribe(
      translations => {
        this.toastrService.error(
          translations[messageKey],
          translations[ToastrNotificationService.OPERATION_NOT_POSSIBLE_ERROR_TITLE]
        );
      }
    )
  }
}
