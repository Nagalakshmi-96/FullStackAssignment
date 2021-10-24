import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagingService {
    getPager(totalItems: number, currentPage: number = 1, pageSize: number = 6)
    {
       let totalPages = Math.ceil(totalItems / pageSize);
       if (currentPage < 1) currentPage = 1;
       else if (currentPage > totalPages) currentPage = totalPages;

       let startIndex = (currentPage - 1) * pageSize;
       let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

       return {totalItems: totalItems,currentPage: currentPage,totalPages: totalPages,startIndex: startIndex,endIndex: endIndex};
   }

  constructor() { }
}
