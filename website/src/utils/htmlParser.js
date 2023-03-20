//External Lib Import
import ReactHtmlParser from "html-react-parser";

const htmlParser = (html) => ReactHtmlParser(ReactHtmlParser(html));
export const htmlParserDom = (html) => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

export default htmlParser;
