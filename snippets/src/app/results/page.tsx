// import { Button } from "@/components/ui/button";
// import { prisma } from "@/lib/prisma";
// import Link from "next/link";

// export default async function ResultPage() {
//   const snippets = await prisma.snippet.findMany();
//   //   if(!snippets)
//   return (
//     <div>
//       {snippets.map((snippet) => (
//         <div key={snippet.id}>
//           <h1>{snippet.title}</h1>
//           <Link href={`/snippet/${snippet.id}`}>
//             <Button className="bg-black text-white px-8 py-3 text-lg rounded-md hover:bg-gray-900 transition duration-200">
//               View
//             </Button>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }


import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function ResultPage() {
  const snippets = await prisma.snippet.findMany();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-100 to-purple-200 px-6 py-10">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">All Snippets</h1>
        <p className="text-lg text-gray-600 mt-2">Explore, view, and manage your saved code snippets.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {snippets.map((snippet) => (
          <div
            key={snippet.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{snippet.title}</h2>
              <p className="text-sm text-gray-600 mb-6">{snippet.code.substring(0, 150)}...</p>
              <Link href={`/snippet/${snippet.id}`}>
                <Button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-900 transition duration-200">
                  View
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
