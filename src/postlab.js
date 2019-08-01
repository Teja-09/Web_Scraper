const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://www.livemint.com/elections';

var array_name = [];     
rp(url)
  .then(function(html){
    //success!
    const wikiUrls = [];
    for (let i = 0; i < 10; i++) {
      wikiUrls.push($('h2 > a', html)[i].children[0].data);
    }
    console.log(wikiUrls);
    for(i=0;i<10;i++)
    {
        array_name[i] = wikiUrls[i];
    }
    console.log(array_name);
  })
  .catch(function(err){
    //handle error
  });


var express = require('express');
var app = express();

app.use(express.urlencoded());

app.get('/',function(req,res){
    res.send('hello world from GET');
})

app.post('/',function(req,res){
    var send = res.send(
    `  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    
        <style>
            h1
            {
                margin-left: 35%;
            }
            table
            {
                margin-left: 40%;
                border-collapse: separate;
                border-spacing: 20px;
            }
    
        </style>
        
    </head>
    <body>
    
        <h1>Results in table format</h1>
        <table>
            <tr>
                <th>S.No</th>
                <th>`+array_name[0]+`</th>
            </tr>
            <tr>
                <td>1</td>
                <td>`+array_name[1]+`</td>
            </tr>
    
                <tr>
                <td>2</td>
                <td>`+array_name[2]+`</td>
                </tr>
    
                <tr>
                    <td>3</td>
                    <td>`+array_name[3]+`</td>
                </tr>

                <tr>
                        <td>4</td>
                        <td>`+array_name[4]+`</td>
                </tr>

                <tr>
                        <td>5</td>
                        <td>`+array_name[5]+`</td>
                </tr>

                <tr>
                        <td>6</td>
                        <td>`+array_name[6]+`</td>
                </tr>

                <tr>
                        <td>7</td>
                        <td>`+array_name[7]+`</td>
                </tr>

                <tr>
                        <td>8</td>
                        <td>`+array_name[8]+`</td>
                </tr>

                <tr>
                        <td>9</td>
                        <td>`+array_name[9]+`</td>
                </tr>

                <tr>
                        <td>10</td>
                        <td>`+array_name[10]+`</td>
                </tr>
        </table>
    </body>
    </html>
    `
        )}  
);

app.listen(8000);

 
