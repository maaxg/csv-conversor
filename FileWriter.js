const fs = require("fs")
const { promisify } = require("util")


class FileWriter{
    constructor(){
        this.writer = promisify(fs.writeFile)
    }
    async Write(filename, data){
        try{
            await this.writer(filename, data)
            return true
        }catch(e){
            console.log(e)
            return false
        }
    }
}

module.exports = FileWriter
