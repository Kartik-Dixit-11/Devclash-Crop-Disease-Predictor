import React, { useContext, useRef, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { LuUpload } from "react-icons/lu";
import Navbar from './Navbar';
export default function SelectFile() {
	const { isuploadClicked, setisuploadClicked,image, setImage} = useContext(AppContext);
	const fileInputRef = useRef(null);
	

	useEffect(() => {
		setisuploadClicked(false);
	}, []);

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		setisuploadClicked(true);
		setImage(file);
	};

	const handleButtonClick = () => {
		fileInputRef.current.click();
	};

	const handleDragOver = (event) => {
		event.preventDefault();
	};

	const handleDrop = (event) => {
		event.preventDefault();
		const file = event.dataTransfer.files[0];
		setisuploadClicked(true);
		setImage(file);
	};

	return (

		<div className='flex flex-col py-7 items-center gap-10 bg-gradient-custom min-h-screen'>
			<div className="w-[100%] z-20">
                <Navbar/>
            </div>
			<div className='text-center text-4xl  text-white font-semibold' >
				Intelligent Crop Disease Prediction System
			</div>
			<div className='  border-green-500 rounded-2xl shadow-2xl shadow-slate-950 p-6 max-w-[20rem] w-[40rem] flex  m-auto'>
				<div className={` border-2 flex bg-opacity-50 bg-gray-200 rounded-2xl flex-col justify-around text-lg font-semibold items-center border-black min-h-[18rem] w-full ${isuploadClicked ?'border-none':'border-dashed'}`} onDragOver={handleDragOver} onDrop={handleDrop}>
					{
						!isuploadClicked ? (<div>
							Drag and drop a file or
						</div>) : ('')
					}
					<div className={` ${isuploadClicked ? 'block' : 'hidden'} flex justify-center max-w-[36rem] max-h-[18rem]`}>
						{image && <img src={URL.createObjectURL(image)} className='max-h-[18rem]' alt='Uploaded Image'  />}
					</div>
					<div>
						<input
							type="file"
							ref={fileInputRef}
							onChange={handleFileChange}
							style={{ display: 'none' }}
							accept='image/*'
						/>
						{!isuploadClicked ? (
							<button 
								className={` flex items-center gap-2 text-white cursor-pointer font-semibold text-xl bg-gradient-custom rounded-3xl px-6 py-4`}
								onClick={handleButtonClick}
							>
								<LuUpload />
								Browse Images
							</button>
						) : (
							''
						)}
					</div>
				</div>
			</div>
			<div>

				{isuploadClicked ? (
					<NavLink to='/diseaseInfo'>
						<button
							className={` bg-gradient-custom flex items-center gap-2 text-white cursor-pointer font-semibold text-xl rounded-3xl px-10 py-4`}>
							{/* <LuUpload/> */}
							Upload image
						</button>
					</NavLink>
				) :
					('')}
			</div>

		</div>
	)
}
