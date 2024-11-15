export default interface User{
    id: string;
    name: string;
    gender: "MALE" | "FEMALE";
    birthDay: string;
    profilePictureUrl: string;
}