
import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignUpButton, SignInButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Link  from "next/link";
import Image from "next/image";

export default function Home() {
return(
  <div className="max-w-[988px] max-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-4 ">
    <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
      <Image src="/hero.png" fill alt="Hero" />
    </div>
    <div className="flex flex-col items-center gap-y-8 ">
      <h1 className="text-lg lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
        Learn, practice, and master your Finance with Finance-cap.
      </h1>
      <div>
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedOut>
            <SignUpButton mode="modal">
              <Button size="lg" variant="secondary" className="w-full" >
                Get Started
              </Button>
            </SignUpButton>
            <SignInButton mode="modal">
              <Button size="lg" variant="primaryOutline" className="w-full" >
                I already have an account
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Button size="lg" variant="secondary" className="w-full" asChild>
              <Link href="/learn">
                Continue Learning
              </Link>
            </Button>
          </SignedIn>
        </ClerkLoaded>
      </div>
    </div>
  </div>
) 
}
