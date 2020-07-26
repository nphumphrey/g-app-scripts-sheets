// splitSheetIntoTabs - will split your master sheet in to separate sheets of 30 rows each. It will copy only the content not the background colors etc.

function splitSheetIntoTabs() {
   var sheet = SpreadsheetApp.getActiveSheet();
  var rows = SpreadsheetApp.getActiveSheet().getDataRange().getValues();
  var header = rows[0];
  var contents = rows.slice(1);
  var totalRowsPerSheet = 30; // This value will change no of rows per sheet
  
  //below we are chunking the toltal row we have into 30 rows each
  var contentRowsPerSheet = contents.map( function(e,i){ 
     return i%totalRowsPerSheet===0 ? contents.slice(i,i+totalRowsPerSheet) : null; 
}).filter(function(e){ return e; });

  contentRowsPerSheet.forEach(function(e){
    //crate new sheet here
  var currSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet();
    
    //append the header
    currSheet.appendRow(header);
    
    //populate the rows
    e.forEach(function(val){
      currSheet.appendRow(val);
    });
    
  });
  

}
