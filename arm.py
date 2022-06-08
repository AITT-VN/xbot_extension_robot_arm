
"""
    See more Arduino code here: https://www.youtube.com/watch?v=md4RQzFbGR0
"""
from setting import *
from utility import *
from servo import *
import math
import time

class Arm():

    def __init__(self, base=0, right=1, left=2, gripper=3):
        self.base = base
        self.right = right
        self.left = left
        self.gripper = gripper

    def setup(self):
        servo.position(self.base, 90)
        servo.position(self.right, 90)
        servo.position(self.left, 90)
        servo.position(self.gripper, 90)

        say('Arm setup done!')

    # Servo Base (Theta)
    def moveBase(self, moveToBase):
        # limit min/max values
        if moveToBase < 0:
            moveToBase = 0
        if moveToBase > 180:
            moveToBase = 180
        servo.position(self.base, moveToBase)

    # Servo Gripper
    def moveGripper(self, moveToGripper):
        # limit min/max values
        if moveToGripper  < 0:
            moveToGripper  = 0
        if moveToGripper  > 90:
            moveToGripper  = 90
        servo.position(self.gripper, moveToGripper)

    # Servo Right
    def moveRight(self, moveToRight):
        servo.release(self.left)
        # limit min/max values
        if moveToRight  < 50:
            moveToRight  = 50
        if moveToRight  > 179:
            moveToRight  = 179
        servo.position(self.right, moveToRight)

    # Servo Left
    def moveLeft(self, moveToLeft):
        servo.release(self.right)
        # limit min/max values
        if moveToLeft  < 5:
            moveToLeft  = 5
        if moveToLeft  > 140:
            moveToLeft  = 140
        servo.position(self.left, moveToLeft)

    # Move the arm along the r axis (polar coordinates), or in height (z)
    def moveRZ(self, moveToR=80, moveToZ=80):
        # limit min/max values
        if (moveToR < 20):
            moveToR = 20
        if (moveToZ < -25):
            moveToZ = -25
        if (moveToR > 130):
            moveToR = 130
        if (moveToZ > 125):
            moveToZ = 125
        
        c = math.sqrt(moveToZ*moveToZ + moveToR*moveToR) # pythagorean theorem
        K = math.atan2(moveToZ, moveToR)
        
        # fixed length bicep and forearm respectively
        a = 81
        b = 81

        B = math.acos((a*a + c*c - b*b) / (2*a*c)) # cosine law
        C = math.pi - 2*B # (180 - A - B) and A==B from isoceles
        C = C * 180 / math.pi # rad --> deg

        rightServoAngle = (K+B) * 180 / math.pi # servo 1 (right)
        X = 90 - rightServoAngle # right angle subtraction
        Y = 90 - X # sum of interior angles again
        W = 180 - C - Y
        leftServoAngle = W

        if (math.isnan(leftServoAngle) != math.isnan(rightServoAngle)):
            print('ERROR: Outside of boundaries!')
            return

        servo.position(self.right, 175-rightServoAngle) # see REPORT.pdf for explanation
        servo.position(self.left, 90-leftServoAngle) # and diagrams of angle calculations

arm = Arm()
