[meteor-env](https://atmospherejs.com/rikonor/env)
---

#### Description

If you prefer to provide various settings and keys using `environment variables` rather then use `settings.json`, then this package exposes a simple function which lets you specify which environment variables are to be exposed to the client.
They can then be found in `Meteor.settings.public`;

#### Installation

```
meteor add rikonor:env
```

#### Usage

```
// Assuming the following
export SECRET_KEY=iamsecret PUBLIC_KEY=iampublic
meteor

// On server
exposeEnvVar('PUBLIC_KEY');

// On client
Meteor.settings.public.PUBLIC_KEY
```

Notice this package assumes precedence over `settings.json`, meaning any environment variables you provide will overwrite similar values present in your `settings.json`;
