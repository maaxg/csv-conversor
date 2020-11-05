const Reader = require("./Reader")
const Processor = require("./Processor")
const Table = require("./Table")
const HtmlParser = require("./HtmlParser")
const FileWriter = require("./FileWriter")
const PdfWriter = require("./PdfWriter")
var reader = new Reader()
var htmlWriter = new FileWriter()

async function main() {
    var data = await reader.Read('./cs50.csv')

    var dataProcessed = Processor.Process(data)

    var dataInTable = new Table(dataProcessed)

    var html = await HtmlParser.Parse(dataInTable)

    htmlWriter.Write(Date.now() + ".html", html)
    
    PdfWriter.WritePdf(Date.now() + ".PDF", html)

    console.log(html)
}

main()