import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { FC } from "react";

interface PaginationSectionProps {
  page: number;
  count: number;
  limit: number;
  setPage: (page: number) => void;
}

const PaginationSection: FC<PaginationSectionProps> = ({
  page,
  count,
  limit,
  setPage,
}) => {
  const handleprev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handlenext = () => {
    const totalPages = Math.ceil(count / limit);

    if (page < totalPages) {
      setPage(page + 1);
    }
  };
  return (
    <section className="mt-8">
      <Pagination>
        <PaginationContent>
          {/* Button Prev */}
          <PaginationItem>
            <PaginationPrevious onClick={handleprev} />
          </PaginationItem>

          {/* Page  */}
          <PaginationItem>
            <PaginationLink>{page}</PaginationLink>
          </PaginationItem>

          {/* Button next  */}
          <PaginationItem>
            <PaginationNext onClick={handlenext} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};

export default PaginationSection;
