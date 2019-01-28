import os
import re

OLD_DIR = os.path.expanduser('~/dev/leetcode/solutions')
NEW_DIR = os.path.expanduser('~/temp/lll/solutions/')
OLD_README = os.path.expanduser('~/dev/leetcode/README.md')
NEW_README = os.path.expanduser('~/dev/leetcode/README_NEW.md')
COM_README = os.path.expanduser('~/temp/lll/README.md')


def get_sol_path_from_parent_path(prefix, parent_dir):
    # filter
    solution_path = os.path.join(prefix, parent_dir)
    if not os.path.isdir(solution_path):
        return None, None

    match = re.search('\.(.*)', parent_dir)
    if not match:
        return None, None

    # getting file name
    solutinon_basename = match.groups()[0]
    return os.path.join(solution_path, solutinon_basename + '.py'), solutinon_basename



# DIR -> child.py
for solution_dir in os.listdir(NEW_DIR):
    # filter
    new_solution_path, solutinon_basename = get_sol_path_from_parent_path(NEW_DIR, solution_dir)
    if not new_solution_path:
        continue


    try:
        old_solution_dir = os.path.join(OLD_DIR, solution_dir)
        new_file_path = os.path.join(
            old_solution_dir, solutinon_basename + '.py')
        if os.path.exists(new_file_path):
            continue

        # create folders with question.md for non existing
        if not os.path.exists(old_solution_dir):
            os.makedirs(old_solution_dir)

            with open(os.path.join(solution_path, 'question.md'), 'r') as source, open(os.path.join(old_solution_dir, 'question.md'), 'w') as target:
                target.write(source.read())

        # write python solutions
        with open(new_solution_path, 'r') as new_sol_f, open(new_file_path, 'w') as target_f:
            target_f.write(new_sol_f.read())




    except Exception as e:
        print(e)



# readme
# if .py in old_solution_dir and not python in readme line
with open(OLD_README, 'r') as f_old, open(NEW_README, 'w') as f_new, open(COM_README, 'r') as f_com:
    for line in f_old.readlines():
        new_line = line
        for old_solution_dir in os.listdir(OLD_DIR):
            # filtering none solution lines
            match = re.search(r'\|([0-9]*?)\|', line)
            if not match:
                break
            # filtering python solutions to add
            n = match.groups()[0]
            py_solution_path, _ = get_sol_path_from_parent_path(OLD_DIR, old_solution_dir)

            if py_solution_path:
                if n in old_solution_dir:
                    # update
                    li = line.split('|')
                    new_item = ' [python](.&#x2F;solutions&#x2F;{}&#x2F;{}.py)'.format(old_solution_dir, solutinon_basename)
                    li[3] = li[3] + new_item

                    new_idex = '|'.join(li)
                    new_line = new_idex
                    break
                else:
                    pass

        f_new.write(new_line)
