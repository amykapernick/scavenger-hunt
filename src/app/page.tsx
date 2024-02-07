import { SignIn, SignedOut, SignUp, SignedIn, UserButton, SignOutButton } from "@clerk/nextjs";

export default function Home ()
{
  return (
    <div>
      <h1>Scavenger Hunt!</h1>
      <SignedIn>
        <SignOutButton />
        <a href="/team">Manage Team</a>
      </SignedIn>
      <SignedOut>
        <SignIn />
      </SignedOut>
    </div>
  );
}
