Package.describe({
  name: 'evaisse:diacritics',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Removes accents / diacritics from strings, sentences, and paragraphs fast and efficiently.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/evaisse/meteor-diacritics',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({ diacritics: "1.2.*"});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('diacritics.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('evaisse:diacritics');
  api.addFiles('diacritics-tests.js');
});
