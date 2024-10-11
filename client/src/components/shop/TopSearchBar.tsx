"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react';
import FilterDrawerClient from "@/components/shop/FilterDrawer";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function TopSearchBar() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [showCount, setShowCount] = useState(searchParams.get('limit') || '10');
  const [sortBy, setSortBy] = useState(searchParams.get('sortBy') || 'Default');

  // Update the URL query params when filters change
  useEffect(() => {
    const queryParams = new URLSearchParams(searchParams.toString());
    queryParams.set('limit', showCount);
    queryParams.set('sortBy', sortBy);

    router.push(`?${queryParams.toString()}`);
  }, [showCount, sortBy, router, searchParams]);

  return (
    <div className="w-full py-4">
      {/* Desktop View */}
      <div className="hidden lg:flex justify-between items-center">
        <h4 className="font-bold mb-3">Showing 1 - 10 of 15 Products</h4>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Show:</span>
            <Select value={showCount} onValueChange={setShowCount}>
              <SelectTrigger className="w-[70px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Sort By:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[120px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Default">Default</SelectItem>
                <SelectItem value="price">Price</SelectItem>
                <SelectItem value="Name">Name</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex lg:hidden justify-between items-center">
        <FilterDrawerClient />
        <h4 className="font-bold mb-3 text-base lg:text-lg">Showing 1 - 10 of 15</h4>
      </div>
    </div>
  );
}
