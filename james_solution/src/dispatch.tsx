import { useSelector, useDispatch } from "react-redux";
import { ActionTypes } from "./redux/actions/Constants";
import {
  getDensitySettingsSelector,
  getDensityContentSelector,
  getDensityImageSelector,
  getInboxTypeSettingsSelector,
  getInboxTypeContentSelector,
  getInboxTypeImageSelector,
  getReadingPaneSettingsSelector,
  getReadingPaneContentSelector,
  getReadingPaneImageSelector,
} from "./functions";

let Density_type: string = "";
let Density_imageUrl: string = "";

let Inbox_type: string = "";
let Inbox_imageUrl: string = "";

let Reading_type: string = "";
let Reading_imageUrl: string = "";

let Density_typeArray: any = null;
let Inbox_typeArray: any = null;
let Reading_typeArray: any = null;

export const storeCurrentStates = (): any => {

  Density_typeArray = getDensitySettingsSelector();
  Inbox_typeArray = getInboxTypeSettingsSelector();
  Reading_typeArray = getReadingPaneSettingsSelector();


  for (let i = 0; i < Density_typeArray.length; i++) {
    console.log("for ==================");
    if (Density_typeArray[i].checked === true) {
      Density_type = getDensityContentSelector()[i].textContent;
      Density_imageUrl = getDensityImageSelector()[i].src;
      console.log('density=============', Density_type);
    }
  }
  for (let i = 0; i < Inbox_typeArray.length; i++) {
    console.log("for ==================");

    if (Inbox_typeArray[i].checked === true) {
      Inbox_type = getInboxTypeContentSelector()[i].textContent;
      Inbox_imageUrl = getInboxTypeImageSelector()[i].src;
    }
  }
  for (let i = 0; i < Reading_typeArray.length; i++) {
    console.log("for ==================");

    if (Reading_typeArray[i].checked === true) {
      Reading_type = getReadingPaneContentSelector()[i].textContent;
      Reading_imageUrl = getReadingPaneImageSelector()[i].src;
    }
  }

  //redux dispatch and local storage.
  let obj = {
    isFirstUse: false,
    Density_type: Density_type,
    Density_imageUrl: Density_imageUrl,
    Inbox_type: Inbox_type,
    Inbox_imageUrl: Inbox_imageUrl,
    Reading_type: Reading_type,
    Reading_imageUrl: Reading_imageUrl,
  }
  return (dispatch: any, getState: any) => {
    dispatch({
      type: ActionTypes.LAYOUT_SAVE,
      payload: obj
    });

  }

}

export const firstUseExtension = (): any => {
  return (dispatch: any, getState: any) => {
    dispatch({
      type: ActionTypes.FIRST_USE,
      payload: { isFirstUse: true }
    })
  }
}

export const secondUseExtension = (): any => {
  let initialLayoutState: any = localStorage.getItem("gmailLayoutStates");

  return (dispatch: any, getState: any) => {
    dispatch({
      type: ActionTypes.LAYOUT_CHANGE,
      payload: initialLayoutState
    })
  }
}




