import fs from "fs-extra";
import util from "util";

import * as config from "../config.json";

import { Page, Pages } from "./@types/page";

import parse from "./parse";
import store from "./store";

const readdir = util.promisify(fs.readdir);

const pages: Pages = {
  markdown: [],
};

export default function() {
  console.log("compile")
  readdir(config.paths.content)
    .then((files: any) => {
      files = files.filter((file: string) =>
        file.match(/(\.md)|(\.markdown)/g)
      );
      parse(files).then((files: any) => {
        pages.markdown = files;
        pages.markdown.forEach((page: Page) => {
          store(page)
            .then((file: any) => {
              console.log("store", file.fileDist);
            })
            .catch((err) => {
              console.log(err);
            });
        });
      });
    })
    .catch((err) => {
      console.log("error", err);
    });
}