var pdf = require("html-pdf")

class PdfWriter{
    static WritePdf(filename, html){
        pdf.create(html,{}).toFile(filename, (err) =>{
            if(err)
                console.log(err)
        })
    }
}
module.exports = PdfWriter