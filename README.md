# React Standalone Web-pages

> Code is read much more often than it is written.


## Project structure

We follow a sensible and low-maintenance project structure, wherein:
* all the components go into the `src/components/` and `www/layout/` will be the core  directory.
* all source files (css, images) go into the `css/` directory.
* all development dependencies (`npm` packages) go into the `node_modules` directory.
* all production-ready files (CSS, JS, images, fonts), go into the `dist/` directory (`Auto generated`).
* all configuration files (`webpack-config`, `package.json`, `.babelrc`, `.gitignore`) can be found in the project root.

In effect, this is what the project tree should look like:
```
+-- css/
+-- node_modules/
+-- public/
+-- src/
	+-- components/
	    +-- layout/
	    +-- reservation-form/
		+-- feature_components
			.
			.
			.
+-- dist/
	+-- bundle.js/
+-- .babelrc
+-- .eslintrc
+-- .gitignore
+-- webpack-config.js
+-- package.json
+-- README.md
```

## Project setup

First-time project setup consists of:
* installing `Node.js`, `npm`, `webpack`, `webpack-cli`, `webpack-dev-server`
* installing dev-dependencies (`npm` packages)

Once you've installed Node.js and `npm` on your system, install `webpack`, `webpack-cli` and `webpack-dev-server` globally, like so:
```
$ npm install -g webpack webpack-cli webpack-dev-server
```
Next, `cd` into the project root to install the dev-dependencies, like so:
```
$ cd <PROJECT_ROOT>
$ npm install
```
Finally, fire up `start` to open up a web-browser, watch the filesystem for changes, and to live-reload the browser whenever there's a relevant change:
```
$ npm start
```

## Installing new `npm` packages

We use Node.js only during development/testing and it is **not** required in a production environment. It follows that any `npm` dependencies will always be dev-dependencies, i.e., they must either:
* be put into the `devDependencies` section of the project's `package.json`, or
* be installed with the `--save-dev` flag, so that the dependency is *automatically* added to the `devDependencies` section of the project's `package.json`. Like so:
```
$ npm install --save-dev webpack-dev-server
```

**Never** install `npm` packages with the `--save` flag, and **never** add `npm` packages to the `dependencies` section of the project's `package.json`.

