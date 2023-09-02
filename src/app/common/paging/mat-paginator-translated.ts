import {MatPaginatorIntl} from "@angular/material/paginator";
import {TranslateService} from "@ngx-translate/core";

export class MatPaginatorTranslated extends MatPaginatorIntl {

  private rangeLabelIntl: string;

  constructor(private translateService: TranslateService) {
    super();
  }

  private getTranslations() {
    this.translateService.get([
      'paginator.items-per-page',
      'paginator.next-page',
      'paginator.previous-page',
      'paginator.range-of',
      'paginator.first-page',
      'paginator.last-page'
    ]).subscribe(translation => {
      this.itemsPerPageLabel = translation['paginator.items-per-page'];
      this.nextPageLabel = translation['paginator.next-page'];
      this.previousPageLabel = translation['paginator.previous-page'];
      this.rangeLabelIntl = translation['paginator.range-of'];
      this.firstPageLabel = translation['paginator.first-page'];
      this.lastPageLabel = translation['paginator.last-page'];
      this.changes.next();
    })
  }

  override getRangeLabel = (page: number, pageSize: number, length: number): string => {
    if (length === 0 || pageSize === 0) {
      return `0 ${this.rangeLabelIntl} ${length}`
    }
    length = Math.max(length, 0);
    const startIndex: number = page * pageSize;
    const endIndex: number = startIndex < length ?
      Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${startIndex - 1} - ${endIndex} ${this.rangeLabelIntl} ${length}`;
  }
}
