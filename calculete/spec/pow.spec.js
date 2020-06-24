const calk = require("../calk");
describe('проверка на счет', ()=>{
    it('2*3', ()=>{
        expect(calk(2*3)).toBe(6)

    }),
    it('2-3', ()=>{
        expect(calk(2-3)).toBe(-1)
    }),
    it('6/3', ()=>{
        expect(calk(6/3)).toBe(2)
    })
})