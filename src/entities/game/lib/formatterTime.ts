export function formatterTime(seconds: number): string | undefined {
  if (seconds === null) {
    return;
  }
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const formattedHours = hours > 0 ? String(hours).padStart(2, '0') + ':' : '';
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds % 60).padStart(2, '0');
  return formattedHours + formattedMinutes + ':' + formattedSeconds;
}
