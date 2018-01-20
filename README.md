# Angular Mono Repo


## [Get started locally](#get-started-locally)
To get started locally, you need to:

1) Clone the repository
```shell
git clone https://github.com/alan-agius4/ng-mono-repo.git
cd ng-mono-repo
```

2) Install external dependencies
```
npm install
```

Note: There is a `postinstall` script that after `npm install` has finished will bootstrap the mono repo.

___
## [NPM Tasks](#npm-tasks)

| Task       | Description                                                                           |
|------------|---------------------------------------------------------------------------------------|
| bootstrap  | Install global package dependencies, package dependencies and bootstrap the mono repo |
| build      | Build all the packages inside the mono repo                                           |
| build-tools| Build the tools script that are used for building the mono repo                       |
| lint       | Lint source code                                                                      |
| clean      | Clean up packages `node_modules` and `dist` folders                                   |
| test       | Run unit and integration tests                                                        |
| test-debug | Run unit and integration tests in debug mode                                          |
| test-tdd   | Run unit and integration tests in watch mode                                          |
___