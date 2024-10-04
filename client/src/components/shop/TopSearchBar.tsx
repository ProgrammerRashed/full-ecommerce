"use client"
import { useState } from 'react'
import { ChevronDown, SlidersHorizontal } from 'lucide-react'
import FilterDrawerClient from "@/components/shop/FilterDrawer";
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TopSearchBar() {
  const [showCount, setShowCount] = useState('20')
  const [sortBy, setSortBy] = useState('Default')

  return (
    <div className="w-full py-4">
      {/* Desktop View */}
      <div className="hidden lg:flex justify-between items-center">
      <h4 className="font-bold mb-3">Showing 1 - 10 of 15 Products</h4>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Show:</span>
            <Select value={showCount} onValueChange={setShowCount}>
              <SelectTrigger className="w-[70px] outline-none focus:outline-none focus-within:outline-none focus-visible:outline-none">
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
                <SelectItem value="Price">Price</SelectItem>
                <SelectItem value="Name">Name</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex lg:hidden justify-between items-center">
        <FilterDrawerClient/>
        
        <h4 className="font-bold mb-3 text-base lg:text-lg">Showing 1 - 10 of 15</h4>
      </div>
    </div>
  )
}