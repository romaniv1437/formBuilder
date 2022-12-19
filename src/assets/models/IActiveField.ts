import {IStyles} from "./IStyle";

export interface IActiveField {
  name: string,
  id: string,
  options: IActiveFieldOptions
}
export interface IActiveFieldOptions {
  styles: IStyles,
  label: string,
  placeholder?: string,
  text?: string,
  required: boolean
}
