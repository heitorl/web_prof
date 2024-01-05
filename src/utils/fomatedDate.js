import { format } from "date-fns";

export const returnFormatedDate = (time) => {
  if (!time) return;

  const parsedTimestamp = new Date(time);
  const now = new Date();

  const differenceInMinutes = Math.floor(
    (now.getTime() - parsedTimestamp.getTime()) / (1000 * 60)
  );

  if (differenceInMinutes < 60) {
    return `${differenceInMinutes} ${
      differenceInMinutes === 1 ? "minuto" : "minutos"
    } atras`;
  }

  if (differenceInMinutes < 24 * 60) {
    const differenceInHours = Math.floor(differenceInMinutes / 60);
    return `${differenceInHours} ${
      differenceInHours === 1 ? "hora" : "horas"
    } atras`;
  }

  return format(parsedTimestamp, "dd/MM/yyyy");
};
