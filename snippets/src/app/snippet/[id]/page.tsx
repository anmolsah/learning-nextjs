// import { prisma } from '@/lib/prisma';
// import { Button } from "@/components/ui/button";
// import React from 'react'

// const SnippetDetailsPage = async({params}:{params:Promise<{id:string}>}) => {
//   const id = parseInt((await params).id);
//   const snippet = await prisma.snippet.findUnique({
//     where:{
//       id
//     }
//   })

//   if(!snippet) <h1>Snippet not Found </h1>

//   return (
//     <div>
//       <div>
//         <h1>{snippet.title}</h1>
//         <div>
//           <Button>Edit</Button>
//         <Button variant={'destructive'}>Delete</Button>

//         </div>
//       </div>
//       <pre>
//         <code>
//           {snippet.code}
//         </code>
//       </pre>

//     </div>
//   )
// }

// export default SnippetDetailsPage



import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

const SnippetDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = parseInt((await params).id);
  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });

  if (!snippet) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-semibold text-gray-700">Snippet Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-100 to-purple-200 px-6 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">{snippet.title}</h1>
          <div className="space-x-4 cursor-pointer">
            <Link href={`/snippet/${snippet.id}/edit`}>
            <Button>Edit</Button>
            </Link>
            <Link href=""><Button variant={"destructive"}>Delete</Button></Link>
          </div>
        </div>

        
        <div className="bg-gray-900 text-green-300 text-sm p-6 rounded-md overflow-auto">
          <pre>
            <code>{snippet.code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default SnippetDetailsPage;
