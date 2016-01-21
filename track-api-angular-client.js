/**
 * @license Track Api Angular Client
 * (c) 2016 Nutritionix, LLC. http://nutritinix.com
 * License: MIT
 */

(function (window, angular, undefined) {
  'use strict';

  /**
   * @ngdoc overview
   * @name index
   *
   * @description
   * Angularjs client library to make calls to
   * <a href="https://trackapi.nutritionix.com/docs/">Nutritionix Track Api</a>
   *
   */

  /**
   * @ngdoc overview
   * @name nix.track-api-client
   *
   * @description
   * Angular module containing all library functionality
   *
   * @type {ng.IModule}
   */
  var module = angular.module('nix.track-api-client', []);

  /**
   * @ngdoc service
   * @name  nix.track-api-client.provider:nixTrackApiClientProvider
   *
   * @description
   *
   * Used for configuring {@link nix.track-api-client.service:nixTrackApiClient} service
   */
  module.provider('nixTrackApiClient', function nixTrackApiClient() {
    var apiEndpoint = 'https://trackapi.nutritionix.com/v1',
      credentials = {},
      httpConfig = {},
      setApiCredentials;


    /**
     * @ngdoc method
     * @methodOf nix.track-api-client.provider:nixTrackApiClientProvider
     * @name nix.track-api-client:nixTrackApiClientProvider#setEndpoint
     * @param {string} endpoint Allows to change nutritionix api base endpoint.
     *                          Defaults to https://api.nutritionix.com/v2
     */
    this.setApiEndpoint = function (endpoint) {
      apiEndpoint = endpoint;
    };

    /**
     * @ngdoc method
     * @methodOf nix.track-api-client.provider:nixTrackApiClientProvider
     * @name nix.track-api-client.provider:nixTrackApiClientProvider#setApiCredentials
     * @param {string} appId Application id
     * @param {string} appKey Application Key
     *
     * @description Set api credentials generated at https://developer.nutritionix.com portal
     */
    setApiCredentials = this.setApiCredentials = function (appId, appKey) {
      credentials.appId = appId;
      credentials.appKey = appKey;
    };

    /**
     * @ngdoc method
     * @methodOf nix.track-api-client.provider:nixTrackApiClientProvider
     * @name nix.track-api-client.provider:nixTrackApiClientProvider#setHttpConfig
     * @param {object} value configuration object compatible with
     *                       https://docs.angularjs.org/api/ng/service/$http#usage
     *
     * @description
     * Set service-wide override for http calls configuration object
     * {@link https://docs.angularjs.org/api/ng/service/$http#usage}
     */
    this.setHttpConfig = function (value) {
      if (angular.isObject(value)) {
        httpConfig = value;
      }
    };


    this.$get = function nixTrackApiClientFactory($http) {
      var userJwt;

      /**
       * @ngdoc service
       * @name  nix.track-api-client.service:nixTrackApiClient
       * @function
       *
       * @description
       * Used to make calls to nutritionix api.
       * Low level function to build api client on top of.
       * All service methods are wrappers around service-function calls.
       *
       * @param {string} endpoint Relative api endpoint url e.g. '/users'
       * @param {object} config Call-specific override for http calls configuration object
       *                        https://docs.angularjs.org/api/ng/service/$http#usage
       *                        The last override in chain of default object and
       *                        {@link nix.track-api-client.provider:nixTrackApiClientProvider#methods_sethttpconfig} to form final http call config.
       *
       *                        Default object is built like that:
       *                        <pre>
       *                        {
       *                            method:  'GET',
       *                            url:     apiEndpoint + endpoint,
       *                            headers: {
       *                                "x-user-jwt": client.getUserJwt(),
       *                                'X-APP-ID':  credentials.appId,
       *                                'X-APP-KEY': credentials.appKey
       *                            },
       *                            params:  {}
       *                        }
       *                        </pre>
       */
      var client = function (endpoint, config) {
        config = module.deepMerge(
          {
            method:  'GET',
            url:     apiEndpoint + endpoint,
            headers: {
              "x-user-jwt": client.getUserJwt(),
              'X-APP-ID':   credentials.appId,
              'X-APP-KEY':  credentials.appKey
            },
            params:  {}
          },
          httpConfig,
          config
        );

        return $http(config);
      };

      /**
       * @ngdoc method
       * @methodOf nix.track-api-client.service:nixTrackApiClient
       * @name nix.track-api-client.service:nixTrackApiClient#getUserJwt
       *
       * @description
       * Retrieve current user jwt
       *
       * @return {string} User jwt
       */
      client.getUserJwt = function () {
        return angular.isFunction(userJwt) ? userJwt() : userJwt;
      };

      /**
       * @ngdoc method
       * @methodOf nix.track-api-client.service:nixTrackApiClient
       * @name nix.track-api-client.service:nixTrackApiClient#setUserJwt
       *
       * @description
       * Set current user jwt
       *
       * @return {string|function} User jwt or
       *                           callable to fetch it within current application
       */
      client.setUserJwt = function (value) {
        userJwt = value;
      };

      /**
       * @ngdoc method
       * @methodOf nix.track-api-client.service:nixTrackApiClient
       * @name nix.track-api-client.service:nixTrackApiClient#setApiCredentials
       * @param {string} appId Application id
       * @param {string} appKey Application Key
       *
       * @description
       * Set api credentials generated at https://developer.nutritionix.com portal
       */
      client.setApiCredentials = setApiCredentials;

      /**
       * @ngdoc property
       * @propertyOf nix.track-api-client.service:nixTrackApiClient
       * @name nix.track-api-client.service:nixTrackApiClient#calories_nutrient
       * @type {number}
       *
       * @description
       * **208** is an id of calories nutrient
       */
      client.calories_nutrient = 208;

      /**
       * @ngdoc property
       * @propertyOf nix.track-api-client.service:nixTrackApiClient
       * @name nix.track-api-client.service:nixTrackApiClient#macronutrients
       * @type {number[]}
       *
       * @description
       * List of ids of nutrients considered as  Macronutrients
       *
       * - **204** fat
       * - **606** satfat
       * - **205** totalcarb
       * - **291** fiber
       * - **269** sugar
       * - **203** protein
       */
      client.macronutrients = [204, 606, 205, 291, 269, 203];

      /**
       * @ngdoc object
       * @name nix.track-api-client.nixTrackApiClient.object:natural
       *
       * @description
       * NLP related endpoints
       */
      client.natural = {};

      /**
       * @ngdoc method
       * @methodOf nix.track-api-client.nixTrackApiClient.object:natural
       *
       * @name nix.track-api-client.nixTrackApiClient.object:natural#nutrients
       * @description
       * Returns the nutrients for all foods in the posted query.
       *
       * @param {string} query Plain text with each entry separated by a new line.
       *
       * @returns {Object} nutrients for all foods in the posted query.
       */
      client.natural.nutrients = function (query) {
        return client('/natural/nutrients', {
          method: 'POST',
          data:   {query: query}
        });
      };

      /**
       * @ngdoc method
       * @methodOf nix.track-api-client.nixTrackApiClient.object:natural
       *
       * @name nix.track-api-client.nixTrackApiClient.object:natural#tags
       * @description
       * Returns the tags for all foods in the posted query.

       * @param {string} query Plain text with each entry separated by a new line.
       *
       * @returns {Object} tags for all foods in the posted query
       */

      client.natural.tags = function (query) {
        return client('/natural/tags', {
          method: 'POST',
          data:   {query: query}
        });
      };

      /**
       * @ngdoc method
       * @methodOf nix.track-api-client.nixTrackApiClient.object:natural
       *
       * @name nix.track-api-client.nixTrackApiClient.object:natural#add
       * @description
       * Returns the nutrients for all foods in the posted query.
       *
       * @param {string} query Plain text with each entry separated by a new line.
       *
       * @returns {Object} Added food info
       */
      client.natural.add = function (query) {
        return client('/natural/add', {
          method: 'POST',
          data:   {query: query}
        });
      };

      /**
       * @ngdoc method
       * @methodOf nix.track-api-client.nixTrackApiClient.object:natural
       *
       * @name nix.track-api-client.nixTrackApiClient.object:natural#update
       * @description
       * Returns the nutrients for all foods in the posted query.
       *
       * @param {string} query Plain text with each entry separated by a new line.
       * @param {Object|Object[]} foods --
       *
       * @returns {Object} Updated foods info
       */
      client.natural.update = function (query, foods) {
        return client('/natural/update', {
          method: 'PUT',
          data:   {
            query: query,
            foods: foods
          }
        });
      };

      /**
       * @ngdoc object
       * @name nix.track-api-client.nixTrackApiClient.object:log
       *
       * @description
       * User food log related endpoints
       */
      client.log = {};

      /**
       * @ngdoc method
       * @methodOf nix.track-api-client.nixTrackApiClient.object:log
       *
       * @name nix.track-api-client.nixTrackApiClient.object:log#get
       * @description
       * Returns user food logs.
       *
       * @param {string} [userId] Optional. If provided and user has access to them
       *                          logs for other user will be served
       *
       * @returns {Object[]} User food logs
       */
      client.log.get = function (userId) {
        return client('/log' + (userId ? '/' + userId : ''),
          {method: 'GET'}
        );
      };

      /**
       * @ngdoc method
       * @methodOf nix.track-api-client.nixTrackApiClient.object:log
       *
       * @name nix.track-api-client.nixTrackApiClient.object:log#delete
       * @description
       * Deletes user logs.
       *
       * @param {Object[]} foods Food logs to delete
       *
       * @returns {Object[]} --
       */
      client.log.delete = function (foods) {
        return client('/log', {
          method: 'DELETE',
          data:   {foods: foods}
        });
      };

      /**
       * @ngdoc method
       * @methodOf nix.track-api-client.nixTrackApiClient.object:log
       *
       * @name nix.track-api-client.nixTrackApiClient.object:log#add
       * @description
       * Adds user logs.
       *
       * @param {Object[]} foods Food logs to add
       *
       * @returns {Object[]} --
       */
      client.log.add = function (foods) {
        return client('/log', {
          method: 'POST',
          data:   {foods: foods}
        });
      };

      /**
       * @ngdoc method
       * @methodOf nix.track-api-client.nixTrackApiClient.object:log
       *
       * @name nix.track-api-client.nixTrackApiClient.object:log#update
       * @description
       * Updates user logs.
       *
       * @param {Object[]} foods Food logs to update
       *
       * @returns {Object[]} --
       */
      client.log.update = function (foods) {
        return client('/log', {
          method: 'PUT',
          data:   {foods: foods}
        });
      };

      /**
       * @ngdoc object
       * @name nix.track-api-client.nixTrackApiClient.object:oauth
       *
       * @description
       * Oauth related endpoints
       * - {@link nix.track-api-client.nixTrackApiClient.oauth.object:facebook Facebook}
       *
       */
      client.oauth = {
        /**
         * @ngdoc object
         * @name nix.track-api-client.nixTrackApiClient.oauth.object:facebook
         *
         * @description
         * Oauth Facebook related endpoints
         */
        facebook: {}
      };

      /**
       * @ngdoc method
       * @methodOf nix.track-api-client.nixTrackApiClient.oauth.object:facebook
       *
       * @name nix.track-api-client.nixTrackApiClient.oauth.object:facebook#i
       * @description
       * Logs user in via facebook or inits facebook registration process
       *
       * @param {string} accessToken Facebook access token
       * @param {string} refCode Registration referral code
       *
       * @returns {Object[]} --
       */
      client.oauth.facebook.i = function (accessToken, refCode) {
        return client('/log', {
          method: 'POST',
          data:   {
            "access_token": accessToken,
            "ref_code":     refCode
          }
        });
      };

      /**
       * @ngdoc function
       *
       * @name nix.track-api-client.nixTrackApiClient.service:users
       * @description
       * Returns list of users this user has access to
       *
       * @returns {Object[]} List of users this user has access to
       */
      client.users = function () {
        return client('/users', {method: 'GET'});
      };

      /**
       * @ngdoc method
       * @methodOf nix.track-api-client.nixTrackApiClient.service:users
       *
       * @name nix.track-api-client.nixTrackApiClient.function:users#preferences
       * @description
       * Updates user's settings
       *
       * @param {object|object[]} settings Settings to update
       *
       * @returns {Object[]} Updated settings
       */
      client.users.preferences = function (settings) {
        return client('/users/preferences', {
          method: 'POST',
          data:   {
            users: angular.isArray(settings) ? settings : [settings]
          }
        });
      };

      /**
       * @ngdoc method
       * @methodOf nix.track-api-client.service:nixTrackApiClient
       *
       * @name nix.track-api-client.service:nixTrackApiClient#me
       * @description
       * Retrieves own user object
       *
       * @returns {Object} own user object
       */
      client.me = function () {
        return client('/me', {method: 'GET'});
      };


      /**
       * @ngdoc object
       * @name nix.track-api-client.nixTrackApiClient.object:auth
       *
       * @description
       * Auth related endpoints
       * - {@link nix.track-api-client.nixTrackApiClient.auth.object:signup SignUp}
       *
       */
      client.auth = {
        /**
         * @ngdoc object
         * @name nix.track-api-client.nixTrackApiClient.auth.object:signup
         *
         * @description
         * Auth Sign Up related endpoints
         */
        signup: {}
      };

      /**
       * @ngdoc method
       * @methodOf nix.track-api-client.nixTrackApiClient.auth.object:signup
       *
       * @name nix.track-api-client.nixTrackApiClient.auth.object:signup#step1
       * @description
       * Starts user creation process, resulting in validation email/sms.
       * Requires minimum of first_name, password, and either phone or email fields
       *
       * @param {Object} user Registration submit data
       *
       * @returns {Object} Registration data
       */
      client.auth.signup.step1 = function (user) {
        return client('/auth/signup/step1', {
          method: 'POST',
          data:   user
        });
      };

      /**
       * @ngdoc method
       * @methodOf nix.track-api-client.nixTrackApiClient.auth.object:signup
       *
       * @name nix.track-api-client.nixTrackApiClient.auth.object:signup#step2
       * @description
       * completes user creation process.
       *
       * @param {Object} user Registration submit data
       *
       * @returns {Object} Registration data
       */
      client.auth.signup.step2 = function (user) {
        return client('/auth/signup/step2', {
          method: 'POST',
          data:   user
        });
      };

      /**
       * @ngdoc method
       * @methodOf nix.track-api-client.nixTrackApiClient.object:auth
       *
       * @name nix.track-api-client.nixTrackApiClient.object:auth#signin
       * @description
       * logs into a user.
       *
       * @param {object} user minimum of password, and either phone or email fields
       *
       * @returns {Object} User object
       */
      client.auth.signin = function (user) {
        return client('/auth/signin', {
          method: 'POST',
          data:   user
        });
      };

      /**
       * @ngdoc object
       * @name nix.track-api-client.nixTrackApiClient.object:permissions
       *
       * @description
       * Permissions related endpoints
       */
      client.permissions = {};
      /**
       * @ngdoc method
       * @methodOf nix.track-api-client.nixTrackApiClient.object:permissions
       *
       * @name nix.track-api-client.nixTrackApiClient.object:permissions#request
       * @description
       * requests permissions from a user via their id
       *
       * @param {object} users users to request permissions from
       */
      client.permissions.request = function (users) {
        return client('/premissions/request', {
          method: 'POST',
          data:   {
            users: angular.isArray(users) ? users : [users]
          }
        });
      };

      /**
       * @ngdoc object
       * @name nix.track-api-client.nixTrackApiClient.object:reports
       *
       * @description
       * Reports related endpoints
       */
      client.reports = {};

      /**
       * @ngdoc method
       * @methodOf nix.track-api-client.nixTrackApiClient.object:reports
       *
       * @name nix.track-api-client.nixTrackApiClient.object:reports#request
       * @description
       * requests historical food log data
       *
       * @param {object} params Please refer to track api docs
       *
       * @returns {object} Totals data
       */
      client.reports.totals = function (params) {
        return client('/reports/totals', {
          method: 'GET',
          params: params
        });
      };


      /**
       * @ngdoc object
       * @name nix.track-api-client.nixTrackApiClient.object:recipes
       *
       * @description
       * Recipes related endpoints
       */
      client.recipes = {};

      /**
       * @ngdoc method
       * @methodOf nix.track-api-client.nixTrackApiClient.object:recipes
       *
       * @name nix.track-api-client.nixTrackApiClient.object:recipes#delete
       * @description
       * delete recipe
       *
       * @param {string} id Recipe id
       */
      client.recipes.delete = function (id) {
        return client('/recipes', {
          method: 'DELETE',
          data:   {id: id}
        });
      };

      /**
       * @ngdoc method
       * @methodOf nix.track-api-client.nixTrackApiClient.object:recipes
       *
       * @name nix.track-api-client.nixTrackApiClient.object:recipes#get
       * @description
       * requests recipes
       *
       * @param {string} [id] The id of a recipe to retrieve.
       *                    If absent then endpoint returns all recipes for specified user.
       * @param {string} [userId] the user which recipe(s) belong to.
       *                          defaults to the authenticated user
       *
       * @return {Object|Object[]} Recipe(s)
       */
      client.recipes.get = function (id, userId) {
        var params = {};
        if (userId) {
          params.user = userId;
        }

        if (id) {
          params.id = id;
        }

        return client('/recipes', {
          method: 'GET',
          params: params
        });
      };

      /**
       * @ngdoc method
       * @methodOf nix.track-api-client.nixTrackApiClient.object:recipes
       *
       * @name nix.track-api-client.nixTrackApiClient.object:recipes#add
       * @description
       * creates recipe
       *
       * @param {string} name Recipe name
       * @param {string} query Recipe query
       */
      client.recipes.add = function (name, query) {
        return client('/recipes', {
          method: 'POST',
          data:   {
            "query":       query,
            "recipe_name": name
          }
        });
      };

      /**
       * @ngdoc method
       * @methodOf nix.track-api-client.nixTrackApiClient.object:recipes
       *
       * @name nix.track-api-client.nixTrackApiClient.object:recipes#update
       * @description
       * update recipe_name
       *
       * @param {string} id Recipe id
       * @param {string} name Recipe name
       * @param {string} query Recipe query
       */
      client.recipes.update = function (id, name, query) {
        var data = {id: id};

        if (!angular.isUndefined(name)) {
          data.name = name;
        }

        if (!angular.isUndefined(query)) {
          data.query = query;
        }

        return client('/recipes', {
          method:  'PUT',
          headers: {"x-user-jwt": client.getUserJwt()},
          data:    data
        });
      };


      return client;
    };
  });

  /**
   * @ngdoc filter
   * @name nix.track-api-client.filter:nutrient
   * @function
   *
   * @description
   * Finds nutrition with specified id in array of nutrients
   *
   * @param {Array} nutrients Collection of nutrients
   * @param {string} id Nutrient attr_id to search for
   * @param {string} [attribute] property to immediately return from found nutrient
   *
   * @returns {*} Nutrient object itself, or it's property named with the third param
   *
   */
  module.filter('nutrient', function () {
    return function nutrient(nutrients, id, attribute) {
      var i;
      id = parseInt(id);
      if (id && angular.isArray(nutrients)) {
        for (i in nutrients) if (nutrients.hasOwnProperty(i)) {
          if (parseInt(nutrients[i].attr_id) === id) {
            return attribute ? nutrients[i][attribute] : nutrients[i];
          }
        }
      }

      return null;
    };
  });

  /**
   * @ngdoc function
   * @name nix.track-api-client.functions:deepMerge
   * @function
   * @param {object} a First object
   * @param {object} b Second object
   *
   * @description
   *
   * Deep merge for any number of objects as arguments
   *
   * Accessible as direct method of the module object <pre>angular.module('nix.track-api-client').deepMerge(a, b);</pre>
   *
   * @returns {object} Resulting object
   */
  module.deepMerge = function deepMerge(a, b) {
    var result, property;

    if (arguments.length > 2) {
      return deepMerge(a, deepMerge.apply(null, Array.prototype.slice.call(arguments, 1)));
    }

    result = angular.copy(a);
    for (property in b) if (b.hasOwnProperty(property)) {
      if (
        result.hasOwnProperty(property) &&
        angular.isObject(result[property]) &&
        angular.isObject(b[property])
      ) {
        result[property] = deepMerge(result[property], b[property]);
      } else {
        result[property] = angular.copy(b[property]);
      }
    }

    return result;
  };
})(window, window.angular);