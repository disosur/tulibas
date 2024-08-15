"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";

function PriceBox() {
  return (
    <div className="p-14 bg-red-900 rounded-lg">
      <p>20,000</p>
    </div>
  );
}

export default function ListView() {
  return (
    <div className="flex flex-col items-center space-y-8">
      <p className="flex flex-col items-center">
        <span>Yearly goal:</span>
        <span>20,000</span>
      </p>
      <div className="flex space-x-2">
        <PriceBox />
        <PriceBox />
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2024</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2025</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <ScrollArea className="w-screen h-96 border">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="p-4 w-full text-left bg-gray-200">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-gray-100">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ScrollArea>
      <Button className="fixed right-4 bottom-4 p-14 rounded-full">A</Button>
    </div>
  );
}
