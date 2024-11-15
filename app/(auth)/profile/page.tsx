import Head from 'next/head';
import Profile from "modules/profile/Profile";

export default function page() {
  const profileData = {
    name: 'Stevan Dux',
    age: 56,
    country: 'Germany',
    languages: 'English, German',
    phoneNumber: '+49 2387428345',
    address: 'Straße 00, 80689 Munich',
    email: 'email@gmail.com',
    dob: '03/04/1966',
    gender: 'Male',
    weight: 79,
    height: 170,
    activityLevel: 'Sedentary',
    creditCard: 'XXXX-XXXX-XXXX-XXXX',
    tokens: 3,
    screeningProgress: 75
  };
  return (
    <div>
      <Head>
        <title>Profile</title>
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen py-2 ">
        <Profile {...profileData} />
      </main>
    </div>
  );
}
