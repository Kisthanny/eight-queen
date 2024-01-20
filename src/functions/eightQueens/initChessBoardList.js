const colMap = {
  0: "a",
  1: "b",
  2: "c",
  3: "d",
  4: "e",
  5: "f",
  6: "g",
  7: "h",
};
export default function () {
  const result = [];
  for (let rIndex = 0; rIndex < 8; rIndex++) {
    const row = [];
    for (let cIndex = 0; cIndex < 8; cIndex++) {
      row.push({
        id: rIndex * 8 + cIndex,
        background: rIndex % 2 === cIndex % 2 ? "white" : "dark",
        colId: colMap[cIndex],
        rowId: 8 - rIndex,
        content: "",
      });
    }
    result.push(row);
  }
  return result;
}
