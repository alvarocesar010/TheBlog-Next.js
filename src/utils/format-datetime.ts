import { format, formatDistanceToNow } from "date-fns";
import { enIE } from "date-fns/locale";

export function formatDatetime(rawDate: string) {
  const date = new Date(rawDate);

  return format(date, "dd/MM/yyyy 'at' hh:mm a", { locale: enIE });
}

export function formatRelativeDate(rawDate: string) {
  const date = new Date(rawDate);

  return formatDistanceToNow(date, {
    locale: enIE,
    addSuffix: true,
  });
}

export function formatHour(timestampMs: number): string {
  const date = new Date(timestampMs);

  return format(date, "HH:mm:ss", {
    locale: enIE,
  });
}
