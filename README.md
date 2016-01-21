Track Api Angular Client
===============

This is client library for using 
[Nutritionix Track Api](https://trackapi.nutritionix.com/docs/) 
in AngularJS applications.

Installation
------------

```sh
bower install --save track-api-angular-client
```

```html
<script src="/bower_components/track-api-angular-client/track-api-angular-client.min.js"></script>
```

Usage
-----

Add module as application dependency

```javascript
angular.module('myApp', ['nix.track-api-client']);
```

Load service into your controller and call it's endpoints

Please refer to [API reference](http://nutritionix.github.io/track-api-angular-client/docs/)

```javascript
module.controller('MainCtrl', function ($scope, nixTrackApiClient) {
    // ...
});
```



