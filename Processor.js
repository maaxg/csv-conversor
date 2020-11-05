class Processor {
    static Process(data) {
        var rows = data.split("\r\n")
        var rowNoComma = []
        rows.forEach(row => {
            var noComma = row.split(",")
            rowNoComma.push(noComma)
        });
        return rowNoComma
    }

}

module.exports = Processor