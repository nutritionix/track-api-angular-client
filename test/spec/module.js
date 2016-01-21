'use strict';

describe('Angular Nutritionix Api: Module', function () {
    beforeEach(module('nix.track-api-client'));

    describe('function deepMerge', function(){
        it('should exist', function () {
            expect(angular.isFunction(angular.module('nix.track-api-client').deepMerge)).toEqual(true);
        });

        it('should properly merge 2 plain objects', function () {
            expect(angular.module('nix.track-api-client').deepMerge(
                {a: 1},
                {b: 2}
            )).toEqual(
                {
                    a: 1,
                    b: 2
                }
            );
        });

        it('should properly merge 3 plain objects', function () {
            expect(angular.module('nix.track-api-client').deepMerge(
                {a: 1},
                {b: 2},
                {c: 3}
            )).toEqual(
                {
                    a: 1,
                    b: 2,
                    c: 3
                }
            );
        });

        it('should properly merge 3 objects', function () {
            expect(angular.module('nix.track-api-client').deepMerge(
                {
                    a: 1,
                    b: {
                        a: 'string'
                    },
                    c: {
                        a: 1,
                        b: 2
                    }
                },
                {
                    b: 2
                },
                {
                    c: {
                        b: 3,
                        d: {
                            a: 1
                        }
                    }
                }
            )).toEqual(
                {
                    a: 1,
                    b: 2,
                    c: {
                        a: 1,
                        b: 3,
                        d: {
                            a: 1
                        }
                    }
                }
            );
        });
    });
});
