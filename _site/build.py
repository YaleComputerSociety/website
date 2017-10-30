""""""
import os
import sys

USAGE = """build.py [input folder] [output folder]"""

def yamlFromFileName(name):
    return ''
    core = os.path.splitext(os.path.basename(name))[0].replace('-', ' ')
    if '/' in name or ':' in name:
        parent = core.replace(':', '/').split('/')[0]
        title = '_'.join(core.replace(':', '/').split('/')[1:])
    else:
        title = core
        parent = ''
    return """---
title: %s
parent: %s
---""" % (title, parent)

def addYAMLToFile(name, input_folder, output_folder):
    yaml = yamlFromFileName(name)
    print yaml
    finput = open(os.path.join(input_folder, name), "r")
    foutput = open(os.path.join(output_folder, name.replace('/','_').replace(':','_')), "w")
    content = finput.read()
    foutput.write(yaml+'\n'+content)
    foutput.close()
    finput.close()

def main(input_folder, output_folder):
    fnames = os.listdir(input_folder)
    for fname in fnames:
        if fname[0] == '.':
            continue
        addYAMLToFile(fname, input_folder, output_folder)

if __name__ == '__main__':
    if len(sys.argv) != 3:
        print USAGE
        exit(1)
    main(sys.argv[1], sys.argv[2])
