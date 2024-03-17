import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
     <div className="flex flex-col gap-y-4">
      <div>
      this screen for auth users only
      </div>
      <div className="">
        <UserButton />
      </div>
     </div>
  );
}

