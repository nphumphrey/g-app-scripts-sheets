function SplitSheetIntoClasses() {
  // A function to SplitSheetIntoClasses
  //based on a particular column that contains classes (i.e. Form)
  //
  //resource:
  //https://stackoverflow.com/questions/60674902/i-need-to-split-a-google-sheet-into-multiple-tabs-sheets-based-on-column-value
  //
  //
  
  var sheet = SpreadsheetApp.getActiveSheet();

  // This var will contain all the values from column I -> Class
  var columnClass = sheet.getRange("I:I").getValues();

  // This var will contain all the rows
  var rows = SpreadsheetApp.getActiveSheet().getDataRange().getValues();

  //Set the first row as the header
  var header = rows[0];

  //Store the classes already created
  var completedClasses = []

  //The last created class
  var last = columnClass[1][0]


  for (var i = 1; i < columnClass.length; i++) {    

    //Check if the room is already done, if not go in and create the sheet
    if(!completedClasses.includes(columnClass[i][0])) {

      //Set the Sheet name = class (except if there is no name, then = No Class)
      if (columnClass[i][0] === "") {
        var currentSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("No Class");
      } else {
        var currentSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(columnClass[i][0]);
      }


      //append the header
      currentSheet.appendRow(header);
      currentSheet.appendRow(rows[i]);
      completedClasses.push(columnClass[i][0])
      last = columnClass[i][0]
    } else if (last == columnClass[i][0]) {

    // If the class's sheet is created append the row to the sheet


      var currentSheet = SpreadsheetApp.getActiveSpreadsheet()
      
      //To Do: need to add a try catch statement to handle Exception appendRow() must be nonempty
      //I guess there is an empty row or two at the end of the sheet
      currentSheet.appendRow(rows[i]);
    }

  }

}
