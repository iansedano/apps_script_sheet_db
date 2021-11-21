function test() {
  const table = new Table(...TEST_TABLE);
  console.log(table.getRow(3));
  console.log(table.getColumn("date"));
  console.log(table.getRowsByValue("steps", 1000));
  console.log(table.createUniqueKeys(3));
  console.log(table.createUniqueKeys(1));
  table.addRow(["", "5/6/2021", "2021", "5", "14", "2000", "1", 1, 2, 4]);
  table.addRow(["", "5/6/2021", "2021", "5", "14", "5000", "1", 1, 2, 4]);
  console.log(table.getRowsByValue("steps", 5000));
  table.updateValue(13, "steps", 9999);
  table.updateRow(13, [13, 1, 1, 1, 1]);
  table.deleteRow(12);
}
