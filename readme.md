# gulp-sass-to-less

Full credit for this plugin goes to (here)[]. This is just a nice gulp version!

## Usage
```js
return gulp.src(MY_SASS_FILES)
  .pipe(sass2less())
  .pipe(gulp.dest('./));
``` 

Tada! your SASS is now LESS!
