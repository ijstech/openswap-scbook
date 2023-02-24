(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // src/index.tsx
  var import_components10 = __toModule(__require("@ijstech/components"));

  // src/components/header.tsx
  var import_components4 = __toModule(__require("@ijstech/components"));

  // src/components/header.css.ts
  var import_components = __toModule(__require("@ijstech/components"));
  var Theme = import_components.Styles.Theme.ThemeVars;
  import_components.Styles.cssRule("i-docs-header", {
    display: "block",
    zIndex: "9999",
    $nest: {
      ".hidden": {
        display: "none !important"
      },
      "i-switch": {
        display: "none"
      },
      "& > .header": {
        position: "fixed",
        flexShrink: 0,
        width: "100%",
        height: "70px",
        padding: "8px 0",
        borderBottom: "1px solid #ebeff3",
        zIndex: 9999,
        transform: "translateZ(0)",
        backgroundColor: "#151515"
      },
      ".logo": {
        height: "65px",
        padding: "10px 0",
        width: "162px",
        display: "none",
        $nest: {
          "img": {
            marginLeft: "20px"
          },
          "@media (min-width: 700px)": {
            display: "block",
            marginRight: "110px"
          },
          "&::after": {
            content: "''",
            position: "absolute",
            top: "50%",
            right: "-110px",
            transform: "translateY(-50%)",
            width: "1px",
            height: "60px",
            backgroundColor: "#fff"
          }
        }
      },
      "#btnMenu": {
        display: "block",
        position: "absolute",
        left: 0,
        padding: "20px",
        cursor: "pointer",
        $nest: {
          "@media (min-width: 700px)": {
            display: "none"
          },
          svg: {
            height: "20px",
            width: "20px"
          }
        }
      },
      "#btnEdit": {
        display: "block",
        position: "absolute",
        right: 0,
        padding: "20px",
        cursor: "pointer",
        $nest: {
          svg: {
            height: "20px",
            width: "20px"
          }
        }
      },
      ".container": {
        display: "flex",
        alignItems: "center",
        flexFlow: "row nowrap",
        position: "relative",
        textAlign: "left",
        height: "100%",
        padding: "0 4px",
        margin: "0 auto"
      },
      ".heading": {
        $nest: {
          div: {
            fontSize: "25px",
            fontWeight: 700,
            color: "white",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            display: "block"
          }
        },
        fontSize: "15px",
        fontWeight: 700,
        color: "white",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        display: "block"
      },
      "#logoText": {
        width: "259px",
        borderRight: "1px solid #E0E0E0",
        marginLeft: "20px",
        display: "none",
        $nest: {
          "@media (min-width: 700px)": {
            display: "block"
          }
        }
      },
      "i-panel.search": {
        display: "flex",
        alignItems: "center",
        marginLeft: "auto"
      },
      "i-search": {
        marginRight: "6px",
        $nest: {
          input: {
            backgroundColor: "rgb(236, 236, 236)"
          }
        }
      },
      "#scbookMenu": {
        margin: "0 20px 0 60px",
        $nest: {
          nav: {
            padding: "20px 20px",
            $nest: {
              a: {
                $nest: {
                  "&:hover": {
                    opacity: 1,
                    $nest: {
                      ".title": {
                        color: "#fff"
                      }
                    }
                  },
                  ".title": {
                    fontSize: "15px",
                    fontWeight: 500,
                    lineHeight: "24px",
                    color: "rgba(234, 242, 247, 1)"
                  }
                }
              }
            }
          }
        }
      }
    }
  });

  // src/components/search.tsx
  var import_components3 = __toModule(__require("@ijstech/components"));

  // src/components/search.css.ts
  var import_components2 = __toModule(__require("@ijstech/components"));
  var Theme2 = import_components2.Styles.Theme.ThemeVars;
  import_components2.Styles.cssRule("i-search", {
    fontFamily: Theme2.typography.fontFamily,
    fontSize: Theme2.typography.fontSize,
    position: "relative",
    $nest: {
      ".search": {
        position: "relative",
        display: "inline-block",
        direction: "ltr"
      },
      "i-icon": {
        position: "absolute",
        top: "50%",
        left: "10px",
        display: "inline-block",
        width: "18px",
        height: "18px",
        transform: "translateY(-50%)"
      },
      input: {
        position: "relative",
        verticalAlign: "top",
        height: "2.5rem",
        background: "none",
        border: "1px solid #c5d1db",
        color: "#28333d",
        fontWeight: 400,
        fontSize: "15px",
        borderRadius: "20px",
        lineHeight: "20px",
        outline: "none",
        transition: "width .5s ease",
        width: "170px",
        padding: "12px 8px 8px 38px",
        $nest: {
          "&::placeholder": {
            color: "#28333d",
            opacity: 1
          },
          "&:focus": {
            width: "220px"
          }
        }
      },
      ".dropdown": {
        display: "none",
        position: "absolute",
        top: "100%",
        left: "auto",
        right: 0,
        zIndex: 100,
        fontSize: "14px",
        lineHeight: "1.2em",
        minWidth: "600px",
        padding: "1rem",
        margin: "6px 0 0",
        border: "none",
        borderRadius: "1rem",
        boxShadow: "0 4px 16px rgb(0 0 0 / 25%)",
        background: "#fff",
        $nest: {
          "&.show": {
            display: "block"
          }
        }
      },
      ".suggestion": {
        display: "table",
        width: "100%",
        whiteSpace: "normal",
        border: "none",
        color: "#333",
        cursor: "pointer",
        overflow: "hidden",
        $nest: {
          ".header": {
            display: "block",
            fontSize: "14px",
            fontWeight: 400,
            background: "#ebeff3",
            color: "#28333d",
            borderRadius: "1rem",
            padding: "5px 10px"
          },
          ".column": {
            display: "table-cell",
            borderRight: "1px solid rgba(57,57,57,.3)",
            color: "#555",
            overflow: "hidden",
            padding: "5px 7px 5px 5px",
            textAlign: "right",
            textOverflow: "ellipsis",
            verticalAlign: "top",
            width: "135px",
            maxWidth: "135px",
            minWidth: "135px"
          },
          ".content": {
            display: "table-cell",
            padding: "5px 10px",
            width: "100%"
          },
          ".content-text": {
            display: "block",
            fontWeight: 600
          },
          ".content-paragraph-text": {
            display: "-webkit-box",
            "-webkit-line-clamp": 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden"
          },
          ".highlight": {
            color: "#55f",
            padding: 0,
            background: "none",
            fontWeight: 600
          }
        }
      }
    }
  });

  // src/components/search.tsx
  var __dirname = import_components3.application.currentModuleDir;
  import_components3.RequireJS.config({
    paths: {
      minisearch: `${__dirname}/lib/minisearch`
    }
  });
  var Search = class extends import_components3.Control {
    constructor() {
      super(...arguments);
      this.isDropdownShown = false;
      this._keyword = "";
    }
    get keyword() {
      return this._keyword;
    }
    set keyword(value) {
      this._keyword = value;
    }
    buildIndex(documents, fields, storeFields) {
      this.miniSearch = new this.MiniSearch({
        fields,
        storeFields,
        searchOptions: {
          fuzzy: 0.2
        }
      });
      this.miniSearch.addAll(documents);
    }
    search(keyword) {
      return this.miniSearch.search(keyword).slice(0, 5);
    }
    autoSuggest(keyword) {
      return this.miniSearch.autoSuggest(keyword);
    }
    updatePath(slug) {
      if (slug) {
        window.history.pushState(slug, "Title", `/${slug.toLowerCase() === "readme" ? "" : slug}`);
        window.dispatchEvent(new Event("popstate"));
      }
    }
    renderSuggestion(data) {
      data.sort((v1, v2) => v1[0].score >= v2[0].score ? -1 : 1);
      if (data.length) {
        if (!this.dropdownElm) {
          this.dropdownElm = this.createElement("span", this.wrapperElm);
          this.dropdownElm.classList.add("dropdown", "dataset");
        }
        this.dropdownElm.innerHTML = "";
        const suggestionElm = this.createElement("div", this.dropdownElm);
        suggestionElm.classList.add("suggestion");
        data.map((row) => {
          const suggestionHeader = this.createElement("div", suggestionElm);
          suggestionHeader.classList.add("header");
          suggestionHeader.innerText = row[0].title;
          row.map((item) => {
            const suggestionWrapper = this.createElement("div", suggestionElm);
            suggestionWrapper.classList.add("wrapper");
            suggestionWrapper.addEventListener("click", () => {
              this.updatePath(item.slug.toLowerCase());
              this.dropdownElm.classList.remove("show");
            });
            const suggestionColumn = this.createElement("div", suggestionWrapper);
            suggestionColumn.classList.add("column");
            const suggestionColumnText = this.createElement("span", suggestionColumn);
            suggestionColumnText.classList.add("column-text");
            suggestionColumnText.innerHTML = item.title;
            const suggestionContent = this.createElement("div", suggestionWrapper);
            suggestionContent.classList.add("content");
            const suggestionContentText = this.createElement("span", suggestionContent);
            suggestionContentText.classList.add("content-text");
            suggestionContentText.innerHTML = item.title;
            const suggestionParagraphText = this.createElement("span", suggestionContent);
            suggestionParagraphText.classList.add("content-paragraph-text");
            const rgxp = new RegExp("(\\S*.{0,10})?(" + Object.keys(item.match)[0] + ")(.{0,10}\\S*)?", "ig");
            const results = [];
            item.text.replace(rgxp, function(match, $1, $2, $3) {
              results.push(($1 ? "\u2026" + $1 : "") + "<b class='highlight'>" + $2 + "</b>" + ($3 ? $3 + "\u2026" : ""));
            });
            suggestionParagraphText.innerHTML = results.join(" ");
          });
        });
        this.dropdownElm.classList.add("show");
      }
    }
    async initMiniSearch() {
      return new Promise((resolve, reject) => {
        try {
          import_components3.RequireJS.require([`minisearch/index.min`], (minisearch) => {
            this.MiniSearch = minisearch;
            resolve();
          });
        } catch (err) {
          reject(err);
        }
      });
    }
    async init() {
      if (!this.wrapperElm) {
        this.wrapperElm = this.createElement("span", this);
        this.wrapperElm.classList.add("search", "autocomplete");
        const icon = new import_components3.Icon(this, { name: "search", fill: "#55f" });
        this.wrapperElm.appendChild(icon);
        this.inputElm = this.createElement("input", this.wrapperElm);
        this.inputElm.setAttribute("placeholder", "Search");
        this.inputElm.setAttribute("autocomplete", "off");
        this.inputElm.addEventListener("input", () => {
          const input = document.querySelector("i-search input");
          const results = this.search(input.value);
          const groupResult = Object.values(results.reduce((acc, result) => {
            acc[result.id] = acc[result.id] || [];
            acc[result.id].push(result);
            return acc;
          }, Object.create(null)));
          this.renderSuggestion(groupResult);
        });
        await this.initMiniSearch();
        document.addEventListener("click", (e) => {
          if (!this._enabled)
            return false;
          if (!this.contains(e.target)) {
            if (this.dropdownElm)
              this.dropdownElm.classList.remove("show");
          }
        });
      }
    }
    static async create(options, parent) {
      let component = new this(parent, options);
      await component.init();
      return component;
    }
  };
  Search = __decorateClass([
    (0, import_components3.customElements)("i-search")
  ], Search);

  // src/components/header.tsx
  var DocsHeader = class extends import_components4.Module {
    constructor(parent, options) {
      super();
      this.menuItem = [];
    }
    get menu() {
      return this._menu;
    }
    set menu(value) {
      this._menu = value;
      if (this._menu && this._menu.length) {
        import_components4.RequireJS.require([`${import_components4.LibPath}lib/marked/marked.umd.js`], async (marked) => {
          const acc = [];
          for (const item of this._menu) {
            if (item.text) {
              const htmlText = marked.parse(item.text);
              htmlText.replace(/<h[\d].*?>([^<]+)<\/h[\d]>([\s\S]*?)(?=(?:<h[\d].*?>|$))/gi, (str, subTitle, paragraph) => {
                let cloneItem = Object.assign({}, item);
                cloneItem.subTitle = subTitle;
                const paraDom = document.createElement("div");
                paraDom.innerHTML = paragraph;
                cloneItem.paragraph = paraDom.innerText.replace(/\n/g, "");
                if (cloneItem.subTitle && cloneItem.paragraph)
                  acc.push(cloneItem);
                return str;
              });
            }
          }
          let keys = [];
          let id = 0;
          for (const index of this.searchIndex) {
            index["slug"] = index["slug"].replace(".md", "").toLowerCase().replace("/readme", "");
            index["id"] = ++id;
          }
          this.searchBar.buildIndex(this.searchIndex, ["title", "text"], ["title", "text", "slug"]);
          console.log("build index search index", this.searchIndex);
          console.log("keys", keys);
        });
      }
    }
    async loadSearchIndex(entrypoint) {
      const request = new Request(`${entrypoint}/.scbook/searchindex.json`);
      const response = await fetch(request);
      const searchIndex = await response.json();
      this.searchIndex = searchIndex;
      return searchIndex;
    }
    async loadMarkdown(src) {
      const mdRequest = new Request(src, {
        headers: new Headers({ accept: "application/vnd.github.v3.raw" })
      });
      const response = await fetch(mdRequest);
      if (!response.ok)
        return "# There was error with your response, please check the details and try again";
      return response.text();
    }
    btnChangeThemeClick(target, event) {
      if (this.btnChangeTheme.checked) {
        this.btnChangeTheme.checked = false;
        import_components4.Styles.Theme.applyTheme(import_components4.Styles.Theme.defaultTheme);
      } else {
        this.btnChangeTheme.checked = true;
        import_components4.Styles.Theme.applyTheme(import_components4.Styles.Theme.darkTheme);
      }
    }
    async init() {
      super.init();
    }
    async checkLogoExists(entrypoint, logoPath) {
      if (logoPath.indexOf("https://") >= 0 || logoPath.indexOf("http://") >= 0) {
        this.imgLogo.url = logoPath;
        return;
      }
      if (logoPath) {
        const request = new Request(`${entrypoint}/${logoPath}`);
        const response = await fetch(request);
        if (!response.ok) {
          this.imgLogo.classList.add("hidden");
          this.logoText.classList.remove("hidden");
        } else
          this.imgLogo.url = `${entrypoint}/${logoPath}`;
      } else {
        this.imgLogo.classList.add("hidden");
        this.logoText.classList.remove("hidden");
      }
    }
    async loadFile(path) {
      return new Promise((resolve, reject) => {
        const load = async (p) => {
          try {
            const request = new Request(path);
            const response = await fetch(request);
            if (response.ok) {
              resolve(response);
            } else if (response.status == 404) {
              resolve(response);
            } else {
              setTimeout(() => {
                load(p);
              }, 5e3);
            }
          } catch (e) {
            setTimeout(() => {
              load(p);
            }, 5e3);
          }
        };
        load(path);
      });
    }
    async loadHeader(entrypoint, forceUpdate) {
      let header;
      const KEY = "$$scbook_header";
      if (!forceUpdate) {
        if (window.localStorage) {
          header = localStorage.getItem(KEY);
        }
      }
      if (forceUpdate || !header) {
        try {
          const response = await this.loadFile(`${entrypoint}/HEADER.md`);
          if (response.ok) {
            header = await response.text();
            if (window.localStorage) {
              window.localStorage.setItem(KEY, header);
            }
          }
        } catch (err) {
        }
      }
      const menu = [];
      if (header) {
        for (const line of header.split("\n")) {
          if (line.trim().indexOf("#") == 0) {
            const logoData = getData(line);
            let [logoTitle, logoPath] = logoData;
            try {
              this.checkLogoExists(entrypoint, logoPath);
            } catch (e) {
            }
            this.logoText.caption = logoTitle;
            continue;
          }
          const data = getData(line);
          const [title, link] = data;
          let item = {
            title: ""
          };
          if (title) {
            item.title = title;
            if (link) {
              const linkElm = new import_components4.Link();
              linkElm.href = link;
              item.link = linkElm;
            }
            menu.push(item);
          }
        }
      }
      this.menuItem = menu;
      this.scbookMenu.data = menu;
      try {
        await this.loadSearchIndex(entrypoint);
      } catch (e) {
      }
      function getData(str) {
        return [
          str.substr(str.indexOf("[") + 1, str.indexOf("]") - (str.indexOf("[") + 1)).trim(),
          str.substr(str.indexOf("(") + 1, str.indexOf(")") - (str.indexOf("(") + 1)).trim()
        ];
      }
    }
    toggleMenu() {
      const navigator2 = document.querySelector("#docsNavigator");
      if (navigator2) {
        navigator2.classList.contains("show") ? navigator2.classList.remove("show") : navigator2.classList.add("show");
      }
    }
    toggleEditMode() {
      const editor = document.querySelector("#docsEditor");
      const mdViewer = document.querySelector("#mdViewer");
      if (editor) {
        if (editor.classList.contains("show")) {
          editor.classList.remove("show");
          mdViewer == null ? void 0 : mdViewer.classList.remove("hide");
        } else {
          editor.classList.add("show");
          mdViewer == null ? void 0 : mdViewer.classList.add("hide");
        }
      }
    }
    render() {
      this.style.width = "100%";
      this.style.height = "auto";
      return /* @__PURE__ */ this.$render("i-panel", {
        class: "header"
      }, /* @__PURE__ */ this.$render("i-panel", {
        class: "container"
      }, /* @__PURE__ */ this.$render("i-label", {
        id: "logoText",
        class: "heading hidden"
      }), /* @__PURE__ */ this.$render("i-image", {
        id: "imgLogo",
        class: "logo"
      }), /* @__PURE__ */ this.$render("i-panel", {
        id: "btnMenu",
        onClick: this.toggleMenu
      }, /* @__PURE__ */ this.$render("i-icon", {
        name: "bars",
        fill: "#fff"
      })), /* @__PURE__ */ this.$render("i-menu", {
        id: "scbookMenu",
        data: this.menuItem
      }), /* @__PURE__ */ this.$render("i-panel", {
        id: "btnEdit",
        onClick: this.toggleEditMode,
        class: "hidden"
      }, /* @__PURE__ */ this.$render("i-icon", {
        name: "pencil-alt",
        fill: "#fff"
      })), /* @__PURE__ */ this.$render("i-panel", {
        class: "search"
      }, /* @__PURE__ */ this.$render("i-search", {
        id: "searchBar"
      }), /* @__PURE__ */ this.$render("i-switch", {
        id: "btnChangeTheme",
        checkedThumbColor: "#fff",
        uncheckedThumbColor: "#fff",
        checkedTrackColor: "#070707",
        uncheckedTrackColor: "#c5c5c5",
        onClick: this.btnChangeThemeClick
      }))));
    }
  };
  DocsHeader = __decorateClass([
    (0, import_components4.customElements)("i-docs-header")
  ], DocsHeader);

  // src/components/navigator.tsx
  var import_components6 = __toModule(__require("@ijstech/components"));

  // src/components/navigator.css.ts
  var import_components5 = __toModule(__require("@ijstech/components"));
  var Theme3 = import_components5.Styles.Theme.ThemeVars;
  import_components5.Styles.cssRule("i-docs-navigator", {
    display: "block",
    flex: "0 0 280px",
    position: "fixed",
    top: "70px",
    borderRight: "1px solid #ececec",
    overflowY: "auto",
    zIndex: "9998",
    $nest: {
      "&.hidden": {
        display: "none"
      },
      "@media (max-width: 700px)": {
        position: "fixed",
        width: "75% !important",
        left: "0",
        top: "80px",
        background: "white",
        height: "90% !important"
      },
      "i-panel": {
        height: "100%"
      },
      ".bold": {
        fontWeight: "700"
      },
      ".footer": {
        whiteSpace: "nowrap",
        position: "sticky",
        bottom: "0px",
        background: "#ECEEF1",
        height: "50px",
        padding: "10px",
        $nest: {
          img: {
            height: "40px",
            width: "auto",
            marginRight: "10px"
          },
          "i-label > div": {
            color: "rgb(136, 153, 168)",
            fontSize: "16px"
          }
        }
      },
      "i-tree-view.i-tree-view": {
        paddingLeft: "24px",
        height: "100%",
        $nest: {
          "i-tree-node": {
            $nest: {
              ".i-tree-node_content": {
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                padding: "0 16px",
                cursor: "pointer",
                minHeight: "32px",
                border: "1px solid transparent",
                $nest: {
                  "&:hover": {
                    backgroundColor: "rgb(236, 239, 241)",
                    color: "inherit"
                  },
                  label: {
                    lineHeight: "22px",
                    padding: "8px 0",
                    color: "rgba(92, 105, 117, 1.00)"
                  }
                }
              },
              ".i-tree-node_children": {
                marginLeft: "16px",
                $nest: {
                  "i-tree-node": {
                    borderLeft: "1px solid rgba(211, 220, 228, 1.00)",
                    $nest: {
                      ".i-tree-node_content": {
                        $nest: {
                          label: {
                            color: "rgba(136, 153, 168, 1.00)"
                          }
                        }
                      }
                    }
                  }
                }
              },
              "&:not(.has-children)": {
                $nest: {
                  ".i-tree-node_icon": {
                    display: "block"
                  }
                }
              },
              "&.is-checked": {
                $nest: {
                  "> .i-tree-node_content": {
                    backgroundColor: "rgb(236, 239, 241)",
                    color: "rgba(12, 18, 52, 1.00)"
                  }
                }
              },
              "&.active": {
                $nest: {
                  "> .i-tree-node_content": {
                    backgroundColor: "rgba(255, 255, 255, 1.00)",
                    border: "1px solid rgba(211,220,228,1.00)",
                    $nest: {
                      label: {
                        color: "rgba(12, 18, 52, 1.00)"
                      }
                    }
                  }
                }
              },
              ".i-tree-node_label": {
                marginRight: "auto"
              },
              ".is-right": {
                display: "none"
              }
            }
          }
        }
      },
      "&::-webkit-scrollbar": {
        width: "8px"
      },
      "&::-webkit-scrollbar-track": {
        background: "#f1f1f1"
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#aaa",
        borderRadius: "10px"
      },
      "&.hide": {
        maxWidth: 0,
        opacity: 0,
        visibility: "hidden"
      },
      ".navigator": {
        padding: "16px 0"
      }
    }
  });

  // src/components/navigator.tsx
  var Theme4 = import_components6.Styles.Theme.ThemeVars;
  var DocsNavigator = class extends import_components6.Module {
    constructor(parent, options) {
      super();
      this.isNavOpened = true;
    }
    get treeData() {
      return this._treeData;
    }
    set treeData(value) {
      this._treeData = value;
      if (this._treeData) {
        this.renderTree();
      }
    }
    handleActive(parent, prevNode) {
      var _a;
      this._currentNode = parent.activeItem;
      const url = (_a = parent.activeItem) == null ? void 0 : _a.tag.slug;
      this.updatePath(url);
    }
    updatePath(slug) {
      if (slug) {
        window.history.pushState(slug, "Title", `/${slug.toLowerCase() === "readme" ? "" : slug}`);
        window.dispatchEvent(new Event("popstate"));
      }
    }
    toggleNav(isNavOpened) {
      const navElm = document.querySelector("i-docs-navigator");
      this.isNavOpened = isNavOpened;
      if (navElm) {
        this.isNavOpened ? navElm.classList.remove("hide") : navElm.classList.add("hide");
      }
    }
    async renderTree() {
      if (this.treeData) {
        this.treeView.data = this.treeData;
      }
    }
    async init() {
      super.init();
    }
    render() {
      this.style.width = "280px";
      this.style.height = "calc(100vh - 70px)";
      return /* @__PURE__ */ this.$render("i-panel", null, /* @__PURE__ */ this.$render("i-panel", {
        class: "navigator"
      }, /* @__PURE__ */ this.$render("i-panel", {
        id: "tree-view-menu"
      }, /* @__PURE__ */ this.$render("i-tree-view", {
        id: "treeView",
        data: [],
        onActiveChange: this.handleActive
      }))));
    }
    get currentNode() {
      return this._currentNode;
    }
  };
  DocsNavigator = __decorateClass([
    (0, import_components6.customElements)("i-docs-navigator")
  ], DocsNavigator);

  // src/components/paging.tsx
  var import_components8 = __toModule(__require("@ijstech/components"));

  // src/components/paging.css.ts
  var import_components7 = __toModule(__require("@ijstech/components"));
  var Theme5 = import_components7.Styles.Theme.ThemeVars;
  import_components7.Styles.cssRule("i-paging", {
    $nest: {
      ".btnPaging": {
        display: "inline-block",
        boxShadow: "0px 1px 2px rgb(0 0 0 / 12%)",
        border: "1px solid #EEE",
        padding: "16px",
        cursor: "pointer",
        $nest: {
          "&.hidden": {
            display: "none"
          },
          "i-label": {
            display: "block",
            lineHeight: "25px"
          },
          "&.prev": {
            width: "48%",
            marginRight: "8px",
            $nest: {
              "i-icon": {
                float: "left"
              },
              "i-panel.pager-content": {
                float: "right",
                $nest: {
                  "i-label": {
                    textAlign: "right"
                  }
                }
              },
              "@media (max-width: 700px)": {
                width: "100%"
              }
            }
          },
          "&.next": {
            width: "48%",
            marginLeft: "8px",
            $nest: {
              "i-icon": {
                float: "right"
              },
              "i-panel.pager-content": {
                float: "left",
                $nest: {
                  "i-label": {
                    textAlign: "left"
                  }
                }
              },
              "@media (max-width: 700px)": {
                width: "100%",
                marginLeft: "0"
              }
            }
          },
          "&.prev-full": {
            width: "100%",
            $nest: {
              "i-icon": {
                float: "left"
              },
              "i-panel.pager-content": {
                float: "right",
                $nest: {
                  "i-label": {
                    textAlign: "right"
                  }
                }
              }
            }
          },
          "&.next-full": {
            width: "100%",
            $nest: {
              "i-icon": {
                float: "right"
              },
              "i-panel.pager-content": {
                float: "left",
                $nest: {
                  "i-label": {
                    textAlign: "left"
                  }
                }
              }
            }
          },
          "i-icon": {
            height: "20px",
            width: "20px",
            marginTop: "15px"
          },
          ".pager-content": {
            clear: "none",
            maxWidth: "90%",
            $nest: {
              ".pager-title1 div": {
                fontSize: "12px",
                fontWeight: "400",
                color: "#8899A8"
              },
              ".pager-title2": {
                whiteSpace: "nowrap",
                $nest: {
                  div: {
                    fontSize: "20px",
                    fontWeight: "500",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "block"
                  }
                }
              }
            }
          }
        }
      }
    }
  });

  // src/components/paging.tsx
  var Theme6 = import_components8.Styles.Theme.ThemeVars;
  var DocsPaging = class extends import_components8.Module {
    set flatTree(value) {
      this._flatTree = value;
      if (!this._currentNode && value && value.length > 0) {
        this._currentNode = value[0];
      }
      this.updatePager();
    }
    get flatTree() {
      return this._flatTree;
    }
    set currentNode(value) {
      this._currentNode = value;
      this.updatePager();
    }
    get currentNode() {
      return this._currentNode;
    }
    updatePager() {
      let prevNodeIndex = -1, nextNodeIndex = -1;
      if (this._flatTree) {
        this._flatTree.forEach((value, index) => {
          if (value.slug == this._currentNode.slug) {
            let prevValid = false, nextValid = false;
            prevNodeIndex = index - 1;
            nextNodeIndex = index + 1;
            while (!prevValid && this.flatTree[prevNodeIndex]) {
              if (this.flatTree[prevNodeIndex].file)
                prevValid = true;
              else
                prevNodeIndex--;
            }
            while (!nextValid && this.flatTree[nextNodeIndex]) {
              if (this.flatTree[nextNodeIndex].file)
                nextValid = true;
              else
                nextNodeIndex++;
            }
          }
        });
      }
      if (prevNodeIndex >= 0 && nextNodeIndex >= 0 && nextNodeIndex < this._flatTree.length) {
        this.prevPage.classList.remove("prev-full", "hidden");
        this.prevPage.classList.add("prev");
        this.nextPage.classList.remove("next-full", "hidden");
        this.nextPage.classList.add("next");
        this.prevPage.hidden = false;
        this.nextPage.hidden = false;
        this.labelPrev.caption = this._flatTree[prevNodeIndex] && this._flatTree[prevNodeIndex].caption || "";
        this.labelNext.caption = this._flatTree[nextNodeIndex] && this._flatTree[nextNodeIndex].caption;
      } else if (prevNodeIndex >= 0 && (nextNodeIndex == -1 || nextNodeIndex >= this._flatTree.length)) {
        this.nextPage.classList.add("hidden");
        this.prevPage.classList.remove("prev", "hidden");
        this.prevPage.classList.add("prev-full");
        this.labelPrev.caption = this._flatTree[prevNodeIndex].caption;
      } else if (prevNodeIndex == -1 && nextNodeIndex >= 0) {
        this.prevPage.classList.add("hidden");
        this.nextPage.classList.remove("next", "hidden");
        this.nextPage.classList.add("next-full");
        this.labelNext.caption = this._flatTree[nextNodeIndex].caption;
      }
    }
    nextPageOnClick() {
      let nextNodeIndex = -1;
      if (this._flatTree && this.currentNode) {
        this._flatTree.forEach((value, index) => {
          if (value.slug == this._currentNode.slug) {
            let valid = false;
            nextNodeIndex = index + 1;
            while (!valid) {
              if (this.flatTree[nextNodeIndex].file)
                valid = true;
              else
                nextNodeIndex++;
            }
          }
        });
      }
      const node = this.flatTree[nextNodeIndex];
      this.updatePath(node.slug.toLowerCase() === "readme" ? "" : node.slug);
      this.scrollToTop();
    }
    prevPageOnClick() {
      let prevNodeIndex = -1;
      if (this._flatTree && this.currentNode) {
        this._flatTree.forEach((value, index) => {
          if (value.slug == this._currentNode.slug) {
            let valid = false;
            prevNodeIndex = index - 1;
            while (!valid) {
              if (this.flatTree[prevNodeIndex].file)
                valid = true;
              else
                prevNodeIndex--;
            }
          }
        });
      }
      const node = this.flatTree[prevNodeIndex];
      this.updatePath(node.slug.toLowerCase() === "readme" ? "" : node.slug);
      this.scrollToTop();
    }
    scrollToTop() {
      window.scrollTo(0, 0);
    }
    updatePath(slug) {
      window.history.pushState(slug, "Title", `/${slug}`);
      window.dispatchEvent(new Event("popstate"));
    }
    render() {
      return /* @__PURE__ */ this.$render("i-panel", {
        class: "paging"
      }, /* @__PURE__ */ this.$render("i-panel", {
        id: "prevPage",
        class: "btnPaging prev hidden",
        onClick: this.prevPageOnClick
      }, /* @__PURE__ */ this.$render("i-icon", {
        name: "arrow-left"
      }), /* @__PURE__ */ this.$render("i-panel", {
        class: "pager-content"
      }, /* @__PURE__ */ this.$render("i-label", {
        caption: "Previous",
        class: "pager-title1"
      }), /* @__PURE__ */ this.$render("i-label", {
        id: "labelPrev",
        class: "pager-title2"
      }))), /* @__PURE__ */ this.$render("i-panel", {
        id: "nextPage",
        class: "btnPaging next hidden",
        onClick: this.nextPageOnClick
      }, /* @__PURE__ */ this.$render("i-icon", {
        name: "arrow-right"
      }), /* @__PURE__ */ this.$render("i-panel", {
        class: "pager-content"
      }, /* @__PURE__ */ this.$render("i-label", {
        caption: "Next",
        class: "pager-title1"
      }), /* @__PURE__ */ this.$render("i-label", {
        id: "labelNext",
        class: "pager-title2"
      }))));
    }
  };
  DocsPaging = __decorateClass([
    (0, import_components8.customElements)("i-paging")
  ], DocsPaging);

  // src/index.css.ts
  var import_components9 = __toModule(__require("@ijstech/components"));
  var Theme7 = import_components9.Styles.Theme.ThemeVars;
  import_components9.Styles.cssRule("i-module--1", {
    width: "100%!important"
  });
  import_components9.Styles.cssRule("i-panel.docs-module", {
    display: "block",
    backgroundColor: Theme7.docs.background,
    $nest: {
      "i-menu-item": {
        color: "white"
      },
      "a.internal-link": {
        cursor: "pointer"
      },
      hidden: {
        display: "none"
      },
      "i-markdown": {
        color: "rgba(59, 69, 78, 1)",
        $nest: {
          p: {
            display: "block",
            fontSize: "16px",
            lineHeight: "24px",
            overflow: "hidden",
            $nest: {
              "@media (max-width: 700px)": {
                display: "block"
              },
              "img:only-child": {
                borderRadius: "5px",
                padding: 0
              }
            }
          },
          li: {
            $nest: {
              strong: {
                display: "inline-block",
                paddingBottom: "8px"
              }
            }
          },
          table: {
            border: "1px solid #dfe2e5",
            $nest: {
              td: {
                borderTop: "1px solid #dfe2e5"
              }
            }
          }
        }
      },
      ".docs-module": {
        display: "block"
      },
      ".docs-wrapper": {
        display: "flex",
        paddingTop: "70px",
        minHeight: "calc(100vh - 70px)"
      },
      "#docsNavigator": {
        display: "none",
        backgroundColor: "#f5f5f5",
        $nest: {
          "@media (min-width: 700px)": {
            display: "block"
          },
          "&.show": {
            display: "block"
          }
        }
      },
      ".docs-container": {
        display: "flex",
        flexGrow: 1,
        flexFlow: "row nowrap",
        backgroundColor: "#fdfdfd",
        width: "calc(100% - 400px)",
        padding: "0 20px",
        marginLeft: "280px",
        $nest: {
          "@media (max-width: 700px)": {
            padding: "0"
          },
          "#mdViewer": {
            display: "block",
            $nest: {
              "&.hide": {
                display: "none"
              },
              ".sc-link": {
                backgroundColor: "rgba(255,255,255,1.00)",
                boxShadow: "0px 1px 2px rgb(0 0 0 / 12%)",
                border: "1px solid rgba(227,232,237,1.00)",
                borderRadius: "4px",
                padding: "16px",
                cursor: "pointer",
                $nest: {
                  a: {
                    display: "flex",
                    alignItems: "center",
                    width: "100%"
                  },
                  ".sc-link-icon": {
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                    flexBasis: "auto",
                    flexShrink: 0,
                    border: "0 solid black",
                    margin: 0,
                    marginRight: "16px",
                    minHeight: 0,
                    minWidth: 0,
                    padding: 0,
                    $nest: {
                      ".icon-wrapper": {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgba(245,247,249,1.00)",
                        color: "rgba(136,153,168,1.00)",
                        width: "32px",
                        height: "32px",
                        borderRadius: "4px"
                      }
                    }
                  },
                  ".sc-link-content": {
                    padding: 0,
                    flexShrink: 1,
                    flexGrow: 1,
                    flexBasis: "0%",
                    $nest: {
                      ".info": {
                        display: "flex",
                        alignItems: "center",
                        $nest: {
                          "div.title": {
                            fontSize: "16px",
                            lineHeight: "24px",
                            fontWeight: 500,
                            color: "rgba(59,69,78,1.00)"
                          },
                          "div.subtitle": {
                            fontSize: "14px",
                            lineHeight: "22px",
                            fontWeight: 400,
                            color: "rgba(136,153,168,1.00)",
                            marginLeft: "16px"
                          }
                        }
                      },
                      ".type": {
                        fontSize: "16px",
                        lineHeight: "24px",
                        fontWeight: 400,
                        color: "rgba(136,153,168,1.00)"
                      }
                    }
                  }
                }
              },
              ".sc-hint": {
                display: "flex",
                alignItems: "stretch",
                borderLeftWidth: "4px",
                borderLeftStyle: "solid",
                backgroundColor: "#fff",
                borderRadius: "4px",
                $nest: {
                  "&.warning": {
                    borderColor: "rgb(185, 94, 4)"
                  },
                  "&.danger": {
                    borderColor: "rgb(211, 61, 61)"
                  },
                  "&.info": {
                    borderColor: "rgb(52, 109, 219)"
                  },
                  "&.success": {
                    borderColor: "rgb(0, 136, 71)"
                  },
                  ".sc-hint-icon": {
                    display: "flex",
                    justifyContent: "center",
                    width: "48px",
                    paddingTop: "18px"
                  },
                  ".sc-hint-content": {
                    flex: 1,
                    padding: "16px 24px 16px 0",
                    fontSize: "14px",
                    lineHeight: "22px"
                  }
                }
              },
              ".sc-content-ref": {
                paddingBottom: "4px",
                $nest: {
                  a: {
                    color: "rgb(29, 138, 237)",
                    lineHeight: "20px",
                    $nest: {
                      "&:hover": {
                        color: "rgb(26, 69, 109)",
                        textDecoration: "underline"
                      }
                    }
                  }
                }
              },
              ".sc-tabs": {
                $nest: {
                  ".tabs": {
                    marginBottom: 0,
                    borderBottom: 0
                  },
                  "i-tab": {
                    textOverflow: "ellipsis",
                    border: "1px solid rgba(211,220,228,1.00)",
                    borderLeft: 0,
                    backgroundColor: "rgba(245,247,249,1.00)",
                    padding: "4px 16px",
                    fontSize: "14px",
                    color: "rgba(136,153,168,1.00)",
                    $nest: {
                      "&.active": {
                        backgroundColor: "rgba(255,255,255,1.00)",
                        borderBottom: 0,
                        color: "rgba(59,69,78,1.00)"
                      },
                      "&:first-of-type": {
                        borderLeft: "1px solid rgba(211,220,228,1.00)",
                        borderTopLeftRadius: "4px"
                      },
                      "&:last-of-type": {
                        borderTopRightRadius: "4px"
                      },
                      ".tab-link": {
                        display: "none"
                      },
                      "&:after": {
                        content: "none"
                      }
                    }
                  },
                  "i-tab-sheet": {
                    border: "1px solid rgb(211, 220, 228)",
                    minHeight: "unset",
                    backgroundColor: "rgba(255,255,255,1.00)",
                    borderRadius: "4px",
                    borderTopLeftRadius: 0,
                    padding: "24px"
                  }
                }
              },
              pre: {
                position: "relative",
                $nest: {
                  "code, code.hljs": {
                    whiteSpace: "pre-wrap",
                    padding: "26px 16px",
                    fontSize: "12px"
                  }
                }
              },
              "pre:hover": {
                $nest: {
                  "i-button": {
                    opacity: 1
                  }
                }
              },
              ".dropdown-btn": {
                position: "absolute",
                top: "0.5rem",
                right: "0.5rem",
                $nest: {
                  "i-button": {
                    border: 0,
                    borderRadius: "0.25rem",
                    minWidth: 0,
                    fontSize: "12px",
                    height: "unset",
                    lineHeight: "unset",
                    padding: "0.25rem 0.5rem",
                    backgroundColor: "transparent",
                    color: "#61aeee",
                    $nest: {
                      "&:hover": {
                        color: "#fff",
                        backgroundColor: "#027de7"
                      }
                    }
                  },
                  "i-modal": {
                    $nest: {
                      "> div": {
                        height: "auto"
                      },
                      ".modal": {
                        background: "rgba(0,0,0,.3)",
                        borderRadius: "0.4rem",
                        minWidth: "auto",
                        padding: "10px"
                      },
                      "i-button": {
                        border: 0,
                        borderRadius: "0.4rem",
                        color: "#fff",
                        padding: "0rem 0.5rem",
                        transition: "opacity .2s ease-in-out",
                        cursor: "pointer"
                      }
                    }
                  },
                  ".dropdown": {
                    margin: "0.25rem 0",
                    padding: "0.5rem",
                    width: "auto",
                    minWidth: "75px",
                    backgroundColor: "#151515"
                  },
                  "i-dropdown-item": {
                    justifyContent: "flex-start",
                    opacity: 1,
                    padding: "0 0.5rem",
                    $nest: {
                      "&:hover": {
                        backgroundColor: "#282c34"
                      },
                      li: {
                        fontSize: "12px"
                      }
                    }
                  }
                }
              }
            }
          },
          "#docsEditor": {
            display: "block",
            margin: "20px 0",
            opacity: 0,
            height: "0!important",
            visibility: "hidden",
            overflow: "hidden",
            $nest: {
              "&.show": {
                opacity: 1,
                height: "auto!important",
                visibility: "visible"
              }
            }
          },
          ".content": {
            display: "block",
            padding: "28px 20px 48px",
            width: "calc(100% - 400px)",
            $nest: {
              "&::-webkit-scrollbar": {
                width: 0
              },
              "i-markdown ul li a": {
                display: "inline"
              },
              "i-markdown > h1": {
                fontWeight: 700,
                $nest: {
                  "&:first-child": {
                    marginTop: 0
                  }
                }
              }
            }
          }
        }
      },
      ".icon": {
        position: "fixed",
        display: "inline-block",
        width: "20px",
        height: "20px",
        margin: "15px"
      },
      "i-dropdown-button .icon": {
        display: "none"
      },
      ".anchor": {
        display: "block",
        position: "relative",
        top: "-100px"
      },
      ".right-nav": {
        display: "none",
        position: "fixed",
        top: "90px",
        right: "20px",
        alignSelf: "flex-start",
        maxHeight: "calc(100vh - 120px)",
        margin: 0,
        paddingTop: "10px",
        borderLeft: "1px solid #e0e0e0",
        $nest: {
          "@media (min-width: 1060px)": {
            $nest: {
              "&.show": {
                display: "block"
              }
            }
          }
        }
      },
      img: {
        maxWidth: "100%"
      },
      "#runFrame": {
        display: "none",
        position: "fixed",
        top: "90px",
        right: "30px",
        maxHeight: "calc(100vh - 120px)",
        margin: 0,
        backgroundColor: "#fff",
        borderRadius: "5px",
        padding: "16px",
        border: "1px solid #ececec",
        $nest: {
          "@media (min-width: 1060px)": {
            $nest: {
              "&.show": {
                display: "block"
              }
            }
          }
        }
      },
      "#spinner": {
        position: "relative",
        maxHeight: "calc(100vh - 80px)",
        $nest: {
          ".i-loading-spinner": {
            background: "white",
            padding: "40px 20px",
            borderRadius: "6px",
            boxShadow: "1px 1px 8px 1px #bbbbbb"
          }
        }
      },
      ".hljs": {
        display: "block",
        overflowX: "auto",
        padding: ".5em",
        color: "#abb2bf",
        background: "#282c34"
      },
      ".hljs-comment, .hljs-quote": {
        color: "#5c6370",
        fontStyle: "italic"
      },
      ".hljs-doctag,.hljs-formula,.hljs-keyword": {
        color: "#c678dd"
      },
      ".hljs-deletion,.hljs-name,.hljs-section,.hljs-selector-tag,.hljs-subst": {
        color: "#e06c75"
      },
      ".hljs-literal": {
        color: "#56b6c2"
      },
      ".hljs-addition,.hljs-attribute,.hljs-meta-string,.hljs-regexp,.hljs-string": {
        color: "#98c379"
      },
      ".hljs-built_in,.hljs-class .hljs-title": {
        color: "#e6c07b"
      },
      ".hljs-attr,.hljs-number,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-pseudo,.hljs-template-variable,.hljs-type,.hljs-variable": {
        color: "#d19a66"
      },
      ".hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-symbol,.hljs-title": {
        color: "#61aeee"
      },
      ".hljs-emphasis": {
        fontStyle: "italic"
      },
      ".hljs-strong": {
        fontWeight: 700
      },
      ".hljs-link": {
        textDecoration: "underline"
      }
    }
  });

  // src/index.tsx
  var Theme8 = import_components10.Styles.Theme.ThemeVars;
  var __dirname2 = import_components10.application.currentModuleDir;
  import_components10.RequireJS.config({
    paths: {
      "ipfs-verifier": `${__dirname2}/lib/ipfs-verifier`,
      highlightjs: `${__dirname2}/lib/highlightjs`,
      "compiler": `${__dirname2}/lib/compiler`
    }
  });
  var DocsSite = class extends import_components10.Module {
    constructor(parent, options) {
      super();
      this.treeData = [];
      this.rightNavAnchors = [];
      this.isNavOpened = true;
      this.forceUpdate = true;
      this.isPageLoading = false;
      this.pageLoadingCounter = 0;
      this.entrypoint = options.entrypoint;
    }
    toggleNav() {
      this.isNavOpened = !this.isNavOpened;
      this.docsNavigator.toggleNav(this.isNavOpened);
    }
    async retryLoadFile(path) {
      console.log("retryLoadFile", path);
      return new Promise((resolve, reject) => {
        const load = async (p) => {
          try {
            const request = new Request(path);
            const response = await fetch(request);
            if (response.ok) {
              resolve(response);
            } else {
              setTimeout(() => {
                load(p);
              }, 5e3);
            }
          } catch (e) {
            console.log("load file catch", e);
            setTimeout(() => {
              load(p);
            }, 5e3);
          }
        };
        load(path);
      });
    }
    flattenTree(tree) {
      const clonetTree = JSON.parse(JSON.stringify(tree));
      return clonetTree.reduce((acc, cur) => {
        if (cur.children) {
          const temp = cur.children;
          Reflect.deleteProperty(cur, "children");
          acc.push(cur);
          acc.push(this.flattenTree(temp));
        } else {
          acc.push(cur);
        }
        return acc.flat();
      }, []);
    }
    async compileScript(filePath) {
      try {
        const request = new Request(`${this.entrypoint}/${filePath}`);
        const response = await fetch(request);
        const script = await response.text();
        const Compiler = __require("@ijstech/compiler").Compiler;
        const compiler = new Compiler();
        await compiler.addFile("index.tsx", script, async (fileName) => {
          if (fileName == "@ijstech/components") {
            let res = await fetch(`${import_components10.LibPath}index.d.ts`);
            let content = await res.text();
            return {
              fileName: "index.d.ts",
              content
            };
          }
          return {
            fileName,
            content: ""
          };
        });
        let result = await compiler.compile();
        console.log("result", result);
        return result.script["index.js"];
      } catch (e) {
        console.log(e);
      }
    }
    addBtnEvent() {
      var _a, _b, _c, _d;
      const dropdownBtns = document.querySelectorAll(".dropdown-btn");
      const editBtns = document.querySelectorAll(".edit-btn");
      const runBtns = document.querySelectorAll(".run-btn");
      const copyBtns = document.querySelectorAll(".copy-btn");
      const self = this;
      const lgRegex = new RegExp(/language-(.*?) .*$/gi);
      (_a = Array.from(dropdownBtns)) == null ? void 0 : _a.map((btn) => btn.addEventListener("click", async (e) => {
        const dropdownModal = btn.querySelector(".dropdown-modal");
        dropdownModal.showBackdrop = false;
        dropdownModal.height = "auto";
        dropdownModal.popupPlacement = "bottomRight";
        dropdownModal.visible = !dropdownModal.visible;
      }));
      (_b = Array.from(editBtns)) == null ? void 0 : _b.map((btn) => btn.addEventListener("click", async (e) => {
        var _a2;
        const parentNode = e.target.closest("pre");
        const code = parentNode.querySelector("code");
        const lg = code.className.replace(lgRegex, (_, lg2) => lg2);
        const filePath = lg.substr(lg.indexOf("(") + 1, lg.indexOf(")") - lg.indexOf("(") - 1);
        const request = new Request(`${this.entrypoint}/${filePath}`);
        const response = await fetch(request);
        const script = await response.text();
        window.localStorage.setItem("$$scbook_edit_language", lg);
        window.localStorage.setItem("$$scbook_edit_code", script);
        (_a2 = window == null ? void 0 : window.open("/edit.html", "_blank")) == null ? void 0 : _a2.focus();
      }));
      (_c = Array.from(runBtns)) == null ? void 0 : _c.map((btn) => btn.addEventListener("click", async (e) => {
        try {
          console.log("runBtnClick");
          const parentNode = e.target.closest("pre");
          const code = parentNode.querySelector("code");
          const lg = code.className.replace(lgRegex, (_, lg2) => lg2);
          const filePath = lg.substr(lg.indexOf("(") + 1, lg.indexOf(")") - lg.indexOf("(") - 1);
          const script = await this.compileScript(filePath);
          this.pnlRunner.clearInnerHTML();
          const module = await import_components10.application.loadModule("", { script });
          if (module)
            this.pnlRunner.appendChild(module);
        } catch (e2) {
          console.log(e2);
        }
      }));
      (_d = Array.from(copyBtns)) == null ? void 0 : _d.map((btn) => btn.addEventListener("click", (e) => {
        var _a2;
        const parentNode = e.target.closest("pre");
        const code = (_a2 = parentNode.querySelector("code")) == null ? void 0 : _a2.innerText;
        navigator.clipboard.writeText(code);
        e.target.innerText = "Copied";
        setTimeout(() => e.target.innerText = "Copy", 1e3);
      }));
    }
    async processGitbook(content, filePath) {
      const fileRegex = new RegExp(/{% file src="([^#&?]*)" %}/gi);
      const embedRegex = new RegExp(/{% embed url="<a href=".*?">(.*?)"<\/a> %}/gi);
      const contentRefRegex = new RegExp(/<p>(.*?):<\/p>[\n]<p>[\n]*{% content-ref url="(.*?)" %}[\n].*?[\n]{% endcontent-ref %}[\n]*<\/p>/gi);
      const hintRegex = new RegExp(/{% hint style="(.*?)" %}(.*?){% endhint %}/gis);
      const tabsRegex = new RegExp(/<p>{% tabs %}(.+?){% endtabs %}<\/p>/gis);
      const tabRegex = new RegExp(/{% tab title="(.*?)" %}<\/p>(.+?)<p>{% endtab %}/gis);
      const anchorRegex = new RegExp(/<a href="(.*?)">(.*?)<\/a>/gm);
      const preRegex = new RegExp(/<pre>(.*?)<\/pre>/gis);
      if (preRegex.test(content)) {
        content = content.replace(preRegex, (_, html) => {
          let ddBtn = `<i-panel class="dropdown-btn"><i-button caption="Actions"></i-button><i-modal class="dropdown-modal"><i-vstack gap="10px">`;
          const runBtn = `<i-button caption="Run" class="run-btn"></i-button>`;
          const copyBtn = `<i-button caption="Copy" class="copy-btn"></i-button>`;
          ddBtn += runBtn;
          ddBtn += copyBtn;
          ddBtn += `</i-vstack></i-modal></i-panel>`;
          html += ddBtn;
          return `<pre>${html}</pre>`;
        });
      }
      if (fileRegex.test(content)) {
        const sclinkPath = `${this.entrypoint}/${filePath}`;
        const request = new Request(sclinkPath);
        const result = await fetch(request);
        if (result.ok) {
          const sclinkData = await result.json();
          content = content.replace(fileRegex, (_, src) => {
            const { size, filename } = sclinkData.filedata[src];
            const link = `${this.entrypoint}/${src.replace("../", "")}`;
            return `<div class="sc-link">                    
                    <a href="${link}" download>
                      <div class="sc-link-icon">
                        <div class="icon-wrapper">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" preserveAspectRatio="xMidYMid meet" style="height: 20.8px; vertical-align: middle; width: 20.8px;"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"></path></svg>
                        </div>
                      </div>
                      <div class="sc-link-content">
                        <div class="info">
                          <div class="title">${filename}</div>
                          <div class="subtitle">${size}KB</div>
                        </div>
                        <div class="type">Binary</div>
                      </div>
                    </a>
                    </div>`;
          });
        }
      }
      if (embedRegex.test(content)) {
        const sclinkPath = `${this.entrypoint}/${filePath}`;
        const request = new Request(sclinkPath);
        const result = await fetch(request);
        if (result.ok) {
          const sclinkData = await result.json();
          content = content.replace(embedRegex, (_, url) => {
            const { title, siteName, icon } = sclinkData.metadata[url];
            return `<div class="sc-link">                    
                    <a href="${url}" target="_blank">
                      <div class="sc-link-icon">
                        <div class="icon-wrapper">
                          <img alt src="${icon}"/>
                        </div>
                      </div>
                      <div class="sc-link-content">
                        <div class="info">
                          <div class="title">${title}</div>
                        </div>
                        <div class="type">${siteName}</div>
                      </div>
                    </a>
                    </div>`;
          });
        }
      }
      if (hintRegex.test(content)) {
        content = content.replace(hintRegex, (_, style, hint) => {
          const icon = {
            warning: `<svg viewBox="0 0 16 16" fill="none" preserveAspectRatio="xMidYMid meet" class="r-1vzi8xi" style="color: rgb(185, 94, 4); height: 20px; width: 20px;"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 8.96V3.29h1v5.67h-1z" fill="currentColor"></path><path d="M8 12.5a1 1 0 110-2 1 1 0 010 2z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z" fill="currentColor"></path></svg>`,
            danger: `<svg viewBox="0 0 16 16" fill="none" preserveAspectRatio="xMidYMid meet" class="r-1vzi8xi" style="color: rgb(211, 61, 61); height: 20px; width: 20px;"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1a.5.5 0 01.424.235l7.5 12A.5.5 0 0115.5 14H.5a.5.5 0 01-.424-.765l7.5-12A.5.5 0 018 1zM1.402 13h13.196L8 2.443 1.402 13z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 9.41V6.12h1v3.29h-1z" fill="currentColor"></path><path d="M8 11.67a.76.76 0 110-1.52.76.76 0 010 1.52z" fill="currentColor"></path></svg>`,
            info: `<svg viewBox="0 0 16 16" fill="none" preserveAspectRatio="xMidYMid meet" class="r-1vzi8xi" style="color: rgb(52, 109, 219); height: 20px; width: 20px;"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 6.37H8a.5.5 0 01.5.5v5.5h-1v-5h-1v-1z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 12.37h-3v-1h3v1z" fill="currentColor"></path><path d="M7.74 5.16a.77.77 0 01-.76-.77.76.76 0 011.52 0 .77.77 0 01-.76.77z" fill="currentColor"></path></svg>`,
            success: `<svg viewBox="0 0 16 16" fill="none" preserveAspectRatio="xMidYMid meet" class="r-1vzi8xi" style="color: rgb(0, 136, 71); height: 20px; width: 20px;"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.677 6.16l-4.443 4.444a.5.5 0 01-.708 0L4.323 8.4l.707-.707 1.85 1.85 4.09-4.09.707.707z" fill="currentColor"></path></svg>`
          };
          return `<div class="sc-hint ${style}">
                  <div class="sc-hint-icon">
                    ${icon[style]}
                  </div>
                  <div class="sc-hint-content">${hint}</div>
                </div>`;
        });
      }
      if (contentRefRegex.test(content)) {
        content = content.replace(contentRefRegex, (_, title, url) => {
          return `<li class="sc-content-ref">
                  <a href="${url}">
                    ${title}
                  </a>
                </li>`;
        });
      }
      if (tabsRegex.test(content)) {
        content = content.replace(tabsRegex, (_, tabsContent) => {
          let tabsElm = `<i-tabs class="sc-tabs" width="auto" activePageIndex="0">`;
          const tabs = [];
          tabsContent.replace(tabRegex, (_2, title, content2) => {
            tabs.push({ title, content: content2 });
            return _2;
          });
          for (let tab of tabs) {
            tabsElm += `<i-tab tabSheetId="${tab.title}">${tab.title}</i-tab>`;
          }
          for (let tab of tabs) {
            tabsElm += `<i-tab-sheet id="${tab.title}"><div>${tab.content}</div></i-tab-sheet>`;
          }
          tabsElm += "</i-tabs>";
          return tabsElm;
        });
      }
      if (anchorRegex.test(content)) {
        content = content.replace(anchorRegex, (_, href, text) => {
          if (href.indexOf(window.location.host) < 0)
            return _;
          const slug = this.docsPaging.currentNode.slug;
          const newSlug = href.substr(href.toLowerCase().lastIndexOf("/") + 1).replaceAll(".md", "").replaceAll("/readme", "");
          return `<a class="internal-link" slug="${newSlug}">${text}</a>`;
        });
      }
      return content;
    }
    activeNode(target, event) {
      const treeNodes = Array.from(document.querySelectorAll(".right-nav i-tree-view-node"));
      treeNodes.forEach((treeNode) => treeNode.active = false);
      const treeViewNode = target;
      treeViewNode.active = true;
      if ((event == null ? void 0 : event.type) === "click") {
        const node = document.querySelector(`#${treeViewNode.id}`);
        window.scrollTo(0, node.offsetTop - 100);
      }
    }
    activeRightNodeOnScroll() {
      const passedAnchor = this.rightNavAnchors.reduce((acc, id) => {
        const elementTarget = document.getElementById(id);
        if (elementTarget) {
          if (window.scrollY > elementTarget.offsetTop + elementTarget.offsetHeight) {
            acc.push(id);
          }
        }
        return acc;
      }, []);
      const treeNode = document.querySelector(`.right-nav #${passedAnchor[passedAnchor.length - 1]}`);
      if (treeNode)
        this.activeNode(treeNode);
    }
    bindEvents() {
      window.addEventListener("popstate", async (e) => {
        await this.loadPage();
        await this.sleep(100);
        this.setActiveNav();
        const navigator2 = document.querySelector("#docsNavigator");
        if (navigator2)
          navigator2.classList.remove("show");
        await this.loadLib();
      });
      window.addEventListener("scroll", () => {
        this.activeRightNodeOnScroll();
      });
    }
    setActiveNav() {
    }
    async init() {
      super.init();
      this.hljs = await this.loadLib();
      if (this.forceUpdate) {
        for (let keys in localStorage) {
          if (keys.indexOf("$$scbook") >= 0)
            localStorage.removeItem(keys);
        }
        window.localStorage.setItem("$$scbook_entrypoint", this.entrypoint);
      }
      await this.docsHeader.loadHeader(this.entrypoint);
      await this.loadPage();
      this.bindEvents();
      this.setActiveNav();
      await this.loadLib();
    }
    async loadLib() {
      return new Promise((resolve, reject) => {
        import_components10.RequireJS.require([`highlightjs/app.bundle`], (hljs) => {
          resolve(hljs);
        });
      });
    }
    async loadPage() {
      this.isPageLoading = true;
      console.log("loadMenu");
      await this.loadMenu();
      this.loadContent(this.currentNode.tag.file, this.currentNode.tag.slug).then(async () => {
        const contentElm = document.querySelector("i-panel.docs-module i-panel.content");
        if (!contentElm)
          return;
        this.docsPaging.currentNode = this.currentNode;
        const md = await this.mdViewer.load(this.currentNode.text);
        const processedMd = await this.processGitbook(md, `${this.currentNode.slug}.sclink`);
        this.mdViewer.beforeRender(processedMd);
        await this.sleep(200);
        this.addBtnEvent();
        if (this.hljs)
          this.hljs.highlightAll();
        for (const ref of document.querySelectorAll("a.internal-link")) {
          ref.addEventListener("click", (e) => {
            e.preventDefault();
            let slug = ref.getAttribute("slug") || "";
            if (slug) {
              slug = decodeURIComponent(slug).toLowerCase().replace("/readme", "").replace(".md", "");
              window.history.pushState("", "", `/${slug}`);
              window.dispatchEvent(new Event("popstate"));
            }
          });
        }
        if (this.isPageLoading == true) {
          setTimeout(() => {
            const h1 = this.querySelector("i-markdown h1:first-child");
            if (h1)
              this.mdViewer.insertBefore(this.createElement("hr"), h1.nextSibling);
          }, 5);
          this.isPageLoading = false;
        }
        this.loadRightNav();
      });
    }
    processMenu(menuText, trimSpace = 0, space = 2) {
      return new Promise(async (resolve, reject) => {
        let dataArr = menuText.split("\n");
        const beginWithAsteriskReg = /^[\s]*\*/;
        dataArr = dataArr.reduce((acc, str) => {
          if (beginWithAsteriskReg.test(str)) {
            str = str.slice(trimSpace);
            acc.push(str);
          }
          return acc;
        }, []);
        let result = [];
        let indexes = [0];
        let lastLevel = -1;
        const spaceReg = /^\s*/;
        const captionReg = /\[(.*?)\]/;
        const fileReg = /\((.*?)\)/;
        let id = 1;
        const hash = this.hash || "readme";
        for (let item of dataArr) {
          const level = item.match(spaceReg)[0].length / space;
          const caption = item == null ? void 0 : item.match(captionReg)[1];
          const file = item == null ? void 0 : item.match(fileReg)[1];
          const slug = file.replace(".md", "").toLowerCase().replace("/readme", "");
          if (level === 0) {
            result.push({
              id: ++id,
              caption,
              file,
              slug,
              active: hash === slug,
              tag: { file, slug }
            });
            if (lastLevel >= 0) {
              indexes.length = 1;
              indexes[0]++;
            }
            lastLevel = 0;
          }
          if (level > 0) {
            indexes[level] >= 0 ? indexes[level]++ : indexes[level] = 0;
            indexes.length = level + 1;
            lastLevel = level;
            let item2 = {};
            for (const [i, index] of indexes.entries()) {
              if (Object.keys(item2).length === 0) {
                item2 = result[index];
              } else {
                if (!item2.hasOwnProperty("children")) {
                  item2["children"] = [
                    {
                      id: ++id,
                      caption,
                      file,
                      slug,
                      active: hash === slug,
                      tag: { file, slug }
                    }
                  ];
                } else {
                  if (i === indexes.length - 1) {
                    item2.children.push({
                      id: ++id,
                      caption,
                      file,
                      slug,
                      active: hash === slug,
                      tag: { file, slug }
                    });
                  }
                  item2 = item2["children"][index];
                }
              }
            }
          }
        }
        resolve(result);
      });
    }
    async loadMenu() {
      return new Promise(async (resolve, reject) => {
        var _a, _b, _c;
        let menuText = "";
        if (this.forceUpdate || !((_a = window.localStorage) == null ? void 0 : _a.getItem("$$scbook_menu"))) {
          console.log("reading summary.md");
          const response = await this.retryLoadFile(`${this.entrypoint}/SUMMARY.md`);
          console.log("summary.md", response);
          menuText = await response.text();
          (_b = window.localStorage) == null ? void 0 : _b.setItem(`$$scbook_menu`, menuText);
        } else {
          menuText = (_c = window.localStorage) == null ? void 0 : _c.getItem("$$scbook_menu");
        }
        console.log("menuText", menuText);
        this.processMenu(menuText).then((treeData) => {
          this.treeData = treeData;
          if (!this.docsNavigator.treeData) {
            this.docsNavigator.treeData = this.treeData;
          }
          this.flatTree = this.flattenTree(this.treeData);
          this.docsPaging.flatTree = this.flatTree;
          this.docsHeader.menu = this.flatTree;
        });
        resolve(menuText);
      });
    }
    async loadContent(file, slug) {
      return new Promise(async (resolve, reject) => {
        var _a, _b, _c;
        let text = "";
        if (this.forceUpdate || !((_a = window.localStorage) == null ? void 0 : _a.getItem(`$$scbook_${slug}`))) {
          const response = await this.retryLoadFile(`${this.entrypoint}/${file}`);
          text = await response.text();
          (_b = window.localStorage) == null ? void 0 : _b.setItem(`$$scbook_${slug}`, text);
        } else {
          text = (_c = window.localStorage) == null ? void 0 : _c.getItem(`$$scbook_${slug}`);
        }
        const regex = /!\[[^\]]*\]\((?<filename>.*?)(?=\"|\))(?<optionalpart>\".*\")?\)/g;
        const linkRegex = /\[[^\]]*\]\((?<filename>.*?)(?=\"|\))(?<optionalpart>\".*\")?\)/g;
        text = text.replace(regex, (string, filename) => {
          if (string.indexOf("http://") >= 0 || string.indexOf("https://") >= 0)
            return string;
          const newFileName = `${this.entrypoint}/${encodeURIComponent(filename.replace("/..//g", "").replace("/\\/g", ""))}`;
          return string.replace(filename, newFileName);
        });
        text = text.replace(linkRegex, (string, filename) => {
          if (string.indexOf("http://") >= 0 || string.indexOf("https://") >= 0 || string.indexOf(".md") < 0)
            return string;
          const newFileName = `${window.location.href}/${encodeURIComponent(filename.replace("/\\/g", "").replace(".md", ""))}`;
          return string.replace(filename, newFileName);
        });
        this.currentNode.text = text;
        const typescriptRegex = new RegExp(/\`\`\`typescript\((.*?)\)(.*?)\`\`\`/gis);
        const isTS = typescriptRegex.test(text);
        const rightNav = document.querySelector(".right-nav");
        const runFrame = document.querySelector("#runFrame");
        if (isTS) {
          rightNav == null ? void 0 : rightNav.classList.remove("show");
          runFrame == null ? void 0 : runFrame.classList.add("show");
        } else {
          rightNav == null ? void 0 : rightNav.classList.add("show");
          runFrame == null ? void 0 : runFrame.classList.remove("show");
        }
        resolve(text);
      });
    }
    loadRightNav() {
      let toc = "";
      let level = 0;
      this.rightNavAnchors = [];
      const content = document.querySelector(".docs-container .content");
      if (content) {
        const a = content.innerHTML.replaceAll("<strong>", "").replaceAll("</strong>", "");
        a.replace(/<h([\d])(.*)>([^<]+)<\/h([\d])>/gi, (str, openLevel, temp, titleText, closeLevel) => {
          if (openLevel != closeLevel || openLevel == 1) {
            return str;
          }
          if (openLevel > level) {
            toc += new Array(openLevel - level + 1).join("<i-tree-view>");
          } else if (openLevel < level) {
            toc += new Array(level - openLevel + 1).join("</i-tree-view>");
          }
          level = parseInt(openLevel);
          let anchor = titleText.replace(/\W/g, "-").toLowerCase();
          if (anchor[anchor.length - 1] == "-")
            anchor = anchor.substr(0, anchor.length - 1);
          this.rightNavAnchors.push(anchor);
          toc += `<i-tree-view-node id='${anchor}' caption='${titleText}' useIcon='false' ></i-tree-view-node>`;
          return `<h${openLevel}><a class='anchor' aria-hidden='true' id=' {anchor}'></a>${titleText}</h${closeLevel}>`;
        });
      }
      if (level) {
        toc += new Array(level + 1).join("</i-tree-view>");
      }
      const right = document.querySelector(".right-nav");
      if (right)
        right.innerHTML = toc;
      const treeNodes = Array.from(document.querySelectorAll(".right-nav i-tree-view-node"));
      treeNodes.forEach((treeNode) => treeNode.onClick = this.activeNode);
      this.activeRightNodeOnScroll();
    }
    render() {
      return /* @__PURE__ */ this.$render("i-panel", {
        class: "docs-module",
        height: "auto",
        width: "100%"
      }, /* @__PURE__ */ this.$render("i-docs-header", {
        id: "docsHeader"
      }), /* @__PURE__ */ this.$render("i-icon", {
        name: "bars",
        fill: "#55f",
        class: "icon",
        onClick: this.toggleNav
      }), /* @__PURE__ */ this.$render("i-panel", {
        class: "docs-wrapper"
      }, /* @__PURE__ */ this.$render("i-docs-navigator", {
        id: "docsNavigator"
      }), /* @__PURE__ */ this.$render("i-panel", {
        class: "docs-container"
      }, /* @__PURE__ */ this.$render("i-panel", {
        class: "content"
      }, /* @__PURE__ */ this.$render("i-markdown", {
        id: "mdViewer"
      }), /* @__PURE__ */ this.$render("i-paging", {
        id: "docsPaging"
      })), /* @__PURE__ */ this.$render("i-panel", {
        class: "right-nav"
      }), /* @__PURE__ */ this.$render("i-panel", {
        id: "pnlRunner",
        width: "400px",
        height: "100%",
        position: "fixed",
        right: 0,
        border: { width: "1px", style: "solid", color: "#DFE2E5" },
        padding: { top: "10px", left: "10px", right: "10px" }
      }))));
    }
    sleep(time) {
      return new Promise((res, rej) => {
        setTimeout(res, time);
      });
    }
    get currentNode() {
      let node = this.flatTree.find((node2) => {
        return node2.slug === (this.hash === "" ? "readme" : this.hash);
      });
      if (!node)
        node = this.flatTree.find((node2) => {
          return !!node2.text;
        });
      return node;
    }
    get hash() {
      return decodeURI(window.location.pathname.substr(1));
    }
  };
  DocsSite = __decorateClass([
    import_components10.customModule,
    (0, import_components10.customElements)("i-docs-site")
  ], DocsSite);
})();
