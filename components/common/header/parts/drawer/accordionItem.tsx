import * as Accordion from "@radix-ui/react-accordion";
import { Text } from "@components/common";
import Chevron from "@components/common/icons/chevron";
import Link from "next/link";
import { ItemHeader, AccordionContent } from "./styles";

const SingleItem = ({ item, level }) => {
  return (
    <Link href={item.url} passHref>
      <Accordion.Header asChild>
        <ItemHeader level={level}>
          <Text variant="Button-Regular">
            {level === "tertiary" && "-"} {item.label}
          </Text>
        </ItemHeader>
      </Accordion.Header>
    </Link>
  );
};

const ParentItem = ({ item, level }) => {
  return (
    <Accordion.Header asChild>
      <Accordion.Trigger asChild>
        <ItemHeader as="button" level={level}>
          <Text variant="Button-Regular">{item.label}</Text>
          {item.subItems?.length > 0 && (
            <Chevron aria-hidden direction="down" />
          )}
        </ItemHeader>
      </Accordion.Trigger>
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
        <ParentItem item={item} level="primary" />
      ) : (
        <SingleItem item={item} level="primary" />
      )}
      {item.subItems && (
        <Accordion.Content asChild>
          <AccordionContent
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
          >
            <Accordion.Root type="single" collapsible>
              {item.subItems.map((subItem) => {
                return (
                  <Accordion.Item
                    key={`secondary-${subItem.id}`}
                    value={`secondary-${subItem.id}`}
                  >
                    {subItem.subItems ? (
                      <ParentItem item={subItem} level="secondary" />
                    ) : (
                      <SingleItem item={subItem} level="secondary" />
                    )}
                    {subItem.subItems && (
                      <Accordion.Content asChild>
                        <AccordionContent
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                        >
                          <Accordion.Root type="single" collapsible>
                            {subItem.subItems.map((tertiaryItem) => {
                              return (
                                <Accordion.Item
                                  key={`tertiary-${tertiaryItem.id}`}
                                  value={`tertiary-${tertiaryItem.id}`}
                                >
                                  <SingleItem
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
