// deleteTabsOtherThanMaster - will revert the change done by 'splitSheetIntoTabs'. This function will help to revert the changes done by splitSheetIntoTabs.
// use this function revert the sheets create by splitSheetIntoTabs()

function deleteTabsOtherThanMaster() {
  var sheetNotToDelete ='Master';
    var ss = SpreadsheetApp.getActive();
  
  
    ss.getSheets().forEach(function(sheet){
      if(sheet.getSheetName()!== sheetNotToDelete)
      {
        ss.deleteSheet(sheet);
      }
    });


}
