describe('Hello World', function() {

    it('should increment a value by one', function() {
        expect(add(1)).toBe(2);

        function add(value) {
            return value + 1;
        };
    });

    it('should decrement a value by one', function() {
        expect(subtract(1)).toBe(0);

        function subtract(value) {
            return value - 1;
        };
    });

});