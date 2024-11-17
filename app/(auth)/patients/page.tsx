import PatientDetail from "modules/patients/PatientDetail";

export default function page() {
  
  return (
    <div>
      <main>
            <PatientDetail
            name="John Doe"
            age={30}
            gender="Male"
            languages={['English', 'Spanish']}
            screeningResult="Normal"
            dateOfBirth="1994-05-14"
            salutation="Mr."
            lastAppointment="2024-10-15"
            nextAppointment="2024-11-10"
            email="johndoe@example.com"
            weight="75 kg"
            height="180 cm"
            activityLevel="Moderate"
            />
      </main>
    </div>
  );
}


