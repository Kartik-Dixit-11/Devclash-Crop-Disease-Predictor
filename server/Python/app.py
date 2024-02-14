from flask import Flask,request,Response,render_template,jsonify
from flask_cors import CORS
from fileinput import filename
import os
import json
from pathlib import Path
from werkzeug.utils import secure_filename
import numpy as np
import tensorflow as tf    
import cv2 
import pickle as pkl;
from temp import getData

UPLOAD_FOLDER=Path('use')
app=Flask(__name__)
CORS(app)

@app.route("/")
def data():
    return "Hello world"


@app.route("/predictions")
def info():
    return render_template('index.html')

@app.route("/predictions",methods=['GET','POST'])
def prediction():
                file = request.files['file_from_react']
                if file.filename!='':
                    fn = secure_filename(file.filename)
                    if(fn not in os.listdir(UPLOAD_FOLDER)):
                        file.save(os.path.join(UPLOAD_FOLDER, fn))
                    
                    img=cv2.imread(os.path.join(UPLOAD_FOLDER, fn))
                    resize = tf.image.resize(img, (256,256))
                    
                    model=pkl.load(open('model.pkl','rb'))
                    
                    yhat = model.predict(np.expand_dims(resize/255, 0))
                    
                    data=getData(np.argmax(yhat))

                
                return jsonify({"Crop":data[0],"Disease":data[1]})    
             

                    
        


if __name__=="__main__":
    app.run(debug=True,host='0.0.0.0',port=8000)