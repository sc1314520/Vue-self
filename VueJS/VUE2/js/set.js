function df() {
    // 參數列表
    var ss = SpreadsheetApp.getActive();
    var sheet = ss.getActiveSheet();
    var fdate = sheet.getRange("A2").getValue();
    var year = new Date(fdate).getFullYear();
    var month =new Date(fdate).getMonth()+1;
  
    // 找尋範圍
    var column =find(); // 查找欄位
    var row =findR(); // 查找第一筆資料列
    var last = total(); // 查找最後一筆資料列
    var alpha = set(); // 設置欄位
  
    // 日期取值範圍
    var range = sheet.getRange((row+1),column,last);
    var data =range.getValues();
  
  
  
    if(month==1){
      for(var i=0 ; i<data.length ;i++){
            if(data[i][0].slice(0,2)=='次月'){
              if(data[i][0].slice(2,4)==30){
                if(year%4==0 && year%100!=0){
                  var str = year+"/"+(month+1)+"/"+(+(data[i][0].slice(2,4))-1);
                  // 日期輸出範圍
                  sheet.getRange(alpha+((row+1)+i)).setValue(str);
                }
                else{
                  var str = year+"/"+(month+1)+"/"+(+(data[i][0].slice(2,4))-2);
                  // 日期輸出範圍
                  sheet.getRange(alpha+((row+1)+i)).setValue(str);
                }
              }
              else{
                var str = year+"/"+(month+1)+"/"+(data[i][0].slice(2,4));
                // 日期輸出範圍
                sheet.getRange(alpha+((row+1)+i)).setValue(str);
              }
            }
            else{
              var str = year+"/"+(month+2)+"/"+(data[i][0].slice(4,6));
              // 日期輸出範圍
              sheet.getRange(alpha+((row+1)+i)).setValue(str);
            }
      }
    }
    else if(month>1 && month<=10){
      for(var i=0 ; i<data.length ;i++){
            if(data[i][0].slice(0,2)=='次月'){
              var str = year+"/"+(month+1)+"/"+(data[i][0].slice(2,4));
              // 日期輸出範圍
              sheet.getRange(alpha+((row+1)+i)).setValue(str);
              
            }
            else{
              var str = year+"/"+(month+2)+"/"+(data[i][0].slice(4,6));
              // 日期輸出範圍
             sheet.getRange(alpha+((row+1)+i)).setValue(str);
            }
      }
    }
    else if(month==11){
      for(var i=0 ; i<data.length ;i++){
            if(data[i][0].slice(0,2)=='次月'){
              var str = year+"/"+(month+1)+"/"+(data[i][0].slice(2,4));
              // 日期輸出範圍
              sheet.getRange(alpha+((row+1)+i)).setValue(str);
              
            }
            else{
              var str = (year+1)+"/1"+"/"+(data[i][0].slice(4,6));
              // 日期輸出範圍
              sheet.getRange(alpha+((row+1)+i)).setValue(str);
            }
      }
    }
    else{
      for(var i=0 ; i<data.length ;i++){
            
            if(data[i][0].slice(0,2)=='次月'){
              var str = (year+1)+"/1"+"/"+(data[i][0].slice(2,4));
              // 日期輸出範圍
              sheet.getRange(alpha+((row+1)+i)).setValue(str);
            }
            else{
              if(data[i][0].slice(4,6)==30){
                if((year+1)%4==0 && (year+1)%100!=0){
                  var str = (year+1)+"/2"+"/"+(+(data[i][0].slice(4,6))-1);
                  // 日期輸出範圍
                  sheet.getRange(alpha+((row+1)+i)).setValue(str);
                }
                else{
                  var str = (year+1)+"/2"+"/"+(+(data[i][0].slice(4,6)));
                  // 日期輸出範圍
                  sheet.getRange(alpha+((row+1)+i)).setValue(str);
                }
              }
              else{
                var str = (year+1)+"/2"+"/"+(+(data[i][0].slice(4,6)));
                  sheet.getRange(alpha+((row+1)+i)).setValue(str);
              }
              
            }
        }
    }
  }
  
  
  function find(){
    var ss = SpreadsheetApp.getActive();
    var sheet = ss.getActiveSheet();
    var column = sheet.getRange(7,1,1,ss.getLastColumn())
    var data =column.getValues();
    
    for(var i=0;i<data[0].length;i++){
      if(data[0][i]=='約定匯款日期'){
        console.log(i)
        return i+1;
      }
    }
    return undefined;
  }
  
  function findR(){
    var ss = SpreadsheetApp.getActive();
    var sheet = ss.getActiveSheet();
    var row = sheet.getRange("A1:A")
    var data =row.getValues();
    for(var i =0 ;i<data.length ;i++){
      if(data[i][0]=='房源名'){
        console.log(i)
        console.log("找到資料")
        return i+1;
      }
    }
    return undefined;
  }
  
  function total(){
    var ss = SpreadsheetApp.getActive();
    var sheet = ss.getActiveSheet();
    var row = sheet.getRange("A"+findR()+":A")
    var data =row.getValues();
    for(var i =0 ;i<data.length ;i++){
      if(data[i][0]==''){
        console.log(i)
        console.log("找到空白")
        return i-1;
      }
    }
    return undefined;
  }
  
  function set(){
    var index =find()-1;
    var alpha =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    return alpha[index];
  }