import Link from "next/link";
import { collapse, collapseInner } from "./animations";
import {
  Column,
  ColumnContainer,
  Container,
  HeadingText,
  List,
  ListItem,
  ListItemText,
  Wrapper,
} from "./styles";

const CollapseBody = ({ data }) => {
  return (
    <Container
      variants={collapse}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Wrapper
        variants={collapseInner}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        {data?.length > 0 &&
          data.map((item) => {
            return (
              <Column key={`sitemap-${item.id}`}>
                <ColumnContainer>
                  <HeadingText variant="Body-xSmall-Bold">
                    {item.label}
                  </HeadingText>
                  {item?.subItems?.length > 0 && (
                    <List>
                      {item.subItems.map((subItem) => {
                        return (
                          <ListItem key={`sitemap-sub-${subItem.id}`}>
                            <Link href={`/${subItem.url || ""}`} passHref>
                              <a
                                target={subItem.newWindow ? "_blank" : "_self"}
                              >
                                <ListItemText variant="Body-xxSmall">
                                  {subItem.label}
                                </ListItemText>
                              </a>
                            </Link>
                            {subItem?.subItems?.length > 0 && (
                              <List>
                                {subItem.subItems.map((item) => {
                                  return (
                                    <ListItem
                                      key={`sitemap-sub-sub-${item.id}`}
                                    >
                                      <ListItemText variant="Body-xxSmall">
                                        <Link
                                          href={`/${item.url || ""}`}
                                          passHref
                                        >
                                          <a
                                            target={
                                              item.newWindow
                                                ? "_blank"
                                                : "_self"
                                            }
                                          >
                                            {item.label}
                                          </a>
                                        </Link>
                                      </ListItemText>
                                    </ListItem>
                                  );
                                })}
                              </List>
                            )}
                          </ListItem>
                        );
                      })}
                    </List>
                  )}
                </ColumnContainer>
              </Column>
            );
          })}
      </Wrapper>
    </Container>
  );
};

export default CollapseBody;
