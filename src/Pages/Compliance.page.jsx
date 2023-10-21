import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import OrangeButton from '../Components/OrangeButton';
import { useNavigate } from 'react-router-dom';

const VEHICLE_COMPLICANCE_REFERENCE_ITEMS = [
    { name: "Frente", img: "/PhotoTips/tip-photo-1 (1)" },
    { name: "Lateral esquerda", img: "/PhotoTips/tip-photo-1 (3)" },
    { name: "Lateral direita", img: "/PhotoTips/tip-photo-1 (4)" },
    { name: "Traseira", img: "/PhotoTips/tip-photo-1 (2)" },
    { name: "Painel", img: "/PhotoTips/tip-photo-1 (5)" },
    { name: "Velocímetro", img: "/PhotoTips/tip-photo-1 (6)" },
    { name: "Interior frente", img: "/PhotoTips/tip-photo-1 (7)" },
    { name: "Interior trás", img: "/PhotoTips/tip-photo-1 (8)" },
];

export default function Compliance() {
    const vehicleFrontImageRef = useRef(null);
    const vehicleBackImageRef = useRef(null);
    const vehicleLeftImageRef = useRef(null);
    const vehicleRightImageRef = useRef(null);
    const vehiclePanelImageRef = useRef(null);
    const vehicleVelocimeterImageRef = useRef(null);
    const vehicleFrontInteriorImageRef = useRef(null);
    const vehicleBackInteriorImageRef = useRef(null);
    const [vehicleFrontImage, setVehicleFrontImage] = useState(null);
    const [vehicleBackImage, setVehicleBackImage] = useState(null);
    const [vehicleLeftImage, setVehicleLeftImage] = useState(null);
    const [vehicleRightImage, setVehicleRightImage] = useState(null);
    const [vehiclePanelImage, setVehiclePanelImage] = useState(null);
    const [vehicleVelocimeterImage, setVehicleVelocimeterImage] = useState(null);
    const [vehicleFrontInteriorImage, setVehicleFrontInteriorImage] = useState(null);
    const [vehicleBackInteriorImage, setVehicleBackInteriorImage] = useState(null);

    const navigate = useNavigate();
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);
    function sendCompliance(){
        navigate('/status-buyer',{state:{status:'success'}});
    }

    function updatePhotos() {
        if(vehicleBackImageRef?.current?.files?.[0]){
            setVehicleBackImage(URL.createObjectURL(vehicleBackImageRef.current.files[0]));
        }
        if(vehicleFrontImageRef?.current?.files?.[0]){
            setVehicleFrontImage(URL.createObjectURL(vehicleFrontImageRef.current.files[0]));
        }
        if(vehicleLeftImageRef?.current?.files?.[0]){
            setVehicleLeftImage(URL.createObjectURL(vehicleLeftImageRef.current.files[0]));
        }
        if(vehicleRightImageRef?.current?.files?.[0]){
            setVehicleRightImage(URL.createObjectURL(vehicleRightImageRef.current.files[0]));
        }
        if(vehiclePanelImageRef?.current?.files?.[0]){
            setVehiclePanelImage(URL.createObjectURL(vehiclePanelImageRef.current.files[0]));
        }
        if(vehicleVelocimeterImageRef?.current?.files?.[0]){
            setVehicleVelocimeterImage(URL.createObjectURL(vehicleVelocimeterImageRef.current.files[0]));
        }
        if(vehicleFrontInteriorImageRef?.current?.files?.[0]){
            setVehicleFrontInteriorImage(URL.createObjectURL(vehicleFrontInteriorImageRef.current.files[0]));
        }
        if(vehicleBackInteriorImageRef?.current?.files?.[0]){
            setVehicleBackInteriorImage(URL.createObjectURL(vehicleBackInteriorImageRef.current.files[0]));
        }
    }
    return (
        <PageContainer>
            <h1 className='title'>Tire as fotos do veículo como na imagem abaixo:</h1>
            <PhotoComplianceList>
                <ComplianceItem>
                    <h1>Frente</h1>
                    <img className='tip' src={"/PhotoTips/tip-photo-1 (4).png"} alt="" />
                    <AddPhotoButton className="add-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <path d="M16.4062 0C17.9102 0 19.3628 0.193685 20.7642 0.581055C22.1655 0.968424 23.4701 1.521 24.6777 2.23877C25.8854 2.95654 26.9906 3.81104 27.9932 4.80225C28.9958 5.79346 29.8503 6.8986 30.5566 8.11768C31.263 9.33675 31.8156 10.647 32.2144 12.0483C32.6131 13.4497 32.8125 14.9023 32.8125 16.4062C32.8125 17.9102 32.6188 19.3628 32.2314 20.7642C31.8441 22.1655 31.2915 23.4701 30.5737 24.6777C29.856 25.8854 29.0015 26.9906 28.0103 27.9932C27.019 28.9958 25.9139 29.8503 24.6948 30.5566C23.4757 31.263 22.1655 31.8156 20.7642 32.2144C19.3628 32.6131 17.9102 32.8125 16.4062 32.8125C14.9023 32.8125 13.4497 32.6188 12.0483 32.2314C10.647 31.8441 9.34245 31.2915 8.13477 30.5737C6.92708 29.856 5.82194 29.0015 4.81934 28.0103C3.81673 27.019 2.96224 25.9139 2.25586 24.6948C1.54948 23.4757 0.996908 22.1712 0.598145 20.7812C0.199382 19.3913 0 17.9329 0 16.4062C0 14.9023 0.193685 13.4497 0.581055 12.0483C0.968424 10.647 1.521 9.34245 2.23877 8.13477C2.95654 6.92708 3.81104 5.82194 4.80225 4.81934C5.79346 3.81673 6.8986 2.96224 8.11768 2.25586C9.33675 1.54948 10.6413 0.996908 12.0312 0.598145C13.4212 0.199382 14.8796 0 16.4062 0ZM26.25 15.3125H17.5V6.5625H15.3125V15.3125H6.5625V17.5H15.3125V26.25H17.5V17.5H26.25V15.3125Z" fill="#9747FF" />
                        </svg>
                        <input ref={vehicleFrontImageRef} type="file" onChange={updatePhotos} />
                        {
                            vehicleFrontImage && 
                            <img className='preview' src={vehicleFrontImage} alt="" />
                        }
                    </AddPhotoButton>
                </ComplianceItem>
                <ComplianceItem>
                    <h1>Lateral esquerda</h1>
                    <img className='tip' src={"/PhotoTips/tip-photo-1 (5).png"} alt="" />
                    <AddPhotoButton className="add-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <path d="M16.4062 0C17.9102 0 19.3628 0.193685 20.7642 0.581055C22.1655 0.968424 23.4701 1.521 24.6777 2.23877C25.8854 2.95654 26.9906 3.81104 27.9932 4.80225C28.9958 5.79346 29.8503 6.8986 30.5566 8.11768C31.263 9.33675 31.8156 10.647 32.2144 12.0483C32.6131 13.4497 32.8125 14.9023 32.8125 16.4062C32.8125 17.9102 32.6188 19.3628 32.2314 20.7642C31.8441 22.1655 31.2915 23.4701 30.5737 24.6777C29.856 25.8854 29.0015 26.9906 28.0103 27.9932C27.019 28.9958 25.9139 29.8503 24.6948 30.5566C23.4757 31.263 22.1655 31.8156 20.7642 32.2144C19.3628 32.6131 17.9102 32.8125 16.4062 32.8125C14.9023 32.8125 13.4497 32.6188 12.0483 32.2314C10.647 31.8441 9.34245 31.2915 8.13477 30.5737C6.92708 29.856 5.82194 29.0015 4.81934 28.0103C3.81673 27.019 2.96224 25.9139 2.25586 24.6948C1.54948 23.4757 0.996908 22.1712 0.598145 20.7812C0.199382 19.3913 0 17.9329 0 16.4062C0 14.9023 0.193685 13.4497 0.581055 12.0483C0.968424 10.647 1.521 9.34245 2.23877 8.13477C2.95654 6.92708 3.81104 5.82194 4.80225 4.81934C5.79346 3.81673 6.8986 2.96224 8.11768 2.25586C9.33675 1.54948 10.6413 0.996908 12.0312 0.598145C13.4212 0.199382 14.8796 0 16.4062 0ZM26.25 15.3125H17.5V6.5625H15.3125V15.3125H6.5625V17.5H15.3125V26.25H17.5V17.5H26.25V15.3125Z" fill="#9747FF" />
                        </svg>
                        <input ref={vehicleLeftImageRef} type="file" onChange={updatePhotos} />
                        {
                            vehicleLeftImage && 
                            <img className='preview'  src={vehicleLeftImage} alt="" />
                        }
                    </AddPhotoButton>
                </ComplianceItem>
                <ComplianceItem>
                    <h1>Lateral direita</h1>
                    <img className='tip' src={"/PhotoTips/tip-photo-1 (7).png"} alt="" />
                    <AddPhotoButton className="add-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <path d="M16.4062 0C17.9102 0 19.3628 0.193685 20.7642 0.581055C22.1655 0.968424 23.4701 1.521 24.6777 2.23877C25.8854 2.95654 26.9906 3.81104 27.9932 4.80225C28.9958 5.79346 29.8503 6.8986 30.5566 8.11768C31.263 9.33675 31.8156 10.647 32.2144 12.0483C32.6131 13.4497 32.8125 14.9023 32.8125 16.4062C32.8125 17.9102 32.6188 19.3628 32.2314 20.7642C31.8441 22.1655 31.2915 23.4701 30.5737 24.6777C29.856 25.8854 29.0015 26.9906 28.0103 27.9932C27.019 28.9958 25.9139 29.8503 24.6948 30.5566C23.4757 31.263 22.1655 31.8156 20.7642 32.2144C19.3628 32.6131 17.9102 32.8125 16.4062 32.8125C14.9023 32.8125 13.4497 32.6188 12.0483 32.2314C10.647 31.8441 9.34245 31.2915 8.13477 30.5737C6.92708 29.856 5.82194 29.0015 4.81934 28.0103C3.81673 27.019 2.96224 25.9139 2.25586 24.6948C1.54948 23.4757 0.996908 22.1712 0.598145 20.7812C0.199382 19.3913 0 17.9329 0 16.4062C0 14.9023 0.193685 13.4497 0.581055 12.0483C0.968424 10.647 1.521 9.34245 2.23877 8.13477C2.95654 6.92708 3.81104 5.82194 4.80225 4.81934C5.79346 3.81673 6.8986 2.96224 8.11768 2.25586C9.33675 1.54948 10.6413 0.996908 12.0312 0.598145C13.4212 0.199382 14.8796 0 16.4062 0ZM26.25 15.3125H17.5V6.5625H15.3125V15.3125H6.5625V17.5H15.3125V26.25H17.5V17.5H26.25V15.3125Z" fill="#9747FF" />
                        </svg>
                        <input ref={vehicleRightImageRef} type="file" onChange={updatePhotos} />
                        {
                            vehicleRightImage && 
                            <img className='preview'  src={vehicleRightImage} alt="" />
                        }
                    </AddPhotoButton>
                </ComplianceItem>
                <ComplianceItem>
                    <h1>Traseira</h1>
                    <img className='tip' src={"/PhotoTips/tip-photo-1 (8).png"} alt="" />
                    <AddPhotoButton className="add-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <path d="M16.4062 0C17.9102 0 19.3628 0.193685 20.7642 0.581055C22.1655 0.968424 23.4701 1.521 24.6777 2.23877C25.8854 2.95654 26.9906 3.81104 27.9932 4.80225C28.9958 5.79346 29.8503 6.8986 30.5566 8.11768C31.263 9.33675 31.8156 10.647 32.2144 12.0483C32.6131 13.4497 32.8125 14.9023 32.8125 16.4062C32.8125 17.9102 32.6188 19.3628 32.2314 20.7642C31.8441 22.1655 31.2915 23.4701 30.5737 24.6777C29.856 25.8854 29.0015 26.9906 28.0103 27.9932C27.019 28.9958 25.9139 29.8503 24.6948 30.5566C23.4757 31.263 22.1655 31.8156 20.7642 32.2144C19.3628 32.6131 17.9102 32.8125 16.4062 32.8125C14.9023 32.8125 13.4497 32.6188 12.0483 32.2314C10.647 31.8441 9.34245 31.2915 8.13477 30.5737C6.92708 29.856 5.82194 29.0015 4.81934 28.0103C3.81673 27.019 2.96224 25.9139 2.25586 24.6948C1.54948 23.4757 0.996908 22.1712 0.598145 20.7812C0.199382 19.3913 0 17.9329 0 16.4062C0 14.9023 0.193685 13.4497 0.581055 12.0483C0.968424 10.647 1.521 9.34245 2.23877 8.13477C2.95654 6.92708 3.81104 5.82194 4.80225 4.81934C5.79346 3.81673 6.8986 2.96224 8.11768 2.25586C9.33675 1.54948 10.6413 0.996908 12.0312 0.598145C13.4212 0.199382 14.8796 0 16.4062 0ZM26.25 15.3125H17.5V6.5625H15.3125V15.3125H6.5625V17.5H15.3125V26.25H17.5V17.5H26.25V15.3125Z" fill="#9747FF" />
                        </svg>
                        <input ref={vehicleBackImageRef} type="file" onChange={updatePhotos} />
                        {
                            vehicleBackImage && 
                            <img className='preview'  src={vehicleBackImage} alt="" />
                        }
                    </AddPhotoButton>
                </ComplianceItem>
                <ComplianceItem>
                    <h1>Painel</h1>
                    <img className='tip' src={"/PhotoTips/tip-photo-1 (1).png"} alt="" />
                    <AddPhotoButton className="add-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <path d="M16.4062 0C17.9102 0 19.3628 0.193685 20.7642 0.581055C22.1655 0.968424 23.4701 1.521 24.6777 2.23877C25.8854 2.95654 26.9906 3.81104 27.9932 4.80225C28.9958 5.79346 29.8503 6.8986 30.5566 8.11768C31.263 9.33675 31.8156 10.647 32.2144 12.0483C32.6131 13.4497 32.8125 14.9023 32.8125 16.4062C32.8125 17.9102 32.6188 19.3628 32.2314 20.7642C31.8441 22.1655 31.2915 23.4701 30.5737 24.6777C29.856 25.8854 29.0015 26.9906 28.0103 27.9932C27.019 28.9958 25.9139 29.8503 24.6948 30.5566C23.4757 31.263 22.1655 31.8156 20.7642 32.2144C19.3628 32.6131 17.9102 32.8125 16.4062 32.8125C14.9023 32.8125 13.4497 32.6188 12.0483 32.2314C10.647 31.8441 9.34245 31.2915 8.13477 30.5737C6.92708 29.856 5.82194 29.0015 4.81934 28.0103C3.81673 27.019 2.96224 25.9139 2.25586 24.6948C1.54948 23.4757 0.996908 22.1712 0.598145 20.7812C0.199382 19.3913 0 17.9329 0 16.4062C0 14.9023 0.193685 13.4497 0.581055 12.0483C0.968424 10.647 1.521 9.34245 2.23877 8.13477C2.95654 6.92708 3.81104 5.82194 4.80225 4.81934C5.79346 3.81673 6.8986 2.96224 8.11768 2.25586C9.33675 1.54948 10.6413 0.996908 12.0312 0.598145C13.4212 0.199382 14.8796 0 16.4062 0ZM26.25 15.3125H17.5V6.5625H15.3125V15.3125H6.5625V17.5H15.3125V26.25H17.5V17.5H26.25V15.3125Z" fill="#9747FF" />
                        </svg>
                        <input ref={vehiclePanelImageRef} type="file" onChange={updatePhotos} />
                        {
                            vehiclePanelImage && 
                            <img className='preview'  src={vehiclePanelImage} alt="" />
                        }
                    </AddPhotoButton>
                </ComplianceItem>
                <ComplianceItem>
                    <h1>Velocímetro</h1>
                    <img className='tip' src={"/PhotoTips/tip-photo-1 (2).png"} alt="" />
                    <AddPhotoButton className="add-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <path d="M16.4062 0C17.9102 0 19.3628 0.193685 20.7642 0.581055C22.1655 0.968424 23.4701 1.521 24.6777 2.23877C25.8854 2.95654 26.9906 3.81104 27.9932 4.80225C28.9958 5.79346 29.8503 6.8986 30.5566 8.11768C31.263 9.33675 31.8156 10.647 32.2144 12.0483C32.6131 13.4497 32.8125 14.9023 32.8125 16.4062C32.8125 17.9102 32.6188 19.3628 32.2314 20.7642C31.8441 22.1655 31.2915 23.4701 30.5737 24.6777C29.856 25.8854 29.0015 26.9906 28.0103 27.9932C27.019 28.9958 25.9139 29.8503 24.6948 30.5566C23.4757 31.263 22.1655 31.8156 20.7642 32.2144C19.3628 32.6131 17.9102 32.8125 16.4062 32.8125C14.9023 32.8125 13.4497 32.6188 12.0483 32.2314C10.647 31.8441 9.34245 31.2915 8.13477 30.5737C6.92708 29.856 5.82194 29.0015 4.81934 28.0103C3.81673 27.019 2.96224 25.9139 2.25586 24.6948C1.54948 23.4757 0.996908 22.1712 0.598145 20.7812C0.199382 19.3913 0 17.9329 0 16.4062C0 14.9023 0.193685 13.4497 0.581055 12.0483C0.968424 10.647 1.521 9.34245 2.23877 8.13477C2.95654 6.92708 3.81104 5.82194 4.80225 4.81934C5.79346 3.81673 6.8986 2.96224 8.11768 2.25586C9.33675 1.54948 10.6413 0.996908 12.0312 0.598145C13.4212 0.199382 14.8796 0 16.4062 0ZM26.25 15.3125H17.5V6.5625H15.3125V15.3125H6.5625V17.5H15.3125V26.25H17.5V17.5H26.25V15.3125Z" fill="#9747FF" />
                        </svg>
                        <input ref={vehicleVelocimeterImageRef} type="file" onChange={updatePhotos} />
                        {
                            vehicleVelocimeterImage && 
                            <img className='preview'  src={vehicleVelocimeterImage} alt="" />
                        }
                    </AddPhotoButton>
                </ComplianceItem>
                <ComplianceItem>
                    <h1>Interior frente</h1>
                    <img className='tip' src={"/PhotoTips/tip-photo-1 (3).png"} alt="" />
                    <AddPhotoButton className="add-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <path d="M16.4062 0C17.9102 0 19.3628 0.193685 20.7642 0.581055C22.1655 0.968424 23.4701 1.521 24.6777 2.23877C25.8854 2.95654 26.9906 3.81104 27.9932 4.80225C28.9958 5.79346 29.8503 6.8986 30.5566 8.11768C31.263 9.33675 31.8156 10.647 32.2144 12.0483C32.6131 13.4497 32.8125 14.9023 32.8125 16.4062C32.8125 17.9102 32.6188 19.3628 32.2314 20.7642C31.8441 22.1655 31.2915 23.4701 30.5737 24.6777C29.856 25.8854 29.0015 26.9906 28.0103 27.9932C27.019 28.9958 25.9139 29.8503 24.6948 30.5566C23.4757 31.263 22.1655 31.8156 20.7642 32.2144C19.3628 32.6131 17.9102 32.8125 16.4062 32.8125C14.9023 32.8125 13.4497 32.6188 12.0483 32.2314C10.647 31.8441 9.34245 31.2915 8.13477 30.5737C6.92708 29.856 5.82194 29.0015 4.81934 28.0103C3.81673 27.019 2.96224 25.9139 2.25586 24.6948C1.54948 23.4757 0.996908 22.1712 0.598145 20.7812C0.199382 19.3913 0 17.9329 0 16.4062C0 14.9023 0.193685 13.4497 0.581055 12.0483C0.968424 10.647 1.521 9.34245 2.23877 8.13477C2.95654 6.92708 3.81104 5.82194 4.80225 4.81934C5.79346 3.81673 6.8986 2.96224 8.11768 2.25586C9.33675 1.54948 10.6413 0.996908 12.0312 0.598145C13.4212 0.199382 14.8796 0 16.4062 0ZM26.25 15.3125H17.5V6.5625H15.3125V15.3125H6.5625V17.5H15.3125V26.25H17.5V17.5H26.25V15.3125Z" fill="#9747FF" />
                        </svg>
                        <input ref={vehicleFrontInteriorImageRef} type="file" onChange={updatePhotos} />
                        {
                            vehicleFrontInteriorImage && 
                            <img className='preview'  src={vehicleFrontInteriorImage} alt="" />
                        }
                    </AddPhotoButton>
                </ComplianceItem>
                <ComplianceItem>
                    <h1>Interior trás</h1>
                    <img className='tip' src={"/PhotoTips/tip-photo-1 (6).png"} alt="" />
                    <AddPhotoButton className="add-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <path d="M16.4062 0C17.9102 0 19.3628 0.193685 20.7642 0.581055C22.1655 0.968424 23.4701 1.521 24.6777 2.23877C25.8854 2.95654 26.9906 3.81104 27.9932 4.80225C28.9958 5.79346 29.8503 6.8986 30.5566 8.11768C31.263 9.33675 31.8156 10.647 32.2144 12.0483C32.6131 13.4497 32.8125 14.9023 32.8125 16.4062C32.8125 17.9102 32.6188 19.3628 32.2314 20.7642C31.8441 22.1655 31.2915 23.4701 30.5737 24.6777C29.856 25.8854 29.0015 26.9906 28.0103 27.9932C27.019 28.9958 25.9139 29.8503 24.6948 30.5566C23.4757 31.263 22.1655 31.8156 20.7642 32.2144C19.3628 32.6131 17.9102 32.8125 16.4062 32.8125C14.9023 32.8125 13.4497 32.6188 12.0483 32.2314C10.647 31.8441 9.34245 31.2915 8.13477 30.5737C6.92708 29.856 5.82194 29.0015 4.81934 28.0103C3.81673 27.019 2.96224 25.9139 2.25586 24.6948C1.54948 23.4757 0.996908 22.1712 0.598145 20.7812C0.199382 19.3913 0 17.9329 0 16.4062C0 14.9023 0.193685 13.4497 0.581055 12.0483C0.968424 10.647 1.521 9.34245 2.23877 8.13477C2.95654 6.92708 3.81104 5.82194 4.80225 4.81934C5.79346 3.81673 6.8986 2.96224 8.11768 2.25586C9.33675 1.54948 10.6413 0.996908 12.0312 0.598145C13.4212 0.199382 14.8796 0 16.4062 0ZM26.25 15.3125H17.5V6.5625H15.3125V15.3125H6.5625V17.5H15.3125V26.25H17.5V17.5H26.25V15.3125Z" fill="#9747FF" />
                        </svg>
                        <input ref={vehicleBackInteriorImageRef} type="file" onChange={updatePhotos} />
                        {
                            vehicleBackInteriorImage && 
                            <img className='preview'  src={vehicleBackInteriorImage} alt="" />
                        }
                        
                    </AddPhotoButton>
                </ComplianceItem>
               
            </PhotoComplianceList>

            <OrangeButton onClick={sendCompliance} style={{height: "40px", marginTop:"169px", marginBottom:"200px"}}>
                Enviar
            </OrangeButton>
        </PageContainer>
    )
}

const AddPhotoButton = styled.div`

    width: 142px;
    height: 123px;
    border: 1px dashed #9747FF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    &:hover{
        opacity: 0.7;
    }

    input{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
    }

    .preview{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -1;
            opacity: 0.5;
    }
`;

const ComplianceItem = styled.li`
    h1{
        margin-bottom: 25px;
        color: #1A1D23;

        text-align: center;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 19.6px; /* 122.5% */
    }
  .tip{
    width: 142px;
height: 123px;
object-fit: cover;
border: 1px solid #9747FF;

        }

        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
`;

const PhotoComplianceList = styled.ul`
margin-top: 100px;
width: 100%;
display: flex;
align-items: center;
flex-wrap: wrap;
gap: 10px;
justify-content: center;
`;

const PageContainer = styled.div`
padding-left: 20px;
padding-right: 20px;
width: 100%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 200px;
.title{
    color: #1A1D23;
text-align: center;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 19.6px; /* 81.667% */
}
`;