import React, { useState } from "react";
import { Chip, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "../css/pDetails.css"
import { data } from "../data";
import { useParams } from "react-router-dom";
import ImageModal from "./ImageModal";



const ProjectDetails = () => {
  const { id } = useParams();
  const findProject = data.find((item) => item.id == id);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="projectsContainer">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        coverflowEffect={{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true }}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        style={{ width: "80%", margin: "auto"}}
      >
        {findProject.imagesDetail.map((img, index) => (
          <SwiperSlide key={index} style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={img}
              alt={`Slide ${index}`}
              onClick={() => setSelectedImage(img)}
              className="projectImage"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />

      <div>
        <h1 className="text-center">{findProject.name}</h1>
        <p className="text-center" style={{ fontSize: "20px" }}>{findProject.description}</p>
      </div>

      <div className="usedTechnologies">
        {findProject.technologies.map((item, index) => (
          <Chip key={index} label={item} color="primary" variant="outlined" className="me-2" sx={{ fontSize: "18px" }} />
        ))}
      </div>

      <div>
        <Button variant="outlined" color="secondary" href={findProject.link} target="_blank">
          GitHub Repo
        </Button>
      </div>
    </div>
  );
};

export default ProjectDetails;
