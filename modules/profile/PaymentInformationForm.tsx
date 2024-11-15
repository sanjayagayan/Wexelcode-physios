import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  creditCardNumber: Yup.string()
    .matches(
      /^4[0-9]{12}(?:[0-9]{3})?$/, 
      'Invalid credit card number'
    )  // Basic validation for Visa cards (change the pattern for other card types)
    .required('Credit card number is required'),
  tokens: Yup.number()
    .required('Tokens are required')
    .positive('Tokens must be a positive number')
    .integer('Tokens must be an integer'),
});

interface PaymentInformationFormProps {
  initialData: {
    creditCardNumber: string;
    tokens: number;
  };
  onSave: (data: { creditCardNumber: string; tokens: number }) => void;
}

const PaymentInformationForm: React.FC<PaymentInformationFormProps> = ({ initialData, onSave }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Payment Information</h3>
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
              {/* Credit Card Number */}
              <div className="mb-4">
                <label htmlFor="creditCardNumber" className="block mb-2">Credit Card Number:</label>
                <Field
                  type="text"
                  id="creditCardNumber"
                  name="creditCardNumber"
                  className="border p-2 w-full"
                  placeholder="Enter your credit card number"
                />
                <ErrorMessage name="creditCardNumber" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Tokens */}
              <div className="mb-4">
                <label htmlFor="tokens" className="block mb-2">Tokens:</label>
                <Field
                  type="number"
                  id="tokens"
                  name="tokens"
                  className="border p-2 w-full"
                  placeholder="Enter the number of tokens"
                />
                <ErrorMessage name="tokens" component="div" className="text-red-500 text-sm" />
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

export default PaymentInformationForm;
