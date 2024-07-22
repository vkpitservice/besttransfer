export const mailSort = (mail: string): string => {
  const a: string[] = mail.split('@');
  const b: string = a[0];
  let newstr = '';
  b.split('').map((char, i) => {
    if (i > 2 && i < b.length - 1) newstr += '*';
    else newstr += char;
  });
  return `${newstr}@${a[1]}`;
};
