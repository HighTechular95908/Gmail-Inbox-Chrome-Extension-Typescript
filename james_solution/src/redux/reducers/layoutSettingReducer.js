import { ActionTypes } from "../actions/Constants";

const initialState = {
  isFirstUse: true,
  Density_type: "Default",
  Density_imageUrl:
    "//ssl.gstatic.com/ui/v1/icons/mail/quicksettings/displaydensity/Default.png",
  Inbox_type: "Default",
  Inbox_imageUrl:
    "//ssl.gstatic.com/ui/v1/icons/mail/quicksettings/inboxtype/Classic.png",
  Reading_type: "No split",
  Reading_imageUrl:
    "//ssl.gstatic.com/ui/v1/icons/mail/quicksettings/previewpane/Previewpaneoff.png",
};

const layoutSettingReducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionTypes.FIRST_USE: {
      state = Object.assign({}, state, action.payload);
      console.log(JSON.stringify(state));
      localStorage.setItem("gmailLayoutStates", JSON.stringify(state));
      return state;
    }
    case ActionTypes.LAYOUT_CHANGE: {
      state = Object.assign({}, state, JSON.parse(action.payload));
      localStorage.setItem("gmailLayoutStates", JSON.stringify(state));
      return state;
    }
    case ActionTypes.LAYOUT_SAVE: {
        state = Object.assign({}, state, action.payload);
        localStorage.setItem("gmailLayoutStates", JSON.stringify(state));
        return state;
    }
    default:
      return state;
  }
};

export default layoutSettingReducer;
