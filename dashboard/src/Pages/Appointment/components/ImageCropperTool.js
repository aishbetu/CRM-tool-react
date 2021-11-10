import React, { PureComponent } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { Button } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles";
import {faceDetector} from '../services/faceDetector';

const useStyles = theme => ({
    input: {
        display: 'none',
    },
    btn: {
        textTransform: 'none',
        padding: theme.spacing(1, 4),
        margin: theme.spacing(2)
    },
    centerBtnContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    }

});

class ImageCropperTool extends PureComponent {
    state = {
        src: null,
        crop: {
            // aspect: 1.33,
            // width: 50,
            // x: 0,
            // y: 0,
        }
    };

    onSelectFile = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener("load", () =>
                this.setState({ src: reader.result }),
            );
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    onImageLoaded = (image, pixelCrop) => {
        this.imageRef = image;
        this.props.setProfile(image.src);
        const dimensions = faceDetector(this.imageRef);
        // console.log(dimensions)
        // console.log(image.src)
        // Make the library regenerate aspect crops if loading new images.
        const { crop } = this.state;

        if (crop.aspect && crop.height && crop.width) {
            this.setState({
                crop: { ...crop, height: null }
            });
        } else {
            this.makeClientCrop(crop, pixelCrop);
        }
    };

    onCropComplete = (crop, pixelCrop) => {
        this.makeClientCrop(crop, pixelCrop);
    };

    onCropChange = (crop) => {
        this.setState({ crop });
    };

    async makeClientCrop(crop, pixelCrop) {
        if (this.imageRef && crop.width && crop.height) {
            const croppedImageUrl = await this.getCroppedImg(
                this.imageRef,
                pixelCrop,
                "newFile.jpeg"
            );
            this.setState({ croppedImageUrl });
            this.props.setProfile(croppedImageUrl);
            // const dimensions = faceDetector(croppedImageUrl);
        }
    }

    getCroppedImg(image, pixelCrop, fileName) {
        const canvas = document.createElement("canvas");
        canvas.width = pixelCrop.width;
        canvas.height = pixelCrop.height;
        const ctx = canvas.getContext("2d");

        ctx.drawImage(
            image,
            pixelCrop.x,
            pixelCrop.y,
            pixelCrop.width,
            pixelCrop.height,
            0,
            0,
            pixelCrop.width,
            pixelCrop.height
        );

        return new Promise((resolve, reject) => {
            canvas.toBlob((blob) => {
                blob.name = fileName;
                window.URL.revokeObjectURL(this.fileUrl);
                this.fileUrl = window.URL.createObjectURL(blob);
                resolve(this.fileUrl);
            }, "image/jpeg");
        });
    }

    render() {
        const { crop, croppedImageUrl, src } = this.state;
        const { classes } = this.props;
        // console.log(croppedImageUrl);
        return (
            <div>
                <div className={classes.centerBtnContainer}>
                    {/*<input type="file" onChange={this.onSelectFile} />*/}
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={this.onSelectFile}
                    />
                    <label htmlFor="contained-button-file">
                        <Button className={classes.btn} variant="contained" color="primary" component="span">
                            Choose Image
                        </Button>
                    </label>
                </div>
                {src && (
                    <ReactCrop
                        src={src}
                        crop={crop}
                        onImageLoaded={this.onImageLoaded}
                        onComplete={this.onCropComplete}
                        onChange={this.onCropChange}
                    />
                )}
                {croppedImageUrl && <img alt="Crop" src={croppedImageUrl} />}
            </div>
        );
    }
}

export default withStyles(useStyles, { withTheme: true })(ImageCropperTool);
