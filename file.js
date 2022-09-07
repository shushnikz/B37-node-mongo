const fs=require("fs")

// const quote="The way to get started is to quit talking and begin doing"

// fs.writeFile("./text-1.html",quote,(err)=>{
//     console.log("Completed writing text-1.html")
// })


//Create only 5 file

// const[,,noOfFiles]=process.argv;
// console.log(noOfFiles);
// const quote2="Happy Day";
// for(let i=1;i<=noOfFiles;i++){

//     fs.writeFile(`./Backup/text-${i}.html`,quote2,(err)=>{
//         console.log(`Completed writing text-${i}.html`)
//     })
// }


// readfile

// fs.readFile("./cool.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log("Error",err);
//     }
//     console.log("The content of the file is:",data)
// })


// append file

// const niceQuote="\nMake everyday a better one";

// fs.appendFile("./nice.txt",niceQuote,(err)=>{
//     console.log("Completed writing nice.txt")
// })

// Delete file

// fs.unlink("./toDelete.txt",(err)=>{
//     console.log("Deleted successfully")
// })

// read directory

// fs.readdir("./Backup",(err,files)=>{
//     console.log("All file name: ",files)
// })

// delete all file in backup folder

// fs.readdir("./Backup",(err,data)=>{
//         // console.log(data)
//         data.forEach(fileName=>{
//             fs.unlink(`./Backup/${fileName}`,(err)=>{
//                 console.log("Deleted successfully")
//                 })
    
//           })
//       })

      
// writefile


// const quote2="Happy Day";
// for(let i=1;i<=10;i++){

//    fs.writeFile(`./Backup/text-${i}.html`,quote2,(err)=>{
//             console.log(`Completed writing text-${i}.html`)
//     })
//  }


//  Writefile,readfile,appendfile => async
// To write it in order=>Writefilesync,readfilesync,appendfilesync=>sync

const[,,noOfFiles]=process.argv;
const quote2="Happy Day";
for(let i=1;i<=noOfFiles;i++){

    fs.writeFile(`./Backup/text-${i}.html`,quote2,(err)=>{
        console.log(`Completed writing text-${i}.html`)
    })
}


