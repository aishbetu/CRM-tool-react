I used face-api.js for face detection.
In order to identify and detect face from the image in browser we needed the models to be loaded first.
To fix this issue, I've created a folder named models inside public directory and store all the models. Which can be accessed anywhere inside the application with process.env.
faceDetector function is just getting the image in base64 as input from the crop tool component and returning the dimension of the face calculated by size of face detector rectangle.
