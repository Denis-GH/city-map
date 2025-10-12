// Удаляет квадратные скобки с обеих сторон строки.

export const getAttr = (str) => {
  return str.replace(/^\[|\]$/g, "").trim(); // Убираем скобки и обрезаем пробелы
};
// Примеры использования
// console.log(getAttr("[example]")); // "example"
// console.log(getAttr("[  example  ]")); // "example"
// console.log(getAttr("no brackets")); // "no brackets"
// console.log(getAttr("[data-js-delete-mark-btn]")); // "data-js-delete-mark-btn"
