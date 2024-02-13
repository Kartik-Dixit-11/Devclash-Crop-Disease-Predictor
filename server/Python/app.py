from flask import Flask,request,Response,render_template,jsonify
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


@app.route("/predictions",methods=['GET','POST'])
def prediction():
                try:
                    if request.method=='POST':
                        file = request.files['file_from_react']
                        if file.filename!='':
                            fn = secure_filename(file.filename)
                            file.save(os.path.join(UPLOAD_FOLDER, fn))

                            img=cv2.imread(os.path.join(UPLOAD_FOLDER, fn))
                            resize = tf.image.resize(img, (256,256))
                            
                            model=pkl.load(open('model.pkl','rb'))
                            yhat = model.predict(np.expand_dims(resize/255, 0))

                            name=getData((np.argmax(yhat))).split("-")
                            return jsonify({"Crop":name[0],"Disease":name[1]})
                except Exception as e:
                      return e
                
if __name__=="__main__":
    app.run(debug=True,host='0.0.0.0',port=7000)
    	