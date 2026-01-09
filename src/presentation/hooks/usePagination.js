import { useState, useEffect } from "react";
import { PaginationService } from "../../data/services/paginationService";

const ITEMS_PER_PAGE = 12;

export const usePagination = (items, dependencies = []) => {
  const [currentPage, setCurrentPage] = useState(1);
  const paginationService = new PaginationService(ITEMS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, dependencies);

  const totalPages = paginationService.getTotalPages(items.length);
  const currentItems = paginationService.getPageItems(items, currentPage);
  const hasNext = paginationService.hasNextPage(currentPage, totalPages);
  const hasPrevious = paginationService.hasPreviousPage(currentPage);

  const nextPage = () => {
    if (hasNext) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const previousPage = () => {
    if (hasPrevious) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return {
    currentPage,
    totalPages,
    currentItems,
    hasNext,
    hasPrevious,
    nextPage,
    previousPage,
  };
};

