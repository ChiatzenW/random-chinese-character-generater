# This is the gist of the file run by aws
import random

def rccg():
    r = random.randint(0x4e00, 0x9fbf)
    return chr(r)


print(rccg())