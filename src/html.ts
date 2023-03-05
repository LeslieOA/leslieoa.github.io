const html = (strings:any, ...values:any) => {
  let template = ''
  strings.map((string:any, idx:number) => {
    const value = typeof values[idx] === 'string' ? `${values[idx]}` : ''
    template += `${string}${value}`
  }).join('')
  return template;
};

export { html }