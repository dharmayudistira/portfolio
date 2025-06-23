import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";

interface BreadcrumbProps {
  parentPage: string;
  currentPage: string;
}

export const Breadcrumb = ({ parentPage, currentPage }: BreadcrumbProps) => {
  const parentPageUrl = parentPage.toLowerCase().replace(" ", "-");
  return (
    <nav className="flex items-center space-x-2 text-sm">
      <Link
        href={`/${parentPageUrl}`}
        className="text-secondary-light hover:text-primary"
      >
        {parentPage}
      </Link>
      <HiChevronRight className="text-gray-400" />
      <span className="text-[var(--color-primary)] font-medium">
        {currentPage}
      </span>
    </nav>
  );
};
