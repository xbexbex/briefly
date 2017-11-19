import sys
f = open('ai/test/test.json', 'r')
file_contents = f.read()
f.close()
print (file_contents)
sys.stdout.flush()