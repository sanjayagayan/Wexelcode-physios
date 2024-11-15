import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  dateOfBirth: Yup.date().required('Date of birth is required'),
  age: Yup.number().required('Age is required').positive().integer(),
  gender: Yup.string().required('Gender is required'),
  weight: Yup.number().required('Weight is required').positive(),
  height: Yup.number().required('Height is required').positive(),
  activityLevel: Yup.string().required('Activity level is required'),
});

interface MedicalInformationFormProps {
  initialData: {
    dateOfBirth: Date;
    age: number;
    gender: string;
    weight: number;
    height: number;
    activityLevel: string;
  };
  onSave: (data: { dateOfBirth: Date; age: number; gender: string; weight: number; height: number; activityLevel: string }) => void;
}

const MedicalInformationForm: React.FC<MedicalInformationFormProps> = ({ initialData, onSave }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Edit Medical Information</h3>
      <Formik
        initialValues={initialData}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          onSave(values);
        }}
      >
        {({ setFieldValue, errors, touched }) => (
          <Form className="space-y-4">
            {/* Form fields with two-column layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="dateOfBirth" className="block mb-2">Date of Birth:</label>
                <Field
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  className="border p-2 w-full"
                />
                <ErrorMessage name="dateOfBirth" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="mb-4">
                <label htmlFor="age" className="block mb-2">Age:</label>
                <Field
                  type="number"
                  id="age"
                  name="age"
                  className="border p-2 w-full"
                  placeholder="Enter your age"
                />
                <ErrorMessage name="age" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="mb-4">
                <label htmlFor="gender" className="block mb-2">Gender:</label>
                <Field as="select" id="gender" name="gender" className="border p-2 w-full">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </Field>
                <ErrorMessage name="gender" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="mb-4">
                <label htmlFor="weight" className="block mb-2">Weight (kg):</label>
                <Field
                  type="number"
                  id="weight"
                  name="weight"
                  className="border p-2 w-full"
                  placeholder="Enter your weight in kg"
                />
                <ErrorMessage name="weight" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="mb-4">
                <label htmlFor="height" className="block mb-2">Height (cm):</label>
                <Field
                  type="number"
                  id="height"
                  name="height"
                  className="border p-2 w-full"
                  placeholder="Enter your height in cm"
                />
                <ErrorMessage name="height" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="mb-4">
                <label htmlFor="activityLevel" className="block mb-2">Activity Level:</label>
                <Field as="select" id="activityLevel" name="activityLevel" className="border p-2 w-full">
                  <option value="">Select Activity Level</option>
                  <option value="Sedentary">Sedentary</option>
                  <option value="Lightly Active">Lightly Active</option>
                  <option value="Moderately Active">Moderately Active</option>
                  <option value="Very Active">Very Active</option>
                </Field>
                <ErrorMessage name="activityLevel" component="div" className="text-red-500 text-sm" />
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

export default MedicalInformationForm;
