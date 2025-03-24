"use client"

import Link from "next/link"
import { useState } from "react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react';
import { Span } from "next/dist/trace"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b">
      <Link className="flex items-center justify-center font-bold text-lg" href="/">
        VectoBase
      </Link>

      {/* Desktop Menu - Hidden on mobile */}
      <nav className="hidden md:flex items-center gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/downloads">
          Downloads
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/documentation">
          Documentation
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/license">
          License
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/community">
          Community
        </Link>
        <div className="border-l pl-6 flex items-center gap-4">
          <Link href="/login">
            <Button variant="outline" size="sm">
              Log in
            </Button>
          </Link>
          <Link href="/register">
            <Button size="sm">Sign up</Button>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Button - Visible only on mobile */}
      <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
        <span className="sr-only">Open menu</span>
        <Menu />
      </Button>

      {/* Mobile Menu Sheet - Controlled by state */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="right" className="w-[340px] sm:w-[360px]">
          <SheetHeader className="mb-4">
            <SheetTitle>VectoBase</SheetTitle>
            <SheetDescription>Vector database for AI applications</SheetDescription>
          </SheetHeader>
          <nav className="flex flex-col gap-4 mx-4">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="/downloads"
              onClick={() => setMobileMenuOpen(false)}
            >
              Downloads
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="/documentation"
              onClick={() => setMobileMenuOpen(false)}
            >
              Documentation
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="/#license"
              onClick={() => setMobileMenuOpen(false)}
            >
              License
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="/community"
              onClick={() => setMobileMenuOpen(false)}
            >
              Community
            </Link>
            <div className="border-t pt-4 mt-2 flex flex-col gap-2">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  Log in
                </Button>
              </Link>
              <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full">Sign up</Button>
              </Link>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}

