import { MatPaginatorIntl } from '@angular/material/paginator';

const csRangeLabel = (page: number, pageSize: number, length: number) => {
  if (length == 0 || pageSize == 0) { return `0 z ${length}`; }

  length = Math.max(length, 0);

  const startIndex = page * pageSize;

  // If the start index exceeds the list length, do not try and fix the end index to the end.
  const endIndex = startIndex < length ?
    Math.min(startIndex + pageSize, length) :
    startIndex + pageSize;

  return `${startIndex + 1} - ${endIndex} z ${length}`;
}


export function getCsPaginatorIntl() {
  const paginatorIntl = new MatPaginatorIntl();

  paginatorIntl.itemsPerPageLabel = 'Výsledků na stránku:';
  paginatorIntl.nextPageLabel = 'Další strana';
  paginatorIntl.previousPageLabel = 'Předchozí strana';
  paginatorIntl.getRangeLabel = csRangeLabel;

  return paginatorIntl;
}
