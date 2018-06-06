import { IUser } from "./user";

export interface IEmployer {
    id: number,
    telephoneNo: string,
    companyName: string,
    accessExpiryDate: string,
    isAuthorized: boolean,
    user: IUser
}