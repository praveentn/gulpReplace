var gulp = require('gulp'); 
var replace = require('gulp-replace'); 

gulp.task('default', function() {   
    
    // find & replace the values in array1 with a custom value - 'SYSTEM'
    var replacewith = 'SYSTEM'
    var array1 = ["existing_value1", "existing_value2", "existing_value3"];  
    var num = array1.length();
    for (i=0;i<num;i++) {
        gulp.src(['input/*.xml'])
            .pipe(replaceArray(array1[i], replacewith))
            .pipe(gulp.dest('build/'));
    } 
});

// custom function to replace values in an array
// accepts the array and replacement as inputs
// output is passed onto the pipe for building output file
function replaceArray(searchArray, replacement) { 
    return through.obj(function(file, encoding, callback) { 
        if (file.isBuffer()) { 
            var result = searchArray.reduce(function(contents, searchArray) { 
                return contents.split(searchArray).join(replacement); 
                }, 
            String(file.contents)); 
            file.contents = new Buffer(result); 
            return callback(null, file); 
            } 
        callback(null, file); 
    }); 
}
