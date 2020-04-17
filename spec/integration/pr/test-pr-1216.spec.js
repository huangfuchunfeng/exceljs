const ExcelJS = verquire('exceljs');

describe('github issues', () => {
  it('pull request 1216 - The worksheet should not be undefined', async () => {
    const wb = new ExcelJS.Workbook();
    await wb.xlsx.readFile('./spec/integration/data/test-pr-1216.xlsx');
    const ws = wb.getWorksheet(1);
    expect(ws).to.not.equal(undefined);
  });
});
