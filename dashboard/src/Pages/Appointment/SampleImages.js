import React, {useEffect, useState} from 'react'
import {Grid, makeStyles} from "@material-ui/core";
import CardImage from "./components/CardImage";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PopupCard from "./components/PopupCard";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router";
import Divider from "@material-ui/core/Divider";
import Title from "../../components/Title";
import HairSamples from "../../assets/hairSamples/Images";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(0,1),
    },
    paperStyle: {
        padding: theme.spacing(2, 2, 6, 2),
        // backgroundColor: theme.palette.primary.extraLight,
    },
    centerGrid: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: theme.palette.primary.dark
    },
    divider: {
        margin: theme.spacing(1,0)
    }
}))

const SampleImages = () => {
    const history = useHistory()
    const hairSamples = HairSamples;
    const classes = useStyles();
    const [openModal, setOpenModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const [image, setImage] = useState();
    const getData = localStorage.getItem('faceUrl')
    const ImgData = JSON.parse(getData)
    // console.log(ImgData)

    useEffect(() => {
        setImage(ImgData)
    },[])

    const handleOpen = (item) => {
        setOpenModal(true);
        console.log(item)
        setSelectedImage(item);
    };

    const handleClose = () => {
        setOpenModal(false);
    };


    return (
        <>

            <Title title="CRM | Samples" />

          <div className={classes.root}>
              {/*Initially below tag was paper tag bt changed to div to remove paper properties*/}
              <div className={classes.paperStyle}>
                  <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      >
                      {/*<Grid item xs={12}>*/}
                      {/*    <Typography component="div">*/}
                      {/*        <Box fontSize={20} fontWeight={900} style={{color: theme.palette.primary.dark}}>Hair Styles</Box>*/}
                      {/*        <Box fontSize={14} fontWeight={100}>Click on any image card to preview</Box>*/}
                      {/*    </Typography>*/}
                      {/*</Grid>*/}

                      <Grid item xs={6}>
                          <Typography component="div">
                              <Box fontSize={20} fontWeight={900} className={classes.title}>Hair Styles</Box>
                              <Box fontSize={14} fontWeight={100}>Click on any image to preview</Box>
                          </Typography>
                      </Grid>

                      <Grid item xs={6}>
                          <Typography component="div" style={{float: 'right'}}>
                              <Button variant="outlined" color="primary" style={{ textTransform: 'none'}} onClick={() => history.push("dashboard/home")}>Back To Dashboard</Button>
                          </Typography>
                      </Grid>

                      <Grid item xs={12}>
                          <Divider variant="middle" className={classes.divider} />
                      </Grid>

                      {/*repeating card sample container component till 18 times*/}
                      {

                          hairSamples.map((item, index) =>
                              <Grid item xs={2} key={index}>
                                     <CardImage ImgData={image} samples={item} handleOpen={() => handleOpen(item)} />
                              </Grid>
                          )

                          // [...Array(18)].map((item, index) =>
                          //     <Grid item xs={2}>
                          //         <CardImage ImgData={image} handleOpen={handleOpen} />
                          //     </Grid>
                          // )
                      }
                      <PopupCard
                          img={image}
                          samples={selectedImage}
                          openModal={openModal}
                          setOpenModal={setOpenModal}
                          handleOpen={handleOpen}
                          handleClose={handleClose}
                      />


                  </Grid>
              </div>
          </div>
            </>
    );
}

export  default SampleImages;
