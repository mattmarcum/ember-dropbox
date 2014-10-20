module.exports = {
  description: 'Sets up ember-dropbox',


  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function(options) {
      addRouteToRoute( 'dropbox-oauth2', 'route' );
  }
};

function addRouteToRouter(name, options) {
  var type       = options.type || 'route';
  var routerPath = path.join(process.cwd(), 'app', 'router.js');
  var oldContent = fs.readFileSync(routerPath, 'utf-8');
  var existence  = new RegExp("(?:route|resource)\\s*\\(\\s*(['\"])" + name + "\\1");
  var newContent;
  var plural;

  if (existence.test(oldContent)) {
    return;
  }

  switch (type) {
  case 'route':
    newContent = oldContent.replace(
      /(map\(function\(\) {[\s\S]+)}\)/,
      "$1  this.route('" + name + "');" + EOL + "})"
    );
    break;
  case 'resource':
    plural = inflection.pluralize(name);

    if (plural === name) {
      newContent = oldContent.replace(
        /(map\(function\(\) {[\s\S]+)}\)/,
        "$1  this.resource('" + name + "', function() { });" + EOL + "})"
      );
    } else {
      newContent = oldContent.replace(
        /(map\(function\(\) {[\s\S]+)}\)/,
        "$1  this.resource('" + name + "', { path: '" + plural + "/:" + name + "_id' }, function() { });" + EOL + "})"
      );
    }
    break;
  }

  fs.writeFileSync(routerPath, newContent);
}
