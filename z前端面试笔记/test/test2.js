function hasCircle(edges) {
  // implement the graph
  let set = new Set();
  for (let i = 0; i < edges.length; i++) {
    set.add(edges[i][0]);
    if (set.has(edges[i][1])) return true;
  }
  return false;
}
console.log(hasCircle(["a", "b"], ["b", "c"]));
console.log(
  hasCircle([
    ["a", "b"],
    ["b", "c"],
    ["c", "a"],
  ])
);
console.log(hasCircle([["a","a"]]))