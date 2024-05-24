import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface ICrudProps {
  Id: number;
  Title: string;
  Position: string;
  spcontext:WebPartContext;

}
