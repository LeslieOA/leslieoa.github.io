import fs from 'fs-extra'
import matter from 'gray-matter';
import marked from 'marked'

import * as config from '../config.json'

import { Pages } from './@types/page'
import sanitize from './sanitize'


export default function parse(files:any) {
  let pages:any = [];
  return new Promise((resolve, reject) => {
    files.map((file:any) => {
      const filePath = `${config.paths.content}/${file}`
      const fileData:any = fs.readFileSync(filePath)
      const fileMeta = matter(fileData).data
      const renderedHtml = sanitize(marked(matter(fileData).content))
      pages.push({
        path: filePath,
        markup: renderedHtml,
        meta: {
          ...fileMeta, tags: fileMeta.tags.split(',')
        }
      })
    })
    resolve(pages)
  });
}