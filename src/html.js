const html = (strings, ...values) => {
  let template;

  console.log(`\n\n\n\n\n\n\n\n\n\n\n\n\n\n`);

  strings.map((string, idx) => {
    const value = typeof values[idx] === 'string' ? `${values[idx]}` : '';
    template += `${string}${value}`;
    console.log(`\n${'*'.repeat(50)}\nSTRING\n`, string, `\n${'*'.repeat(50)}\n`);
  }).join('');

  console.log('TEMPLATE', `\n${'*'.repeat(50)}\n${template}\n${'*'.repeat(50)}\n`);

  return template;
};

export {
  html
};