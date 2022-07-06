import * as Accordion from "@radix-ui/react-accordion";
import { Text } from "@components/common";
import Chevron from "@components/common/icons/chevron";
import Link from "next/link";
import { ItemHeader, AccordionContent } from "./styles";

const SingleItem = ({ item, level, href }) => {
  return (
    <Link href={href} passHref>
      <Accordion.Header asChild>
        <ItemHeader css={{ padding: 24 }} level={level}>
          <Text variant="Button-Regular">
            {level === "tertiary" && "-"} {item.label}
          </Text>
        </ItemHeader>
      </Accordion.Header>
    </Link>
  );
};

const ParentItem = ({ item, href, level }) => {
  return (
    <Accordion.Header asChild>
      <ItemHeader as="button" level={level}>
        <Link href={href} passHref>
          <a
            style={{
              padding: 24,
              textDecoration: "none",
              flex: 1,
              textAlign: "left",
            }}
          >
            <Text variant="Button-Regular">{item.label}</Text>
          </a>
        </Link>
        {item.subItems?.length > 0 && (
          <Accordion.Trigger asChild>
            <button style={{ all: "unset", padding: 24 }}>
              <Chevron aria-hidden direction="down" />
            </button>
          </Accordion.Trigger>
        )}
      </ItemHeader>
    </Accordion.Header>
  );
};

const AccordionItem = ({ item }) => {
  return (
    <Accordion.Item
      value={`primary-${item.id}`}
      data-value={`primary-${item.id}`}
    >
      {item.subItems ? (
        <ParentItem href={`/${item.url}`} item={item} level="primary" />
      ) : (
        <SingleItem href={`/${item.url}`} item={item} level="primary" />
      )}
      {item.subItems && (
        <Accordion.Content asChild>
          <AccordionContent
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
          >
            <Accordion.Root type="single" collapsible>
              {item.subItems.map((subItem) => {
                const href = `/${subItem.parent.url}/${subItem.url}`;
                return (
                  <Accordion.Item
                    key={`secondary-${subItem.id}`}
                    value={`secondary-${subItem.id}`}
                  >
                    {subItem.subItems ? (
                      <ParentItem
                        href={href}
                        item={subItem}
                        level="secondary"
                      />
                    ) : (
                      <SingleItem
                        href={href}
                        item={subItem}
                        level="secondary"
                      />
                    )}
                    {subItem.subItems && (
                      <Accordion.Content asChild>
                        <AccordionContent
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                        >
                          <Accordion.Root type="single" collapsible>
                            {subItem.subItems.map((tertiaryItem) => {
                              const href = `/${item.url}/${subItem.url}/${tertiaryItem.url}`;
                              return (
                                <Accordion.Item
                                  key={`tertiary-${tertiaryItem.id}`}
                                  value={`tertiary-${tertiaryItem.id}`}
                                >
                                  <SingleItem
                                    href={href}
                                    item={tertiaryItem}
                                    level="tertiary"
                                  />
                                </Accordion.Item>
                              );
                            })}
                          </Accordion.Root>
                        </AccordionContent>
                      </Accordion.Content>
                    )}
                  </Accordion.Item>
                );
              })}
            </Accordion.Root>
          </AccordionContent>
        </Accordion.Content>
      )}
    </Accordion.Item>
  );
};

export default AccordionItem;
