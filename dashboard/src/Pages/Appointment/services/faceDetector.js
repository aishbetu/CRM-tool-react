import * as faceapi from "face-api.js";

const faceDetector = (image) => {
    const imageRef = image;

    const handleFaceSize = (faceWidth, faceHeight) => {
        const faceDimension = {
            faceWidth: faceWidth,
            faceHeight: faceHeight
        };

        localStorage.setItem('faceData', JSON.stringify(faceDimension))
    }

    const handleImage = async () => {
        const detections = await faceapi
            .detectSingleFace(imageRef, new faceapi.TinyFaceDetectorOptions())
            // console.log(`Width ${detections.box._width} and Height ${detections.box._height}`);
        const faceWidth = detections.box._width;
        const faceHeight = detections.box._height;
        handleFaceSize(faceWidth, faceHeight)

        extractFaceFromBox(imageRef, detections.box)

        console.log(`Width ${faceWidth} and Height ${faceHeight}`);
    }

    const loadModels = async () => {
        const MODEL_URL = process.env.PUBLIC_URL + "/models";
        Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
            faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
            faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
            faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL)
        ])
            .then(handleImage)
            .catch((e) => console.error(e));
    };
    loadModels();

}


async function extractFaceFromBox(imageRef, box){
    const regionsToExtract = [
        new faceapi.Rect( box.x, box.y , box.width , box.height)
    ]
    let faceImages = await faceapi.extractFaces(imageRef, regionsToExtract)

    if(faceImages.length === 0){
        console.log('Face not found')
    }
    else
    {
        // const outputImage = ""
        faceImages.forEach(cnv =>{
            // outputImage.src = cnv.toDataURL();
            // setPic(cnv.toDataURL())
            console.log(cnv.toDataURL())
            handleImageUrl(cnv.toDataURL())
        })
        // setPic(faceImages.toDataUrl);
        console.log("Face is found")
        // console.log(pic)
    }
}

const handleImageUrl = (imageUrl) => {
    localStorage.setItem('faceUrl', JSON.stringify(imageUrl))
}

export {faceDetector}
