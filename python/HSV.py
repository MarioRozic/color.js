class HSV(object):
    
    def __init__(self, boja):
        self.boja = 3

    
    @property # getter
    def boja(self):
        return "Boja je: " + self.boja + ""
    
    @boja.setter #setter
    def boja(self, b):
        self.boja = b
    
if __name__ == "__main__":
    print(HSV(123).boja)