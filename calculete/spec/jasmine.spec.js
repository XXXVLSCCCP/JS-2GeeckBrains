describe('Cоответствие значений',()=>{
    it('Проверка счета b == a * b', ()=>{
        let a = 6;
        let b = 2;
        expect(eval(a/b)).toBe(3)
        a = 6;
        b = 2;
        expect(eval(a*b)).toBe(12)

    })
})
