Drupal RESTful 7 auth using Angular
====================

## Preparation
1. Create a Drupal 7 site with [RESTful](https://github.com/Gizra/restful) module
2. Enable "RESTful token auth" (``drush en restful_token_auth -y``)
3. Be ready to set CORS in your ``settings.php``, according to the explanation in the Angular app

## Install

```bash
npm install
bower install
```

## Serve app
``grunt serve``

## Credits
[Gizra](http://gizra.com)
