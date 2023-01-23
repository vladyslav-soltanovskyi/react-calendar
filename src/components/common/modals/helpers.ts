import { formatDate } from "utils/date";
import { IMapEventValues, IModalValues } from "./types";
import { colors } from "../form-elements/color-picker/colors";

export const getMapEventValues = ({
  title,
  description,
  startDate,
  endDate,
  type,
  color = colors[0]
}: IMapEventValues): IModalValues => {
  return {
    title,
    startDate,
    endDate,
    startTime: formatDate(startDate, `hh:mm`),
    endTime: formatDate(endDate, `hh:mm`),
    description,
    isLongEvent: type === 'long-event',
    color
  }
}