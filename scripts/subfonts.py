from itertools import groupby
import sys
from fontTools.subset import main as ss

# sys.argv = [None, '/path/to/font/file.ttf', '--unicodes=U+0020-002F']
# ss()  

def unicode_ranges(strings):
    l = list(set(strings))
    codes = list(map(ord, l))
    codes.sort()

    groups = []
    for _, g in groupby(enumerate(codes), lambda x: x[0] - x[1]):
        groups.append([v for _, v in g])

    ranges = []
    for g in groups:
        if len(g) == 1:
            ranges.append(f"U+{g[0]:X}")
        else:
            ranges.append(f"U+{g[0]:X}-{g[-1]:X}")
    return ",".join(ranges)
    
def subset(input, output, unicodes):
    sys.argv = [None, input, f'--unicodes={unicodes}',f"--output-file={output}" --flavor=woff2]
    ss()
    
if __name__ == "__main__":
    # subset()
    # subset()
    # subset()