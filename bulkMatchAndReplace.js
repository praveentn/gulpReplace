var gulp = require('gulp');
var replace = require('gulp-replace');

gulp.task('default', function() { 

    // reads all input/*.xml files and replaces 
    // values in users1 with corresponding values in users2
    // writes to corresponding build/*.xml files
    
    var users1 = ["existing_value1", "existing_value2", "existing_value3"];
    var users2 = ["new_value1", "new_value2", "new_value3"];
    var stream = gulp.src(['input/*.xml']); 
    
    for (i=0;i<users1.length;i++) { 
        stream = stream.pipe(replace(users1[i], users2[i])); 
        } 
    return stream.pipe(gulp.dest('build/')
    ); 
});
