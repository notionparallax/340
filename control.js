class MyHandler extends Paged.Handler {
  constructor(chunker, polisher, caller) {
    super(chunker, polisher, caller);
  }

  beforeParsed(content) {}

  afterParsed(parsed) {}

  beforePageLayout(page) {}

  renderNode(node) {}

  afterPageLayout(pageFragment, page, breakToken) {}

  afterRendered(pages) {
    document.querySelector("body").classList = "";
  }
}

Paged.registerHandlers(MyHandler);
