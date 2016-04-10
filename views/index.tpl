<html>
  <head>
     <base href="/">
    <title>Angular 2 QuickStart</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/styles.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

    <!-- 1. Load libraries -->
    <!-- IE required polyfills, in this exact order -->
    <script src="node_modules/es6-shim/es6-shim.min.js"></script>
    <script src="node_modules/systemjs/dist/system-polyfills.js"></script>
    <script src="node_modules/angular2/es6/dev/src/testing/shims_for_IE.js"></script>
    <script src="node_modules/angular2/bundles/angular2-polyfills.js"></script>
    <script src="node_modules/systemjs/dist/system.src.js"></script>
    <script src="node_modules/angular2/bundles/router.dev.js"></script>
    <script src="node_modules/rxjs/bundles/Rx.js"></script>
    <script src="node_modules/angular2/bundles/http.js"></script>
    <script src="node_modules/angular2/bundles/angular2.dev.js"></script>

    <!-- 2. Configure SystemJS -->
    <script>
      System.config({
        packages: {
          js: {
            format: 'register',
            defaultExtension: 'js'
          }
        }
      });
      var systemLocate = System.locate;
System.locate = function(load) {
  var System = this; // its good to ensure exact instance-binding
  return Promise.resolve(systemLocate.call(this, load)).then(function(address) {
    return address + System.cacheBust;
  });
}
System.cacheBust = '?bust=1.7';
      System.import('js/main')
            .then(null, console.error.bind(console));
    </script>
  </head>

  <!-- 3. Display the application -->
  <body>
    <my-app>Loading...</my-app>
  </body>
</html>
