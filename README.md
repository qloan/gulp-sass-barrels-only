# gulp-sass-barrels-only
A Gulp plugin that performs sass transpilation of barrel files only (it skips sass partials ie _partial.scss)

## Usage
```
const sass = require('gulp-sass-barrels-only');

gulp.src(source)
  .pipe(sass())
  .pipe(.pipe(gulp.dest(destination)))
  ```

Or with LibSass Options

```
const sass = require('gulp-sass-barrels-only');

gulp.src(source)
  .pipe(sass({
      outputStyle: 'expanded'
    }))
  .pipe(.pipe(gulp.dest(destination)))
```
