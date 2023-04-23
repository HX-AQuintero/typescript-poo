import { BaseModel } from "./base.model";

export enum AccessType {
    PRIVATE = 'private',
    PUBLIC = 'public'
}
export interface Category extends BaseModel {
    id:         number;
    name:       string;
    image:      string;
    access?:    AccessType;
}