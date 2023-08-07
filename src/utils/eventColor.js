export function generateEventColor(eventType) {
  switch (eventType) {
    case `Anna's House`:
      return "#1e90ff";
    case `Meeting`:
      return "#2dee11";
    case `Seniors send-off`:
      return "#b1aee5";
    case `Others`:
      return "#2dee11";
    default:
      return "#ffffff";
  }
}