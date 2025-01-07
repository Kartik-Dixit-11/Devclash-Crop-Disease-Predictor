import google.generativeai as genai
import pandas as pd
from IPython.display import Markdown
import textwrap

GOOGLE_API_KEY='AIzaSyAen5KeCq7zCeIDqWN-hjE-O_sM-UEa4Ok'

def generate(c,d):
  genai.configure(api_key=GOOGLE_API_KEY)

  model=genai.GenerativeModel('gemini-pro')

  resp1=model.generate_content(f"What are the causes of {d} in {c}?")
  resp2=model.generate_content(f"What are the symptoms of {d} in {c}?")
  resp3=model.generate_content(f"What are the cure of {d} in {c}?")
  return [resp.text.replace('•', '  *') for resp in [resp1,resp2,resp3]]

