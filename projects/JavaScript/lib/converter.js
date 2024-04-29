import validateMd from 'mtrpz-lab-2/lib/validateMd.js';
import convertMd from 'mtrpz-lab-2/lib/md-converting/convertMd.js';

export default function convert(md) {
  try {
    validateMd(md);
    return convertMd(md, 'html');
  } catch (err) {
    return err;
  }
}
