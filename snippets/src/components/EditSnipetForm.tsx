"use client";
import { Editor } from "@monaco-editor/react";
import React from "react";

const EditSnipetForm = () => {
  return (
    <div>
      <Editor
        height="40vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default EditSnipetForm;
