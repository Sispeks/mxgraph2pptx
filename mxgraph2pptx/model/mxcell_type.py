from enum import Enum
from pptx.enum.shapes import MSO_SHAPE


class mxcell_type(Enum):
    rectangle = MSO_SHAPE.ROUNDED_RECTANGLE
