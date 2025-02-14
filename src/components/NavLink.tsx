"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = ({
  href,
  className,
  children,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`${className} ${
        isActive ? "text-[#5B71FF] bg-[#ECF3FF]" : ""
      }`}
    >
      {children}
    </Link>
  );
};
