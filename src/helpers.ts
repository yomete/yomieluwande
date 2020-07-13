export const shortDate = (date: Date): string => {
  const formatter = new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  return formatter.format(date)
}
