### Eslint 
- can show you error on demand when you are writing your code - and I have to install editor plugin for using it (can be used on server side in any test)
- rules are defined in files:
```plain
- .eslintignore, .eslintrc.json
```
### Prettier 
- can format you code on save or can be fired by key shortcut - and I have to install editor plugin for using it
- rules are defined in file:
```plain
- .prettierrc
```
### Editorconfig 
- can say to your editor coding standards even if you dont have any plugin installed
- rules are defined in file:
```plain
- .editorconfig
```

### Babel

- rules are defined in file:
```plain
- .babelrc
```

This part was added to resolve error when SSR vs Browser has different component classes (they generated different hash code)
```plain
"plugins": [["styled-components", { "ssr": true }]]
```
