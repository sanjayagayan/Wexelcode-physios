import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  image: Yup.mixed()
    .required('Image is required')
    .test('fileSize', 'File size is too large', (value) => {
      if (!value) return true;
      return value && value.size <= 5 * 1024 * 1024; // Max 5 MB
    })
    .test('fileType', 'Unsupported file format', (value) => {
      if (!value) return true;
      return value && ['image/jpeg', 'image/png', 'image/gif'].includes(value.type);
    }),
});

interface ImageUploadFormProps {
  initialData: {
    image: File | null;
  };
  onSave: (data: { image: File | null }) => void;
}

const ImageUploadForm: React.FC<ImageUploadFormProps> = ({ initialData, onSave }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageSize, setImageSize] = useState<string>('');

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setImageSize(formatFileSize(file.size));
    }
  };

  // Format file size to KB/MB
  const formatFileSize = (size: number) => {
    if (size < 1024) return `${size} bytes`;
    else if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
    else return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Upload Your Image</h3>
      <Formik
        initialValues={initialData}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          onSave(values);
        }}
      >
        {({ setFieldValue, errors, touched }) => (
          <Form className="space-y-4">
            {/* Image Upload Field */}
            <div className="mb-4">
              <label htmlFor="image" className="block mb-2">Select Image:</label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                className="border p-2 w-full"
                onChange={(e) => {
                  handleImageChange(e);
                  if (e.target.files) {
                    setFieldValue('image', e.target.files[0]);
                  }
                }}
              />
              <ErrorMessage name="image" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Image Preview */}
            {imagePreview && (
              <div className="mb-4">
                <h4 className="text-lg font-semibold">Image Preview:</h4>
                <img src={imagePreview} alt="Image Preview" className="w-48 h-48 object-cover mt-2" />
                <p className="mt-2">File size: {imageSize}</p>
              </div>
            )}

            <button
              type="submit"
              className="px-4 py-2 bg-primary-color text-white rounded hover:bg-primary-color/80"
            >
              Save Image
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ImageUploadForm;
