/********
 *
 * Code Gen Messes with the casing of multiple responses. This is going to be easier than
 *
 * ****/
const replace = require('replace-in-file');
const options = { files: ['projects/bungie-api-angular/src/lib/model/*.ts'], from: /response/g, to: 'Response' };
const options2 = { files: ['projects/bungie-api-angular/src/lib/api/*.ts'], from: /responseType_ = 'blob'/g, to: `responseType_ = 'json';` };

replace(options)
  .then(changedFiles => {
    console.log('Modified files:', changedFiles.length);
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });

  replace(options2)
  .then(changedFiles => {
    console.log('Modified files:', changedFiles.length);
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });


  console.warn('NOTE!!!!  manually fix groupV2GroupSearch')