'use strict';

describe('Track API client: nixTrackUtils', function () {
  var food = {
    "id":                    "1wkdb9dpmA90pVX",
    "food_name":             "fish",
    "brand_name":            null,
    "serving_qty":           2,
    "serving_unit":          "fillet",
    "serving_weight_grams":  87,
    "nf_calories":           111.36,
    "nf_total_fat":          2.31,
    "nf_saturated_fat":      0.82,
    "nf_cholesterol":        49.59,
    "nf_sodium":             48.72,
    "nf_total_carbohydrate": 0,
    "nf_dietary_fiber":      0,
    "nf_sugars":             0,
    "nf_protein":            22.75,
    "nf_potassium":          330.6,
    "nf_p":                  177.48,
    "full_nutrients":        [
      {
        "attr_id":  255,
        "usda_tag": "WATER",
        "value":    62.2833,
        "unit":     "g",
        "name":     "Water"
      },
      {"attr_id": 208, "usda_tag": "ENERC_KCAL", "value": 111.36, "unit": "kcal", "name": "Energy"}, {
        "attr_id":  268,
        "usda_tag": "ENERC_KJ",
        "value":    468.06,
        "unit":     "kJ",
        "name":     "Energy"
      },
      {"attr_id": 203, "usda_tag": "PROCNT", "value": 22.7505, "unit": "g", "name": "Protein"}, {
        "attr_id":  204,
        "usda_tag": "FAT",
        "value":    2.3055,
        "unit":     "g",
        "name":     "Total lipid (fat)"
      },
      {"attr_id": 207, "usda_tag": "ASH", "value": 0.9918, "unit": "g", "name": "Ash"}, {
        "attr_id":  205,
        "usda_tag": "CHOCDF",
        "value":    0,
        "unit":     "g",
        "name":     "Carbohydrate, by difference"
      },
      {"attr_id": 291, "usda_tag": "FIBTG", "value": 0, "unit": "g", "name": "Fiber, total dietary"}, {
        "attr_id":  269,
        "usda_tag": "SUGAR",
        "value":    0,
        "unit":     "g",
        "name":     "Sugars, total"
      },
      {"attr_id": 301, "usda_tag": "CA", "value": 12.18, "unit": "mg", "name": "Calcium, Ca"}, {
        "attr_id":  303,
        "usda_tag": "FE",
        "value":    0.6003,
        "unit":     "mg",
        "name":     "Iron, Fe"
      },
      {"attr_id": 304, "usda_tag": "MG", "value": 29.58, "unit": "mg", "name": "Magnesium, Mg"}, {
        "attr_id":  305,
        "usda_tag": "P",
        "value":    177.48,
        "unit":     "mg",
        "name":     "Phosphorus, P"
      },
      {"attr_id": 306, "usda_tag": "K", "value": 330.6, "unit": "mg", "name": "Potassium, K"}, {
        "attr_id":  307,
        "usda_tag": "NA",
        "value":    48.72,
        "unit":     "mg",
        "name":     "Sodium, Na"
      },
      {"attr_id": 309, "usda_tag": "ZN", "value": 0.3567, "unit": "mg", "name": "Zinc, Zn"}, {
        "attr_id":  312,
        "usda_tag": "CU",
        "value":    0.06525,
        "unit":     "mg",
        "name":     "Copper, Cu"
      },
      {"attr_id": 315, "usda_tag": "MN", "value": 0.03219, "unit": "mg", "name": "Manganese, Mn"}, {
        "attr_id":  317,
        "usda_tag": "SE",
        "value":    47.328,
        "unit":     "µg",
        "name":     "Selenium, Se"
      },
      {
        "attr_id":  401,
        "usda_tag": "VITC",
        "value":    0,
        "unit":     "mg",
        "name":     "Vitamin C, total ascorbic acid"
      },
      {"attr_id": 404, "usda_tag": "THIA", "value": 0.08091, "unit": "mg", "name": "Thiamin"}, {
        "attr_id":  405,
        "usda_tag": "RIBF",
        "value":    0.06351,
        "unit":     "mg",
        "name":     "Riboflavin"
      },
      {"attr_id": 406, "usda_tag": "NIA", "value": 4.12815, "unit": "mg", "name": "Niacin"}, {
        "attr_id":  410,
        "usda_tag": "PANTAC",
        "value":    0.57768,
        "unit":     "mg",
        "name":     "Pantothenic acid"
      },
      {"attr_id": 415, "usda_tag": "VITB6A", "value": 0.10701, "unit": "mg", "name": "Vitamin B-6"}, {
        "attr_id":  417,
        "usda_tag": "FOL",
        "value":    5.22,
        "unit":     "µg",
        "name":     "Folate, total"
      },
      {"attr_id": 431, "usda_tag": "FOLAC", "value": 0, "unit": "µg", "name": "Folic acid"}, {
        "attr_id":  432,
        "usda_tag": "FOLFD",
        "value":    5.22,
        "unit":     "µg",
        "name":     "Folate, food"
      },
      {"attr_id": 435, "usda_tag": "FOLDFE", "value": 5.22, "unit": "µg", "name": "Folate, DFE"}, {
        "attr_id":  421,
        "usda_tag": "CHOLN",
        "value":    44.631,
        "unit":     "mg",
        "name":     "Choline, total"
      },
      {"attr_id": 454, "usda_tag": "BETN", "value": 22.881, "unit": "mg", "name": "Betaine"}, {
        "attr_id":  418,
        "usda_tag": "VITB12",
        "value":    1.6182,
        "unit":     "µg",
        "name":     "Vitamin B-12"
      },
      {"attr_id": 320, "usda_tag": "VITA_RAE", "value": 0, "unit": "µg", "name": "Vitamin A, RAE"}, {
        "attr_id":  319,
        "usda_tag": "RETOL",
        "value":    0,
        "unit":     "µg",
        "name":     "Retinol"
      },
      {"attr_id": 321, "usda_tag": "CARTB", "value": 0, "unit": "µg", "name": "Carotene, beta"}, {
        "attr_id":  322,
        "usda_tag": "CARTA",
        "value":    0,
        "unit":     "µg",
        "name":     "Carotene, alpha"
      },
      {"attr_id": 334, "usda_tag": "CRYPX", "value": 0, "unit": "µg", "name": "Cryptoxanthin, beta"}, {
        "attr_id":  318,
        "usda_tag": "VITA_IU",
        "value":    0,
        "unit":     "IU",
        "name":     "Vitamin A, IU"
      },
      {"attr_id": 337, "usda_tag": "LYCPN", "value": 0, "unit": "µg", "name": "Lycopene"}, {
        "attr_id":  338,
        "usda_tag": "LUT+ZEA",
        "value":    0,
        "unit":     "µg",
        "name":     "Lutein + zeaxanthin"
      },
      {
        "attr_id":  323,
        "usda_tag": "TOCPHA",
        "value":    0.6873,
        "unit":     "mg",
        "name":     "Vitamin E (alpha-tocopherol)"
      },
      {"attr_id": 341, "usda_tag": "TOCPHB", "value": 0, "unit": "mg", "name": "Tocopherol, beta"}, {
        "attr_id":  342,
        "usda_tag": "TOCPHG",
        "value":    0.0522,
        "unit":     "mg",
        "name":     "Tocopherol, gamma"
      },
      {"attr_id": 343, "usda_tag": "TOCPHD", "value": 0, "unit": "mg", "name": "Tocopherol, delta"}, {
        "attr_id":  344,
        "usda_tag": "TOCTRA",
        "value":    0,
        "unit":     "mg",
        "name":     "Tocotrienol, alpha"
      },
      {"attr_id": 345, "usda_tag": "TOCTRB", "value": 0, "unit": "mg", "name": "Tocotrienol, beta"}, {
        "attr_id":  346,
        "usda_tag": "TOCTRG",
        "value":    0,
        "unit":     "mg",
        "name":     "Tocotrienol, gamma"
      },
      {"attr_id": 347, "usda_tag": "TOCTRD", "value": 0, "unit": "mg", "name": "Tocotrienol, delta"}, {
        "attr_id":  328,
        "usda_tag": "VITD",
        "value":    3.219,
        "unit":     "µg",
        "name":     "Vitamin D (D2 + D3)"
      },
      {
        "attr_id":  326,
        "usda_tag": "CHOCAL",
        "value":    3.219,
        "unit":     "µg",
        "name":     "Vitamin D3 (cholecalciferol)"
      },
      {"attr_id": 324, "usda_tag": "VITD", "value": 130.5, "unit": "IU", "name": "Vitamin D"}, {
        "attr_id":  430,
        "usda_tag": "VITK1",
        "value":    0.783,
        "unit":     "µg",
        "name":     "Vitamin K (phylloquinone)"
      },
      {
        "attr_id":  429,
        "usda_tag": "VITK1D",
        "value":    0,
        "unit":     "µg",
        "name":     "Dihydrophylloquinone"
      },
      {
        "attr_id":  606,
        "usda_tag": "FASAT",
        "value":    0.8178,
        "unit":     "g",
        "name":     "Fatty acids, total saturated"
      },
      {"attr_id": 607, "usda_tag": "F4D0", "value": 0, "unit": "g", "name": "4:0"}, {
        "attr_id":  608,
        "usda_tag": "F6D0",
        "value":    0,
        "unit":     "g",
        "name":     "6:0"
      },
      {"attr_id": 609, "usda_tag": "F8D0", "value": 0, "unit": "g", "name": "8:0"}, {
        "attr_id":  610,
        "usda_tag": "F10D0",
        "value":    0,
        "unit":     "g",
        "name":     "10:0"
      },
      {"attr_id": 611, "usda_tag": "F12D0", "value": 0, "unit": "g", "name": "12:0"}, {
        "attr_id":  612,
        "usda_tag": "F14D0",
        "value":    0.07395,
        "unit":     "g",
        "name":     "14:0"
      },
      {"attr_id": 652, "usda_tag": "F15D0", "value": 0.00435, "unit": "g", "name": "15:0"}, {
        "attr_id":  613,
        "usda_tag": "F16D0",
        "value":    0.5742,
        "unit":     "g",
        "name":     "16:0"
      },
      {"attr_id": 653, "usda_tag": "F17D0", "value": 0, "unit": "g", "name": "17:0"}, {
        "attr_id":  614,
        "usda_tag": "F18D0",
        "value":    0.1653,
        "unit":     "g",
        "name":     "18:0"
      },
      {"attr_id": 615, "usda_tag": "F20D0", "value": 0, "unit": "g", "name": "20:0"}, {
        "attr_id":  624,
        "usda_tag": "F22D0",
        "value":    0,
        "unit":     "g",
        "name":     "22:0"
      },
      {"attr_id": 654, "usda_tag": "F24D0", "value": 0, "unit": "g", "name": "24:0"}, {
        "attr_id":  645,
        "usda_tag": "FAMS",
        "value":    0.83085,
        "unit":     "g",
        "name":     "Fatty acids, total monounsaturated"
      },
      {"attr_id": 625, "usda_tag": "F14D1", "value": 0, "unit": "g", "name": "14:1"}, {
        "attr_id":  697,
        "usda_tag": "F15D1",
        "value":    0,
        "unit":     "g",
        "name":     "15:1"
      },
      {
        "attr_id":  626,
        "usda_tag": "F16D1",
        "value":    0.12615,
        "unit":     "g",
        "name":     "16:1 undifferentiated"
      },
      {"attr_id": 687, "usda_tag": "F17D1", "value": 0, "unit": "g", "name": "17:1"}, {
        "attr_id":  617,
        "usda_tag": "F18D1",
        "value":    0.66555,
        "unit":     "g",
        "name":     "18:1 undifferentiated"
      },
      {"attr_id": 628, "usda_tag": "F20D1", "value": 0.03915, "unit": "g", "name": "20:1"}, {
        "attr_id":  630,
        "usda_tag": "F22D1",
        "value":    0,
        "unit":     "g",
        "name":     "22:1 undifferentiated"
      },
      {
        "attr_id":  646,
        "usda_tag": "FAPU",
        "value":    0.522,
        "unit":     "g",
        "name":     "Fatty acids, total polyunsaturated"
      },
      {
        "attr_id":  618,
        "usda_tag": "F18D2",
        "value":    0.24795,
        "unit":     "g",
        "name":     "18:2 undifferentiated"
      },
      {
        "attr_id":  619,
        "usda_tag": "F18D3",
        "value":    0.03915,
        "unit":     "g",
        "name":     "18:3 undifferentiated"
      },
      {
        "attr_id":  851,
        "usda_tag": "F18D3CN3",
        "value":    0.03915,
        "unit":     "g",
        "name":     "18:3 n-3 c,c,c (ALA)"
      },
      {"attr_id": 627, "usda_tag": "F18D4", "value": 0, "unit": "g", "name": "18:4"}, {
        "attr_id":  672,
        "usda_tag": "F20D2CN6",
        "value":    0.01305,
        "unit":     "g",
        "name":     "20:2 n-6 c,c"
      },
      {
        "attr_id":  689,
        "usda_tag": "F20D3",
        "value":    0.02175,
        "unit":     "g",
        "name":     "20:3 undifferentiated"
      },
      {
        "attr_id":  620,
        "usda_tag": "F20D4",
        "value":    0.03045,
        "unit":     "g",
        "name":     "20:4 undifferentiated"
      },
      {"attr_id": 629, "usda_tag": "F20D5", "value": 0.00435, "unit": "g", "name": "20:5 n-3 (EPA)"}, {
        "attr_id":  631,
        "usda_tag": "F22D5",
        "value":    0.0522,
        "unit":     "g",
        "name":     "22:5 n-3 (DPA)"
      },
      {"attr_id": 621, "usda_tag": "F22D6", "value": 0.1131, "unit": "g", "name": "22:6 n-3 (DHA)"}, {
        "attr_id":  601,
        "usda_tag": "CHOLE",
        "value":    49.59,
        "unit":     "mg",
        "name":     "Cholesterol"
      },
      {"attr_id": 501, "usda_tag": "TRP_G", "value": 0.23055, "unit": "g", "name": "Tryptophan"}, {
        "attr_id":  502,
        "usda_tag": "THR_G",
        "value":    1.00572,
        "unit":     "g",
        "name":     "Threonine"
      },
      {"attr_id": 503, "usda_tag": "ILE_G", "value": 1.0614, "unit": "g", "name": "Isoleucine"}, {
        "attr_id":  504,
        "usda_tag": "LEU_G",
        "value":    1.7748,
        "unit":     "g",
        "name":     "Leucine"
      },
      {"attr_id": 505, "usda_tag": "LYS_G", "value": 2.01405, "unit": "g", "name": "Lysine"}, {
        "attr_id":  506,
        "usda_tag": "MET_G",
        "value":    0.66642,
        "unit":     "g",
        "name":     "Methionine"
      },
      {"attr_id": 507, "usda_tag": "CYS_G", "value": 0.23055, "unit": "g", "name": "Cystine"}, {
        "attr_id":  508,
        "usda_tag": "PHE_G",
        "value":    0.9135,
        "unit":     "g",
        "name":     "Phenylalanine"
      },
      {"attr_id": 509, "usda_tag": "TYR_G", "value": 0.7569, "unit": "g", "name": "Tyrosine"}, {
        "attr_id":  510,
        "usda_tag": "VAL_G",
        "value":    1.1136,
        "unit":     "g",
        "name":     "Valine"
      },
      {"attr_id": 511, "usda_tag": "ARG_G", "value": 1.3833, "unit": "g", "name": "Arginine"}, {
        "attr_id":  512,
        "usda_tag": "HISTN_G",
        "value":    0.50895,
        "unit":     "g",
        "name":     "Histidine"
      },
      {"attr_id": 513, "usda_tag": "ALA_G", "value": 1.29717, "unit": "g", "name": "Alanine"}, {
        "attr_id":  514,
        "usda_tag": "ASP_G",
        "value":    2.4447,
        "unit":     "g",
        "name":     "Aspartic acid"
      },
      {"attr_id": 515, "usda_tag": "GLU_G", "value": 3.4104, "unit": "g", "name": "Glutamic acid"}, {
        "attr_id":  516,
        "usda_tag": "GLY_G",
        "value":    1.0614,
        "unit":     "g",
        "name":     "Glycine"
      },
      {"attr_id": 517, "usda_tag": "PRO_G", "value": 0.82911, "unit": "g", "name": "Proline"}, {
        "attr_id":  518,
        "usda_tag": "SER_G",
        "value":    0.83607,
        "unit":     "g",
        "name":     "Serine"
      },
      {"attr_id": 221, "usda_tag": "ALC", "value": 0, "unit": "g", "name": "Alcohol, ethyl"}, {
        "attr_id":  262,
        "usda_tag": "CAFFN",
        "value":    0,
        "unit":     "mg",
        "name":     "Caffeine"
      },
      {"attr_id": 263, "usda_tag": "THEBRN", "value": 0, "unit": "mg", "name": "Theobromine"}
    ],
    "nix_brand_name":        null,
    "nix_brand_id":          null,
    "nix_item_name":         null,
    "nix_item_id":           null,
    "upc":                   null,
    "consumed_at":           "2016-04-06T19:19:02+00:00",
    "metadata":              {},
    "source":                1,
    "ndb_no":                15262,
    "tags":                  {"item": "fish", "measure": null, "quantity": "1.0"}
  };


  beforeEach(module('nix.track-api-client'));

  describe('"convertSimpleFractionToDecimal"', function () {

    it('should convert simple string fraction',
      inject(function (nixTrackUtils) {
        expect(nixTrackUtils.convertSimpleFractionToDecimal('1/4')).toEqual(0.25);
      }));

    it('should leave non fraction value untouched',
      inject(function (nixTrackUtils) {
        var value = 0.3;
        expect(nixTrackUtils.convertSimpleFractionToDecimal(value)).toEqual(value);
      }));
  });

  describe('"copyFood"', function () {

    it('should create a deep copy of the object and delete id, created_at and consumed_at from it',
      inject(function (nixTrackUtils) {
        var copy = nixTrackUtils.copyFood(food);

        expect(food).not.toEqual(copy);
        expect(food.full_nutrients === copy.full_nutrients).toEqual(false);
        expect(food.tags === copy.tags).toEqual(false);

        expect(food.full_nutrients[0] === copy.full_nutrients[0]).toEqual(false);
        expect(food.full_nutrients[0]).toEqual(copy.full_nutrients[0]);

        expect(copy.id).toEqual(undefined);
        expect(copy.created_at).toEqual(undefined);
        expect(copy.consumed_at).toEqual(undefined);

        expect(food.food_name).toEqual(copy.food_name);
        expect(food.tags.item).toEqual(copy.tags.item);
      }));
  });

  describe('"calculateFoodMultiplier"', function () {

    it('should properly calculate multiplier',
      inject(function (nixTrackUtils) {
        expect(nixTrackUtils.calculateFoodMultiplier(food, '1/2')).toEqual(0.25);
      }));
  });

  describe('"multiplyFoodNutrients"', function () {
    it('should properly handle inPlace param',
      inject(function (nixTrackUtils) {
        expect(nixTrackUtils.multiplyFoodNutrients(food, 1, true)).toBe(food);
        expect(nixTrackUtils.multiplyFoodNutrients(food, 1)).not.toBe(food);
      }));

    it('should properly apply multiplier',
      inject(function (nixTrackUtils) {
        var multiplier = 0.5;
        var multiplied = nixTrackUtils.multiplyFoodNutrients(food, multiplier);

        angular.forEach(multiplied, function (value, key) {
          if (key === 'nf_ingredient_statement') {
            expect(multiplied[key]).toBe(food[key]);
          } else if (key === 'serving_qty' || key === 'serving_weight_grams' || key.substr(0, 3) === 'nf_') {
            expect(multiplied[key]).toBe(food[key] * multiplier);
          }
        });

        angular.forEach(multiplied.full_nutrients, function (nutrient, index) {
          expect(nutrient.value).toBe(food.full_nutrients[index].value * multiplier);
        });
      }));
  });

  describe('"sumFoods"', function () {
    it('should properly sum foods',
      inject(function (nixTrackUtils) {
        var foods                        = [angular.copy(food), angular.copy(food)];
        foods[0].nf_ingredient_statement = 'word 1';
        foods[1].nf_ingredient_statement = 'word 2';
        var sum                          = nixTrackUtils.sumFoods(foods);

        angular.forEach(sum, function (value, key) {
          if (key === 'nf_ingredient_statement') {
            expect(sum[key]).toBe('word 1\nword 2');
          } else if (key === 'serving_weight_grams' || key.substr(0, 3) === 'nf_') {
            expect(sum[key]).toBe(food[key] * 2);
          }
        });

        angular.forEach(sum.full_nutrients, function (nutrient, index) {
          expect(nutrient.value).toBe(food.full_nutrients[index].value * 2);
        });

        expect(nixTrackUtils.sumFoods([
          {nf_ingredient_statement: 'word 1'},
          {nf_ingredient_statement: null},
          {nf_ingredient_statement: 'word 2'},
        ]).nf_ingredient_statement).toBe('word 1\nword 2');

        expect(nixTrackUtils.sumFoods([
          {nf_ingredient_statement: null},
          {nf_ingredient_statement: null},
          {nf_ingredient_statement: null},
        ]).nf_ingredient_statement).toBe(null)
      }));
  });

  describe('"cleanFoods"', function () {
    it('should remove extra field and leave others untouched',
      inject(function (nixTrackUtils) {
        var testFood = angular.copy(food);
        testFood.extra_field = 'TEST';

        expect(testFood).not.toEqual(food);
        expect(nixTrackUtils.cleanFoods(testFood)).toEqual(food);
      }));

    it('should accept array and return array in this case',
      inject(function (nixTrackUtils) {
        var testFood = angular.copy(food);
        testFood.extra_field = 'TEST';

        expect(nixTrackUtils.cleanFoods([testFood])).toEqual([food]);
      }));
  });
});
