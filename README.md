# 图片压缩

- 使用tinypng进行压缩，内置4个token，每月可免费压缩2000次。[申请token](https://tinypng.com/developers)。

## 使用

```javascript
const gulp = require('gulp')
const compression = require('gulp-compression')

gulp.task('compression', function (done) {
  return gulp.src('*.{jpg,png}')
    .pipe(compression(...)) // 传递token 或 token列表
    .on('finish', done)
})
```