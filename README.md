# csv-conversor
This module Converts .csv files to .html and then to .PDF

## <h1>How it Works?</h1>
<p>The whole program it's centralized in <strong>index.js</strong>.
And basically works with you typing the your file path and the other things the script will do it</p>

## Usage
![cutted](https://user-images.githubusercontent.com/49838612/98447723-deb6b100-2105-11eb-9c47-038811c15d06.png)

## <h2>Step by Step</h2>

<p> Index.js have only one function called main and this function it's executed right below</p>
<p>First this function read the csv file and set it to a variable called <strong>data</strong>, after that we Process this data
with out Processor class and set what is returned to a variable called <strong>dataProcessed</strong>. After we process this data,
we can put this into a table and then parse that table to a <strong>.ejs</strong> file. Lastly it creates a .html file and then the .PDF file</p>

## index.js
 
![index](https://user-images.githubusercontent.com/49838612/98447890-33a6f700-2107-11eb-8cde-26e0daa04554.png)

## Processor.js

![Processor](https://user-images.githubusercontent.com/49838612/98447915-5a652d80-2107-11eb-9378-5282355222e1.png)

## HtmlParser

![HtmlParser](https://user-images.githubusercontent.com/49838612/98447961-afa13f00-2107-11eb-84fc-ba5c40d69c16.png)

## Table.js

![Table](https://user-images.githubusercontent.com/49838612/98447964-b92aa700-2107-11eb-90c6-61fa49dbdb90.png)


## And that's all folks...

<p><strong>You can use this project as you wish</strong></p>
  
  

