var envVarsToExposes = [];

exposeEnvVar = function(envVarName) {
  envVarsToExposes.push(envVarName);
};

Meteor.startup(function() {
  envVarsToExposes.forEach(function(envVarName) {
    Meteor.settings.public[envVarName] = process.env[envVarName];
  });
});
