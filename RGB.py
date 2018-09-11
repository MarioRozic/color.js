class RGB:
    def __init__(self, r, g, b):
        self.r = r
        self.b = b
        self.g = g

    def __str__(self):
        return "(RGB{},{},{})".format(self.r, self.g, self.b)


if __name__ == "__main__":
    rgb = RGB(100, 200, 100)
    print(rgb)
