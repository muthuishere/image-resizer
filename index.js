

  const sharp = require('sharp');
  var path = require("path");



  const absoluteFilename=process.argv[2]








  const getFileNameForSize =(absoluteFilename,dimension)=>{

    const filenameWithExtension = path.basename(absoluteFilename);
      const foldername= path.dirname(absoluteFilename);
    const filenameExtnArray = filenameWithExtension.split(".");
    const filename= filenameExtnArray[0];
    const extn= path.extname(absoluteFilename)


    return foldername + "\\" +  filename +"-" + dimension +  extn


  }

  const resizeFor =async (input)=>{
      let dimension=input.dimension
   return await sharp(input.absoluteFilename)
        .resize({ width: dimension,height: dimension })
        .toFile(input.resizedFileName)

  }
  const getInputFor =(dimension)=>{

      return {"absoluteFilename":absoluteFilename,"resizedFileName":getFileNameForSize(absoluteFilename,dimension),"dimension":dimension}
  }

  console.log("absolutefile" + absoluteFilename);

  const dimensions=[256,128,64,48,38,32,19,16]


  dimensions
        .map(getInputFor)
        .map(resizeFor)






