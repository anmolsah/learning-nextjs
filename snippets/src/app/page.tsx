import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div className="flex items-center justify-between text-blue-500">
        <h1>Snippets </h1>
        <Link href="/snippet/new">
          <Button>New</Button>
        </Link>
      </div>
    </div>
  );
}
