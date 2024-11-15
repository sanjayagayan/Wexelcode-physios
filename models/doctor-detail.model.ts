import User from "./user.model";

export default interface DoctorDetail {
  id: string;
  user: User;
  specialty: string;
  hourlyRate: number;
  description?: string;
}
