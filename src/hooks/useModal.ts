import { useActions } from "./useActions";
import { useTypedSelector } from "./useTypedSelector";

export const useModal = () => {
  const modalsData = useTypedSelector(({ modals }) => modals);
  const {
    openModalCreate,
    openModalDayInfo,
    openModalEdit,
    closeModalCreate,
    closeModalDayInfo,
    closeModalEdit
  } = useActions();

  return {
    ...modalsData,
    openModalCreate,
    openModalDayInfo,
    openModalEdit,
    closeModalCreate,
    closeModalDayInfo,
    closeModalEdit
  };
}