describe('Checking function rgbToHexColor', () => {

    it('Red value is invalid', () => {
        assert.equal(rgbToHexColor(-1, 5, 5), undefined)
    })

    it('Red value is invalid', () => {
        assert.equal(rgbToHexColor(400, 5, 5), undefined)
    })

    it('Red value is missing', () => {
        assert.equal(rgbToHexColor(null, 5, 5), undefined)
    })

    it('Green value is invalid', () => {
        assert.equal(rgbToHexColor(5, 500, 5), undefined) 
    })

    it('Green value is invalid', () => {
        assert.equal(rgbToHexColor(5, -10, 5), undefined) 
    })

    it('Green value is missing', () => {
        assert.equal(rgbToHexColor(5, null, 5), undefined) 
    })

    it('Blue value is invalid', () => {
        assert.equal(rgbToHexColor(5, 5, -1), undefined) 
    })

    it('Blue value is invalid', () => {
        assert.equal(rgbToHexColor(5, 10, 500), undefined) 
    })

    it('Blue value is missing', () => {
        assert.equal(rgbToHexColor(5, 5, null), undefined) 
    })

    it('Red value is not a number', () => {
        assert.equal(rgbToHexColor("5", 10, 500), undefined) 
    })

    it('Green value is not a number', () => {
        assert.equal(rgbToHexColor(5, '10', 500), undefined) 
    })
    it('Blue value is not a number', () => {
        assert.equal(rgbToHexColor(20, 10, '500'), undefined) 
    })

    it('Return the same color in hexadecimal format as a string', () => {
        assert.equal(rgbToHexColor(10, 100, 28), '#0A641C') 
    })


    it('Red value is a 0', () => {
        assert.equal(rgbToHexColor(0, 10, 250), '#000AFA') 
    })

    it('Green value is a 0', () => {
        assert.equal(rgbToHexColor(50, 0, 250), '#3200FA') 
    })
  
    it('Blue value is a 0', () => {
        assert.equal(rgbToHexColor(50, 220, 0), '#32DC00') 
    })

    it('Red value is a 255', () => {
        assert.equal(rgbToHexColor(255, 10, 250), '#FF0AFA') 
    })

    
    it('Result is not correct ', () => {
        assert.equal(rgbToHexColor(255, 10, 256), undefined) 
    })

    
})