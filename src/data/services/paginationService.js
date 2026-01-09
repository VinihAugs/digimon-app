export class PaginationService {
  constructor(itemsPerPage = 12) {
    this.itemsPerPage = itemsPerPage;
  }

  getTotalPages(totalItems) {
    return Math.ceil(totalItems / this.itemsPerPage);
  }

  getPageItems(items, currentPage) {
    const startIndex = (currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return items.slice(startIndex, endIndex);
  }

  hasNextPage(currentPage, totalPages) {
    return currentPage < totalPages;
  }

  hasPreviousPage(currentPage) {
    return currentPage > 1;
  }
}

