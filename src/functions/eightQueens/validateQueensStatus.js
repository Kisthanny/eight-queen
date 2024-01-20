import { uniq } from "lodash";

const queensInUniqRowAndCol = (list) => {
  const queensLength = list.length;
  const isUniqCol = uniq(list.map((e) => e.colId)).length === queensLength;
  const isUniqRow = uniq(list.map((e) => e.rowId)).length === queensLength;
  return isUniqCol && isUniqRow;
};

const queensInSameDiagonal = (list) => {
  return list.some((e, index, arr) => {
    const rest = arr.slice(index + 1);
    return rest.some((post) => {
      return (
        post.background === e.background &&
        ((post.id - e.id) % 9 === 0 || (post.id - e.id) % 7 === 0)
      );
    });
  });
};

export default (chessBoardList) => {
  const queensList = [];
  chessBoardList.map((row) => {
    row.map((cell) => {
      if (cell.content === "Q") {
        queensList.push(cell);
      }
    });
  });
  const queensLength = queensList.length;
  if (queensLength > 8) {
    throw new Error("queens quantity should not be more than 8");
  }

  if (!queensInUniqRowAndCol(queensList)) {
    throw new Error("queens should not be in a same row or same column");
  }

  if (queensInSameDiagonal(queensList)) {
    throw new Error("queens should not be in a same diagonal");
  }

  return queensLength === 8 ? "success" : "ongoing";
};
