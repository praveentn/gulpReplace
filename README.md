# gulpReplace

Replace all the items in one array with the corresponding ones in another array <br/>


# Purpose

bulkMatchAndReplace.js
* Directory with a list of XML files <br/>
* Need to replace a list of values  <br/>
* match and replacement both are arrays <br/>
* Write the modified files to different directory  <br/>

arrayMatchAndReplace.js
* Directory with a list of XML files <br/>
* Need to replace a list of values  <br/>
* matches are arrays; replacement is string <br/>
* Write the modified files to different directory  <br/>

# Working

bulkMatchAndReplace.js
* Multiple XML files in input directory  <br/>
* Match values in array1 = ["existing_value1", "existing_value2", "existing_value3"]; <br/>
* Replace with values in array2 = ["new_value1", "new_value2", "new_value3"]; <br/>
* ie. "existing_value1" will be replaced with "new_value1",  <br/>
* "existing_value2" will be replaced with "new_value2" and so on <br/>

arrayMatchAndReplace.js
* Multiple XML files in input directory  <br/>
* Match values in array1 = ["existing_value1", "existing_value2", "existing_value3"]; <br/>
* Replace with value for repval = 'SYSTEM'; <br/>
* ie. "existing_value1" will be replaced with 'SYSTEM', <br/>
* "existing_value2" will be replaced with 'SYSTEM' and so on <br/>

# Pre-requisites

* NPM <br/>
* Gulp <br/>
* Gulp Replace <br/>
