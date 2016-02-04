'use strict';

describe('Track API client: nixTrackCalculator', function () {
  beforeEach(module('nix.track-api-client'));

  describe('"exerciseLevels"', function () {

    it('should exist and have factor 1.2 for zero exercise level',
      inject(function (nixTrackCalculator) {
        expect(nixTrackCalculator.exerciseLevels[0].factor).toEqual(1.2);
      }));

    it('should calculate proper BMR for man',
      inject(function (nixTrackCalculator) {
        expect(nixTrackCalculator.calculateBmr('m', 94, 182, 27)).toEqual(2067.819);
      }));

    it('should calculate proper BMR for woman',
      inject(function (nixTrackCalculator) {
        expect(nixTrackCalculator.calculateBmr('f', 50, 170, 25)).toEqual(1328.353);
      }));

    it('should calculate proper recommended calories for man with Little to no exercise',
      inject(function (nixTrackCalculator) {
        expect(nixTrackCalculator.calculateRecommendedCalories('m', 94, 182, 27)).toEqual(2481);
      }));
    it('should calculate proper recommended calories for man with Light exercise (1-3 days per week)',
      inject(function (nixTrackCalculator) {
        expect(nixTrackCalculator.calculateRecommendedCalories('m', 94, 182, 27, 1)).toEqual(2843);
      }));
    it('should calculate proper recommended calories for man with Moderate exercise (3-5 days per week)',
      inject(function (nixTrackCalculator) {
        expect(nixTrackCalculator.calculateRecommendedCalories('m', 94, 182, 27, 2)).toEqual(3205);
      }));
    it('should calculate proper recommended calories for man with Heavy exercise (6-7 days per week)',
      inject(function (nixTrackCalculator) {
        expect(nixTrackCalculator.calculateRecommendedCalories('m', 94, 182, 27, 3)).toEqual(3567);
      }));
    it('should calculate proper recommended calories for man with Very heavy exercise (twice per day, extra heavy workouts)',
      inject(function (nixTrackCalculator) {
        expect(nixTrackCalculator.calculateRecommendedCalories('m', 94, 182, 27, 4)).toEqual(3929);
      }));

    it('should calculate proper recommended calories for woman with Little to no exercise',
      inject(function (nixTrackCalculator) {
        expect(nixTrackCalculator.calculateRecommendedCalories('f', 50, 170, 25)).toEqual(1594);
      }));
    it('should calculate proper recommended calories for woman with Light exercise (1-3 days per week)',
      inject(function (nixTrackCalculator) {
        expect(nixTrackCalculator.calculateRecommendedCalories('f', 50, 170, 25, 1)).toEqual(1826);
      }));
    it('should calculate proper recommended calories for woman with Moderate exercise (3-5 days per week)',
      inject(function (nixTrackCalculator) {
        expect(nixTrackCalculator.calculateRecommendedCalories('f', 50, 170, 25, 2)).toEqual(2059);
      }));
    it('should calculate proper recommended calories for woman with Heavy exercise (6-7 days per week)',
      inject(function (nixTrackCalculator) {
        expect(nixTrackCalculator.calculateRecommendedCalories('f', 50, 170, 25, 3)).toEqual(2291);
      }));
    it('should calculate proper recommended calories for woman with Very heavy exercise (twice per day, extra heavy workouts)',
      inject(function (nixTrackCalculator) {
        expect(nixTrackCalculator.calculateRecommendedCalories('f', 50, 170, 25, 4)).toEqual(2524);
      }));
  });
});
