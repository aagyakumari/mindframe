const fs = require('fs');
const path = require('path');

const inputPath = path.join(process.cwd(), 'public', 'logo.svg');
const outputPath = path.join(process.cwd(), 'public', 'logo-night.svg');

try {
    const content = fs.readFileSync(inputPath, 'utf8');
    // Replace Dark Blue with White
    const newContent = content.replace(/#1D375C/g, '#FFFFFF');
    fs.writeFileSync(outputPath, newContent);
    console.log('Successfully generated logo-night.svg');
} catch (err) {
    console.error('Error:', err);
}
