import pyautogui
import time

def countdown():
    num = 5
    while(num > 0):
        print(str(num) + ' seconds to start the hacK')
        num = num - 1
        time.sleep(1)

def typetype():
    text = input('give me the text!!! \n')
    countdown()
    pyautogui.typewrite(text, interval=0.03)

typetype()
