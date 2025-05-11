// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import React from "react";

// const CreateSnippetPage = () => {
//   return (
//     <form>
//       <div>
//         <Label>Title</Label>
//         <Input type="text" name="title" id="title" />
//       </div>
//       <div>
//         <Label>Code</Label>
//         <Textarea name="title" id="title"></Textarea>
//       </div>
//       <Button type="submit" className="mb-4">New</Button>
//     </form>
//   );
// };

// export default CreateSnippetPage;

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import React from "react";

const CreateSnippetPage = () => {
  async function createSnippet(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    const snippet = await prisma.snippet.create({
      data: {
        title,
        code,
      },
    });

    console.log("Snippet created:", snippet);
    redirect("/results");
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-3xl p-8 shadow-xl rounded-xl bg-white border border-gray-200">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          Create New Snippet
        </h1>
        <form action={createSnippet} className="space-y-6">
          <div className="space-y-2">
            <Label
              htmlFor="title"
              className="text-base font-medium text-gray-700"
            >
              Title
            </Label>
            <Input
              type="text"
              name="title"
              id="title"
              placeholder="Enter snippet title"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="code"
              className="text-base font-medium text-gray-700"
            >
              Code
            </Label>
            <Textarea
              name="code"
              id="code"
              placeholder="Enter your code here"
              rows={10}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg font-mono focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-black text-white text-lg py-3 rounded-lg hover:bg-gray-900 transition duration-200"
          >
            Create Snippet
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateSnippetPage;
