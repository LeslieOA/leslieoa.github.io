import fs from 'fs-extra'
import beautify from 'js-beautify'

import * as config from '../config.json'
import { Page, PageMeta } from './@types/page'

import * as templates from './templates'


export default function store(page:Page) {
  fs.copySync('public', 'dist')
  return new Promise((resolve, reject) => {
    const fileDist = `${config.paths.dist}/${page.meta.slug}.html`
    const fileSanitized:string = page.markup
    const fileMeta:PageMeta = page.meta
    const template = page.meta.template === 'index' ? 
      templates.indexTemplate : 
      templates.defaultTemplate
    const fileRendered:any = beautify.html(
      template(fileMeta, fileSanitized),
      { 
        indent_with_tabs: true,
        indent_size: 1
      }
    )
    console.log('store::', fileRendered)
    fs.writeFile(fileDist, fileRendered, (err) => {
      if (err) reject('Ooops')
    });
    resolve({fileDist, fileRendered})
  })
}