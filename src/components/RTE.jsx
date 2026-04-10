import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
import conf from "../conf/conf.js";

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-2 inline-block pl-1 text-sm font-medium text-slate-200">
          {label}
        </label>
      )}

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg">
        <Controller
          name={name || "content"}
          control={control}
          render={({ field: { onChange } }) => (
            <Editor
              apiKey={conf.tinymceId}
              initialValue={defaultValue}
              init={{
                initialValue: defaultValue,
                height: 500,
                menubar: true,
                plugins: [
                  "image",
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                  "anchor",
                ],
                toolbar:
                  "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; line-height:1.6 }",
                skin: "oxide-dark",
                content_css: "dark",
              }}
              onEditorChange={onChange}
            />
          )}
        />
      </div>
    </div>
  );
}
