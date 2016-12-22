## Commands

All the commands referenced below can be found within the `package.json` file inside your documentation project folder. 
Feel free to customise these commands however you like __Swanky Docs__ provides some handy defaults out of the box to get 
your documentation up and running.

---

### Development Commands

```
npm start
```
This command will get your local instance of Swanky Docs up and running. This command is useful for local development and will compile and reload your code changes on the fly!

---

### Production Commands

The following commands will generally be used to build and optimise your code ready for production deployment.

```
npm run build
```
The `build` command will build, minify and optimise your code. The output of this step will create files in your `output` directory which is by default `./build`.

```
npm run build:serve
```
This command will build your documentation as above and also serve a local instance of the built and compiled documentation. By default this will be served localhohost:8080. This is 
useful for troubleshooting any production issues and any profiling of the generated documentation.