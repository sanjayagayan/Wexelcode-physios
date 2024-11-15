import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const validate = (values: any) => {
  const errors: any = {};
  
  if (!values.name) {
    errors.name = 'Name is required';
  }
  
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid';
  }
  
  if (!values.age) {
    errors.age = 'Age is required';
  }
  
  if (!values.phoneNumber) {
    errors.phoneNumber = 'Phone number is required';
  }
  
  if (!values.address) {
    errors.address = 'Address is required';
  }
  
  if (!values.country) {
    errors.country = 'Country is required';
  }

  if (!values.language) {
    errors.language = 'Language is required';
  }

  return errors;
};

interface PersonalInformationFormProps {
  initialData: {
    name: string;
    email: string;
    age: string;
    phoneNumber: string;
    address: string;
    pronouns: string;
  };
  onSave: (data: { name: string; email: string, age: string, phoneNumber: string, address: string, pronouns: string }) => void;
}

const PersonalInformationForm: React.FC<PersonalInformationFormProps> = ({ initialData, onSave }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Edit Personal Information</h3>
      <Formik
        initialValues={initialData}
        validate={validate}
        onSubmit={(values) => {
          onSave(values);
        }}
      >
        {({ setFieldValue, errors, touched }) => (
          <Form className="space-y-4">
            {/* Form fields with two-column layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Name:</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="border p-2 w-full"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Email:</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="border p-2 w-full"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="mb-4">
                <label htmlFor="age" className="block mb-2">Age:</label>
                <Field
                  type="number"
                  id="age"
                  name="age"
                  className="border p-2 w-full"
                />
                <ErrorMessage name="age" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block mb-2">Phone Number:</label>
                <PhoneInput
                  country={'us'}
                  value={initialData.phoneNumber}
                  onChange={(phone) => setFieldValue('phoneNumber', phone)}
                />
                <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="mb-4">
                <label htmlFor="address" className="block mb-2">Address:</label>
                <Field
                  as="textarea"
                  id="address"
                  name="address"
                  className="border p-2 w-full"
                />
                <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="mb-4">
                <label htmlFor="country" className="block mb-2">Country:</label>
                <Field
                  type="text"
                  id="country"
                  name="country"
                  className="border p-2 w-full"
                />
                <ErrorMessage name="country" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="mb-4">
                <label htmlFor="pronouns" className="block mb-2">Pronouns:</label>
                <Field
                  type="text"
                  id="pronouns"
                  name="pronouns"
                  className="border p-2 w-full"
                />
                <ErrorMessage name="country" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="mb-4">
                <label htmlFor="language" className="block mb-2">Language:</label>
                <Field
                  type="text"
                  id="language"
                  name="language"
                  className="border p-2 w-full"
                />
                <ErrorMessage name="language" component="div" className="text-red-500 text-sm" />
              </div>

            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-primary-color text-white rounded hover:bg-primary-color/80"
            >
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PersonalInformationForm;
