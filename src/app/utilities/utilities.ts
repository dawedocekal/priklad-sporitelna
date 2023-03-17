import { InputErrorsType } from "../types/types";
import { SPORITELNA_SESSION_KEY } from "../constants/constants";
import { ChangeEvent } from "react";
import { SelectChangeEvent } from "@mui/material";

export const rewriteSessionStorageItem = (event: ChangeEvent<HTMLInputElement> | SelectChangeEvent) => {
  const sessionStorageData = getDataFromSessionStorage();
  const updatedSessionData = Object.assign({}, sessionStorageData, { [event.target.name]: event.target.value })

  sessionStorage.setItem(SPORITELNA_SESSION_KEY, JSON.stringify(updatedSessionData))
}

export const getDataFromSessionStorage = (key : string = SPORITELNA_SESSION_KEY) => {
  return JSON.parse(sessionStorage.getItem(key) || '{}');
};

export const getErrorHelperText = ({ type }: InputErrorsType): string | undefined => {
  let errorHelperText;
  switch (type) {
    case 'required':
      errorHelperText = 'Toto pole je povinné';
      break;
    case 'min':
      errorHelperText = 'Pole musí být číslo větší nebo rovno 18';
      break;
    case 'pattern':
      errorHelperText = 'Zadejte do pole správný tvar';
      break;
  }

  return errorHelperText;
};
