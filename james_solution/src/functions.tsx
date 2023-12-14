export function getGmailSettingsParentContainerSelector(): string {
  return ".aUx";
}
export function getSettingsDivSelector(): string {
  return ".IU";
}
export function getSettingsButtonSelector(): string {
  return '.FI[data-tooltip="Settings"]';
}

export function getDensitySettingsSelector(): any {
  return document.querySelectorAll<HTMLInputElement>('.Q3[jscontroller="BoAVhd"] .QX [name="PTEbIb"]');
}
export function getDensityContentSelector(): any {
  return document.querySelectorAll<HTMLInputElement>('.Q3[jscontroller="BoAVhd"] .QX .Vk.Q2');
}
export function getDensityImageSelector(): any {
  return document.querySelectorAll<HTMLInputElement>('.Q3[jscontroller="BoAVhd"] .QX .QZ');
}

export function getInboxTypeSettingsSelector(): any {
  return document.querySelectorAll<HTMLInputElement>('.Q3[jscontroller="QPw6E"] .Vn [name="v3knSb"]');
}
export function getInboxTypeContentSelector(): any {
  return document.querySelectorAll<HTMLInputElement>('.Q3[jscontroller="QPw6E"] .Vn .Vk .Q2');
}
export function getInboxTypeImageSelector(): any {
  return document.querySelectorAll<HTMLInputElement>('.Q3[jscontroller="QPw6E"] .Vn .Vm');
}

export function getReadingPaneSettingsSelector(): any {
  return document.querySelectorAll<HTMLInputElement>('.XP[jscontroller="m75MHe"] .XL [name="H1NJAd"]');
}
export function getReadingPaneContentSelector(): any {
  return document.querySelectorAll<HTMLInputElement>('.XP[jscontroller="m75MHe"] .XL .Vk.Q2');
}
export function getReadingPaneImageSelector(): any {
  return document.querySelectorAll<HTMLInputElement>('.XP[jscontroller="m75MHe"] .XL .XK');
}
