import { ICrudProps } from "./ICrudProps";

export interface ICrudState {
    items: ICrudProps[];
    newItemTitle: string;
    newItemPosition: string;
    showAddForm: boolean;
    SuccessMessage:string;
    readAllClicked: boolean;
    selectedItemId: number | null;
    showUpdateForm: boolean
  }

 