import { useTypedSelector } from "./useTypedSelector";
import { useActions } from "./useActions";

export const usePopup = () => {
  const popusData = useTypedSelector(({ popups }) => popups);
  const { openPopup, closePopup } = useActions();

  return {
    ...popusData,
    openPopup,
    closePopup
  }
}