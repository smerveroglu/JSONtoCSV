
async function fetchText() {
  let response = await fetch('/data.json');
  let info = await response.json();
  download_csv(info);
}

function download_csv(info) {
   const data =info.data;
   var csv='';
   //Add Key with ',' in csv 
   Object.keys(data[0]).forEach((key) => {
        csv += key+',';
        console.log(key);  

   });
   csv = csv.substring(0, csv.length - 1); 
   csv += '\n';

   //Add Value with ',' in csv 
   data.forEach(function(d) {
      var row =[];

      Object.keys(d).forEach((key) => {
          row.push(d[key]);
      });
       csv += row.join(',');
       csv += "\n";
   });

   //Create and Download CSV file
   var element = document.createElement('a');
   element.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
   element.target = '_blank';
   element.download = 'people.csv';
   element.click();
}

