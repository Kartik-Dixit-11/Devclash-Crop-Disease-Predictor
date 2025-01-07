import React, { useContext, useRef, useEffect, useState } from 'react';
import { AppContext } from '../Context/AppContext';
import { LuUpload } from "react-icons/lu";
import Navbar from './Navbar';
import axios from 'axios';
import "./stylee.css"

export default function SelectFile() {
	const { isuploadClicked, setisuploadClicked, image, setImage } = useContext(AppContext);

	const [isOutput, setOutput] = useState(false);
	const [isloading,setloading]=useState(false);
	const fileInputRef = useRef(null);

	const [file, setFile] = useState()

	const [resp, setResp] = useState({
		D: " ",
		C: " ",
		F:0,
		T:" ",
		T1:" ",
		T2:" "
	})

	const [isHealthy,sethealthy]=useState(false);


	const handleFileChange = (event) => {
		try {
			const file = event.target.files[0];
			setFile(file);
			setImage(file);
		}
		catch (err) {
			event.preventDefault();
			const file = event.dataTransfer.files[0];
			setFile(file);
			setImage(file);
		}
		setisuploadClicked(true)
	

	};

	const handleButtonClick = () => {
		fileInputRef.current.click();
		
		setloading(true);
	};

	const handleDragOver = (event) => {
		event.preventDefault();
	};

	const handlePred = async (event) => {
		event.preventDefault()
		

		const fd = new FormData();
		fd.append("file_from_react", file)
		await axios.post('http://localhost:8000/predictions', fd).then((res) => {

			setResp({
				D: res.data.Disease,
				C: res.data.Crop,
				F:res.data.flag,
				T:res.data.cause,
				T1:res.data.sym,
				T2:res.data.cure,
			})
		})
		setloading(false);
		setOutput(true);

	};

	const reset = async(event)=> {


	};

	return (

		<div className='flex flex-col py-7 items-center gap-10 bg-gradient-custom min-h-screen'>
			<div className="w-[100%] z-20">
				<Navbar />
			</div>
			<div className='text-center text-4xl  text-white font-semibold' >
				Intelligent Crop Disease Prediction System

			</div>
			{!isOutput ? (
				<><div className='  border-green-500 rounded-2xl shadow-2xl shadow-slate-950 p-6 max-w-[20rem] w-[40rem] flex  m-auto'>
					<div className={` border-2 flex bg-opacity-50 bg-gray-200 rounded-2xl flex-col justify-around text-lg font-semibold items-center border-black min-h-[18rem] w-full `} onDragOver={handleDragOver} onDrop={handleFileChange}>
						{!isuploadClicked ?
							(
								<div>
									Drag and drop a file or
								</div>
							) : (
								''
							)}
						<div className={`${isuploadClicked ? 'block' : 'hidden'}  ()  flex justify-center max-w-[36rem] max-h-[18rem]`}>
							{image && <img src={URL.createObjectURL(image)} className='max-h-[18rem]' alt='Uploaded Image' />}
						</div>
						<div>
							<input
								type="file"
								ref={fileInputRef}
								onChange={handleFileChange}
								style={{ display: 'none' }}
								accept='image/*' />

							<button
								className={` ${!isuploadClicked ? 'block' : 'hidden'} flex items-center gap-2 text-white cursor-pointer font-semibold text-xl bg-gradient-custom rounded-3xl px-6 py-4`}
								onClick={handleButtonClick}>
								<LuUpload />
								Browse Images
							</button>



						</div>

					</div>


				</div><div>
						<form onSubmit={handlePred}>
							<button
								className={` ${isuploadClicked ? 'block' : 'hidden'} bg-gradient-custom flex items-center gap-2 text-white cursor-pointer font-semibold text-xl rounded-3xl px-10 py-4`}>
								Upload image
							</button>
						</form>

					</div>
					<div className={` ${isloading ? 'block' : 'hidden' } loader`}></div>
					
					</>

			) : (
				<>
				

				<form onSubmit={reset}>
				<div className='flex '>

					<div className=" bottom-1 left-1 img2A flex absolute z-20 "></div>

					<div className="img1A flex absolute z-20 "></div>



					<div className="flex flex-col items-center mt-2 gap-y-8">
						
						<div className='border-black'>
							<p className='bg-gradient-custom boxColo flex items-center gap-2 text-white cursor-pointer font-semibold text-xl rounded-3xl p-7 py-4'>Given Crop is of {resp.C}</p>
						</div>

						<br />
						
						<div className="border-black z-30" >
							<p className='bg-gradient-custom boxColo flex items-center gap-2 text-white cursor-pointer font-semibold text-xl rounded-3xl p-7 py-4'>Disease associated with : {resp.D}</p>
						</div>

						 {/* <div className={ `${!resp.F ? 'block' : 'hidden'} border-black z-30 `} >
							<p className='bg-gradient-custom boxColo flex items-center gap-2 text-white cursor-pointer font-semibold text-10px p-7 py-4'> {resp.T}</p>
						</div>

						
						<div className={ `${!resp.F ? 'block' : 'hidden'} border-black z-30 `} >
							<p className='bg-gradient-custom boxColo flex items-center gap-2 text-white cursor-pointer font-semibold text-10px p-7 py-4'> {resp.T1}</p>
						</div>

						
						<div className={ `${!resp.F ? 'block' : 'hidden'} border-black z-30 `} >
							<p className='bg-gradient-custom boxColo flex items-center gap-2 text-white cursor-pointer font-semibold text-10px p-7 py-4'> {resp.T2}</p>
						</div> */}
													 
						<br />
						<br />
						<button className='bg-gradient-custom   flex items-center gap-2 text-white cursor-pointer font-semibold text-2xl rounded-xl p-8 py-2 z-30'>Reset</button>
						
						
					</div>

				</div>
				</form></>
			)
			}

		</div>

		// Crop:{resp.C}
		// Disease:{resp.D}

	)
}
