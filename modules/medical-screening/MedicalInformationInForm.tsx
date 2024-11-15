"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface MedicalInfo {
  dateOfBirth: string;
  gender: string;
  height: string;
  heightUnit: string;
  weight: string;
  weightUnit: string;
  occupation: string;
  sportsActivities: string;
}

interface MedicalInformationInFormProps {
  formik: any;
}

const MedicalInformationInForm: React.FC<MedicalInformationInFormProps> = ({ formik }) => {

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full flex justify-center items-center">
        <div className="xl:w-[70%] md:w-full w-full">
          <form onSubmit={formik.handleSubmit}>
            <div className="sm:space-y-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-10 gap-x-0 gap-y-4">
                <div>
                  <label className="block text-sm font-medium">
                    Date of birth *
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formik.values.dateOfBirth}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-[12px] text-[#020202]/50"
                  />
                  {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
                    <div className="text-red-500 text-sm">
                      {formik.errors.dateOfBirth}
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    Biological gender *
                  </label>
                  <div className="mt-1 flex space-x-4 w-full bg-white border border-gray-300 rounded-md p-[12px] justify-between items-center px-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formik.values.gender === "Male"}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-radio"
                      />
                      <span className="ml-2">Male</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formik.values.gender === "Female"}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-radio"
                      />
                      <span className="ml-2">Female</span>
                    </label>
                  </div>
                  {formik.touched.gender && formik.errors.gender && (
                    <div className="text-red-500 text-sm">
                      {formik.errors.gender}
                    </div>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-10 gap-x-0 gap-y-4">
                <div>
                  <label className="block text-sm font-medium">Height *</label>
                  <div className="flex">
                    <input
                      type="text"
                      name="height"
                      value={formik.values.height}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-[12px] text-[#020202]/50"
                    />
                    {formik.touched.height && formik.errors.height && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.height}
                      </div>
                    )}
                    <div className="flex items-center ml-2 space-x-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="heightUnit"
                          value="cm"
                          checked={formik.values.heightUnit === "cm"}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="form-radio"
                        />
                        <span className="ml-1">cm</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="heightUnit"
                          value="in"
                          checked={formik.values.heightUnit === "in"}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="form-radio"
                        />
                        <span className="ml-1">in</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium">Occupation *</label>
                  <input
                    type="text"
                    name="occupation"
                    value={formik.values.occupation}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-[12px] text-[#020202]/50"
                  />
                  {formik.touched.occupation && formik.errors.occupation && (
                    <div className="text-red-500 text-sm">
                      {formik.errors.occupation}
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium">Weight *</label>
                  <div className="flex">
                    <input
                      type="text"
                      name="weight"
                      value={formik.values.weight}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-[12px] text-[#020202]/50"
                    />
                    {formik.touched.weight && formik.errors.weight && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.weight}
                      </div>
                    )}
                    <div className="flex items-center ml-2 space-x-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="weightUnit"
                          value="Kg"
                          checked={formik.values.weightUnit === "Kg"}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="form-radio"
                        />
                        <span className="ml-1">Kg</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="weightUnit"
                          value="lbs"
                          checked={formik.values.weightUnit === "lbs"}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="form-radio"
                        />
                        <span className="ml-1">lbs</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    List of sports and/or activities you participate in:
                  </label>
                  <textarea
                    name="sportsActivities"
                    value={formik.values.sportsActivities}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-[12px] text-[#020202]/50"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MedicalInformationInForm;
