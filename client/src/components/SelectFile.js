import React, { useContext, useRef, useEffect, useState } from 'react';
import { AppContext } from '../Context/AppContext';
import { LuUpload } from "react-icons/lu";
import Navbar from './Navbar';
import axios from 'axios';

export default function SelectFile() {
	const { isuploadClicked, setisuploadClicked, image, setImage } = useContext(AppContext);

	const [isOutput,setOutput]=useState(false);
	
	const fileInputRef = useRef(null);

	const [file, setFile] = useState()

	const [resp, setResp] = useState({
		D: " ",
		C: " "
	})


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
		// finally {
			setisuploadClicked(true)
		// 	setReady(true)
		// }
	};

	const handleButtonClick = () => {
		fileInputRef.current.click();
	};

	const handleDragOver = (event) => {
		event.preventDefault();
	};

	const handlePred = async (event) => {
		event.preventDefault()

		//setisuploadClicked(true)
		const fd = new FormData();
		fd.append("file_from_react",file)
		await axios.post('http://localhost:8000/predictions',fd).then((res) => {
			setResp({
					D:res.data.Disease,
					C:res.data.Crop
			})
			

		})
		setOutput(true)
		
	};

	const reset =() =>{
		
	};

	return (
		
		<div className='flex flex-col py-7 items-center gap-10 bg-gradient-custom min-h-screen'>
			<div className="w-[100%] z-20">
				<Navbar />
			</div>
			<div className='text-center text-4xl  text-white font-semibold' >
				Intelligent Crop Disease Prediction System
			
			</div>
			{!isOutput ?(
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

					</div></>
					
			):(
				<div>
				<p className='bg-gradient-custom flex items-center gap-2 text-white cursor-pointer font-semibold text-xl rounded-3xl px-10 py-4`'>Crop:{resp.C}</p>
				<br/>
				<p className='bg-gradient-custom flex items-center gap-2 text-white cursor-pointer font-semibold text-xl`'>Disease:{resp.D}</p>
				<br/>
				<br/>
				<form onSubmit={reset}>
				<button className='bg-gradient-custom flex items-center gap-2 text-white cursor-pointer font-semibold text-xl rounded-3xl px-10 py-4`'>Reset</button>
				</form>
				</div>
			)
			}
		



		</div>
		
	
		
	)
 }
