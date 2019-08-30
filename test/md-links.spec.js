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

/*
//TEST PARA CONVERTIR .MD EN HTML
describe ('filePath.marked', ()=> {
  it('should return a html', ()=>{
    console.log(filePath.convertMd('./README.md'))
    expect(filePath.convertMd('./README.md')).toBe('<p>./README.md</p>');
})});
*/


/*
//TEST PARA BUSCAR LINKS EN EL HTML
describe ('filePath.cheerio', ()=> {
  it('should return a html', ()=>{    
     expect(filePath.findLinksHtml('./README1.md')).toBe([ 'http://www.google.com' ]);
})});
*/


//TEST PARA VALIDAR LINKS
describe ('filePath.axios', ()=> {
  it('should validate all links', ()=>{    
     expect(filePath.linkList('./README1.md')).toBe(
     
})});