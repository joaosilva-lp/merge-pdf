const fs = require('fs');
const PDFMerger = require('pdf-merger-js');

(async () => {
  const merger = new PDFMerger();

  fs.readdir('./', async (err, files) => {
    if (err) throw err;

    for (const file of files) {
      if (file.endsWith('.pdf')) {
        await merger.add(file);
      }
    }

    await merger.save('merged.pdf');
  });
})();

console.log('Programa Concluído');