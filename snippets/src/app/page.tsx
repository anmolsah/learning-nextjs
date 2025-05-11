// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div>
//       <h1>Home</h1>
//       <div className="flex items-center justify-between text-blue-500">
//         <h1>Snippets </h1>
//         <Link href="/snippet/new">
//           <Button>New</Button>
//         </Link>
//       </div>
//     </div>
//   );
// }

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <div className="max-w-5xl mx-auto flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold text-gray-800">Snippets</h1>
        <Link href="/snippet/new">
          <Button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-900 transition cursor-pointer duration-200">
            New
          </Button>
        </Link>
        <Link href="/results">
          <Button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-900 transition cursor-pointer duration-200">
            All Snippets
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center mt-20">
        <h2 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          Welcome to Your Code Snippet Manager
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Store, manage, and reuse your favorite code snippets with ease and
          elegance.
        </p>
        <Link href="/snippet/new">
          <Button className="bg-black text-white px-8 py-3 text-lg rounded-md hover:bg-gray-900 transition duration-200">
            Create Your First Snippet
          </Button>
        </Link>
      </div>
    </div>
  );
}
