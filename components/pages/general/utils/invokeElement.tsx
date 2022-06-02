import { v4 as uuid } from "uuid";
/*
  Accepts data for an element, and assigns it to a specified key value pair map. 
  Element data object is spread on the returned component to consume as props. 
  Type is referenced against the key value pair map to return the correct component for the data.

  usage example;

  const Modules = new Map([
    [ModuleType("learningCentre"), ELCTable],
    [ModuleType("contentBlock"), Content],
  ]);
  
  {pageData.map((module) => (
    <InvokeElement
      key={uuid()}
      el={module}
      type={module.__typename}
      map={Modules}
    />
  ))}
*/

const InvokeElement = ({ el, type, map }) => {
  const Element = map?.get(type);
  if (Element === undefined) {
    return null;
  }
  return <Element key={uuid()} {...el} />;
};

export default InvokeElement;
