const filePath = require('../index.js');


//TEST PARA QUE EL ARCHIVO SEA .MD
describe('filePath.getExtFiles', () => {
  it('should return true for a .md file', () => {
    expect(filePath.thisFile('./README.md')).toBe(true);
  });
});




//TEST PARA LEER EL ARCHIVO .MD
describe ('filePath.readFileSync', ()=> {
  it('should read a md file', ()=>{
    expect(filePath.readMd('./README.md')).toBe("Markdown es un lenguaje de marcado ligero muy popular entre developers.");
})});