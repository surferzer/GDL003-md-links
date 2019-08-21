const filePath = require('../');


describe('filePath.getExtFiles', () => {
  it('should return true for a .md file', () => {
    expect(filePath('../README.md')).toBe(true);
  });
});



describe ('showDoc.readFileSync', ()=> {
  it('should return a file', ()=>{
    expect(showDoc('../README.md')).toBe(showDoc.toString());
  });
});