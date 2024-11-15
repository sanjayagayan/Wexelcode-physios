import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { MdOutlineFileUpload } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";

interface FileWithPreview extends File {
  preview: string;
}

const FileUpload: React.FC = () => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const removeFile = (file: FileWithPreview) => {
    const newFiles = files.filter(f => f !== file);
    setFiles(newFiles);
    URL.revokeObjectURL(file.preview);
  };

  const uploadFiles = () => {
    // Implement your file upload logic here
    // This can be an API call to a backend server to upload files
    console.log("Files to upload:", files);
  };

  return (
    <div className="max-w-full mx-auto bg-white rounded-lg overflow-hidden flex justify-between mt-12 gap-x-6">
      <div
        {...getRootProps()}
        className={`p-8 flex-1 w-2/5 text-center cursor-pointer border-2 border-dashed my-10 rounded-lg ${
          isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
      >
        <input {...getInputProps()} />
        <div className="mt-1 text-sm text-gray-600 flex flex-col justify-center items-center">
          <MdOutlineFileUpload className="text-primary-color w-20 h-20" />
          <p className="text-2xl font-semibold">Drag and drop file</p>
          <span className="text-xl">or</span>
          <button className="bg-primary-color px-10 py-2 rounded-md text-white w-[50%] mt-10">
            Browse
          </button>
        </div>
      </div>
      <div className="flex-1 w-3/5">
        <ul className="divide-y divide-gray-200 px-6 flex flex-col">
          {files.map((file) => (
            <li key={file.name} className="py-3 flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-900">{file.name}</span>
                <span className="ml-2 flex-shrink-0 text-xs text-gray-500">
                  {(file.size / 1024).toFixed(2)} KB
                </span>
              </div>
              <button
                onClick={() => removeFile(file)}
                className="ml-4 text-sm font-medium text-red-600 hover:text-red-500"
              >
                <IoCloseOutline className="w-6 h-6" />
              </button>
            </li>
          ))}
        </ul>
        
      </div>
    </div>
  );
};

export default FileUpload;
