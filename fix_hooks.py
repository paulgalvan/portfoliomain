with open('src/app/projects/page.tsx', 'r') as f:
    content = f.read()

# The bug: we have hooks state/effect declared after if(loading)
# Let's extract them.
import re

# Extract pcbProjects and extrasProjects
c1 = content.split('// PCB Projects (Hardcoded Gallery Section)')
part1 = c1[0]
c2 = c1[1].split('const [shuffledExtras')
static_arrays = '// PCB Projects (Hardcoded Gallery Section)' + c2[0]

c3 = c2[1].split('return (')
hooks_str = 'const [shuffledExtras' + c3[0]
rest = 'return (' + c3[1]

# Now let's assemble them back
# Before export default function ProjectsArchive() {
# we put static_arrays
part1_split = part1.split('export default function ProjectsArchive() {')
new_part1 = part1_split[0] + static_arrays + 'export default function ProjectsArchive() {\n' + hooks_str + part1_split[1]

new_content = new_part1 + rest

with open('src/app/projects/page.tsx', 'w') as f:
    f.write(new_content)
