import { router } from "@inertiajs/react";
import parse from "html-react-parser";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/Components/ui/pagination";

const PaginationNav = ({ links, currentPage, setCurrentPage }: any) => {
  const handlePageChange = (url: any) => {
    const pageParam = new URL(url).searchParams.get("page");
    setCurrentPage(pageParam);
    router.get(url, { preserveState: true });
  };

  return (
    <Pagination>
      <PaginationContent>
        {links.map((link: any, i: any) => (
          <PaginationItem key={i}>
            {link.label == "pagination.previous" ? (
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(link.url);
                }}
              />
            ) : link.label == "pagination.next" ? (
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(link.url);
                }}
              />
            ) : (
              <PaginationLink
                isActive={link.active}
                href="#"
                className="cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(link.url);
                }}
              >
                {parse(link.label)}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationNav;
