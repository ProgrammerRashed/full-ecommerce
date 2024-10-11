"use client";

import { useRouter } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

interface PaginationComponentProps {
  currentPage: number;
  totalItems: number;
  limit: number;
  sortBy: string;
}

export function PaginationComponent({
  currentPage,
  totalItems,
  limit,
  sortBy
}: PaginationComponentProps) {
  const totalPages = Math.ceil(totalItems / limit); // Calculate total pages
  const router = useRouter();

  const handlePageChange = async (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return; // Prevent out-of-bounds
    const skip = (newPage - 1) * limit;

    router.push(`?page=${newPage}&skip=${skip}&limit=${limit}&sortBy=${sortBy}`, { scroll: false });
  };

  const getPaginationItems = () => {
    const items = [];
    const showEllipsis = (condition: boolean) => condition ? <PaginationEllipsis key={`ellipsis-${Math.random()}`} /> : null; // Ensure unique key for ellipsis

    // Show first page
    if (totalPages > 1) {
      items.push(
        <PaginationItem key={1}>
          <PaginationLink onClick={() => handlePageChange(1)} isActive={currentPage === 1}>
            1
          </PaginationLink>
        </PaginationItem>
      );
    }

    // Show ellipsis if there are pages in between
    if (currentPage > 4) {
      items.push(showEllipsis(true));
    }

    // Show pages around the current page
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);
    for (let page = startPage; page <= endPage; page++) {
      items.push(
        <PaginationItem key={page}>
          <PaginationLink
            onClick={() => handlePageChange(page)}
            isActive={page === currentPage} // Set isActive for current page
          >
            {page}
          </PaginationLink>
        </PaginationItem>
      );
    }

    // Show ellipsis if there are pages in between
    if (currentPage < totalPages - 3) {
      items.push(showEllipsis(true));
    }

    // Show last page
    if (totalPages > 1) {
      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink onClick={() => handlePageChange(totalPages)} isActive={currentPage === totalPages}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <Pagination>
      <PaginationContent className="w-full flex justify-between">
        <PaginationItem>
          <PaginationPrevious
            onClick={() => handlePageChange(currentPage - 1)}
            className={currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}
          />
        </PaginationItem>
        <div className="lg:flex gap-2 hidden">
          {totalPages > 0 && getPaginationItems()}
        </div>
        <PaginationItem>
          <PaginationNext
            onClick={() => handlePageChange(currentPage + 1)}
            className={currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
