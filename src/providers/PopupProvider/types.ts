export interface IOptionsPopup {
  x: number;
  y: number;
  eventId: string; 
}

export interface IPopupContextProps {
  openPopup: (options: IOptionsPopup) => void;
  closePopup: () => void;
}